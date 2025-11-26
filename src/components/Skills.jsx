import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiCplusplus, SiMysql, SiAdobeillustrator } from "react-icons/si";

export default function Skills() {
  const mySkills = [
    { title: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl sm:text-3xl" /> },
    { title: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl" /> },
    { title: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl sm:text-3xl" /> },
    { title: "React.js", icon: <FaReact className="text-cyan-400 text-2xl sm:text-3xl" /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl sm:text-3xl" /> },
    { title: "Material Tailwind", icon: <SiTailwindcss className="text-indigo-400 text-2xl sm:text-3xl" /> },
    { title: "GitHub", icon: <FaGithub className="text-white text-2xl sm:text-3xl" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl sm:text-3xl" /> },
    { title: "SQL", icon: <SiMysql className="text-blue-300 text-2xl sm:text-3xl" /> },
    { title: "C++", icon: <SiCplusplus className="text-blue-500 text-2xl sm:text-3xl" /> },
    { title: "Figma", icon: <FaFigma className="text-pink-400 text-2xl sm:text-3xl" /> },
    { title: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-orange-400 text-2xl sm:text-3xl" /> }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10">
      <h1
        data-aos="fade-left"
        className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg text-center"
      >
        My <span className="text-deep-purple-300">skills</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 rounded-lg bg-deep-purple-300 hover:bg-gray-700 transition"
            data-aos="fade-up"
          >
            {skill.icon}
            <span className="text-base sm:text-lg font-semibold">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
