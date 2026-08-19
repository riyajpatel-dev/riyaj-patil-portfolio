import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <section
        id="cta"
        className="relative px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className=" 
        group relative overflow-hidden 
        rounded-3xl 
        border border-blue-400/20 
        bg-[#071a33]/90 
        px-5 py-12 
        text-center 
        shadow-[0_15px_60px_rgba(0,50,120,0.35)] 
        backdrop-blur-md 
        sm:px-8 sm:py-14 
        md:px-12 md:py-20 
      "
          >
            {/* Background Glow */}
            <div
              className=" 
          absolute left-1/2 top-0 
          h-48 w-48 
          -translate-x-1/2 
          rounded-full 
          bg-blue-500/10 
          blur-3xl 
          transition-all duration-500 
          group-hover:bg-blue-500/20 
          sm:h-56 sm:w-56 
          md:h-64 md:w-64 
        "
            />

            <div
              className=" 
          absolute -bottom-16 -right-16 
          h-48 w-48 
          rounded-full 
          bg-blue-600/10 
          blur-3xl 
          sm:-bottom-20 sm:-right-20 
          sm:h-60 sm:w-60 
        "
            />

            {/* Small Label */}
            <div className="relative mb-5 flex items-center justify-center gap-2">
              <Sparkles size={18} className="shrink-0 text-blue-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 sm:text-sm sm:tracking-[0.25em]">
                Have a Project in Mind?
              </span>

              <Sparkles size={18} className="shrink-0 text-blue-400" />
            </div>

            {/* Heading */}
            <h2 className="relative text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Let's Work <span className="text-blue-400">Together</span>
            </h2>

            {/* Description */}
            <p className="relative mx-auto mt-6 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7 md:text-lg">
              Have an idea or project in mind? Let's turn your idea into a
              modern, engaging and user-friendly digital experience.
            </p>

            {/* CTA Button */}
            {/* <div className="relative mt-9"> 
        <button 
          onClick={handleContact} 
          className=" 
            inline-flex items-center gap-3 
            rounded-full 
            bg-blue-500 
            px-7 py-3.5 
            text-sm font-semibold 
            text-white 
            shadow-lg shadow-blue-500/25 
            transition-all duration-300 
            hover:scale-105 
            hover:bg-blue-400 
            hover:shadow-xl 
            hover:shadow-blue-500/30 
          " 
        > 
          Let's Work Together 
          <ArrowRight 
            size={18} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          /> 
        </button> 
      </div> */}

            {/* Bottom Accent */}
            <div
              className=" 
          absolute bottom-0 left-1/2 
          h-[2px] w-3/4 
          -translate-x-1/2 
          bg-gradient-to-r 
          from-transparent 
          via-blue-500 
          to-transparent 
          opacity-60 
          sm:w-1/2 
        "
            />
          </div>
        </div>
      </section>
    </>
  );
}
