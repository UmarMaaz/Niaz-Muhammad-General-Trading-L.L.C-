"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Icons } from "@/lib/icons"

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  backgroundVideo?: string
  ctaButtons?: Array<{ label: string; href: string; variant?: "primary" | "secondary" }>
  showScrollIndicator?: boolean
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage = "/mineral-texture-background.jpg",
  backgroundVideo,
  ctaButtons = [],
  showScrollIndicator = true,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => console.log("[v0] Video failed to load, using fallback image")}        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white mb-6 animate-fade-up">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-12 animate-fade-up animation-delay-200">{subtitle}</p>

        {/* CTA Buttons */}
        {ctaButtons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            {ctaButtons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  button.variant === "secondary"
                    ? "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                    : "bg-primary text-primary-foreground hover:shadow-xl hover:scale-105"
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white">
          <Icons.ChevronDown />
        </div>
      )}
    </section>
  )
}
