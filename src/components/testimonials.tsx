"use client"

import { motion } from "@/components/motion-wrapper"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "We were drowning in data, but the team at [Your Company Name] helped us make sense of it all. They built a simple dashboard that gave us a clear view of our sales trends. Now, we can make decisions with confidence, and it’s had a huge impact on our bottom line.",
    author: "Mark Johnson",
    company: "Founder of Swift Logistics"
  },
  {
    quote: "The statistical modeling and data visualization services were a game-changer for my research. [Your Company Name] helped me analyze a massive dataset and create publication-ready figures for my journal article. The insights they provided were invaluable to my work.",
    author: "Dr. Emily Carter",
    company: "Lead Researcher at Bio-Gen Innovations"
  },
  {
    quote: "We needed to understand why our customers weren't converting. [Your Company Name] conducted a thorough analysis of our e-commerce data, and their findings helped us optimize our funnel. We saw a significant increase in our conversion rates within weeks. Highly recommend their expertise!",
    author: "Sarah Chen",
    company: "E-commerce Manager at Urban Threads Co."
  }
]

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Customer Testimonials
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-background rounded-2xl p-8 shadow-sm border border-border"
            >
              <Quote className="h-8 w-8 text-muted-foreground mb-4" />
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground">
                    {testimonial.company.charAt(0)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
