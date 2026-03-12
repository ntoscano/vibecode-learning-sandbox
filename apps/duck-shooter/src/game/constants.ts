// Canvas dimensions
export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 500;

// Game settings
export const GAME_DURATION = 60; // seconds
export const GROUND_Y = 450;

// Duck settings
export const DUCK_WIDTH = 50;
export const DUCK_HEIGHT = 40;
export const DUCK_MIN_SPEED = 2;
export const DUCK_MAX_SPEED = 5;
export const DUCK_FLAP_INTERVAL = 12; // frames between wing toggles
export const MAX_DUCKS_ON_SCREEN = 4;

// Spawn settings
export const INITIAL_SPAWN_INTERVAL = 90; // frames (~1.5s at 60fps)
export const MIN_SPAWN_INTERVAL = 30; // frames (~0.5s at 60fps)

// Scoring
export const HIT_SCORE = 10;
export const COMBO_BONUS = 5;
export const COMBO_WINDOW = 60; // frames (~1s) for consecutive hit bonus

// Hit detection
export const HIT_RADIUS = 30;

// Effect settings
export const EFFECT_EXPAND_RATE = 3;
export const EFFECT_FADE_RATE = 0.05;
export const EFFECT_MAX_RADIUS = 30;

// Colors
export const SKY_TOP = '#87CEEB';
export const SKY_BOTTOM = '#B0E0E6';
export const GRASS_COLOR = '#4CAF50';
export const GRASS_DARK = '#388E3C';
export const DUCK_BODY_COLOR = '#8B4513';
export const DUCK_BODY_LIGHT = '#A0522D';
export const DUCK_BEAK_COLOR = '#FF8C00';
export const DUCK_WING_COLOR = '#6B3410';
export const DUCK_EYE_COLOR = '#FFFFFF';
export const CROSSHAIR_COLOR = '#FF0000';
export const TIMER_COLOR = '#FFFFFF';
export const TIMER_WARNING_COLOR = '#FF4444';
export const SCORE_COLOR = '#FFFFFF';
export const HIT_EFFECT_COLOR = '#FFD700';
