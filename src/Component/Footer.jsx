import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 ">
        <div className="mx-auto max-w-7xl px-8 py-10 sm:px-8 lg:px-10  ">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row bg-[#071b42] px-8 py-6">
            {/* Logo / Name */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-white">Riyaj Patil</h2>

              <p className="mt-1 text-sm text-gray-400">
                Frontend Developer & Fullstack Developer & Freelancer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/riyajpatel-dev"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/riyajPatil"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:riyajpatel54@gmail.com"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Riyaj Patil. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
