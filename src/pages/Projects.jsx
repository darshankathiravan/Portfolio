import ProjectCard from "../components/ProjectCard";
// pages/projects.js

const Projects = () => {
  return (
    <div className="">
      <h1 className="bg-[#1f2124] ps-16 py-7">My Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-5 w-fit mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
