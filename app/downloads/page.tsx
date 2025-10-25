import type React from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionTitle } from "@/components/section-title"
import { Footer } from "@/components/footer"
import { Download, FileText, Award, BookOpen } from "lucide-react"

export const metadata = {
  title: "Downloads | Niaz Minerals - Technical Documents & Certificates",
  description: "Download technical data sheets, certificates, and company information from Niaz Minerals.",
}

interface DownloadItem {
  title: string
  description: string
  icon: React.ReactNode
  fileSize: string
  category: string
}

export default function DownloadsPage() {
  const downloads: DownloadItem[] = [
    {
      title: "Company Profile",
      description: "Comprehensive overview of Niaz Minerals, our capabilities, and services.",
      icon: <FileText className="w-8 h-8" />,
      fileSize: "2.4 MB",
      category: "Company",
    },
    {
      title: "Talc Technical Data Sheet",
      description: "Detailed specifications and technical information for our Talc products.",
      icon: <BookOpen className="w-8 h-8" />,
      fileSize: "1.8 MB",
      category: "Products",
    },
    {
      title: "Barite Technical Data Sheet",
      description: "Complete technical specifications for our Barite product lines.",
      icon: <BookOpen className="w-8 h-8" />,
      fileSize: "1.9 MB",
      category: "Products",
    },
    {
      title: "ISO 9001:2015 Certificate",
      description: "Quality management system certification from accredited body.",
      icon: <Award className="w-8 h-8" />,
      fileSize: "0.8 MB",
      category: "Certificates",
    },
    {
      title: "ISO 14001:2015 Certificate",
      description: "Environmental management system certification.",
      icon: <Award className="w-8 h-8" />,
      fileSize: "0.7 MB",
      category: "Certificates",
    },
    {
      title: "OHSAS 18001 Certificate",
      description: "Occupational health and safety management certification.",
      icon: <Award className="w-8 h-8" />,
      fileSize: "0.6 MB",
      category: "Certificates",
    },
    {
      title: "Talc - Premium Grade Spec Sheet",
      description: "Detailed specifications for Premium Grade Talc.",
      icon: <BookOpen className="w-8 h-8" />,
      fileSize: "1.2 MB",
      category: "Products",
    },
    {
      title: "Barite - Drilling Grade Spec Sheet",
      description: "API-compliant specifications for Drilling Grade Barite.",
      icon: <BookOpen className="w-8 h-8" />,
      fileSize: "1.3 MB",
      category: "Products",
    },
  ]

  const categories = ["All", "Company", "Products", "Certificates"]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Downloads"
        subtitle="Access technical documents, certificates, and company information"
        backgroundImage="/mineral-texture-background.jpg"
        showScrollIndicator={true}
      />

      {/* Downloads Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Available Resources"
            subtitle="Download technical data sheets, certificates, and company documents"
          />

          {/* Download Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{item.description}</p>

                {/* Category & Size */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.fileSize}</span>
                </div>

                {/* Download Button */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-200 font-semibold group-hover:bg-primary/90">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-foreground mb-6">Need More Information?</h2>
              <p className="text-muted-foreground mb-4">
                If you cannot find the document you're looking for, or need additional technical information, please
                don't hesitate to contact our team.
              </p>
              <p className="text-muted-foreground mb-6">
                We're happy to provide custom documentation, detailed specifications, or technical support for your
                specific requirements.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Document Categories</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-semibold text-foreground">Company Documents</p>
                    <p className="text-sm text-muted-foreground">Company profile and overview</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-semibold text-foreground">Product Specifications</p>
                    <p className="text-sm text-muted-foreground">Technical data sheets and spec sheets</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-semibold text-foreground">Certifications</p>
                    <p className="text-sm text-muted-foreground">ISO and quality certifications</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
