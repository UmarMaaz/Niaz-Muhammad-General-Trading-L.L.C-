"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { ProductCard } from "@/components/product-card"
import { IndustryCard } from "@/components/industry-card"
import { Footer } from "@/components/footer"
import { Icons } from "@/lib/icons"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            const children = entry.target.querySelectorAll("[data-animate]")
            children.forEach((child, index) => {
              const delay = index * 100
              ;(child as HTMLElement).style.animationDelay = `${delay}ms`
              child.classList.add("animate-fade-up")
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Niaz Muhammad General Trading L.L.C."
        subtitle="Premium Talc & Barite Supplier | Trusted Globally Since 2000"
        backgroundVideo="/home_video.mp4"

        backgroundImage="/industrial-minerals-mining-facility.jpg"
        ctaButtons={[
          { label: "Explore Products", href: "/products", variant: "primary" },
          { label: "Contact Our Team", href: "/contact", variant: "secondary" },
        ]}
      />

      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 relative">
                <Image
                  src="/niaz-minerals-logo.jpg"
                  alt="Niaz Muhammad General Trading L.L.C. Logo"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Niaz Muhammad General Trading L.L.C.</h2>
                <p className="text-muted-foreground">Premium Industrial Minerals Supplier</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg text-foreground font-semibold mb-2">Delivering Excellence Since 2000</p>
              <p className="text-muted-foreground">Serving 500+ clients across 50+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-animate>
              <h2 className="text-foreground mb-6">About Niaz Muhammad General Trading L.L.C.</h2>
              <p className="text-muted-foreground mb-4">
                With over two decades of experience as a premium industrial minerals supplier, Niaz Muhammad General Trading L.L.C. has
                established itself as a trusted global supplier of high-quality Talc and Barite in the Dubai, UAE region and beyond.
              </p>
              <p className="text-muted-foreground mb-6">
                Based strategically in Dubai, we cater to diverse industries worldwide, including oil & gas, paints & coatings, plastics & rubber, ceramics & tiles, and cosmetics. We pride ourselves on delivering consistent quality, reliable logistics, and competitive pricing for all your industrial mineral needs.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center" data-animate>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center" data-animate>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Global Clients</p>
                </div>
                <div className="text-center" data-animate>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl" data-animate>
              <img
                src="/industrial-minerals-processing-facility.jpg"
                alt="Industrial Minerals Processing Facility of Niaz Muhammad General Trading L.L.C."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Minerals Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Premium Minerals"
            subtitle="High-quality Talc and Barite sourced and processed to international standards"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Talc Product Card */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-animate>
              <div className="relative h-64 w-full">
                <Image
                  src="/talc-mineral-powder.jpg"
                  alt="Talc Mineral Powder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">Talc</h3>
                <Link
                  href="/products#talc"
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                >
                  View Product
                </Link>
              </div>
            </div>

            {/* Barite Product Card */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-animate>
              <div className="relative h-64 w-full">
                <Image
                  src="/barite-mineral-powder.jpg"
                  alt="Barite Mineral Powder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3">Barite</h3>
                <Link
                  href="/products#barite"
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Industries We Serve" subtitle="Trusted by leading companies across multiple sectors" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-animate>
              <IndustryCard
                name="Oil & Gas"
                icon={<Icons.Droplet />}
                description="High-quality barite for essential drilling fluids and well completion applications in the oil & gas industry."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Paints & Coatings"
                icon={<Icons.Zap />}
                description="High-quality talc and barite for superior finish, enhanced durability, and optimal performance in paints and coatings."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Plastics & Rubber"
                icon={<Icons.Globe />}
                description="Specialized mineral additives for enhanced properties, improved performance, and cost-effectiveness in plastics and rubber manufacturing."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Ceramics"
                icon={<Icons.Award />}
                description="Premium talc for high-quality ceramic glazes, body compositions, and improved firing properties in the ceramics industry."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Cosmetics"
                icon={<Icons.Users />}
                description="Ultra-pure talc for cosmetics and personal care products, ensuring smoothness, absorbency, and a luxurious feel."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Sustainability"
                icon={<Icons.Leaf />}
                description="Commitment to responsibly sourced minerals and sustainable practices, ensuring environmental stewardship and ethical supply chains."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Connect with our team to discuss your mineral supply needs and discover how we can support your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
