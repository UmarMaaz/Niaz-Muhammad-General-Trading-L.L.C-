import { Download, MessageSquare } from "lucide-react"
import Image from "next/image"

interface ProductShowcaseCardProps {
  name: string
  description: string
  image: string
  formula?: string
  characteristics?: string[]
  applications?: string[]
  reverse?: boolean // For alternating layout
}

export function ProductShowcaseCard({
  name,
  description,
  image,
  formula,
  characteristics = [],
  applications = [],
  reverse = false,
}: ProductShowcaseCardProps) {
  return (
    <div
      className={`group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
        flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Image Section */}
      <div className="relative h-64 md:h-auto md:w-1/2 flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{name}</h3>
          {formula && <p className="text-sm text-muted-foreground mb-3 font-mono">{formula}</p>}
          <p className="text-foreground mb-4">{description}</p>

          {/* Characteristics */}
          {characteristics.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2">Characteristics:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {characteristics.map((char, index) => (
                  <li key={`char-${char}-${index}`} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          {applications.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-2">Applications:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {applications.map((app, index) => (
                  <li key={`app-${app}-${index}`} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-200 font-semibold text-sm">
            <Download className="w-4 h-4" />
            TDS
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 font-semibold text-sm">
            <MessageSquare className="w-4 h-4" />
            Quote
          </button>
        </div>
      </div>
    </div>
  )
}
