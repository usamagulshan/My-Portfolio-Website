import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div>
      <section className="text-gray-600 bg-gray-100 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "UI/UX Designer",
                    "Game Changer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="h-1 w-[100px] bg-blue-600"></div>
            <p className="mb-6 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              aspernatur iusto tenetur id nihil ullam minima nam praesentium
              eligendi, voluptate exercitationem magni expedita, voluptatibus
              non vero atque itaque? Vel, voluptatibus.
            </p>
            <div className="flex justify-center">
             <a href="#contact">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center mx-auto w-[280px] rounded"
              alt="hero"
              src="/assets/picture.jpg"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
