import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import avatar from "../assets/avatar.png";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-900">
      {/* Container */}
      <div className="max-w-[1000px] md:max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full gap-10">
        <Fade direction="left" triggerOnce="true" delay={200}>
          <div className="hidden lg:flex bg-white px-3 pt-3 pb-20">
            <img
              src={avatar}
              alt="avatar"
              className="w-auto hidden lg:flex lg:h-[450px] md:mr-20 bg-slate-500 grayscale"
            />
          </div>
        </Fade>
        <div>
          <Fade direction="down" triggerOnce="true" delay={500}>
            <p className="sm:text-2xl text-sky-400 font-bold my-2">
              Hi, my name is
            </p>
          </Fade>
          <Fade triggerOnce="true" delay={600}>
            <h1 className="text-4xl sm:text-7xl font-bold text-white">
              Aedan Evangelista
            </h1>
          </Fade>
          <Fade triggerOnce="true" delay={700}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 my-2">
              I'm a Front-end developer.
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce="true" delay={800}>
            <p className="text-md sm:text-1.5xl text-gray-400 py-2 max-w-[740px] font-light text-justify">
              I specialize in designing and building exceptional digital
              experiences. I used to be in Game Development for Roblox. But
              currently, I'm more focused on building responsive front-end web
              applications.
            </p>
          </Fade>
          <Fade direction="up" triggerOnce="true" delay={900}>
            <div>
              <ScrollLink to="about" smooth={true} duration={500} offset={-20}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-400 duration-500 transition-all hover:border-sky-400">
                  LEARN MORE
                  <span className="group-hover:rotate-90 duration-300 transition-all">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </ScrollLink>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
