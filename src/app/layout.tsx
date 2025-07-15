import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 포트폴리오",
  description: "웹 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
