import React from "react";
import ralphWeb from "../assets/projects/ralphWeb.png";
import { FaCheckCircle } from "react-icons/fa";

const Works = () => {
  const workData = [
    {
      imgSrc: ralphWeb,
      webSrc: "https://kidfromlaloma.netlify.app/",
      name: "Kid From Laloma Portfolio",
      stacks: ["React", "Tailwind"],
      desc: "A photographer website portfolio with a Gallery Section.",
      date: "2024",
    },
  ];

  return (
    <div
      name="work"
      className="w-full h-full bg-slate-900/[99%] text-gray-300 py-32 sm:px-0 sm:py-22"
    >
      <div className=" max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-8 ">
          <p className="text-4xl text-white w-full font-bold inline border-b-4 border-sky-400">
            Work
          </p>
          <p className="my-6">// Check out some of my recent work</p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workData.map((work, index) => (
              <a href={work.webSrc} target="_blank">
                <div
                  key={index}
                  className="max-w-sm h-[450px] rounded overflow-hidden shadow-lg group cursor-pointer opacity-85 hover:shadow-black/80 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    className="w-full max-h-[300px] "
                    src={work.imgSrc}
                    alt={work.name}
                  />
                  <div className="px-4 py-8">
                    <div className="mb-4">
                      <h1 className="flex items-center font-bold text-xl mb-4 text-white group-hover:text-sky-400 transition-all duration-300">
                        {work.name}
                      </h1>

                      <p className="text-gray-400 text-sm">{work.desc}</p>
                    </div>
                    <div className="flex justify-between mx-2">
                      <div className="flex space-x-2">
                        {work.stacks.map((stack, stackIndex) => (
                          <p
                            key={stackIndex}
                            className="text-sky-300 font-semibold text-sm bg-sky-900 py-1 px-2 rounded-full"
                          >
                            {stack}
                          </p>
                        ))}
                      </div>
                      <div className="flex justify-center items-center gap-2 text-[#00b7c7]">
                        <FaCheckCircle size={20} />
                        <p className="font-bold ">{work.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
