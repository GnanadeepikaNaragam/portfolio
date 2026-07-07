import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://gnanadeepika.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Naragam Gnana Deepika \u2014 Cybersecurity & Full-Stack Engineer",
  description:
    "Computer Science Engineering graduate specializing in Cybersecurity & Blockchain. Builds full-stack systems with real integrity guarantees \u2014 SFTS, WSMPA, and applied ML retrieval.",
  keywords: [
    "Naragam Gnana Deepika",
    "Cybersecurity Engineer",
    "Full-Stack Developer",
    "Python Flask Developer",
    "KL University",
    "Portfolio",
  ],
  authors: [{ name: "Naragam Gnana Deepika" }],
  openGraph: {
    title: "Naragam Gnana Deepika \u2014 Cybersecurity & Full-Stack Engineer",
    description: "Builds full-stack systems with real integrity guarantees.",
    url: siteUrl,
    siteName: "Naragam Gnana Deepika",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naragam Gnana Deepika \u2014 Cybersecurity & Full-Stack Engineer",
    description: "Builds full-stack systems with real integrity guarantees.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-teal focus:text-on-accent focus:px-4 focus:py-2 focus:rounded"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
