import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { metadata, viewport } from "@/lib/seo";
import { structuredData } from "@/lib/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Polyfill localStorage for SSR if needed
if (typeof window === 'undefined' && (typeof localStorage === 'undefined' || typeof localStorage.getItem !== 'function')) {
  const noop = () => {};
  global.localStorage = {
    getItem: () => null,
    setItem: noop,
    removeItem: noop,
    clear: noop,
    length: 0,
    key: () => null,
  } as any;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="backend"
          themes={['backend']}
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
