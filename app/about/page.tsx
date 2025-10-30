import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { Footer } from "@/components/footer"
import { CheckCircle, Target, Leaf } from "lucide-react"
import Image from "next/image"
import { ImageCarousel } from "@/components/ui/image-carousel"
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
        backgroundVideo="/about_video.mp4"
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
              <ImageCarousel
                images={[
                  "/headquarter_1.jpg",
                  "/headquarter_2.jpg",
                  "/headquarter_3.jpg",
                  "/about_1.jpg",
                  "/about_2.jpg",
                  "/about_3.jpg",
                ]}
                imageClassName="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Team" subtitle="Meet the dedicated professionals behind Niaz Muhammad General Trading L.L.C." centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/owner_1.jpg" alt="Muhammad Umar" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Muhammad Umar</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/owner_2.jpg" alt="Maaz Khan" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Maaz Khan</h3>
              <p className="text-muted-foreground">Head of Operations</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image src="/finance_manager.jpg" alt="Nadar Shah Khaaksar" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Nadar Shah Khaaksar</h3>
              <p className="text-muted-foreground">Finance Manager</p>
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
