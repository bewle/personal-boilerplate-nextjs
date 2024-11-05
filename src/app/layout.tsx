import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public-sans",
});

export const metadata: Metadata = {
    title: "EDIT ME + CHANGE PACKAGE.JSON",
    description: "EDIT ME + CHANGE PACKAGE.JSON",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <Providers>
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased transition-colors",
                        publicSans.variable
                    )}
                >
                    {children}
                </body>
            </Providers>
        </html>
    );
}
