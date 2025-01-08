"use client";
import ProjectCard from "../components/ProjectCard";
import jsonData from "../data/ProjectData.json";
import { useState, useEffect } from "react";
// pages/projects.js

const Projects = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Set the items state with the imported JSON data
    setItems(jsonData);
  }, []);
  console.log(items);
  return (
    <div className="text-PrimaryTextLight dark:text-PrimaryTextDark">
      <h1 className="ps-16 py-7 bg-SecondaryBgLight dark:bg-SecondaryBgDark rounded-3xl">My Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-5 w-fit mx-auto">
        {items.map((item) => {
          return <ProjectCard key={item.id} data={item} />  
        })}
      </div>
    </div>
  );
};

export default Projects;
