import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { Footer } from "@/components/footer"
import { CheckCircle, Target, Leaf } from "lucide-react"

export const metadata = {
  title: "About | Niaz Minerals - Our Story & Values",
  description:
    "Learn about Niaz Muhammad General Trading L.L.C., our history, mission, and commitment to quality mineral supply.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="About Niaz Minerals"
        subtitle="Two decades of excellence in global mineral supply"
        backgroundImage="/industrial-minerals-facility.jpg"
        showScrollIndicator={true}
      />

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
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
              <img
                src="/company-headquarters.jpg"
                alt="Niaz Minerals Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Mission, Vision & Values" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
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

            {/* Vision */}
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

            {/* Values */}
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
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Join Our Growing Network</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Become part of a global community of satisfied customers who trust Niaz Minerals for their mineral supply
            needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
