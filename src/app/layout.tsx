import type { Metadata } from "next";
import { Inter, Caveat, Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const caveat = Caveat({ subsets: ["latin", "cyrillic"], variable: '--font-caveat' });
const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["latin", "devanagari"], variable: '--font-kalam' });

export const metadata: Metadata = {
  title: "Prompts Library",
  description: "A collection of prompts for programming, image generation, and data analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${caveat.variable} ${kalam.variable} font-sans`}>
        <svg width="0" height="0" style={{ position: 'absolute', display: 'none' }}>
          <filter id="sketch-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={['light', 'dark', 'scribblified']}
        >
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
