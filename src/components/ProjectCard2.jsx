import { FaReact, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";

const iconMap = {
  "React JS": <FaReact size={24} className="text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss size={24} className="text-teal-400" />,
  Django: <SiDjango size={24} className="text-green-800" />,
  HTML: <FaHtml5 size={24} className="text-orange-500" />,
  CSS: <FaCss3Alt size={24} className="text-blue-500" />,
  "": (
    <img
      src="/assets/Nextjs.svg"
      alt="Next.js"
      className="h-6 w-14 hover:rotate-180 transition-transform duration-300"
    />
  ),
};

const ProjectCard2 = ({ title, imgPath, techStack }) => {
  console.log(techStack, "skodngoksdngo");
  return (
    <section>
      <div className="flex flex-col xl:flex-row items-center justify-center dark:bg-[#080808] mx-5 overflow-hidden bg-cardbglight rounded-xl">
        <div className="rounded-xl overflow-hidden m-2">
          {imgPath && (
            <Image src={imgPath} alt="Project Image" width={600} height={600} />
          )}
        </div>

        <div className="text-white p-3 dark:bg-gray-900 max-w-[37.5rem] max-h-[rem16] ">
          <h3 className="text-center dark:text-PrimaryTextDark">
            {title}
          </h3>
          <p className="text-center text-sm text-gray-400 mt-2">
            May 2024 - Nov 2024
          </p>

          {/* Render only icons present in techStack prop */}
          {techStack && (
            <div className="flex justify-center flex-wrap gap-4 mt-6 ">
              {techStack.map((tech, index) =>
                iconMap[tech] ? (
                  <div
                    key={index}
                    className="bg-gray-800 flex items-center justify-center px-4 py-2 rounded-lg gap-2 hover:animate-bounce ease-in-out"
                  >
                    <div className="hover:animate-spin">{iconMap[tech]}</div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ) : null
              )}
            </div>
          )}

          <div className="flex justify-center mt-2">
            <a className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
              Client Project
            </a>
            {/* <a
            href="#github-code"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300"
          >
            <FaGithub className="h-5 w-5" />
            GitHub Code
          </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard2;
