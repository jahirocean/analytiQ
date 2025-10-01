"use client";

import { motion } from "@/components/motion-wrapper";
import { projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

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
            Explore how we've helped clients achieve their goals by turning data
            into actionable results.
          </motion.p>
        </div>


        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="group relative bg-background overflow-hidden rounded-2xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                width={300}
                height={250}
                className="w-full object-cover"
                src={project.img}
                alt="Placeholder image"
              />

              <div className="p-6">
                <h3 className="mt-4 text-2xl line-clamp-2 font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 mb-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

              

                <Link
                  href={`/projects/`}
                  className="text-green-500 hover:text-green-600 text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
