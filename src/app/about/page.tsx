
import { aboutFeatures, statistics } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative gradient-foreground  text-white py-20 overflow-hidden">
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
        <div className="mx-auto max-w-7xl lg:px-8 text-center px-4 relative z-10">
          <div className=" text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About AnalytiQ
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              AnalytiQ empowers business leaders with enhanced analytics and
              data engineering capabilities that stabilize enterprises and help
              them thrive in shifting and complex markets.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="#about-content"
                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full 
               border border-gray-100 text-white 
               shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More
                <ArrowDown className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Main Content --> */}
      <section id="about-content" className="py-16 lg:py-24 bg-forground">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <Image
              className="w-full h-auto rounded-xl shadow-lg"
              src="/business.png"
              width={1000}
              height={700}
              alt="AnalytiQ team working on data"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Driving a Data-Driven World
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              For businesses seeking to modernize, becoming data-driven is a
              critical differentiator. AnalytiQ is a trusted partner for the
              design and delivery of effective, scalable, and outcome-based data
              solutions for mission-critical processes.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Drawing on our deep technical expertise and broad domain
              knowledge, we drive technology performance, operational
              efficiency, and continuous innovation across multiple industries.
              All while enabling higher transparency, control, and business
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- What Sets Us Apart Section --> */}

      <section id="what-sets-us-apart" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Sets Us Apart
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex group flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 items-center justify-center rounded-full ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* <!-- AnalytiQ in Numbers Section --> */}
        <section id="numbers" className="py-16 lg:py-24 bg-bacground">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">AnalytiQ in Numbers</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* <!-- Stat 1 --> */}
                    {
                      statistics.map((item, index)=>(
                         <div key={index} className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-lg shadow-sm">
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{item.number}</span>
                        <p className="mt-2 text-lg font-medium text-muted-foreground">{item.title}</p>
                    </div> 
                      ))
                    }
                    
                    
                </div>
            </div>
        </section>


      
      
    </div>
  );
}
