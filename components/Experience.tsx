import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="PT Care Fast Indo"
          subTitle="Cleaning Service 2019 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="PT Khong Guan"
          subTitle="Production Biskuit 2020 - present"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="PT Bank Central Asia"
          subTitle="Accounting Management 2021 - 2022"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="PT Tri Adi Bersama"
          subTitle="Staff Operational 2022 - 2023"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
