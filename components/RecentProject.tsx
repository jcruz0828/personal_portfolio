"use client";

import { FaArrowUpRightFromSquare, FaGithub, FaLock } from "react-icons/fa6";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 w-full">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-[#00BFFF]">recent projects</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((item, index) => {
          const [name, tagline] = item.title.split(" - ");

          return (
            <div key={item.id} className="relative group h-full">
              {/* Gradient glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00BFFF] via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-700"></div>

              <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border border-gray-700/40 group-hover:border-[#00BFFF]/40 transition-all duration-500 p-6 md:p-8">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative flex items-start justify-between mb-6">
                  <span className="font-mono text-sm text-[#00BFFF]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3 text-gray-400">
                    {item.repoUrl && (
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} source code`}
                        className="hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} live site`}
                        className="hover:text-[#00BFFF] transition-colors"
                      >
                        <FaArrowUpRightFromSquare size={16} />
                      </a>
                    )}
                    {!item.liveUrl && !item.repoUrl && (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-600/60 text-xs">
                        <FaLock size={10} />
                        Private
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative flex-1 space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300 leading-tight">
                    {name}
                  </h2>
                  {tagline && (
                    <p className="text-sm font-semibold uppercase tracking-wide text-purple-300/80">
                      {tagline}
                    </p>
                  )}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.des}
                  </p>
                </div>

                <div className="relative flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-700/40">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#00BFFF]/10 border border-[#00BFFF]/20 px-3 py-1 rounded-full text-xs font-mono text-[#7fdcff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
