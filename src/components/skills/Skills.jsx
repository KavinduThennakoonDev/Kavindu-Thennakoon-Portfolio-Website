import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <section
      id="about"
      className="bg-secondary dark:bg-stone-400 dark:text-white"
    >
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="sm:order-2 font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
          <div className="text-white-500 sm:order-1">
            <SkillsLevel skillsName="React Js" percentage="80%" />
            <SkillsLevel skillsName="Html , Css" percentage="90%" />
            <SkillsLevel skillsName="Java" percentage="65%" />
            <SkillsLevel skillsName="Kotlin" percentage="45%" />
            <SkillsLevel skillsName="Node Js" percentage="80%" />
            <SkillsLevel skillsName="Figma" percentage="85%" />
            <SkillsLevel skillsName="After Effect" percentage="70%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
