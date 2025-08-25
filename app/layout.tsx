import { Quicksand } from 'next/font/google';
import './ui/globals.css';
import Header from './ui/headers';
import { Suspense } from 'react';

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${quicksand.className} antialiased`}>
				<Suspense fallback={<div />}>
					<Header />
				</Suspense>
				{children}
			</body>
		</html>
	);
}
