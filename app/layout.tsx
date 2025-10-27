import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Niaz Muhammad General Trading L.L.C. | Premium Talc & Barite Supplier – Dubai, UAE",
  description:
    "Niaz Muhammad General Trading L.L.C. — Dubai-based global supplier of high-quality Talc and Barite. Trusted by industries worldwide for paints, plastics, oil & gas, and cosmetics applications.",
  keywords: [
    "Talc supplier Dubai",
    "Barite supplier UAE",
    "industrial minerals supplier Dubai",
    "premium talc powder",
    "high-quality barite",
    "talc for cosmetics",
    "barite for oil & gas drilling",
    "mineral exporters UAE",
    "Dubai mineral trading company",
    "talc for paints and coatings",
    "barite for plastics and rubber",
    "Niaz Muhammad General Trading L.L.C.",
    "mineral solutions Dubai",
    "industrial raw materials UAE",
    "mineral powder supplier",
    "chemical inert minerals",
    "high purity talc",
    "high density barite",
  ],
  authors: [{ name: "Niaz Muhammad General Trading L.L.C." }],
  creator: "Niaz Muhammad General Trading L.L.C.",
  publisher: "Niaz Muhammad General Trading L.L.C.",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://niaz-muhammad-general-trading-l-l-c.vercel.app",
    siteName: "Niaz Muhammad General Trading L.L.C.",
    title: "Niaz Muhammad General Trading L.L.C. | Global Talc & Barite Exporters",
    description: "Delivering Minerals. Delivering Trust.",
    images: [
      {
        url: "https://niaz-muhammad-general-trading-l-l-c.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niaz Muhammad General Trading L.L.C. - Premium Mineral Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niaz Muhammad General Trading L.L.C. | Premium Talc & Barite Supplier",
    description: "Delivering Minerals. Delivering Trust.",
    images: ["https://niaz-muhammad-general-trading-l-l-c.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://niaz-muhammad-general-trading-l-l-c.vercel.app",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Niaz Muhammad General Trading L.L.C.",
              alternateName: "Niaz Minerals",
              url: "https://niaz-muhammad-general-trading-l-l-c.vercel.app",
              logo: "https://niaz-muhammad-general-trading-l-l-c.vercel.app/logo.png",
              description: "Premium Talc and Barite supplier from Dubai to the world",
              sameAs: [
                "https://www.facebook.com/niaz-muhammad-general-trading-l-l-c",
                "https://www.linkedin.com/company/niaz-muhammad-general-trading-l-l-c",
                "https://www.instagram.com/niaz-muhammad-general-trading-l-l-c",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "AE",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+971-XXXXXXXX",
                email: "info@niazminerals.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
