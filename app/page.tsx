"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { Footer } from "@/components/footer"
import { Icons } from "@/lib/icons"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Target, Leaf, Droplet, Zap, Globe, Award, Users, MapPin, Phone, Mail } from "lucide-react"

interface IndustrySection {
  title: string
  icon: React.ReactNode
  description: string
  applications: string[]
  products: string[]
}

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

  const industries: IndustrySection[] = [
    {
      title: "Oil & Gas",
      icon: <Droplet className="w-12 h-12" />,
      description:
        "Barite is essential in drilling fluids for oil and gas exploration and production. Our high-density barite provides superior suspension properties and meets API specifications.",
      applications: [
        "Drilling Fluid Weighting Agent",
        "Well Completion Fluids",
        "Geothermal Drilling",
        "Workover Operations",
      ],
      products: ["Barite"],
    },
    {
      title: "Paints & Coatings",
      icon: <Zap className="w-12 h-12" />,
      description:
        "Both talc and barite enhance paint formulations by improving opacity, coverage, and durability. Our minerals provide excellent suspension and reduce settling.",
      applications: ["Architectural Paints", "Industrial Coatings", "Protective Coatings", "Specialty Finishes"],
      products: ["Talc", "Barite"],
    },
    {
      title: "Plastics & Rubber",
      icon: <Globe className="w-12 h-12" />,
      description:
        "Mineral fillers improve mechanical properties, reduce costs, and enhance processing characteristics in plastic and rubber compounds.",
      applications: ["Plastic Compounds", "Rubber Manufacturing", "Injection Molding", "Extrusion Applications"],
      products: ["Talc", "Barite"],
    },
    {
      title: "Ceramics & Tiles",
      icon: <Award className="w-12 h-12" />,
      description:
        "Premium talc is used in ceramic glazes and body compositions to improve firing characteristics and surface finish.",
      applications: ["Ceramic Glazes", "Tile Manufacturing", "Porcelain Production", "Sanitaryware"],
      products: ["Talc"],
    },
    {
      title: "Cosmetics & Personal Care",
      icon: <Users className="w-12 h-12" />,
      description:
        "Ultra-pure talc is essential in cosmetics for its absorbency, smoothness, and skin-friendly properties. Our talc meets strict cosmetic grade standards.",
      applications: ["Body Powders", "Makeup Products", "Deodorants", "Personal Care Items"],
      products: ["Talc"],
    },
    {
      title: "Sustainability",
      icon: <Leaf className="w-12 h-12" />,
      description:
        "We are committed to responsible sourcing and environmental stewardship. Our operations follow strict sustainability guidelines and best practices.",
      applications: ["Responsible Mining", "Environmental Compliance", "Community Support", "Waste Reduction"],
      products: ["All Products"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Niaz Muhammad General Trading L.L.C."
        subtitle="Premium Talc & Barite Supplier | Trusted Globally Since 2000"
        backgroundVideo="/home_video.mp4"
        backgroundImage="/industrial-minerals-mining-facility.jpg"
        ctaButtons={[
          { label: "Explore Products", href: "#products", variant: "primary" },
          { label: "Contact Our Team", href: "#contact", variant: "secondary" },
        ]}
      />

      {/* Company Info Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 relative">
                <Image
                  src="/niaz-minerals-logo.jpg"
                  alt="Niaz Muhammad General Trading L.L.C. Logo"
                  fill
                  className="object-cover"
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

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div data-animate>
              <h2 className="text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Founded in 2004, Niaz Muhammad General Trading L.L.C. emerged from a vision to become a trusted global
                supplier of premium industrial minerals. What started as a small operation in Dubai has grown into a
                respected name in the minerals industry.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                Over the past two decades, we have built strong relationships with mining operations, manufacturers, and
                distributors across six continents. Our commitment to quality, reliability, and customer service has
                made us the preferred choice for companies seeking premium Talc and Barite.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we continue to innovate and expand our product offerings while maintaining the highest standards
                of quality and environmental responsibility.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/industrial-minerals-processing-facility.jpg"
                alt="Industrial Minerals Processing Facility of Niaz Muhammad General Trading L.L.C."
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-16">
            <SectionTitle title="Our Team" subtitle="Meet the dedicated professionals behind Niaz Muhammad General Trading L.L.C." centered={true} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder-user.jpg" alt="Muhammad Umar" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Muhammad Umar</h3>
                <p className="text-muted-foreground">CEO & Founder</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder-user.jpg" alt="Maaz Khan" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Maaz Khan</h3>
                <p className="text-muted-foreground">Head of Operations</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image src="/placeholder-user.jpg" alt="Team Member" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">[Team Member Name]</h3>
                <p className="text-muted-foreground">[Team Member Title]</p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="mb-16">
            <SectionTitle title="Our Mission, Vision & Values" centered={true} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver premium quality minerals that empower industries worldwide, while maintaining the highest
                  standards of integrity, reliability, and environmental stewardship.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and innovative global supplier of industrial minerals, recognized for our
                  commitment to quality, sustainability, and customer success.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Quality, Integrity, Innovation, Sustainability, and Customer Focus. These core values guide every
                  decision we make and every relationship we build.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <SectionTitle title="Our Process" subtitle="From source to delivery, we maintain the highest standards" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Sourcing",
                  description:
                    "We partner with certified mining operations that meet our strict quality and environmental standards.",
                },
                {
                  step: "2",
                  title: "Processing",
                  description:
                    "Advanced processing facilities ensure consistent particle size, purity, and quality specifications.",
                },
                {
                  step: "3",
                  title: "Quality Control",
                  description:
                    "Every batch undergoes comprehensive laboratory testing to verify specifications and certifications.",
                },
                {
                  step: "4",
                  title: "Logistics",
                  description: "Reliable global logistics network ensures timely delivery to customers worldwide.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-8 rounded-lg shadow-lg text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <SectionTitle title="Key Achievements" subtitle="Milestones in our journey of excellence" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Years of Experience" },
                { number: "500+", label: "Global Clients" },
                { number: "50+", label: "Countries Served" },
                { number: "ISO 9001:2015", label: "Certified" },
              ].map((achievement, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <p className="text-muted-foreground">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Premium Mineral Products"
            subtitle="Each product is carefully sourced, processed, and tested to meet the highest international standards"
          />

          {/* Talc Product Section */}
          <div id="talc" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-16">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-auto" data-animate>
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
          <div id="barite" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
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

      {/* Uses of Talc/Barite Section (adapted from Industries) */}
      <section id="uses" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Applications of Talc & Barite"
            subtitle="Our minerals are essential components in products used by millions worldwide"
          />

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {industry.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{industry.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">{industry.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-foreground mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {industry.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-3">Our Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "md:col-start-1" : ""}`}
                >
                  <Image
                    src={
                      index === 0
                        ? "/oil-gas-drilling.jpg"
                        : index === 1
                          ? "/paint-manufacturing.jpg"
                          : index === 2
                            ? "/plastic-production.jpg"
                            : index === 3
                              ? "/ceramic-tiles.jpg"
                              : index === 4
                                ? "/cosmetics-production.jpg"
                                : "/sustainable-mining.jpg"
                    }
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Connect with our team to discuss your mineral supply needs and discover how we can support your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
