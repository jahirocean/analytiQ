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
            A Primary Investigation of Seasonal Upwelling Zone along the
            Exclusive Economic Zone of Bangladesh
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
            ABSTRACT
          </h3>
          <p>
            The study investigates upwelling events in Bangladesh’s Exclusive
            Economic Zone (EEZ) of the Bay of Bengal, analyzing 22 years of SST,
            chlorophyll, and wind data. Key findings show a strong correlation
            between lower SST and increased chlorophyll, with significant
            seasonal variations.
          </p>

          <p>
            The study highlights upwelling’s role in enhancing marine
            productivity and suggests implications for fishery management in the
            region. Results indicate that monsoonal winds are critical drivers
            of upwelling, though further research is needed to fully understand
            other contributing mechanisms
          </p>

          <div className="mx-auto my-16 flex max-w-7xl justify-center">
            <Image
              width={1000}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src="/Thesis-poster2.png"
              alt="US flight routes map visualization"
            />
          </div>

          

          <h3 className="mt-8 text-2xl font-semibold text-foreground">
            OBJECTIVES
          </h3>

          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>
                {" "}
                Identify cooler SST patterns indicative of upwelling
              </strong>
            </li>
            <li>
              <strong>
                {" "}
                Identify the physical drivers of upwelling and their
                relationship with oceanographic features.
              </strong>
            </li>
            <li>
              <strong>
                {" "}
                Investigate the potential for predicting upwelling events using
                remote sensing and modeling techniques
              </strong>
            </li>
          </ul>

          <h3 className="mt-8 text-2xl font-semibold text-foreground">
            METHODS
          </h3>

          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Wind Component:</strong> Alongshore wind speeds above 5
              m/s were marked as favorable for upwelling, and an "upwelling
              index" was calculated using Fielding and Davi’s (1989) formula.
            </li>
            <li>
              <strong>Temperature Component:</strong> SST was monitored at each
              transect; a drop to the site’s 25th percentile confirmed upwelling
              during positive upwelling index values.
            </li>
            <li>
              <strong>
                Event Detection and Metric Calculation: The detect_event()
              </strong>{" "}
              function from the heatwaveR package quantified upwelling metrics,
              deriving intensity, frequency, and duration for each event.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
