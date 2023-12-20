import React from "react";
import kavindu from "../../assets/kavindu.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Kavindu Thennakoon
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Full stack Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Aspiring IT innovator | SLIIT undergraduate | Passionate about
                tech, programming, and data | Seeking collaborative projects.
              </p>
              {/* <a
                href="mailto:michle@test.com"
                className="inline-block primary-btn !my-3"
              >
                Hire me
              </a> */}
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
          <div>
            <img
              src={kavindu}
              className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
