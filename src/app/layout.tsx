import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ToasterwithTheme from "@/components/ui/ToasterwithTheme";
import { unstable_ViewTransition as ViewTransition } from "react";
import Navbar from "@/components/Navbar";
import LenisScroll from "@/components/LenisScroll";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Document Research",
  description: "Generate whole research documents using AI instantly✨🔖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <LenisScroll />
          <ViewTransition>{children}</ViewTransition>
          <ToasterwithTheme />
        </ThemeProvider>
      </body>
    </html>
  );
}
