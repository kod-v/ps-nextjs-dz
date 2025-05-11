import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const nextFont = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: 'Домашнее задание "Блог"',
  description: "Статьи тестовые о всяком разном",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nextFont.className}`}>{children}</body>
    </html>
  );
}
