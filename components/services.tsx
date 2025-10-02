"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Wrench, Home, Sparkles } from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: Droplets,
      title: "Drain Cleaning",
      description:
        "Professional drain and sewer cleaning services using state-of-the-art equipment. We handle clogs, blockages, and maintenance.",
      image: "/plumbing-drain-cleaning-tools.jpg",
      features: ["Emergency Service", "Video Inspection", "Preventive Maintenance"],
    },
    {
      icon: Wrench,
      title: "Handyman Services",
      description:
        "Expert repairs and installations for your home or business. From minor fixes to major projects, we handle it all.",
      image: "/handyman-tools-repair-work.jpg",
      features: ["General Repairs", "Installation", "Maintenance"],
    },
    {
      icon: Home,
      title: "Property Preservation",
      description:
        "Comprehensive property maintenance and preservation services to keep your investment in top condition.",
      image: "/property-maintenance-landscaping.jpg",
      features: ["Lawn Care", "Winterization", "Inspections"],
    },
    {
      icon: Sparkles,
      title: "Janitorial Services",
      description:
        "Professional cleaning services for commercial and residential properties. We ensure spotless, sanitized spaces.",
      image: "/professional-cleaning-sparkling-office.jpg",
      features: ["Deep Cleaning", "Regular Maintenance", "Eco-Friendly"],
    },
  ]

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Comprehensive Solutions for <span className="text-primary">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From emergency repairs to routine maintenance, we've got you covered
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-primary-foreground" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
