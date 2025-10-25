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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.7319395969147!2d55.27612!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sDubai%2C%20UAE!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
