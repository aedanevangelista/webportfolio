import React from "react";
import {
  FaGamepad,
  FaLaptop,
  FaClipboardCheck,
  FaFileDownload,
} from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";

import { Fade } from "react-awesome-reveal";

const About = () => {
  let timelineIcon =
    "absolute  w-8 h-8 items-center flex justify-center rounded-full bg-sky-500 transition-all duration-300  text-white";

  let timelineCardContainer =
    "w-full h-full bg-sky-400 transition-all duration-300 rounded-sm p-2 md:pl-4";

  let timelineH1 = "text-white text-2xl font-black mt-2";
  let timelineH2 = "font-bold text-sky-300 text-lg";
  let timelineP = "text-gray-100 py-2 sm:text-sm text-xs font-semibold";

  let timelineCardDate =
    "sm:hidden block font-bold text-sm text-sky-200 w-44 text-center bg-slate-900/30 shadow-md shadow-black/50 my-2";

  return (
    <div
      name="about"
      className="w-full h-full pt-32 bg-slate-900/[99%] text-gray-400"
    >
      <div className="flex flex-col justify-center items-center w-full h-full z-20 relative">
        <Fade direction="down" delay={200} triggerOnce="true">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-sky-400 text-white">
              About
            </p>
          </div>
        </Fade>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <Fade direction="left" delay={300} triggerOnce="true">
            <div className="sm:text-right text-2xl font-semibold items-center">
              <p>Hi. I'm Aedan, nice to meet you! Please take a look around!</p>
            </div>
          </Fade>

          <div>
            <Fade direction="right" delay={400} triggerOnce="true">
              <p>
                I'm a passionate and creative web developer specializing in the
                MERN stack and TailwindCSS. With a keen eye for detail and a
                love for crafting seamless and responsive user experiences, I
                strive to bring ideas to life through the power of code.
              </p>
            </Fade>
          </div>
        </div>

        <Fade direction="down" delay={200} triggerOnce="true">
          <h1 className="font-bold text-4xl text-white border-b-4 border-sky-400 text-center mt-20 mb-10">
            Experience
          </h1>
        </Fade>
        <div className="flex justify-center flex-col ">
          {/* Timeline */}

          <div className="flex flex-col justify-center items-center">
            <div className="max-w-[900px] mx-auto w-full grid grid-cols-9 px-4 sm:px-2 tracking-tight">
              {/* 1ST COL */}

              <div className="hidden sm:block col-span-4 w-full h-full hover:scale-105 transition-all duration-500">
                <Fade direction="left" delay={200} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>GAME DEVELOPER & DESIGNER</h1>
                    <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                    <p className={timelineP}>
                      My first job as a developer creating games with the Roblox
                      Platform that is fun for all ages.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-0.5 bg-sky-500"></div>
                <div className={timelineIcon}>
                  <FaGamepad />
                </div>
              </div>

              <div className="hidden col-span-4 w-full h-full sm:flex items-center text-white sm:text-lg text-sm tracking-tighter">
                <Fade direction="right" delay={300} triggerOnce="true">
                  Nov 2020 - Oct 2022
                </Fade>
              </div>

              <div className="block sm:hidden col-span-8 w-full h-full">
                <Fade direction="right" delay={200} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>GAME DEVELOPER & DESIGNER</h1>
                    <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                    <p className={timelineP}>
                      My first job as a developer creating games with the Roblox
                      Platform that is fun for all ages.
                    </p>
                    <p className={timelineCardDate}>Nov 2020 - Oct 2022</p>
                  </div>
                </Fade>
              </div>

              {/* 2ND COL */}

              <div className="hidden col-span-4 w-full h-full sm:flex justify-end items-center text-white text-sm sm:text-lg tracking-tighter">
                <Fade direction="left" delay={300} triggerOnce="true">
                  April 2021 - Oct 2021
                </Fade>
              </div>

              <div className=" col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-0.5 bg-sky-500"></div>
                <div className={timelineIcon}>
                  <FaLaptop />
                </div>
              </div>

              <div className="col-span-8 sm:col-span-4 w-full h-full py-4 sm:hover:scale-105 transition-all duration-500">
                <Fade direction="right" delay={300} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>FREELANCE DEVELOPER</h1>
                    <h2 className={timelineH2}>Ottodot Inc.</h2>
                    <p className={timelineP}>
                      A part-time gig that helped me pay my tuition fee for
                      college. Ensuring that I finish all the client's task at
                      the given deadline.
                    </p>
                    <p className={timelineCardDate}>April 2021 - Oct 2021</p>
                  </div>
                </Fade>
              </div>

              {/* 3RD COL */}

              <div className="hidden sm:block col-span-4 w-full h-full hover:scale-105 transition-all duration-500">
                <Fade direction="left" delay={200} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>TECHNICAL SUPPORT</h1>
                    <h2 className={timelineH2}>VXI Global Solutions, LLC</h2>
                    <p className={timelineP}>
                      Life went downwards as I fell into depression. Managed to
                      pick myself up again and tried to become a technical
                      support for the meantime. Got to improve my english
                      communication skills that I still use up to this date as a
                      developer.
                    </p>
                  </div>
                </Fade>
              </div>

              <div className=" col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-0.5 bg-sky-500"></div>
                <div className={timelineIcon}>
                  <BiSupport />
                </div>
              </div>
              <div className="hidden col-span-4 w-full h-full sm:flex items-center text-white text-sm sm:text-lg tracking-tighter">
                <Fade direction="right" delay={300} triggerOnce="true">
                  Oct 2022 - June 2023
                </Fade>
              </div>

              <div className="block sm:hidden col-span-8 w-full h-full">
                <Fade direction="right" delay={300} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>TECHNICAL SUPPORT</h1>
                    <h2 className={timelineH2}>VXI Global Solutions, LLC</h2>
                    <p className={timelineP}>
                      Life went downwards as I fell into depression. Managed to
                      pick myself up again and tried to become a technical
                      support for the meantime. Got to improve my english
                      communication skills that I still use up to this date as a
                      developer.
                    </p>
                    <p className={timelineCardDate}>Oct 2022 - June 2023</p>
                  </div>
                </Fade>
              </div>

              {/* 4TH COL */}

              <div className="hidden col-span-4 w-full h-full sm:flex justify-end items-center text-white text-sm sm:text-lg tracking-tighter">
                <Fade direction="left" delay={300} triggerOnce="true">
                  Aug 2023 - Oct 2023
                </Fade>
              </div>
              <div className=" col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-0.5 bg-sky-500"></div>
                <div className={timelineIcon}>
                  <FaClipboardCheck />
                </div>
              </div>
              <div className="sm:col-span-4 col-span-8 w-full h-full py-4 sm:hover:scale-105 transition-all duration-500">
                <Fade direction="right" delay={300} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>FREELANCE QA ENGINEER</h1>
                    <h2 className={timelineH2}>Aloautta Inc.</h2>
                    <p className={timelineP}>
                      Came back to work after a break, feeling refreshed from
                      focusing on my studies. Now, I'm diving into the world of
                      Web Development with the support of awesome mentors at
                      Alouatta.
                    </p>
                    <p className={timelineCardDate}>Aug 2023 - Oct 2023</p>
                  </div>
                </Fade>
              </div>

              {/* 5TH COL */}

              <div className="hidden sm:block col-span-4 w-full h-full hover:scale-105 transition-all duration-500">
                <Fade direction="left" delay={300} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>QA ENGINEER</h1>
                    <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                    <p className={timelineP}>
                      Got back right on the track as a developer at my first
                      company! But this time, I want to focus more on web
                      development rather than game development!
                    </p>
                  </div>
                </Fade>
              </div>
              <div className=" col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-0.5 bg-sky-500"></div>
                <div className={timelineIcon}>
                  <BiSupport />
                </div>
              </div>
              <div className="hidden col-span-4 w-full h-full sm:flex items-center text-white text-sm sm:text-lg tracking-tighter">
                <Fade direction="right" delay={300} triggerOnce="true">
                  Oct 2023 - Present
                </Fade>
              </div>

              <div className="block sm:hidden col-span-8 sm:col-span-4 w-full h-full ">
                <Fade direction="right" delay={300} triggerOnce="true">
                  <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>QA ENGINEER</h1>
                    <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                    <p className={timelineP}>
                      Got back right on the track as a developer at my first
                      company! But this time, I want to focus more on web
                      development rather than game development!
                    </p>

                    <p className={timelineCardDate}>Oct 2023 - Present</p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        target="_blank"
        href="https://docs.google.com/document/d/1WZfUB2puS_dbrD63h2aKeLxqrTmw4EXf/edit?usp=sharing&ouid=118396333762393984990&rtpof=true&sd=true"
        className="w-full h-20 flex flex-col justify-center items-center mt-12 bg-sky-500 hover:bg-sky-500/90 transition-all duration-300 group cursor-pointer text-white font-bold overflow-hidden"
      >
        <span className="translate-y-3 group-hover:translate-y-20 transition-all duration-300">
          VIEW MY FULL RESUME
        </span>
        <span className="-translate-y-20 group-hover:-translate-y-3 transition-all duration-300">
          <FaFileDownload size={26} />
        </span>
      </a>
    </div>
  );
};

export default About;
