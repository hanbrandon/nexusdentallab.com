import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusdentallab.com"),
  title: {
    default: "Nexus Dental Lab | Digital Dental Lab in Cypress, CA",
    template: "%s | Nexus Dental Lab",
  },
  description:
    "Nexus Dental Lab in Cypress, CA provides full zirconia, layered zirconia, CAD/CAM, and digital dental lab services for dentists.",
  keywords: [
    "Nexus Dental Lab",
    "dental lab Cypress CA",
    "digital dental lab",
    "full zirconia crowns",
    "layered zirconia restorations",
    "zirconia coping",
    "CAD/CAM dental lab",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Nexus Dental Lab",
    title: "Nexus Dental Lab | Digital Dental Lab in Cypress, CA",
    description:
      "High-quality zirconia restorations and digital workflow support for dentists.",
    images: [
      {
        url: "/assets/nexus/hero-bg.webp",
        width: 1920,
        height: 1080,
        alt: "Nexus Dental Lab digital dental restoration work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Dental Lab | Digital Dental Lab in Cypress, CA",
    description:
      "Full zirconia, layered zirconia, CAD/CAM, and digital dental lab services.",
    images: ["/assets/nexus/hero-bg.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/assets/nexus/favicon-192.png", sizes: "192x192" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col light-mode-override font-body-md text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
