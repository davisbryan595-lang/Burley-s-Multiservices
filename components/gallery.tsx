"use client"

import Image from "next/image"
import { useState } from "react"

export function Gallery() {
  const images = [
    {
      src: "/drain-cleaning-before-after.jpg",
      alt: "Drain Cleaning Service",
      category: "Drain Cleaning",
    },
    {
      src: "/handyman-repair-work-completed.jpg",
      alt: "Handyman Service",
      category: "Handyman",
    },
    {
      src: "/property-maintenance-landscaping-beautiful.jpg",
      alt: "Property Preservation",
      category: "Property Preservation",
    },
    {
      src: "/commercial-cleaning-spotless-office.jpg",
      alt: "Janitorial Service",
      category: "Janitorial",
    },
    {
      src: "/plumbing-tools-professional-equipment.jpg",
      alt: "Professional Equipment",
      category: "Equipment",
    },
    {
      src: "/satisfied-customer-happy-homeowner.jpg",
      alt: "Happy Customer",
      category: "Results",
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            See Our <span className="text-primary">Quality Work</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real results from real projects across Wayne and Washtenaw counties
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary">{image.category}</div>
                  <div className="text-lg font-bold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 border-4 border-primary rounded-2xl transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
