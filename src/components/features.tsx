"use client";

import { motion } from "@/components/motion-wrapper";
import {
  Database,
  Cpu,
  Brain,
  CloudSun,
  Satellite,
  SearchCode,
  Map,
  ChartBar,
  GraduationCap,
  ChartLine,
} from "lucide-react";

const features = [
  {
    name: "Business Intelligence & Strategic Insights",
    description:
      "Go beyond raw data. We create interactive dashboards, build key performance indicators (KPIs), and deliver actionable insights to support strategic decision-making in business.",
    icon: ChartLine,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Academic & Thesis Data Analysis",
    description:
      "We provide comprehensive data analysis for dissertations, theses, and research papers, ensuring robust statistical modeling and publication-ready results.",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Analysis & Statistical Modeling",
    description:
      "Leveraging the full power of Python & R to uncover trends, test hypotheses, and build robust statistical models from your data.",
    icon: Brain,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Geospatial Data Analysis",
    description:
      "Expert integration of GIS, remote sensing, and field data. We create unified geospatial datasets for powerful, location-based analysis.",
    icon: Map,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Remote Sensing & Oceanography",
    description:
      "Analyzing satellite imagery and oceanographic data (e.g., temperature, salinity, currents) to monitor environmental conditions.",
    icon: Satellite,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Climate & Environmental Data",
    description:
      "Analyzing long-term climate datasets and environmental variables to assess impacts, model scenarios, and inform policy.",
    icon: CloudSun,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Predictive Modeling & ML",
    description:
      "Building machine learning models to forecast environmental events, classify habitats, and predict species distribution patterns.",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Interactive Data Visualization",
    description:
      "Creating compelling charts, maps, and interactive dashboards (R Shiny, Dash) to make complex data accessible to all stakeholders.",
    icon: ChartBar,
    color: "from-teal-500 to-green-400",
  },
  {
    name: "Automated Data Pipelines",
    description:
      "Designing and implementing automated workflows (ETL) to efficiently process and update your data from various sources.",
    icon: Database,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Data Cleaning & Preprocessing",
    description:
      "The crucial first step. We handle missing values, correct errors, and structure your raw data for reliable, accurate analysis.",
    icon: SearchCode,
    color: "from-pink-500 to-purple-500",
  },
];

export function Features() {
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
            Our Data Analysis Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Our team specializes in transforming complex data into
            easy-to-understand reports and powerful visualizations, giving you a
            clear path forward.
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
              className="group relative bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
