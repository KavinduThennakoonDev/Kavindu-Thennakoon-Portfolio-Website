import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
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
          <div className="text-slate-500">
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
              <a
                href="../../assets/Fake Resume.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              {/* <a
                href="tel:+123456789"
                title="Call +123456789 "
                className="outline-btn my-6"
              >
                Contact
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
