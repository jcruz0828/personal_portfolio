import React from "react";
import { certificates } from "@/data";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-[#00BFFF]">Certifications</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00BFFF] via-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm h-full">
              {cert.image && (
                <div className="flex justify-center mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-16 h-16 rounded-lg shadow-lg"
                  />
                </div>
              )}
              
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex flex-col space-y-2">
                  <p className="text-[#00BFFF] font-semibold text-base">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-400 text-sm font-medium">
                    {cert.date}
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {cert.credentialId && (
                    <div className="pt-2">
                      <span className="inline-block bg-gradient-to-r from-[#00BFFF]/20 to-purple-600/20 border border-[#00BFFF]/30 px-3 py-1 rounded-full text-xs text-[#00BFFF] font-mono">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates; 