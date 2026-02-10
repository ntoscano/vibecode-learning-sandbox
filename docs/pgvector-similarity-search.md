# pgvector Similarity Search Architecture

This document explains how pgvector and vector similarity matching works in the "Similar Properties" feature.

## What is an Embedding?

An embedding is a list of numbers (a "vector") that represents the **meaning** of text. Think of it as converting words into coordinates in a high-dimensional space.

```
"Luxury condo with city views" → [0.23, -0.45, 0.12, ... 1024 numbers]
"Upscale apartment downtown"   → [0.21, -0.42, 0.15, ... 1024 numbers]  ← Similar!
"Rural farmhouse with barn"    → [-0.67, 0.33, -0.28, ... 1024 numbers] ← Different!
```

Properties with similar descriptions end up with similar vectors (close together in 1024-dimensional space).

## Data Flow

### Seed Time (One-Time Setup)

```
┌─────────────────────────────────────────────────────────────────────┐
│ SEED TIME (one-time setup)                                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Property Data                     AWS Bedrock Titan                │
│  ┌──────────────────┐              ┌──────────────────┐             │
│  │ Address: 123 Oak │              │                  │             │
│  │ Price: $500k     │  ──text───►  │  Embedding Model │             │
│  │ 3 bed, 2 bath    │              │  (AI/ML magic)   │             │
│  │ "Quiet suburb.." │              │                  │             │
│  └──────────────────┘              └────────┬─────────┘             │
│                                             │                       │
│                                             ▼                       │
│                                    [0.23, -0.45, 0.12, ...]         │
│                                    (1024 numbers)                   │
│                                             │                       │
│                                             ▼                       │
│                              ┌──────────────────────────┐           │
│                              │   PostgreSQL + pgvector  │           │
│                              │   ┌──────────────────┐   │           │
│                              │   │ property table   │   │           │
│                              │   │ - id             │   │           │
│                              │   │ - name           │   │           │
│                              │   │ - payload        │   │           │
│                              │   │ - embedding ◄────┼───┼── stored! │
│                              │   └──────────────────┘   │           │
│                              └──────────────────────────┘           │
└─────────────────────────────────────────────────────────────────────┘
```

### Query Time (When User Selects a Property)

```
┌─────────────────────────────────────────────────────────────────────┐
│ QUERY TIME                                                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  User selects "123 Oak St"                                          │
│         │                                                           │
│         ▼                                                           │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ PostgreSQL: similar_properties('123-oak-st-uuid', 5)        │    │
│  └─────────────────────────────────────────────────────────────┘    │
│         │                                                           │
│         ▼                                                           │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ 1. Get embedding for "123 Oak St"                           │    │
│  │    → [0.23, -0.45, 0.12, ...]                                │    │
│  │                                                              │    │
│  │ 2. Compare to ALL other property embeddings using           │    │
│  │    COSINE DISTANCE: embedding <=> source_embedding          │    │
│  │                                                              │    │
│  │ 3. Sort by similarity, return top 5                         │    │
│  └─────────────────────────────────────────────────────────────┘    │
│         │                                                           │
│         ▼                                                           │
│  Results:                                                           │
│  ┌────────────────────────────────┬────────────┐                    │
│  │ Property                       │ Similarity │                    │
│  ├────────────────────────────────┼────────────┤                    │
│  │ 456 Maple Ave (similar!)       │ 92%        │                    │
│  │ 789 Pine St                    │ 87%        │                    │
│  │ 321 Elm Rd                     │ 84%        │                    │
│  └────────────────────────────────┴────────────┘                    │
└─────────────────────────────────────────────────────────────────────┘
```

## The Math: Cosine Similarity

pgvector uses **cosine distance** to measure similarity. Imagine two arrows (vectors) pointing in 1024-dimensional space:

```
Same direction = Similar (cos θ ≈ 1)

     A →
    ↗
   θ (small angle)
  ↗
 B →

Opposite = Different (cos θ ≈ -1)

A →          ← B
```

The `<=>` operator in pgvector calculates: `1 - cosine_similarity`

So we compute: `similarity = 1 - (embedding <=> source_embedding)`

## Why pgvector is Fast (HNSW Index)

Without an index, comparing 1 property to 10,000 others = 10,000 calculations.

**HNSW (Hierarchical Navigable Small World)** creates a graph structure:

```
Level 2:    A -------- D              (few nodes, long jumps)
            |          |
Level 1:    A -- B --- D -- E         (more nodes, medium jumps)
            |    |     |    |
Level 0:    A-B-C-D-E-F-G-H-I-J       (all nodes, short jumps)
```

To find similar items:

1. Start at top level, jump to approximate region
2. Descend levels, refine search
3. Find nearest neighbors without checking everything

Result: **O(log n)** instead of **O(n)** - much faster!

## SQL Function Implementation

```sql
CREATE FUNCTION similar_properties(property_id UUID, result_limit INT)
RETURNS TABLE (..., similarity FLOAT) AS $$
DECLARE
    source_embedding vector(1024);
BEGIN
    -- Step 1: Get the selected property's embedding
    SELECT embedding INTO source_embedding
    FROM property WHERE id = property_id;

    -- Step 2: Find similar properties
    RETURN QUERY
    SELECT
        p.*,
        (1 - (p.embedding <=> source_embedding)) AS similarity  -- cosine similarity
    FROM property p
    WHERE p.id != property_id           -- exclude self
      AND p.embedding IS NOT NULL       -- must have embedding
    ORDER BY p.embedding <=> source_embedding  -- closest first
    LIMIT result_limit;
END;
$$
```

## Key Concepts Summary

| Concept               | What it does                                                  |
| --------------------- | ------------------------------------------------------------- |
| **Embedding**         | Converts text meaning → numbers (vector)                      |
| **pgvector**          | PostgreSQL extension for storing/querying vectors             |
| **Cosine similarity** | Measures angle between vectors (1 = identical, 0 = unrelated) |
| **HNSW index**        | Makes similarity search fast (logarithmic time)               |
| **AWS Titan**         | The AI model that generates our 1024-dim embeddings           |

## Why This Works

The magic is that semantically similar properties (same vibe, features, neighborhood feel) end up with similar vectors, even if they use different words!

For example, these would have similar embeddings:

- "Charming craftsman with original woodwork in quiet tree-lined neighborhood"
- "Classic bungalow featuring vintage details on peaceful residential street"

## Files Reference

| File                                                                              | Purpose                                      |
| --------------------------------------------------------------------------------- | -------------------------------------------- |
| `apps/realty-ai-api/docker-compose.yml`                                           | Uses `pgvector/pgvector:pg16` image          |
| `apps/realty-ai-api/src/migrations/1779079600000-AddPropertyEmbedding.ts`         | Creates embedding column + HNSW index        |
| `apps/realty-ai-api/src/migrations/1779079600001-AddSimilarPropertiesFunction.ts` | Creates `similar_properties()` SQL function  |
| `apps/realty-ai-api/src/modules/embedding/embedding.service.ts`                   | Generates embeddings via AWS Bedrock Titan   |
| `apps/realty-ai-api/src/cli/seed.ts`                                              | Populates embeddings during database seeding |
| `apps/realty-ai/src/lib/graphql/queries.ts`                                       | `GET_SIMILAR_PROPERTIES` GraphQL query       |
| `apps/realty-ai/src/lib/graphql/hooks.ts`                                         | `useSimilarProperties()` React hook          |
| `apps/realty-ai/src/components/SimilarProperties.tsx`                             | UI container component                       |
| `apps/realty-ai/src/components/SimilarPropertyCard.tsx`                           | Individual property card with match %        |
