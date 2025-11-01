import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact | Niaz Minerals - Get in Touch",
  description: "Contact Niaz Minerals for inquiries, quotes, or technical support. We're here to help.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="We're here to help. Reach out to our team with any questions or inquiries."
        backgroundImage="/mineral-texture-background.jpg"
        showScrollIndicator={true}
      />

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />

          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-foreground mb-12 text-center">Our Location</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d366.93535476156626!2d71.53398379493842!3d33.967590841136065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMain%20office%20%20Niaz%20enterprises%20Near%20sarhad%20University%20opposite%20fahad%20CNG%20Peshawar%20ring%20road!5e1!3m2!1sen!2s!4v1761986258741!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
