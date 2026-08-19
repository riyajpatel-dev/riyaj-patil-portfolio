import React from "react";
import { Code2, Palette, Zap, Wrench, ArrowUpRight } from "lucide-react";
export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "I build modern, responsive and user-friendly websites with clean and scalable code.",
    },
    {
      icon: Palette,
      title: "UI Development",
      description:
        "I create clean and attractive interfaces that provide a smooth experience across devices.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "I optimize websites for better speed, responsiveness and overall performance.",
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description:
        "I help maintain, update and improve existing websites with fixes and new features.",
    },
  ];
  return (
    <>
      <section
        id="services"
        className="relative px-6 py-24 text-white md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              My Services
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              What I Can Do <span className="text-blue-400">For You</span>
            </h2>

            <p className="mt-5 text-gray-300">
              I help businesses and individuals build modern, responsive and
              user-friendly digital experiences.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="
              group relative overflow-hidden rounded-2xl
              border border-blue-400/20
              bg-[#071a33]/90
              p-7
              shadow-[0_10px_40px_rgba(0,30,80,0.35)]
              backdrop-blur-md
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-400/50
              hover:bg-[#0a2345]/95
              hover:shadow-[0_15px_50px_rgba(0,100,255,0.18)]
            "
                >
                  {/* Blue Glow */}
                  <div
                    className="
                absolute -right-10 -top-10
                h-28 w-28
                rounded-full
                bg-blue-500/5
                blur-3xl
                transition-all duration-500
                group-hover:bg-blue-500/15
              "
                  />

                  {/* Icon */}
                  <div
                    className="
                relative mb-6
                flex h-14 w-14 items-center justify-center
                rounded-xl
                border border-blue-400/20
                bg-blue-500/10
                text-blue-400
                transition-all duration-300
                group-hover:border-blue-400/40
                group-hover:bg-blue-500
                group-hover:text-white
              "
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="relative mb-3 text-xl font-semibold">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mb-7 text-sm leading-6 text-gray-300">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <span className="relative text-sm font-medium text-blue-400">
                    Available for Work
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
