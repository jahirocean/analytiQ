import { features } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative gradient-foreground text-white py-20 overflow-hidden">
        {/* Background Image */}
          <Image 
                src="/banner5.png" 
                alt="Digital transformation banner" 
                layout="fill" 
                objectFit="cover" 
                quality={100}
                className="z-0"
              />
        {/* Gradient Overlay */}
        
        <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

        {/* Content */}
        <div className="mx-auto max-w-7xl lg:px-8 px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Real-world success stories from our digital transformation
              projects
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Discover how we've helped organizations across industries achieve
              their goals through innovative technology solutions
            </p>
          </div>
        </div>
      </section>


  

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-background overflow-hidden rounded-2xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <Image
                width={300}
                height={250}
                className="w-full h-48 object-cover"
                src="/fff.png"
                alt="Placeholder image"
              />

              <div className="p-6">
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 mb-4 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <Link href="#" className="text-green-500 hover:text-green-600 text-sm font-medium">
            Read more →
          </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
