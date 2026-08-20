import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  return (
    <>
      <nav
        className="
    fixed top-3 left-1/2 z-50
    w-[calc(100%-16px)] sm:w-[calc(100%-24px)] md:w-[calc(100%-40px)]
    max-w-7xl
    -translate-x-1/2
    rounded-2xl
    border border-white/10
    bg-[#171a2b]/90
    px-2 sm:px-4 md:px-6 lg:px-8
    shadow-lg
    backdrop-blur-md
  "
      >
        <div className="flex min-h-16 items-center justify-center py-2">
          {/* LOGO */}
          <span className="shrink-0 text-base font-bold tracking-wide text-white sm:text-lg">
            Port<span className="text-yellow-400">folio</span>
          </span>

          <div
            className="
        flex min-w-0 flex-1 items-center justify-center
        gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12
        overflow-visible
      "
          >
            {/* ================= HOME ================= */}
            <a
              href="#home"
              onClick={() => setActiveDropdown(null)}
              className="
          group relative shrink-0 py-2
          whitespace-nowrap
          text-[8px] font-semibold tracking-wide
          text-gray-300 transition duration-300
          hover:text-white
          xs:text-[9px] sm:text-xs md:text-sm
        "
            >
              HOME
              <span
                className="
            absolute bottom-0 left-1/2
            h-[2px] w-0
            -translate-x-1/2
            rounded-full bg-yellow-400
            transition-all duration-300
            group-hover:w-5
          "
              />
            </a>

            {/* ================= ABOUT ================= */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "about" ? null : "about")
                }
                className="
            group relative py-2
            whitespace-nowrap
            text-[8px] font-semibold tracking-wide
            text-gray-300 transition duration-300
            hover:text-white
            xs:text-[9px] sm:text-xs md:text-sm
          "
              >
                ABOUT
                <span
                  className={`
              absolute bottom-0 left-1/2
              h-[2px]
              -translate-x-1/2
              rounded-full bg-yellow-400
              transition-all duration-300
              ${activeDropdown === "about" ? "w-5" : "w-0 group-hover:w-5"}
            `}
                />
              </button>

              {/* ABOUT DROPDOWN */}
              <div
                className={`
            fixed
            left-1/2
            top-[80px]
            z-[60]
            w-[calc(100vw-24px)]
            max-w-[420px]
            -translate-x-1/2
            rounded-2xl
            border border-white/10
            bg-[#111827]/95
            p-4 sm:p-6
            shadow-2xl
            backdrop-blur-xl
            transition-all duration-300
            ${
              activeDropdown === "about"
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-3 opacity-0 pointer-events-none"
            }
          `}
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  About Me
                </p>

                <h2 className="mb-3 text-lg font-bold text-white sm:text-xl">
                  I'm Riyaj Patil
                </h2>

                <p className="text-xs leading-6 text-gray-300 sm:text-sm">
                  I am a Front-End Developer with approximately three years of
                  professional experience, specializing in React.js, Next.js,
                  Tailwind CSS, and modern UI development.
                </p>

                <p className="mt-3 text-xs leading-6 text-gray-400 sm:text-sm">
                  I focus on building scalable, responsive and high-performance
                  web interfaces with clean and user-friendly experiences.
                </p>
              </div>
            </div>

            {/* ================= SKILLS ================= */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "skills" ? null : "skills",
                  )
                }
                className="
            group relative py-2
            whitespace-nowrap
            text-[8px] font-semibold tracking-wide
            text-gray-300 transition duration-300
            hover:text-white
            xs:text-[9px] sm:text-xs md:text-sm
          "
              >
                SKILLS
                <span
                  className={`
              absolute bottom-0 left-1/2
              h-[2px]
              -translate-x-1/2
              rounded-full bg-yellow-400
              transition-all duration-300
              ${activeDropdown === "skills" ? "w-5" : "w-0 group-hover:w-5"}
            `}
                />
              </button>

              {/* SKILLS DROPDOWN */}
              <div
                className={`
            fixed
            left-1/2
            top-[80px]
            z-[60]
            w-[calc(100vw-24px)]
            max-w-[520px]
            -translate-x-1/2
            rounded-2xl
            border border-white/10
            bg-[#111827]/95
            p-4 sm:p-6
            shadow-2xl
            backdrop-blur-xl
            transition-all duration-300
            ${
              activeDropdown === "skills"
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-3 opacity-0 pointer-events-none"
            }
          `}
              >
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                    My Expertise
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    Technical Skill Set
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Frontend */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      Frontend
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "React.js",
                        "Next.js",
                        "Tailwind CSS",
                        "Bootstrap",
                        "MUI",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="
                      rounded-lg border border-white/10
                      bg-white/5 px-2.5 py-1.5
                      text-xs text-gray-300
                      transition-all duration-300
                      hover:border-yellow-400/40
                      hover:bg-yellow-400/10
                      hover:text-yellow-300
                    "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      Backend
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Express.js",
                        "REST APIs",
                        "API Integration",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="
                      rounded-lg border border-white/10
                      bg-white/5 px-2.5 py-1.5
                      text-xs text-gray-300
                      transition-all duration-300
                      hover:border-yellow-400/40
                      hover:bg-yellow-400/10
                      hover:text-yellow-300
                    "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      Database
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "Mongoose"].map((skill) => (
                        <span
                          key={skill}
                          className="
                      rounded-lg border border-white/10
                      bg-white/5 px-2.5 py-1.5
                      text-xs text-gray-300
                      transition-all duration-300
                      hover:border-yellow-400/40
                      hover:bg-yellow-400/10
                      hover:text-yellow-300
                    "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      Tools & Development
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "Vercel", "Vite"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="
                        rounded-lg border border-white/10
                        bg-white/5 px-2.5 py-1.5
                        text-xs text-gray-300
                        transition-all duration-300
                        hover:border-yellow-400/40
                        hover:bg-yellow-400/10
                        hover:text-yellow-300
                      "
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Additional */}
                  <div className="sm:col-span-2">
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      Additional
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Redux",
                        "Context API",
                        "React Hooks",
                        "Chart.js",
                        "JWT Authentication",
                        "Responsive Web Design",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="
                      rounded-lg border border-white/10
                      bg-white/5 px-2.5 py-1.5
                      text-xs text-gray-300
                      transition-all duration-300
                      hover:border-yellow-400/40
                      hover:bg-yellow-400/10
                      hover:text-yellow-300
                    "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= PROJECTS ================= */}
            <a
              href="#projects"
              onClick={() => setActiveDropdown(null)}
              className="
          group relative inline-flex shrink-0 items-center
          py-2
          whitespace-nowrap
          text-[8px] font-semibold tracking-wide
          text-gray-300 transition duration-300
          hover:text-white
          xs:text-[9px] sm:text-xs md:text-sm
        "
            >
              PROJECTS
              <span
                className="
            absolute bottom-0 left-1/2
            h-[2px] w-0
            -translate-x-1/2
            rounded-full bg-yellow-400
            transition-all duration-300
            group-hover:w-5
          "
              />
            </a>

            {/* ================= EXPERIENCE ================= */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "experience" ? null : "experience",
                  )
                }
                className="
            group relative py-2
            whitespace-nowrap
            text-[8px] font-semibold tracking-wide
            text-gray-300 transition duration-300
            hover:text-white
            xs:text-[9px] sm:text-xs md:text-sm
          "
              >
                EXPERIENCE
                <span
                  className={`
              absolute bottom-0 left-1/2
              h-[2px]
              -translate-x-1/2
              rounded-full bg-yellow-400
              transition-all duration-300
              ${activeDropdown === "experience" ? "w-5" : "w-0 group-hover:w-5"}
            `}
                />
              </button>

              {/* EXPERIENCE DROPDOWN */}
              <div
                className={`
            fixed
            left-1/2
            top-[80px]
            z-[60]
            w-[calc(100vw-24px)]
            max-w-[560px]
            -translate-x-1/2
            rounded-2xl
            border border-white/10
            bg-[#111827]/95
            p-4 sm:p-6
            shadow-2xl
            backdrop-blur-xl
            transition-all duration-300
            ${
              activeDropdown === "experience"
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-3 opacity-0 pointer-events-none"
            }
          `}
              >
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                    Professional Journey
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    3+ Years of Experience
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Aroha */}
                  <div className="relative border-l border-yellow-400/30 pl-5">
                    <span
                      className="
                  absolute -left-[5px] top-1.5
                  h-2.5 w-2.5 rounded-full
                  bg-yellow-400
                  shadow-[0_0_10px_rgba(250,204,21,0.7)]
                "
                    />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Front-End Developer
                        </h3>

                        <p className="mt-1 text-xs font-medium text-yellow-300">
                          Aroha Technology Pvt. Ltd.
                        </p>
                      </div>

                      <span className="text-xs text-gray-500">
                        Mar 2025 – Dec 2025
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-gray-400">
                      Developed an HR Management Portal using React.js and
                      Material UI, focusing on responsive and user-friendly
                      interfaces.
                    </p>
                  </div>

                  {/* Amazon */}
                  <div className="relative border-l border-yellow-400/30 pl-5">
                    <span
                      className="
                  absolute -left-[5px] top-1.5
                  h-2.5 w-2.5 rounded-full
                  bg-yellow-400
                  shadow-[0_0_10px_rgba(250,204,21,0.7)]
                "
                    />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Associate
                        </h3>

                        <p className="mt-1 text-xs font-medium text-yellow-300">
                          Amazon Development Center
                        </p>
                      </div>

                      <span className="text-xs text-gray-500">
                        Feb 2024 – Feb 2025
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-gray-400">
                      Worked in a professional technology environment,
                      contributing to operational and technical processes while
                      gaining experience with large-scale systems.
                    </p>
                  </div>

                  {/* Vaihuti */}
                  <div className="relative border-l border-yellow-400/30 pl-5">
                    <span
                      className="
                  absolute -left-[5px] top-1.5
                  h-2.5 w-2.5 rounded-full
                  bg-yellow-400
                  shadow-[0_0_10px_rgba(250,204,21,0.7)]
                "
                    />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          Front-End Developer
                        </h3>

                        <p className="mt-1 text-xs font-medium text-yellow-300">
                          Vaihuti Infotech Pvt. Ltd.
                        </p>
                      </div>

                      <span className="text-xs text-gray-500">
                        Jun 2022 – Sep 2023
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-gray-400">
                      Built and maintained an internal Admin Panel with a focus
                      on frontend development, responsive UI and user
                      experience.
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-yellow-400/10 bg-yellow-400/5 px-4 py-3">
                  <p className="text-xs leading-5 text-gray-300">
                    <span className="font-semibold text-yellow-300">
                      Core Focus:
                    </span>{" "}
                    React.js • Next.js • JavaScript • Tailwind CSS • Material UI
                    • Responsive Web Development
                  </p>
                </div>
              </div>
            </div>

            {/* ================= CONTACT ================= */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "contact" ? null : "contact",
                  )
                }
                className="
            group relative inline-flex items-center gap-1
            overflow-hidden rounded-full
            border border-yellow-400/50
            bg-purple-500
            px-2 py-1.5
            whitespace-nowrap
            text-[8px] font-bold tracking-wide text-white
            shadow-[0_0_20px_rgba(168,85,247,0.25)]
            transition-all duration-300
            hover:-translate-y-1
            hover:border-yellow-300
            hover:bg-yellow-400
            hover:text-[#111827]
            hover:shadow-[0_0_25px_rgba(250,204,21,0.45)]
            xs:text-[9px] sm:px-3.5 sm:text-xs
          "
              >
                <span className="relative z-10">CONTACT</span>

                <span
                  className="
              relative z-10 text-[10px]
              transition-transform duration-300
              group-hover:translate-x-1
              sm:text-sm
            "
                >
                  →
                </span>

                <span
                  className="
              absolute inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              transition-transform duration-700
              group-hover:translate-x-full
            "
                />
              </button>

              {/* CONTACT DROPDOWN */}
              <div
                className={`
            fixed
            left-1/2
            top-[80px]
            z-[60]
            w-[calc(100vw-24px)]
            max-w-[380px]
            -translate-x-1/2
            rounded-2xl
            border border-white/10
            bg-[#111827]/95
            p-4 sm:p-5
            shadow-2xl
            backdrop-blur-xl
            transition-all duration-300
            ${
              activeDropdown === "contact"
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-3 opacity-0 pointer-events-none"
            }
          `}
              >
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                    Get In Touch
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    Let's Work Together
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-gray-400">
                    Have a project, collaboration, or job opportunity? Feel free
                    to connect with me.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Mobile */}
                  <a
                    href="tel:+919923505129"
                    className="
                flex items-center gap-3
                rounded-xl border border-white/10
                bg-white/5 p-3
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-yellow-400/30
                hover:bg-yellow-400/10
              "
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-lg">
                      📞
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">
                        Mobile
                      </p>

                      <p className="text-xs font-medium text-gray-200">
                        +91 99235 05129
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:riyajpatel54@gmail.com"
                    className="
                flex items-center gap-3
                rounded-xl border border-white/10
                bg-white/5 p-3
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-yellow-400/30
                hover:bg-yellow-400/10
              "
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-lg">
                      ✉
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">
                        Email
                      </p>

                      <p className="truncate text-xs font-medium text-gray-200">
                        riyajpatel54@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/riyajPatil"
                    target="_blank"
                    rel="noreferrer"
                    className="
                flex items-center gap-3
                rounded-xl border border-white/10
                bg-white/5 p-3
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-yellow-400/30
                hover:bg-yellow-400/10
              "
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
                      in
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">
                        LinkedIn
                      </p>

                      <p className="text-xs font-medium text-gray-200">
                        Riyaj Patil
                      </p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/riyajpatel-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="
                flex items-center gap-3
                rounded-xl border border-white/10
                bg-white/5 p-3
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-yellow-400/30
                hover:bg-yellow-400/10
              "
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white">
                      GH
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">
                        GitHub
                      </p>

                      <p className="text-xs font-medium text-gray-200">
                        riyajpatel-dev
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-4 rounded-xl border border-yellow-400/10 bg-yellow-400/5 px-4 py-3">
                  <p className="text-xs leading-5 text-gray-300">
                    <span className="font-semibold text-yellow-300">
                      Front-End Developer
                    </span>{" "}
                    • React.js • Next.js • JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
