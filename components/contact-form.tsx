"use client"

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "0c840790-a508-47e3-98df-9a4fd41b7349");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully!" : "Error sending message.");
    if (data.success) {
      event.currentTarget.reset(); // Clear the form fields on success
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
          <p className="text-muted-foreground mb-6">
            Get in touch with our team. We're here to help and answer any questions you may have.
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Main Office</h3>
          <p className="text-muted-foreground mb-4">
            Niaz enterprises Near Sarhad University opposite Fahad CNG Peshawar ring road
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Email</h3>
          <p className="text-muted-foreground mb-4">
            Niazenterprises2@gmail.com
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Address</h4>
              <p className="text-muted-foreground">Main office Niaz enterprises Near sarhad University opposite Fahad CNG Peshawar</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <p className="text-muted-foreground">+971 56 370 8034</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <p className="text-muted-foreground">Niazenterprises2@gmail.com</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/971"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 font-semibold"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.117-2.259 3.355-.603 1.692-.757 3.545-.757 5.471 0 .981.119 1.558.141 1.561l.003.002c.021.183.142 1.31.859 2.738.381.771.879 1.450 1.491 2.027.612.577 1.256 1.075 2.027 1.491 1.428.717 2.555.838 2.738.859l.002.003c.003.022.58.141 1.561.141 1.926 0 3.779-.154 5.471-.757 1.238-.503 2.335-1.236 3.356-2.259 1.02-1.02 1.756-2.117 2.259-3.355.603-1.692.757-3.545.757-5.471 0-.981-.119-1.558-.141-1.561l-.003-.002c-.021-.183-.142-1.31-.859-2.738-.381-.771-.879-1.45-1.491-2.027-.612-.577-1.256-1.075-2.027-1.491-1.428-.717-2.555-.838-2.738-.859l-.002-.003c-.022-.003-.58-.141-1.561-.141z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={onSubmit} className="lg:col-span-2 bg-card p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-foreground mb-2">
              Country *
            </label>
            <select
              id="country"
              name="country"
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            >
              <option value="">Select your country</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Qatar">Qatar</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Oman">Oman</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="How can we help?"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-200 font-semibold"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
        {result && <p className="text-center mt-4 text-sm font-medium">{result}</p>}
      </form>
    </div>
  )
}
