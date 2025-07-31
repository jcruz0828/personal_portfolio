import { Marquee } from "./ui/marquee";

const techStack = [
  { name: "Python", img: "/python.svg" },
  { name: "JavaScript", img: "/js.svg" },
  { name: "Java", img: "/java.svg" },
  { name: "C++", img: "/cpp.svg" },
  { name: "C", img: "/cs.svg" },
  { name: "R", img: "/r.svg" },
  { name: "SQL", img: "/sql.svg" },
  { name: "React.js", img: "/react.svg" },
  { name: "Node.js", img: "/nodejs.svg" },
  { name: "Express.js", img: "/express.svg" },
  { name: "MongoDB", img: "/mongodb.svg" },
  { name: "HTML", img: "/html.svg" },
  { name: "CSS", img: "/css.svg" },
  { name: "Bootstrap", img: "/bootstrap.svg" },
  { name: "Pandas", img: "/pandas.svg" },
  { name: "NumPy", img: "/numpy.svg" },
  { name: "Docker", img: "/dock.svg" },
  { name: "Git", img: "/git.svg" },
  { name: "Three.js", img: "/three.svg" },
  { name: "GSAP", img: "/gsap.svg" },
  { name: "Tailwind", img: "/tail.svg" },
  { name: "MIPS Assembly", img: "/mips.png" },
];

const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#10132E] border border-[#00BFFF] rounded-lg shadow-md">
      <img src={icon} alt={name} className="h-5 w-5 object-contain" />
      <span>{name}</span>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="mt-[25px] relative flex h-full w-full flex-col items-center justify-center overflow-visible rounded-lg md:shadow-xl space-y-4">
      
      {/* Header */}
      <h2 className="text-white text-xl font-semibold tracking-wide">
        Tools I Use
      </h2>

      {/* Marquee */}
      <Marquee pauseOnHover className="[--duration:90s]" repeat={10}>
        {techStack.map((tech) => (
          <TechCard key={tech.name} name={tech.name} icon={tech.img} />
        ))}
      </Marquee>
    </div>
  );
}
