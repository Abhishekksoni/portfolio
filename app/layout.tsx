import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abhishek Soni | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Abhishek Soni — TypeScript, React, Next.js, Node.js, and AI developer. Explore cutting-edge projects like ArtisansAI and CreativeAI.",
  keywords: [
    "Abhishek Soni",
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI Developer",
    "LangChain Developer",
    "Portfolio",
    "PostgreSQL Developer",
  ],
  openGraph: {
    title: "Abhishek Soni | Software Engineer & Full-Stack Developer",
    description:
      "Building scalable, AI-powered web solutions with TypeScript, Next.js, and Node.js.",
    url: "https://abhisheksoniportfolio.vercel.app/",
    siteName: "Abhishek Soni Portfolio",
    images: [
      {
        url: "https://abhisheksoniportfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Soni Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Soni | Software Engineer & Full-Stack Developer",
    description:
      "Explore my portfolio of AI-driven web applications built with React, Next.js, and Node.js.",
    images: ["https://abhisheksoniportfolio.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://abhisheksoniportfolio.vercel.app/",
  },
  icons: {
    icon: "/webIcon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


