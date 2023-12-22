import React from "react";
import kavindupdf from "../../assets/kavindu.pdf";
import download from "downloadjs";

const About = () => {
  const handleDownload = () => {
    // const resumeUrl = [kavindupdf];

    // Trigger the download using downloadjs
    download(kavindupdf);
    console.log(kavindupdf);
  };
  return (
    <section id="about" className="bg-white dark:bg-stone-950 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500 dark:text-white  text-zinc-950 font-semibold text-lg ">
            <p>
              Dedicated IT undergraduate with a passion for problem-solving and
              teamwork. Hardworking and committed to academic success, with a
              track record of excelling in coursework and completing projects on
              time. Possess strong problem-solving skills and able to work
              collaboratively to identify and implement effective solutions.
              Aspires to become a senior software engineer and is committed to
              building a career in the IT industry.
            </p>
            <br />
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deleniti, architecto ullam reprehenderit dolorem magnam quae
              adipisci velit
            </p> */}
            <div className="">
              <button
                className="primary-btn my-6 mr-6 inline-block bg-yellow-500"
                onClick={handleDownload}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
