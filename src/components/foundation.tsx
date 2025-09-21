"use client";

import { motion } from "@/components/motion-wrapper";
import { Database, Brain, ChartArea } from "lucide-react";

const technologies = [
  {
    name: "Data Engineering & Management",
    description:
      "We build secure, reliable pipelines by integrating diverse data sources — ensuring your data is accurate, compliant, and ready for advanced analysis.",
    icon: Database,
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Data Science & Machine Learning",
    description:
      "Our expertise helps you uncover patterns, predict outcomes, and optimize decisions — giving your business a measurable competitive edge.",
    icon: Brain,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Data Visualization & Insights",
    description:
      "We transform complex datasets into clear, interactive visuals that reveal trends, track performance in real time, and support confident decision-making.",
    icon: ChartArea,
    color: "from-purple-500 to-pink-500",
  },
];

export function Foundation() {
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
            We turn complex data into clear insights for research and business
            success.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div
                className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${tech.color} text-white shadow-xl mb-6 group-hover:shadow-2xl transition-shadow duration-300`}
              >
                <tech.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {tech.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
