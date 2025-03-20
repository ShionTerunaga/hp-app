import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Noto_Sans, Noto_Sans_JP } from "next/font/google"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
})

// Noto Sans JP フォントの設定
const noto = Noto_Sans({
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "ハリーポッタアプリ",
    description: "ハリーポッタアプリです"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={noto.className}>{children}</body>
        </html>
    )
}
