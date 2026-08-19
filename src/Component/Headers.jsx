import React, { useState } from "react";
import image1 from "../Image/Riyaj_Images.png";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="about" className="w-full pt-20 pb-16 mt-17">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
            {/* Left Side: Text Content */}
            <div className="w-full md:w-3/5 flex flex-col items-start justify-center text-left">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                RIYAJ PATIL
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">
                Front-End Developer & Full Stack Developer
              </h2>

              <p className="text-base text-slate-600 mb-8 max-w-2xl leading-relaxed p-6 bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-300">
                I am a web developer with approximately 3+ years of professional
                experience specializing in building scalable, responsive, and
                high-performance user interfaces. I focus on core UI
                development, modern architectures, and seamless digital
                experiences using React.js, Next.js, and Tailwind CSS.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                  View My Work
                </a>

                <a
                  href="https://github.com/riyajpatel-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-300 text-gray-200 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  {/* Simple GitHub Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Side: Profile Image Placeholder */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-slate-200 border-4 border-white shadow-xl overflow-hidden">
                {/* Replace the src below with the actual path to your profile picture */}
                <img
                  src={image1}
                  alt="Riyaj Chandsaheb Patil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
