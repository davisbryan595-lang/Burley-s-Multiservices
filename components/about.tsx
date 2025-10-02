"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function About() {
  const features = [
    "Licensed & Insured Professionals",
    "Fast Response Times",
    "Competitive Pricing",
    "Quality Workmanship Guaranteed",
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/professional-service-team-working.jpg" alt="Burley's Multiservices Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Your Trusted Partner for <span className="text-primary">Professional Services</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              At Burley's Multiservices, we pride ourselves on delivering exceptional service across multiple domains.
              With over a decade of experience serving Wayne and Washtenaw counties, we've built our reputation on
              reliability, professionalism, and customer satisfaction.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our team of skilled professionals is dedicated to providing top-quality solutions for all your property
              maintenance needs, from emergency drain cleaning to comprehensive janitorial services.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
