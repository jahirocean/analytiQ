"use client"

import { motion } from "@/components/motion-wrapper"
import {features} from "@/lib/constants"
import Image from "next/image"



export function Projects() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Explore how we've helped clients achieve their goals by turning data into actionable results.
          </motion.p>
        </div>
        



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">



          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background overflow-hidden rounded-2xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              
                <Image width={300} height={250} className="w-full h-48 object-cover" src="/fff.png" alt="Placeholder image"/>
              
                <div className="p-6">
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
