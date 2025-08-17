import TypingEffect from "@/components/TypingEffect";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiNestjs,
  SiCypress,
  SiTrpc,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const TechStackCard = () => {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
    },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Django", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Postgres", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs  className="text-green-500" /> },
  ];

  return (
    <div className="bg-cardbglight text-white  py-10 rounded-lg m-5 md:m-16">
      <TypingEffect tag="h2" className="my-5 font-bold text-center h-10">
        My TechStack
      </TypingEffect>
      <div className="flex flex-wrap justify-center"> 
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center m-5 hover:scale-105 transform transition"
          >
            <div className="text-4xl">{tech.icon}</div>
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
