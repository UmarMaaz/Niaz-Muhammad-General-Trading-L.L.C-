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
    "industrial minerals",
    "mineral exporters",
    "oil & gas additives",
    "talc powder supplier",
    "barite powder",
    "mineral trading",
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
    url: "https://niazminerals.com",
    siteName: "Niaz Muhammad General Trading L.L.C.",
    title: "Niaz Muhammad General Trading L.L.C. | Global Talc & Barite Exporters",
    description: "Delivering Minerals. Delivering Trust.",
    images: [
      {
        url: "https://niazminerals.com/og-image.jpg",
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
    images: ["https://niazminerals.com/og-image.jpg"],
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
    canonical: "https://niazminerals.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Niaz Muhammad General Trading L.L.C.",
              alternateName: "Niaz Minerals",
              url: "https://niazminerals.com",
              logo: "https://niazminerals.com/logo.png",
              description: "Premium Talc and Barite supplier from Dubai to the world",
              sameAs: [
                "https://www.facebook.com/niazminerals",
                "https://www.linkedin.com/company/niaz-minerals",
                "https://www.instagram.com/niazminerals",
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
