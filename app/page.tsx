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
import { ImageCarousel } from "@/components/ui/image-carousel"

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-16">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-auto" data-animate>
              <Image
                src="/talc.jpg"
                alt="Talc Mineral Powder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div data-animate>
              <h3 className="text-3xl font-bold text-foreground mb-4">Talc</h3>
              <p className="text-muted-foreground mb-6">
                Discover the exceptional purity and versatility of our premium Talc. Ideal for a wide range of industrial applications, our Talc products are meticulously processed to meet the highest quality standards.
              </p>
            </div>
          </div>

          {/* Barite Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-12">
            <div data-animate className="md:order-2 relative rounded-lg overflow-hidden shadow-xl h-64 md:h-auto">
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
              <p className="text-muted-foreground mb-6">
                Explore our high-density Barite, engineered for superior performance in demanding industrial environments such as oil & gas drilling, paints, and plastics. Our Barite ensures purity, consistency, and dependable supply.
              </p>
            </div>
          </div>

          <div className="text-center" data-animate>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Our Global Presence */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Global Presence" subtitle="Find our branches across the globe" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-animate>
              <IndustryCard
                name="Dubai Headquarters"
                icon={<Icons.MapPin />}
                description="Office 101, Business Bay, Dubai, UAE"
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Peshawar Main Office"
                icon={<Icons.MapPin />}
                description="Niaz enterprises Near sarhad University opposite fahad CNG Peshawar"
              />
            </div>
            <div data-animate>
              <IndustryCard
                name="Afghanistan"
                icon={<Icons.MapPin />}
                description="[Address of Branch 3]"
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
