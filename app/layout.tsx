import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "../widgets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7df1e" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://javascript-fundamentos.vercel.app"),
  title: "JavaScript | Projeto IFG",
  description: "Projeto educacional desenvolvido para estudantes de programação do primeiro período do IFG campus Jataí.",
  keywords: [
    "JavaScript", 
    "ES2022", 
    "Programming", 
    "Web Development", 
    "Frontend", 
    "Coerção de Tipos",
    "Hoisting",
    "Closures",
    "Quiz JavaScript",
    "Educação",
    "Programação"
  ],
  authors: [
    { name: "Mateus Rosa Tum" },
    { name: "Sinclair Cavalcante Araújo" },
    { name: "Victor Gabriel Pardim Cabral" },
    { name: "Carlos Felipe da S. Chagas" }
  ],
  creator: "Mateus Rosa Tum, Sinclair Cavalcante Araújo, Victor Gabriel Pardim Cabral, Carlos Felipe da S. Chagas",
  publisher: "JavaScript Fundamentos Team",
  robots: "index, follow",
  category: "education",
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: "JavaScript | Projeto IFG",
    description: "Projeto educacional desenvolvido para estudantes de programação do primeiro período do IFG campus Jataí.",
    url: "https://javascript-fundamentos.vercel.app",
    siteName: "JavaScript Fundamentos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/js_logo.png",
        width: 512,
        height: 512,
        alt: "JavaScript Logo - JavaScript Fundamentos",
        type: "image/png",
      }
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Fundamentos - Conceitos Essenciais",
    description: "Aprenda JavaScript de forma interativa com timeline, quiz e recursos educacionais.",
    images: ["/js_logo.png"],
    creator: "@javascript_fundamentos",
  },

  // Additional metadata
  applicationName: "JavaScript Fundamentos",
  referrer: "origin-when-cross-origin",
  
  // Favicon and icons
  icons: {
    icon: [
      { url: "/js_logo.ico", sizes: "any" },
      { url: "/js_logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/js_logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/js_logo.ico",
  },

  // Verification and other metadata
  verification: {
    google: "javascript-fundamentos-educational-project",
  },
  
  // Additional properties
  other: {
    "google-site-verification": "educational-javascript-project",
    "msapplication-TileColor": "#f7df1e",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/js_logo.ico" />
        <link rel="apple-touch-icon" href="/js_logo.png" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#f7df1e" />
        <meta name="msapplication-TileImage" content="/js_logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
