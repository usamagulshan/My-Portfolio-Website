import React from "react";
import { FaCheck } from "react-icons/fa";

function Skill() {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skill */}
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <FaCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-300 rounded-3xl relative">
                  <div className="absolute h-1 text-right bg-blue-500 w-[100%] ">100%</div>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <FaCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-300 rounded-3xl relative">
                  <div className="absolute h-1 text-right bg-blue-500 w-[90%] ">90%</div>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <FaCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JAVASCRIPT/TYPESCRIPT
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-300 rounded-3xl relative">
                  <div className="absolute h-1 text-right bg-blue-500 w-[80%] ">80%</div>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <FaCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT.JS
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-300 rounded-3xl relative">
                  <div className="absolute h-1 text-right bg-blue-500 w-[60%] ">60%</div>
                </div>
              </div>
              
            </div>
            {/* skill */}
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <FaCheck />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    UI/UX DESIGNING
                  </h2>
                </div>
                <div className="h-1 w-full bg-gray-300 rounded-3xl relative">
                  <div className="absolute h-1 text-right bg-blue-500 w-[50%] ">50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
