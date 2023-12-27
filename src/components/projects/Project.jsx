import React from "react";
import ProjectBox from "./ProjectBox.jsx";

const Project = () => {
  return (
    <section className="bg-white dark:bg-stone-950 dark:text-white py-10">
      <div className=" text-center text-4xl xl:text-6xl font-bold text-black/5 dark:text-gray-700">
        Projects
      </div>
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold  border-b-2 border-primary pb-1">
          Projects
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet. Id,erroradipisicing elit. Id, error. */}
        </p>
      </div>
      <div>
        <ProjectBox />
      </div>
    </section>
  );
};

export default Project;
