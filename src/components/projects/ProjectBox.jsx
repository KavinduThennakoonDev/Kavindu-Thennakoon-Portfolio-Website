import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import green from "../../assets/green.png";

const Project = [
  {
    name: "Green Leaf Information management",
    description:
      "Our system modernizes tea factory operations, streamlining supplier management, labor salaries, orders, finances, stocks, and quality control. Say goodbye to errors, document hassles, and fraud with our comprehensive digital solution for tea production.",
    image: "https://picsum.photos/200/300",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-gray-500",
    repoUrl:
      "https://github.com/it21232336/Green-Leaf-Info-Management-System.git", // Replace with your actual repository URL
  },

  {
    name: "SriLanka eParticipation Portal",
    description:
      "GovEngage: A collaborative platform for civic participation. This repository houses the codebase for a web application where governments can publish public consultations, citizens can provide feedback, and officials can share events, news, and press releases to foster transparent and inclusive governance.",
    image: "https://picsum.photos/200/301",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-gray-500",
    repoUrl: "https://github.com/it21232336/SriLanka-eParticipation-Portal.git",
  },
  {
    name: "Kavindu Thennakoon Portfolio Website ",
    description:
      "Explore the code behind my IT Portfolio Website! As an aspiring IT student, this repository reflects my skills and projects. Dive into the details, and feel free to connect or provide feedback.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-gray-500",
    repoUrl:
      "https://github.com/it21232336/Green-Leaf-Info-Management-System.git",
  },
  // {
  //   name: "Security",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
  //   image: "https://picsum.photos/200/303",
  //   icon: <MdSecurity className="text-4xl" />,
  //   bgColor: "bg-orange-500/70",
  // },
];
const projectBox = () => {
  return (
    <section id="projects" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Project.map(({ name, description, image, icon, bgColor, repoUrl }) => (
          <a
            key={name}
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <div
              className={` ${bgColor} rounded-xl bg-blue-500/70 text-white bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
            >
              <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
                {icon}
                <h1 className="text-2xl font-bold">{name}</h1>
                <p>{description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default projectBox;
