import React from "react";
import backgroundImage from "../Image/image.jpg";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiVite,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      description: "Building modern and responsive user interfaces",
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Material UI", icon: SiMui },
      ],
    },
    {
      title: "Backend",
      description: "Developing APIs and server-side applications",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST API", icon: FaNodeJs },
      ],
    },
    {
      title: "Database",
      description: "Working with data and database technologies",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongodb },
      ],
    },
    {
      title: "Tools & Workflow",
      description: "Tools I use for development and deployment",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Vite", icon: SiVite },
        { name: "Vercel", icon: SiVite },
      ],
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="relative overflow-hidden  px-4 py-24 sm:px-6 lg:px-8"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              My Expertise
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Technical <span className="text-yellow-400">Skills</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
              Technologies and tools I use to build modern, responsive and
              scalable web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 md:grid-cols-2 ">
            {skills.map((category) => (
              <div
                key={category.title}
                className="
                 
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-yellow-400/30
                hover:bg-white/[0.05]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              "
              >
                {/* Hover Glow */}
                <div
                  className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-purple-500/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-yellow-400/10
                "
                />

                {/* Category Header */}
                <div className="relative mb-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-yellow-400/20
                      bg-yellow-400/10
                      text-yellow-400
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-yellow-400
                      group-hover:text-[#111827]
                    "
                    >
                      ✦
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>

                      <p className="font-bold text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                        group/skill
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-black/20
                        px-3
                        py-3
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-yellow-400/30
                        hover:bg-yellow-400/5
                      "
                      >
                        <Icon
                          className="
                          shrink-0
                          text-lg
                          text-gray-400
                          transition-all
                          duration-300
                          group-hover/skill:scale-110
                          group-hover/skill:text-yellow-400
                        "
                        />

                        <span
                          className="
                          truncate
                          text-xs
                          font-medium
                          text-gray-300
                          transition-colors
                          duration-300
                          group-hover/skill:text-white
                        "
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div
            className="
            mx-auto
            mt-10
            max-w-3xl
            rounded-2xl
            border
            border-yellow-400/10
            bg-yellow-400/[0.03]
            px-6
            py-5
            text-center
          "
          >
            <p className="text-sm text-gray-400">
              Always learning, experimenting and improving my skills to build{" "}
              <span className="font-semibold text-yellow-400">
                better digital experiences.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
