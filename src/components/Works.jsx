import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";
import todolist from "../assets/projects/todolist.png";

const Works = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-slate-900/[99%] text-gray-300 py-32 sm:px-0 sm:py-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-8 ">
          <p className="text-4xl text-white w-full font-bold inline border-b-4 border-sky-400">
            Work
          </p>
          <p className="my-6">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid Item */}

          <div className="shadow-lg shadow-[#040c16] container flex flex-col justify-center items-center mx-auto content-div overflow-hidden">
            <img
              src={todolist}
              alt="todolist"
              className="h-[350px] w-full object-cover transition-transform duration-300"
            />

            {/* Hover Effect */}
            <div className="duration-300 transition-all my-4 bg-slate-900 py-2 w-full flex flex-col justify-center items-center z-10">
              <div className="bg-slate-900/[99%]">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>

                <div className="pt-4 text-center ">
                  <a href="https://aedanevangelista-todolist.netlify.app/">
                    <button className="text-center rounded-sm px-4 py-2 m-2 border-sky-500 border-2 text-white font-bold text-lg hover:bg-sky-500 transition-all duration-400">
                      DEMO
                    </button>
                  </a>
                  <a href="https://github.com/aedanevangelista/TodoList">
                    <button className="text-center rounded-sm px-4 py-2 m-2 border-sky-500 border-2 text-white font-bold text-lg hover:bg-sky-500 transition-all duration-400">
                      CODE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
