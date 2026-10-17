import React from "react";

import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id='exp' className="py-20 w-full pb-20">
      <h1 className="heading">
        My <span className="text-[#00BFFF]">work experience</span>
      </h1>

      <div className="w-full mt-12 space-y-8">
        {workExperience.map((card, index) => (
          <div key={card.id} className="relative group">
            {/* Timeline connector */}
            {index !== workExperience.length - 1 && (
              <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-[#00BFFF] to-transparent opacity-30"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-4 h-4 bg-[#00BFFF] rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300 z-10"></div>
            
            <a href={card.href} target="_blank" rel="noopener noreferrer" className="block ml-12">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 border border-gray-700/30 hover:border-[#00BFFF]/40 transition-all duration-500 backdrop-blur-sm">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company logo */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00BFFF] to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                        {card.thumbnail ? (
                          <img
                            src={card.thumbnail}
                            alt={card.company}
                            className="relative lg:w-24 md:w-20 w-16 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                          />
                        ) : (
                          <div className="relative lg:w-24 md:w-20 w-16 aspect-square rounded-xl shadow-lg bg-[#10132E] border border-[#00BFFF]/30 flex items-center justify-center text-2xl lg:text-3xl font-bold text-[#00BFFF]">
                            {card.company.charAt(0)}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300 leading-tight">
                            {card.role}
                          </h2>
                          <p className="text-[#00BFFF] font-semibold text-sm md:text-base mt-1">
                            {card.company}
                          </p>
                        </div>
                        <div className="md:text-right flex-shrink-0">
                          <p className="text-gray-300 text-sm font-medium">{card.dates}</p>
                          <p className="text-gray-500 text-xs mt-1">{card.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {card.desc}
                      </p>
                      
                      {/* Type badge + tech chips */}
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="px-3 py-1 bg-[#00BFFF]/20 border border-[#00BFFF]/30 rounded-full">
                          <span className="text-xs font-medium text-[#00BFFF]">{card.type}</span>
                        </div>
                        {card.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-slate-800/80 border border-slate-600/50 px-3 py-1 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;