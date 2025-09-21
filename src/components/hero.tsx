"use client";

import { ArrowRight, Play, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion-wrapper";
import Link from "next/link";

import { tags } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Global Data Analytics Services &{" "}
              <span className="text-primary">Solutions</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Reliable analytics for academia and business — turning data into
            insights through{" "}
            <strong className="font-semibold text-foreground">
              Python, R and GIS
            </strong>{" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button size="lg" className="text-base px-8 py-6">
              Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6">
              Contact
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-x-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-x-2">
              <Play className="h-4 w-4" />
              <span>Watch the video</span>
            </div>
            <div className="flex items-center gap-x-2">
              <Github className="h-4 w-4" />
              <span>Star on GitHub</span>
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold">100k+</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl  mt-6 font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Get Help With!
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto flex-wrap mt-4 text-lg text-muted-foreground"
          >
            {tags.map((tag) => (
              <Link
                key={tag.name}
                href={tag.href}
                className={`inline-flex m-1 shrink-0 items-center rounded-full border px-4 py-1 text-sm font-medium transition duration-200 bg-[var(--text)]/10 ${tag.color}`}
              >
                {tag.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
