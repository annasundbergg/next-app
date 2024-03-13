import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Annas next app",
    description: "Test app using Next.js and MongoDB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="max-w-3xl mx-auto p-4">
                    <Navbar />
                    <div className="mt-8">{children}</div>
                </div>
            </body>
        </html>
    );
}
