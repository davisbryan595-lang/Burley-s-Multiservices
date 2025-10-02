"use client"

import { MapPin, CheckCircle2 } from "lucide-react"

export function ServiceArea() {
  const counties = [
    {
      name: "Wayne County",
      cities: ["Detroit", "Dearborn", "Livonia", "Westland", "Canton"],
    },
    {
      name: "Washtenaw County",
      cities: ["Ann Arbor", "Ypsilanti", "Saline", "Chelsea", "Dexter"],
    },
  ]

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Service Area
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Proudly Serving <span className="text-primary">Southeast Michigan</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We're your local service experts, providing fast and reliable solutions throughout Wayne and Washtenaw
              counties. No matter where you are in our service area, we're just a call away.
            </p>

            {/* Counties */}
            <div className="space-y-6 pt-4">
              {counties.map((county, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={24} />
                    <h3 className="text-xl font-bold text-foreground">{county.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pl-8">
                    {county.cities.map((city, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="text-primary" size={16} />
                        <span className="text-muted-foreground">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <p className="text-foreground font-medium">
                Don't see your city listed?{" "}
                <a href="#contact" className="text-primary hover:underline">
                  Contact us
                </a>{" "}
                to check if we service your area.
              </p>
            </div>
          </div>

          {/* Map Illustration */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary/30 to-accent">
                {/* Animated Pins */}
                <div className="absolute top-1/4 left-1/3 animate-bounce">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                </div>
                <div className="absolute top-1/2 right-1/3 animate-bounce delay-100">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                </div>
                <div className="absolute bottom-1/3 left-1/2 animate-bounce delay-200">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                </div>
              </div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 bg-background/80 backdrop-blur-sm p-8 rounded-xl">
                  <MapPin className="mx-auto text-primary" size={48} />
                  <div className="text-2xl font-bold text-foreground">Wayne & Washtenaw</div>
                  <div className="text-muted-foreground">Counties Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
