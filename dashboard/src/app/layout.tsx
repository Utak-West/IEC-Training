import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEC Gamified Training System",
  description: "A comprehensive gamified training platform for the electrical industry, featuring AI-driven learning, project simulations, and immersive experiences.",
  keywords: ["electrical training", "gamification", "IEC", "apprenticeship", "education"],
  authors: [{ name: "A.M. Consulting" }],
  creator: "A.M. Consulting",
  publisher: "IEC & A.M. Consulting",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "IEC Gamified Training System",
    description: "Revolutionizing electrical industry training through gamification and AI-driven learning.",
    siteName: "IEC Gamified Training System",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEC Gamified Training System",
    description: "Revolutionizing electrical industry training through gamification and AI-driven learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
            },
            success: {
              style: {
                background: 'var(--success)',
                color: 'var(--success-foreground)',
              },
            },
            error: {
              style: {
                background: 'var(--error)',
                color: 'var(--error-foreground)',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
