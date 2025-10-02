"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Burley's Multiservices saved the day when our drain backed up on a Sunday evening. They responded quickly and fixed the problem professionally. Highly recommend!",
      rating: 5,
      image: "/professional-woman-portrait.png",
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      content:
        "We use Burley's for all our property maintenance needs. Their handyman services are top-notch, and they always show up on time. Great team!",
      rating: 5,
      image: "/professional-man-portrait.png",
    },
    {
      name: "Jennifer Martinez",
      role: "Business Owner",
      content:
        "Their janitorial services have kept our office spotless for over two years. Professional, reliable, and affordable. Couldn't ask for more!",
      rating: 5,
      image: "/confident-businesswoman.png",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-primary/50"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Quote className="text-primary" size={24} />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={20} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed text-pretty">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
