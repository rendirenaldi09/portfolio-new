import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="Typescript" link="https://www.typescriptlang.org/" />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        <SkillsInput title="HTML5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" />
        <SkillsInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput title="Sublime Text" link="https://sublimetext.com/" />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Brand & LogoDesign" link="https://dribbble.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" />
      </div>
    </div>
  );
};

export default Skills;
