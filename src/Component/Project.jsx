import React from "react";
import img1 from "../Image/Capture.PNG";
import img2 from "../Image/Capture1.PNG";
export default function Project() {
  const projects = [
    {
      title: "ShopHub",
      description:
        "A responsive e-commerce product listing application with API integration and modern UI.",
      tech: ["React.js", "Tailwind CSS", "REST API"],
      image: img2,
      github: "https://github.com/riyajpatel-dev/ShopHub",
      live: "https://shop-hub-iutk.vercel.app/",
    },

    {
      title: "Movie App",
      type: "Movie Platform",
      description:
        "A modern movie browsing application with a responsive interface for exploring and discovering movies.",
      tech: ["React.js", "JavaScript", "API"],
      image: img1,
      github: "https://github.com/riyajpatel-dev/movieSearchAPP",
      live: "https://movie-search-app-zeta-taupe.vercel.app",
    },

    {
      title: "NextBell",
      type: "E-commerce",
      description:
        "A modern e-commerce website built with Next.js with a responsive and user-friendly shopping experience.",
      tech: ["Next.js", "React.js", "Tailwind CSS"],
      image: "",
      github: "https://github.com/riyajpatel-dev/NextjsMaybell",
      live: "#",
    },
    {
      title: "HR Panel",
      description:
        "A responsive HR management portal built to streamline employee management and HR operations with a clean and user-friendly interface.",
      tech: ["React.js", "JavaScript", "CSS", "Material UI"],
      github: "https://github.com/riyajpatel-dev/AdminPanel",
      live: "#",
    },
  ];
  return (
    <>
      <section id="projects" className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            My Work
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Here are some of the projects I have built using modern web
            technologies.
          </p>

          {/* Project cards yaha aayenge */}
          {/*  */}

          <div
            className="
    mt-8
    rounded-2xl
    border border-green-400/20
    bg-[#111827]/70
    p-5
    shadow-lg
    backdrop-blur-md
  "
          >
            <div className="flex items-start justify-between gap-4">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                    Currently Working
                  </span>

                  {/* Blinking Green Circle */}
                  <span className="relative flex h-3 w-3">
                    <span
                      className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-green-400
              opacity-75
            "
                    />

                    <span
                      className="
              relative
              inline-flex
              h-3
              w-3
              rounded-full
              bg-green-400
              shadow-[0_0_12px_rgba(74,222,128,0.8)]
            "
                    />
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Ayurveda Hospital Website
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                  Currently developing a professional and responsive website for
                  an Ayurveda hospital as a freelance project, focusing on a
                  clean, user-friendly interface and modern web experience.
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "JavaScript",
                    "Tailwind CSS",
                    "Responsive Design",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="
                rounded-md
                bg-white/[0.05]
                px-2.5
                py-1.5
                text-[11px]
                font-medium
                text-gray-300
              "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status */}
              <span
                className="
        hidden
        shrink-0
        rounded-full
        border border-green-400/20
        bg-green-400/10
        px-3
        py-1.5
        text-[10px]
        font-semibold
        uppercase
        tracking-wider
        text-green-400
        sm:block
      "
              >
                In Progress
              </span>
            </div>
          </div>

          {/*  */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="
        group
        overflow-hidden
        rounded-2xl
        border border-white/[0.08]
        bg-[#111827]/70
        transition-all duration-500
        hover:-translate-y-1.5
        hover:border-yellow-400/25
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
      "
              >
                {/* PROJECT IMAGE */}
                <div className="relative overflow-hidden bg-[#0b1120]">
                  <div className="flex h-64 items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
              max-h-full
              max-w-full
              object-contain
              transition-transform
              duration-700
              group-hover:scale-[1.025]
            "
                    />
                  </div>

                  {/* Small project label */}
                  <div
                    className="
            absolute
            left-4
            top-4
            rounded-full
            border border-white/10
            bg-[#111827]/80
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-gray-300
            backdrop-blur-md
          "
                  >
                    Featured Project
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className="
              text-xl
              font-bold
              text-white
              transition-colors
              duration-300
              group-hover:text-yellow-300
            "
                    >
                      {project.title}
                    </h3>

                    <span className="text-lg text-gray-600 transition-colors duration-300 group-hover:text-yellow-400">
                      ↗
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="
                rounded-md
                bg-white/[0.05]
                px-2.5
                py-1.5
                text-[11px]
                font-medium
                text-gray-300
                transition-colors
                duration-300
                group-hover:bg-yellow-400/[0.08]
              "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-yellow-400
              px-4
              py-2.5
              text-xs
              font-bold
              text-[#111827]
              transition-all
              duration-300
              hover:bg-yellow-300
            "
                    >
                      Live Demo
                      <span>↗</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/10
              px-4
              py-2.5
              text-xs
              font-semibold
              text-gray-300
              transition-all
              duration-300
              hover:border-white/20
              hover:text-white
            "
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
