import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import PortofolioGrimz from "../public/img/projects/grimz.png";
import GithubProfile from "../public/img/projects/github.png";
import ReactJS from "../public/img/projects/reactjs.png";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={PortofolioGrimz.src}
          title="Portofolio Grimz"
          link="https://rendirenaldi.vercel.app/"
        />     
        <ProjectCard
          img={GithubProfile.src}
          title="Github Profile"
          link="https://github.com/rendirenaldi09"
        />       
        <ProjectCard
          img={ReactJS.src}
          title="ReactJS Portfolio"
          link="https://personal-portofolio-ashy.vercel.app/"
        />        
      </div>
    </div>
  );
};

export default Projects;
