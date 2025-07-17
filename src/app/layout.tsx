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
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
