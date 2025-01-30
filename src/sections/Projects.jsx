"use client";
import ProjectCard2 from "../components/ProjectCard2";
import projectdata from "../data/ProjectData.json";
import { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";

const Projects = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Set the items state with the imported JSON data
    setItems(projectdata);
  }, []);
  return (
    <section className="text-PrimaryTextLight dark:text-PrimaryTextDark">
      <div className="grid grid-cols-1 py-10 gap-5 w-fit mx-auto">
        {items.map((item) => {
          return (
            <ProjectCard2
              key={item.id}
              link = {item.link ? item.link : false}
              imgPath={item.imgPath}
              techStack={item.techstack}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
