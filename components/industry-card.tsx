import type React from "react"
interface IndustryCardProps {
  name: string
  icon: React.ReactNode
  description: string
}

export function IndustryCard({ name, icon, description }: IndustryCardProps) {
  return (
    <div className="group bg-card rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{name}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
