import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Our Branches | Niaz Muhammad General Trading L.L.C. - Global Presence",
  description:
    "Discover the global presence of Niaz Muhammad General Trading L.L.C. with details of our branches and contact information.",
}

export default function BranchesPage() {
  const branches = [
    {
      name: "Dubai Headquarters",
      address: "Office 101, Business Bay, Dubai, UAE",
      phone: "+971 XXXXXXXX",
      email: "info@niazminerals.com",
    },
    {
      name: "Branch Office 2",
      address: "[Address of Branch 2]",
      phone: "[Phone of Branch 2]",
      email: "[Email of Branch 2]",
    },
    {
      name: "Branch Office 3",
      address: "[Address of Branch 3]",
      phone: "[Phone of Branch 3]",
      email: "[Email of Branch 3]",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Our Global Presence"
        subtitle="Connecting industries worldwide with our strategic branch network"
        backgroundImage="/industrial-minerals-facility.jpg"
        showScrollIndicator={true}
      />

      {/* Branches Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Branches"
            subtitle="Find the Niaz Muhammad General Trading L.L.C. branch nearest to you"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {branches.map((branch, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{branch.name}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{branch.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="hover:text-foreground transition-colors">
                      {branch.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${branch.email}`} className="hover:text-foreground transition-colors">
                      {branch.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Connect with Our Global Network</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Reach out to our nearest branch for inquiries, support, or partnership opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
