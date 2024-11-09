import Image from "next/image";
import Link from "next/link";
import React from "react";
function Project() {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here are List of Some Projects I've recently completed!
            </p>
          </div>
          <div className="flex flex-wrap -m-8">
          {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/project1.png"
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Project 1
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Amazon.com Clone
                  </h1>
                  <p className="leading-relaxed">
                    Simple and Attractive Clone of Amazon.com
                  </p>
                  <Link  target="_blank" href={"https://amazon-web-clone-eta.vercel.app/"}>
                  <p className="font-medium text-blue-500">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/project2.png"
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Project 2
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Easy Life ToDo App
                  </h1>
                  <p className="leading-relaxed">
                    Amazing Todo app to set your Daily life goals
                  </p>
                  <Link  target="_blank" href={"https://easy-life-to-do-app.vercel.app/"}>
                  <p className="font-medium text-blue-500">View Project...</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
