import { Quicksand } from 'next/font/google';
import './ui/globals.css';
import Header from './ui/headers';

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${quicksand.className} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
