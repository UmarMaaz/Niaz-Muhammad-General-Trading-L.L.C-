import Link from "next/link"
import { Icons } from "@/lib/icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">NM</span>
              </div>
              <span className="font-bold text-lg">Niaz Minerals</span>
            </div>
            <p className="text-background/80">Premium Talc & Barite supplier from Dubai to the world.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Industries", href: "/industries" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "Downloads", href: "/downloads" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icons.MapPin />
                <span className="text-background/80">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.Phone />
                <a href="tel:+971" className="text-background/80 hover:text-background">
                  +971 XXXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icons.Mail />
                <a href="mailto:info@niazminerals.com" className="text-background/80 hover:text-background">
                  info@niazminerals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60">
            © {currentYear} Niaz Muhammad General Trading L.L.C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
