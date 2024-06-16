import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/github.png";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/reactjs.png";
import reactBD from "../public/img/projects/reactBD.png";
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
          title="Amazon Clone"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCard
          img={reactBD.src}
          title="Cyber Security"
          link="https://reactbd.com/"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Github Profile"
          link="https://github.com/rendirenaldi09"
        />
        <ProjectCard
          img={noorShop.src}
          title="Noor Shopping"
          link="https://orebishopping.reactbd.com/"
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
