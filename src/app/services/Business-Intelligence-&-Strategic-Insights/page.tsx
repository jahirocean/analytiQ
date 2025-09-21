


import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function BusinessIntelligencePage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Back Navigation */}
      <div
        className="mb-8"
      >
        <Link
          href="/services"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-16"
      >
        <Image
          src="/business.png" // 👉 replace with your BI PNG/SVG
          alt="Business Intelligence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Business Intelligence & Strategic Insights
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Transform raw data into foresight that drives performance, resilience, and growth.
          </p>
        </div>
      </div>

      {/* Why Section */}
      <section
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Why Business Intelligence & Strategic Insights Matter
        </h2>
        <p className="text-muted-foreground mb-6">
          Organizations generate huge amounts of data — sales numbers, operations metrics,
          customer behavior, project progress, and more. But data alone isn’t enough.{" "}
          <span className="font-medium text-foreground">
            Business Intelligence & Strategic Insights
          </span>{" "}
          transform raw information into:
        </p>
        <ul className="space-y-3 text-muted-foreground">
          {[
            "Clear visibility into what is happening now — real-time dashboards & reports",
            "Understanding of why things are happening — root-cause analysis & storytelling",
            "Forecasts of what’s coming — predictive models & scenario planning",
            "Actionable strategies aligned with long-term business goals",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-primary h-5 w-5 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How We Provide - Colorful Table */}
      <section
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">
          How We Deliver BI & Insights
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-center">
                <th className="bg-green-500/10 px-6 py-3 text-green-500">Phase</th>
                <th className="bg-orange-500/10 text-orange-500 px-6 py-3">What We Do</th>
                <th className="bg-blue-500/10 text-blue-500 px-6 py-3">What You Get</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                {
                  phase: "1. Discovery",
                  do: "Understand goals, KPIs, data sources, and challenges.",
                  get: "BI roadmap with clear objectives.",
                  color: "bg-blue-50",
                },
                {
                  phase: "2. Data Integration",
                  do: "Clean and merge data from multiple systems.",
                  get: "Reliable datasets ready for insights.",
                  color: "bg-blue-50",
                },
                {
                  phase: "3. Dashboards",
                  do: "Build interactive reports & real-time dashboards.",
                  get: "Easy-to-use BI dashboards with drill-down features.",
                  color: "bg-indigo-50",
                },
                {
                  phase: "4. Insights",
                  do: "Analyze trends and provide recommendations.",
                  get: "Strategic reports with clear action points.",
                  color: "bg-pink-50",
                },
                {
                  phase: "5. Monitoring",
                  do: "Deploy dashboards, set alerts, and train teams.",
                  get: "Live dashboards + ongoing support.",
                  color: "bg-yellow-50",
                },
                {
                  phase: "6. Optimization",
                  do: "Regular reviews, new metrics, and predictions.",
                  get: "Continuous improvement and scalability.",
                  color: "bg-orange-50",
                },
              ].map((row, i) => (
                <tr key={i} className={`${row.color}/10 border-b border-border`}>
                  <td className="px-6 py-4 font-semibold text-foreground">
                    {row.phase}
                  </td>
                  <td className={`px-6 py-4 `}>{row.do}</td>
                  <td className="px-6 py-4">{row.get}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="mb-16 "
      >
        <h2 className="text-3xl font-bold text-foreground mb-6">Benefits You’ll Gain</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Faster Decisions", desc: "Make informed choices with real-time insights." },
            { title: "Competitive Edge", desc: "Spot trends and opportunities early." },
            { title: "Efficiency", desc: "Automate reporting and free time for strategy." },
            { title: "Growth Strategy", desc: "Use predictive insights for scaling." },
          ].map((benefit, i) => (
            <div key={i} className="bg-muted/30 p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-muted/30  py-16 text-center rounded-2xl"
      >
        <h2 className="text-3xl text-foreground font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6 text-muted-foreground/90">
          Let us turn your data into a strategic asset for smarter decisions and growth.
        </p>
        <Button variant="secondary" size="lg">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  )
}
