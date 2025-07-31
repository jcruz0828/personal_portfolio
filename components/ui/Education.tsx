import React from "react";

const educationData = [
  {
    id: 1,
    title: "California State University, San Bernardino",
    degree: "B.S. in Computer Engineering",
    gpa: "3.9/4.0",
    courses: [
      "Embedded Systems",
      "Operating Systems",
      "Signals and Systems",
      "Digital Logic",
      "Software Engineering",
      "Computer Architecture",
      "Algorithm Analysis",
      "Computer Engineering Design",
      "Digital Design",
      "Robotics and Kinematics",
    ],
    thumbnail: "/csusb.png",
    href: "https://www.csusb.edu",
  },
  {
    id: 2,
    title: "College of the Desert",
    degree: "A.S. in Computer Science",
    gpa: "3.6/4.0",
    courses: [
      "Linear Algebra",
      "Calculus Series",
      "Physics Series",
      "Computer Science Series",
      "Machine Organization",
    ],
    thumbnail: "/cod.png",
    href: "https://collegeofthedesert.edu",
  },
];

const Education = () => {
  return (
    <section id="edu" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-[#00BFFF]">Education</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
        {educationData.map((card) => (
          <a 
            key={card.id}
            href={card.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800 border border-slate-700/50 hover:border-[#00BFFF]/50 transition-all duration-500 h-full">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex lg:flex-row flex-col lg:items-center p-6 md:p-8 lg:p-10 gap-6 h-full">
                <div className="flex-shrink-0">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="lg:w-32 md:w-24 w-20 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-[#00BFFF]/20 transition-all duration-500"
                  />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-300">
                      {card.title}
                    </h2>
                    <p className="text-lg font-semibold text-gray-300 mb-1">
                      {card.degree}
                    </p>
                    <p className="text-sm text-[#00BFFF] font-medium">
                      GPA: {card.gpa}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {card.courses.map((course, index) => (
                        <span
                          key={index}
                          className="bg-slate-800/80 border border-slate-600/50 hover:border-[#00BFFF]/50 px-3 py-1 rounded-full text-xs text-gray-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Education;
