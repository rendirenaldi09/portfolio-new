import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/grimz.png";
import cyberBlog from "../public/img/projects/github.png";
import dynamicPortfolio from "../public/img/projects/reactjs.png";
import dashboard from "../public/img/projects/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazonClone.src}
          title="Portofolio Grimz"
          link="https://rendirenaldi.vercel.app/"
        />     
        <ProjectCard
          img={cyberBlog.src}
          title="Github Profile"
          link="https://github.com/rendirenaldi09"
        />       
        <ProjectCard
          img={dynamicPortfolio.src}
          title="ReactJS Portfolio"
          link="https://personal-portofolio-ashy.vercel.app/"
        />
        <ProjectCard
          img={dashboard.src}
          title="Dashboard"
          link="https://orebishopping.reactbd.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
