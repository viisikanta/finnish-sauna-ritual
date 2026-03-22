import type { Metadata } from "next";
import { Inter, Noto_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_Display({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Finnish Sauna Guide — Authentic Sauna Culture, Etiquette & Accessories",
    template: "%s | Finnish Sauna Guide",
  },
  description:
    "The definitive guide to Finnish sauna culture. Etiquette, accessories, and the finest saunas worldwide. Written by a Finn.",
  keywords: [
    "finnish sauna",
    "finnish sauna guide",
    "sauna etiquette",
    "sauna accessories",
    "best saunas",
    "sauna hat",
    "löyly",
    "sauna guide",
  ],
  metadataBase: new URL("https://finnishsaunaguide.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Finnish Sauna Guide",
    url: "https://finnishsaunaguide.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D5LKH6B1TE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5LKH6B1TE');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${notoSerif.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
