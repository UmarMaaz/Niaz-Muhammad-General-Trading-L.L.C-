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
                  alt="Niaz Minerals"
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
                With over two decades of experience in the minerals industry, Niaz Muhammad General Trading L.L.C. has
                established itself as a trusted global supplier of premium Talc and Barite.
              </p>
              <p className="text-muted-foreground mb-6">
                Based in Dubai, we serve industries worldwide including oil & gas, paints, plastics, ceramics, and
                cosmetics with consistent quality and reliable logistics.
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
                alt="Niaz Minerals Facility"
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
                Premium talc powder with exceptional purity and whiteness, ideal for cosmetics, paints, and industrial applications.
              </p>
              <p className="text-sm text-muted-foreground mb-3 font-mono">Formula: Mg₃Si₄O₁₀(OH)₂</p>
              <h4 className="font-semibold text-foreground mb-2">Characteristics:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>High purity (98%+)</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Bright white color</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Fine particle size</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Low moisture content</span></li>
              </ul>
              <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Cosmetics & Personal Care</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Paints & Coatings</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Plastics & Rubber</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Ceramics</span></li>
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
                High-density barite ideal for drilling fluids, paints, and industrial applications requiring superior weight and opacity.
              </p>
              <p className="text-sm text-muted-foreground mb-3 font-mono">Formula: BaSO₄</p>
              <h4 className="font-semibold text-foreground mb-2">Characteristics:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>High specific gravity (4.5)</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Excellent opacity</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Low solubility</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Chemical inert</span></li>
              </ul>
              <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Oil & Gas Drilling</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Paints & Coatings</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Medical Applications</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Rubber & Plastics</span></li>
              </ul>
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
                description="Premium barite for drilling fluids and well completion applications."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Paints & Coatings"
                icon={<Icons.Zap />}
                description="High-quality talc and barite for superior finish and durability."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Plastics & Rubber"
                icon={<Icons.Globe />}
                description="Mineral additives for enhanced properties and performance."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Ceramics"
                icon={<Icons.Award />}
                description="Premium talc for ceramic glazes and body compositions."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Cosmetics"
                icon={<Icons.Users />}
                description="Ultra-pure talc for cosmetics and personal care products."
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Sustainability"
                icon={<Icons.Leaf />}
                description="Responsibly sourced minerals with environmental commitment."
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
