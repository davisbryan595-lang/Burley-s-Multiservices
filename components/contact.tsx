"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(734) 555-0123",
      link: "tel:7345550123",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@burleysmultiservices.com",
      link: "mailto:info@burleysmultiservices.com",
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Wayne & Washtenaw Counties",
      link: "#service-area",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Emergency Service",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contact us today for a free quote or to schedule a service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(734) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have questions? We're here to help. Reach out to us through any of the following methods.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = info.link ? (
                  <a href={info.link} className="text-foreground hover:text-primary transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <span className="text-foreground">{info.content}</span>
                )

                return (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                          <div className="font-medium">{content}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Emergency Notice */}
            <Card className="border-2 border-primary/50 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-foreground mb-1">Emergency Service</div>
                    <p className="text-sm text-muted-foreground">
                      Need immediate assistance? Call us now for 24/7 emergency service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
