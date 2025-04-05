import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

// Noto Sans JP フォントの設定
const noto = Noto_Sans({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "ハリーポッタアプリ",
    description: "ハリーポッタアプリです"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={noto.className}>{children}</body>
        </html>
    );
}
