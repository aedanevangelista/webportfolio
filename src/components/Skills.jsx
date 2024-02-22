import React from 'react'
import Css from '../assets/css.png';
import Github from '../assets/github.png';
import Html from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Figma from '../assets/figma.png';

import Ps from '../assets/ps.png';
import Pr from '../assets/pr.png';
import Rblx from '../assets/rblx.png';
import VsC from '../assets/vscode.png';
import monday from '../assets/monday.png'


import { MdDeveloperMode } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";

const Skills = () => {
  return (
    <div name='skill' className='w-full h-[150vh] sm:h-screen bg-slate-900 text-white'>

      {/* Container */}

      <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full font-bold '>
        <div className='items-center flex flex-col'>
          <p className='text-4xl font-bold inline border-b-4 border-sky-400'>Skill</p>
        </div>
        <p className='mt-8 text-2xl flex justify-center items-center'><MdDeveloperMode className='mx-2' size={25} />DEVELOPMENT</p>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center my-8 text-white'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2'>
            <img className='w-24 mx-auto' src={Html} alt="html icon" />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2'>
            <img className='w-24 mx-auto' src={Css} alt="Css icon" />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2'>
            <img className='w-24 mx-auto' src={Javascript} alt="Javascript icon" />
            <p className='my-4'>Javascript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2'>
            <img className='w-24 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>TailwindCSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2'>
            <img className='w-24 mx-auto' src={ReactLogo} alt="React icon" />
            <p className='my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-2'>
            <img className='w-24 mx-auto' src={Github} alt="Github icon" />
            <p className='my-4'>Github</p>
          </div>
        </div>
        
        <div className='grid sm:grid-cols-2 sm:gap-32'>

          <div>
            <p className='mt-8 text-2xl flex justify-center items-center mb-8'><SiMaterialdesignicons className='mx-2' size={25} />DESIGN</p>
            
            <div className='grid grid-cols-3 gap-4 items-center shadow-md shadow-[#040c16] p-4'>
                <img src={Figma} alt="figma img" className='w-16 h-auto'/>
                <img src={Ps} alt="figma img" className='w-16 h-auto'/>
                <img src={Pr} alt="figma img" className='w-16 h-auto'/>
            </div>

          </div>

          <div>
          <p className='mt-8 text-2xl flex justify-center items-center mb-8'><FaLightbulb className='mx-2' size={30} />KNOWLEDGE</p>
            <div className='grid grid-cols-3 gap-4 items-center shadow-md shadow-[#040c16] p-4'>
              <img src={Rblx} alt="rblx" className='w-16 h-auto'/>
              <img src={VsC} alt="VsC" className='w-14 h-auto'/>
              <img src={monday} alt="monday" className='w-16 h-auto'/>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills