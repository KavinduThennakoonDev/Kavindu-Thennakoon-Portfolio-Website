import React from "react";
import kavindunew from "../../assets/kavindunew.png";
import tenexlogo from "../../assets/tenexlogo.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-stone-400 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[700px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2  grid justify-items-center sm:justify-items-start">
              <div className="">
                <img
                  src={tenexlogo}
                  className=" md:max-w-sm mx-auto  backdrop-blur-sm  "
                  alt="another-person"
                />
              </div>
              <p className="uppercase  text-lg font-medium ">Hello </p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-neutral-950">
                I'm Kavindu Thennakoon
              </p>
              <p className="text-3xl text-black-700 font-medium dark:text-neutral-600">
                Fullstack Developer
              </p>
              <p className="text-black/75 font-medium text-lg dark:text-neutral-950 text-center sm:text-left text-stone-950">
                Aspiring IT innovator | SLIIT undergraduate | Passionate about
                tech, programming, and data | Seeking collaborative projects.
              </p>
            </div>
          </div>
          {/* image section */}

          <div>
            <img
              src={kavindunew}
              className="w-full md:max-w-lg mx-auto  backdrop-blur-sm mt-10 "
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
