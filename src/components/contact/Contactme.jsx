import React from "react";

const About = () => {
  return (
    <section
      id="contact"
      className="bg-secondary dark:bg-stone-400 dark:text-white"
    >
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-4xl xl:text-6xl font-bold text-black/5 dark:text-gray-700">
              CONTACT ME
            </div>
            <div className=" text-center text-6xl xl:text-6xl font-bold text-black/5 dark:text-gray-700"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Contact me
            </h1>
          </div>
          <form
            action="https://formspree.io/f/xvoepvgp"
            method="POST"
            class="w-full max-w-lg"
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-zinc-50 dark:text-white border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="firstName"
                  placeholder="Kavindu"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray 400 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-zinc-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="lastname"
                  placeholder="Thennakoon"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2"
                  for="grid-email"
                >
                  E-Mail
                </label>
                <input
                  class="appearance-none block w-full bg-zinc-50 dark:text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="email"
                  name="email"
                  placeholder="kavinduthennakoon222@gmail.com"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2"
                  for="grid-Description"
                >
                  Description
                </label>
                <textarea
                  class="appearance-none block w-full bg-zinc-50 dark:text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-Description"
                  type="text"
                  name="description"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="primary-btn my-6 mr-6 inline-block bg-yellow-500"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
