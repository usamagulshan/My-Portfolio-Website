import React from "react";
import Image from "next/image";


function Hero() {
  return (
    <section className="text-gray-600 bg-gray-100 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am Front End Developer
            <br className="hidden lg:inline-block" />
          </h1>
          <div className="h-1 w-[100px] bg-blue-600 mb-4"></div>
          <p className="mb-6 leading-relaxed text-gray-700">
            Passionate about crafting beautiful and functional digital experiences.
            I specialize in front-end development, UI/UX design, and bringing ideas to life with creative solutions.
          </p>
          <div className="flex justify-center">
            <a href="#contact" aria-label="Contact Me">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg transition duration-300 ease-in-out">
                Contact
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center mx-auto rounded-full"
            alt="Profile Picture"
            src="/assets/picture.jpg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
