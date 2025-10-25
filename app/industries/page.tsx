import type React from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { Footer } from "@/components/footer"
import { Droplet, Zap, Globe, Award, Users, Leaf } from "lucide-react"

export const metadata = {
  title: "Industries | Niaz Minerals - Talc & Barite Applications",
  description:
    "Discover how Niaz Minerals serves oil & gas, paints, plastics, ceramics, cosmetics, and other industries with premium mineral solutions.",
}

interface IndustrySection {
  title: string
  icon: React.ReactNode
  description: string
  applications: string[]
  products: string[]
}

export default function IndustriesPage() {
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
      products: ["Barite - Drilling Grade"],
    },
    {
      title: "Paints & Coatings",
      icon: <Zap className="w-12 h-12" />,
      description:
        "Both talc and barite enhance paint formulations by improving opacity, coverage, and durability. Our minerals provide excellent suspension and reduce settling.",
      applications: ["Architectural Paints", "Industrial Coatings", "Protective Coatings", "Specialty Finishes"],
      products: ["Talc - Industrial Grade", "Barite - Industrial Grade"],
    },
    {
      title: "Plastics & Rubber",
      icon: <Globe className="w-12 h-12" />,
      description:
        "Mineral fillers improve mechanical properties, reduce costs, and enhance processing characteristics in plastic and rubber compounds.",
      applications: ["Plastic Compounds", "Rubber Manufacturing", "Injection Molding", "Extrusion Applications"],
      products: ["Talc - Industrial Grade", "Barite - Industrial Grade"],
    },
    {
      title: "Ceramics & Tiles",
      icon: <Award className="w-12 h-12" />,
      description:
        "Premium talc is used in ceramic glazes and body compositions to improve firing characteristics and surface finish.",
      applications: ["Ceramic Glazes", "Tile Manufacturing", "Porcelain Production", "Sanitaryware"],
      products: ["Talc - Premium Grade"],
    },
    {
      title: "Cosmetics & Personal Care",
      icon: <Users className="w-12 h-12" />,
      description:
        "Ultra-pure talc is essential in cosmetics for its absorbency, smoothness, and skin-friendly properties. Our talc meets strict cosmetic grade standards.",
      applications: ["Body Powders", "Makeup Products", "Deodorants", "Personal Care Items"],
      products: ["Talc - Premium Grade"],
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
        title="Industries We Serve"
        subtitle="Trusted by leading companies across multiple sectors worldwide"
        backgroundImage="/industrial-minerals-facility.jpg"
        showScrollIndicator={true}
      />

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Serving Global Industries"
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
                  <img
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
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Looking for Industry-Specific Solutions?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Our technical team can help you find the perfect mineral solution for your specific application and
            requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all duration-200"
          >
            Contact Our Experts
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
