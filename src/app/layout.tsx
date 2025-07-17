import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "방명록 앱",
	description: "간단한 방명록 애플리케이션",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var theme = localStorage.getItem('theme');
									if (theme === 'dark') {
										document.documentElement.classList.add('dark');
									} else if (theme === 'light') {
										document.documentElement.classList.remove('dark');
									} else {
										var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
										if (prefersDark) {
											document.documentElement.classList.add('dark');
										}
									}
								} catch (e) {}
							})();
						`,
					}}
				/>
			</head>
			<body suppressHydrationWarning>{children}</body>
		</html>
	);
}
