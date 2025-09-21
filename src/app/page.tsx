import { Features } from "@/components/features";

import { Foundation } from "@/components/foundation";

import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Foundation />
      <Projects />
      <Testimonials />
    </div>
  );
}
