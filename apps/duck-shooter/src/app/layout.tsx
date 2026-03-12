import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Duck Shooter',
	description: 'A 2D duck shooting game',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-background font-sans antialiased">
				{children}
			</body>
		</html>
	);
}
