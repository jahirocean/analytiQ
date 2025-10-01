"use client";

import Image from "next/image";
import React from "react";
import { motion } from "@/components/motion-wrapper";
import { ArrowLeft, Calendar, User } from "lucide-react";

import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-background pt-6 lg:pt-0">
      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Visualizing US Flight Routes with R
          </h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>Monday, July 14th 2025</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <h3 className="mt-4 py-2 text-2xl font-semibold text-foreground">
            Creating the Visualization
          </h3>
          <p>
            This is where all the data preparation pays off. The final map is
            constructed in layers, much like a graphic design project.
          </p>
          <p>
            The final product is a layered map. The first layer is the{" "}
            <strong>base map</strong> of the US states. On top of that, we add
            the <strong>flight routes</strong>. The{" "}
            <code>ggraph::geom_edge_bundle_path()</code> function is a key
            element that intelligently bundles flight paths between busy hubs.
            This creates a visually appealing and organized look, preventing the
            map from becoming an incomprehensible tangle of lines.
          </p>

          <div className="mx-auto my-16 flex max-w-7xl justify-center">
            <Image
              width={1000}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/power-bi.png"
              alt="US flight routes map visualization"
            />
          </div>

          <p>
            To make the map even more informative, you can use variables to
            control aesthetics. For instance, by mapping the{" "}
            <strong>number of flights</strong> on a route to the line’s{" "}
            <code>color</code> and <code>width</code>, you can make the busiest
            flight corridors appear darker and thicker, instantly highlighting
            the most popular routes. The final map is then saved as a
            high-quality image file for sharing.
          </p>
          <p>
            Using R, a complex dataset can be turned into a powerful and
            artistic visualization, helping you see the world from a new
            perspective.
          </p>

          <h3 className="mt-8 text-2xl font-semibold text-foreground">
            The Tools of the Trade
          </h3>
          <p>
            This project relies on a powerful set of R packages that work
            together seamlessly:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>tidyverse</strong>: A collection of essential packages for
              data manipulation and wrangling. Used to clean, filter, and
              summarize the data.
            </li>
            <li>
              <strong>sf (Simple Features)</strong>: The standard for handling
              spatial data in R. Used to manage the geographical shapes of US
              states and airport locations.
            </li>
            <li>
              <strong>anyflights</strong>: A package for directly downloading US
              flight data from the Bureau of Transportation Statistics. The key
              source of raw data.
            </li>
            <li>
              <strong>tidygraph & ggraph</strong>: Core tools for graph-based
              visualizations. <code>tidygraph</code> structures the data into a{" "}
              <strong>network graph</strong>, while <code>ggraph</code> extends{" "}
              <code>ggplot2</code> to visualize these graphs with complete
              control over aesthetics.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
