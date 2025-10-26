import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "Premium Talc & Barite Products | Niaz Muhammad General Trading L.L.C.",
  description:
    "Explore our premium Talc and Barite products with detailed specifications, applications, and technical data sheets.",
}

export default function ProductsPage() {
  const products = [
    {
      name: "Talc",
      description:
        "Talc enhances product performance, efficiency, and value across cosmetics, pharmaceuticals, ceramics, plastics, and paints. Our premium talc guarantees consistent particle size, superior purity, and reliable performance for both precision and large-scale industrial applications.",
      image: "/talc-mineral-powder.jpg",
      formula: "Mg₃Si₄O₁₀(OH)₂",
      characteristics: [
        "Density: 2.7-2.8 g/cm³",
        "Mohs hardness: 1 (softest mineral)",
        "Heat resistant and chemically inert",
        "Hydrophobic & oleophilic (repels water, absorbs oils)",
        "Lamellar (plate-like) structure for smoothness and lubrication",
      ],
      applications: [
        "Cosmetics & Personal Care",
        "Pharmaceuticals",
        "Paints & Coatings",
        "Plastics & Rubber",
        "Ceramics & Tiles",
        "Industrial Applications",
      ],
    },
    {
      name: "Barite",
      description:
        "Barite is a high-density mineral vital for oil & gas drilling, paints, plastics, rubber, and other industrial uses. Our premium-grade barite ensures purity, consistency, and dependable supply, engineered to meet the international standards and enhance industrial performance.",
      image: "/barite-mineral-powder.jpg",
      formula: "BaSO₄",
      characteristics: [
        "Density: 4.4 g/cm³",
        "Mohs hardness: 3-3.5",
        "High radiation absorption",
        "Chemically inert and acid/base resistant",
      ],
      applications: [
        "Oil & Gas Drilling",
        "Paints & Coatings",
        "Rubber & Plastics",
        "Medical Applications",
        "Radiation Shielding",
        "Industrial Uses",
      ],
    },
  ]

  const productSchema = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://niazminerals.com${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Niaz Muhammad General Trading L.L.C.",
    },
    offers: {
      "@type": "Offer",
      url: `https://niazminerals.com/products#${product.name.toLowerCase()}`,
      priceCurrency: "USD",
      price: "Contact for Price",
      availability: "https://schema.org/InStock",
    },
  }))

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Premium Talc & Barite Products"
        subtitle="Premium Talc and Barite sourced and processed to international standards"
        backgroundVideo="/products_video.mp4"
        showScrollIndicator={true}
      />

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Premium Mineral Products"
            subtitle="Each product is carefully sourced, processed, and tested to meet the highest international standards"
          />

          {/* Talc Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl" data-animate>
              <Image
                src="/talc-mineral-powder.jpg"
                alt="Talc Mineral Powder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div data-animate>
              <h3 className="text-3xl font-bold text-foreground mb-4">Talc</h3>
              <p className="text-muted-foreground mb-4">
                Our premium talc enhances product performance, efficiency, and value across diverse sectors including cosmetics, pharmaceuticals, ceramics, plastics, and paints. This high-purity talc guarantees consistent particle size, superior whiteness, and reliable performance for both precision and large-scale industrial applications.
              </p>
              <p className="text-sm text-muted-foreground mb-3 font-mono">Formula: Mg₃Si₄O₁₀(OH)₂</p>
              <h4 className="font-semibold text-foreground mb-2">Characteristics:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Density: 2.7-2.8 g/cm³</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Mohs hardness: 1 (softest mineral)</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Heat resistant and chemically inert</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Hydrophobic & oleophilic (repels water, absorbs oils)</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Lamellar (plate-like) structure for smoothness and lubrication</span></li>
              </ul>
              <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Cosmetics & Personal Care</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Pharmaceuticals</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Paints & Coatings</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Plastics & Rubber</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Ceramics & Tiles</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Industrial Applications</span></li>
              </ul>
            </div>
          </div>

          {/* Barite Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-animate className="md:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/barite-mineral-powder.jpg"
                alt="Barite Mineral Powder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div data-animate className="md:order-1">
              <h3 className="text-3xl font-bold text-foreground mb-4">Barite</h3>
              <p className="text-muted-foreground mb-4">
                Barite, a high-density mineral, is vital for critical applications such as oil & gas drilling fluids, paints, plastics, rubber, and other industrial uses. Our premium-grade barite ensures exceptional purity, consistency, and dependable supply, engineered to meet stringent international standards and enhance industrial performance.
              </p>
              <p className="text-sm text-muted-foreground mb-3 font-mono">Formula: BaSO₄</p>
              <h4 className="font-semibold text-foreground mb-2">Characteristics:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Density: 4.4 g/cm³</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Mohs hardness: 3-3.5</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>High radiation absorption</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Chemically inert and acid/base resistant</span></li>
              </ul>
              <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Oil & Gas Drilling</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Paints & Coatings</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Rubber & Plastics</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Medical Applications</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Radiation Shielding</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Industrial Uses</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Quality Assurance"
            subtitle="All our products undergo rigorous testing and quality control"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">ISO Certified</h3>
              <p className="text-muted-foreground">
                Our facilities maintain ISO 9001:2015 certification ensuring consistent quality and process excellence.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Lab Tested</h3>
              <p className="text-muted-foreground">
                Every batch undergoes comprehensive laboratory analysis to verify purity, particle size, and
                specifications.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Certified Suppliers</h3>
              <p className="text-muted-foreground">
                We work with certified mining operations and maintain full traceability from source to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact our technical team to discuss custom grades, bulk orders, or specific application requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all duration-200"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
