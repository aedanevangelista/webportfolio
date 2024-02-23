import React from 'react'
import { FaGamepad, FaLaptop,  FaClipboardCheck  } from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";

const About = () => {

    let timelineIcon = 'absolute  w-8 h-8 items-center flex justify-center rounded-full bg-sky-600 transition-all duration-300  text-white';

    let timelineContainer = "col-span-4 w-full h-full";
    let timelineCardContainer = "w-full h-full hover:bg-sky-600/95 bg-sky-500 transition-all duration-300 rounded-sm p-2 md:pl-4";

    let timelineH1 = "text-white text-2xl font-black mt-2";
    let timelineH2 = 'font-bold text-sky-300 text-lg';
    let timelineP = "text-gray-100 py-2 sm:text-sm text-xs font-semibold";
    
    let timelineCardDate = "sm:hidden block font-bold text-sm text-sky-200 w-44 text-center bg-slate-900/30 shadow-md shadow-black/50 my-2";

    
  return (
    <div name='about' className='w-full h-full py-20 bg-slate-900/[99%] text-gray-400'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

                <div className='sm:text-right pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-sky-400 text-white'>About</p>
                </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                <div className='sm:text-right text-2xl font-semibold items-center'>
                  <p>Hi. I'm Aedan, nice to meet you! Please take a look around!</p>
                </div>

                <div>
                  <p>I'm a passionate and creative web developer specializing in the MERN stack and TailwindCSS. With a keen eye for detail and a love for crafting seamless and responsive user experiences, I strive to bring ideas to life through the power of code.</p>
                </div>
                
            </div>


            <h1 className='font-bold text-4xl text-white border-b-4 border-sky-400 text-center mt-20 mb-10'>Experience</h1>
            <div className='flex justify-center flex-col '>
            {/* Timeline */}

            <div className='flex flex-col justify-center items-center'>  
            <div className="max-w-[900px] mx-auto w-full grid grid-cols-9 px-4 sm:px-2 tracking-tight">
                
                {/* 1ST COL */}

                <div className='hidden md:block col-span-4 w-full h-full hover:scale-105 transition-all duration-500'>
                    <div className={timelineCardContainer}>
                        <h1 className={timelineH1}>GAME DEVELOPER & DESIGNER</h1>
                        <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                        <p className={timelineP}>My first job as a developer creating games with the Roblox Platform that is fun for all ages.</p>
                    </div>
                </div>
                <div className="col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-0.5 bg-sky-500"></div>
                    <div className={timelineIcon}><FaGamepad /></div>
                </div>
                
                <div className="hidden col-span-4 w-full h-full sm:flex items-center text-white sm:text-lg text-sm tracking-tighter">Nov 2020 - Oct 2022</div>

                <div className='block sm:hidden col-span-8 w-full h-full'>
                    <div className={timelineCardContainer}>
                        <h1 className={timelineH1}>GAME DEVELOPER & DESIGNER</h1>
                        <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                        <p className={timelineP}>My first job as a developer creating games with the Roblox Platform that is fun for all ages.</p>
                        <p className={timelineCardDate}>Nov 2020 - Oct 2022</p>
                    </div>
                </div>

                {/* 2ND COL */}

                
                <div className="hidden col-span-4 w-full h-full sm:flex justify-end items-center text-white text-sm sm:text-lg tracking-tighter">April 2021 - Oct 2021</div>
                
                <div className=" col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-0.5 bg-sky-500"></div>
                    <div className={timelineIcon}><FaLaptop /></div>
                </div>

                <div className="col-span-8 sm:col-span-4 w-full h-full py-4 sm:hover:scale-105 transition-all duration-500">
                    <div class={timelineCardContainer}>
                        <h1 class={timelineH1}>FREELANCE DEVELOPER</h1>
                        <h2 className={timelineH2}>Ottodot Inc.</h2>
                        <p class={timelineP}>A part-time gig that helped me pay my tuition fee for college. Ensuring that I finish all the client's task at the given deadline.</p>
                        <p className={timelineCardDate}>April 2021 - Oct 2021</p>
                    </div>
                </div>


                {/* 3RD COL */}


                <div className="hidden sm:block col-span-4 w-full h-full hover:scale-105 transition-all duration-500">
                    <div className={timelineCardContainer}>
                        <h1 className={timelineH1}>TECHNICAL SUPPORT</h1>
                        <h2 className={timelineH2}>VXI Global Solutions, LLC</h2>
                        <p className={timelineP}>Life went downwards as I fell into depression. Managed to pick myself up again and tried to become a technical support for the meantime. Got to improve my english communication skills that I still use up to this date as a developer.</p>
                    </div>
                </div>

                <div className=" col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-0.5 bg-sky-500"></div>
                    <div className={timelineIcon}><BiSupport /></div>
                </div>
                <div className="hidden col-span-4 w-full h-full md:flex items-center text-white text-sm sm:text-lg tracking-tighter">Oct 2022 - June 2023</div>

                <div className="block md:hidden col-span-8 w-full h-full">
                    <div className={timelineCardContainer}>
                        <h1 className={timelineH1}>TECHNICAL SUPPORT</h1>
                        <h2 className={timelineH2}>VXI Global Solutions, LLC</h2>
                        <p className={timelineP}>Life went downwards as I fell into depression. Managed to pick myself up again and tried to become a technical support for the meantime. Got to improve my english communication skills that I still use up to this date as a developer.</p>
                        <p className={timelineCardDate}>Oct 2022 - June 2023</p>
                    </div>
                </div>

                {/* 4TH COL */}


                <div className="hidden col-span-4 w-full h-full sm:flex justify-end items-center text-white text-sm sm:text-lg tracking-tighter">Aug 2023 - Oct 2023</div>
                <div className=" col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-0.5 bg-sky-500"></div>
                    <div className={timelineIcon}><FaClipboardCheck /></div>
                </div>
                <div className="sm:col-span-4 col-span-8 w-full h-full py-4 sm:hover:scale-105 transition-all duration-500">
                    <div className={timelineCardContainer}>
                        <h1 className={timelineH1}>FREELANCE QA ENGINEER</h1>
                        <h2 className={timelineH2}>Aloautta Inc.</h2>
                        <p className={timelineP}>Came back to work after a break, feeling refreshed from focusing on my studies. Now, I'm diving into the world of Web Development with the support of awesome mentors at Alouatta.</p>
                        <p className={timelineCardDate}>Aug 2023 - Oct 2023</p>
                    </div>
                </div>
                

                {/* 5TH COL */}


                <div className="hidden sm:block col-span-4 w-full h-full hover:scale-105 transition-all duration-500">
                    <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>QA ENGINEER</h1>
                        <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                        <p className={timelineP}>Got back right on the track as a developer at my first company! But this time, I want to focus more on web development rather than game development!</p>
                    </div>
                </div>
                <div className=" col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-0.5 bg-sky-500"></div>
                    <div className={timelineIcon}><BiSupport /></div>
                </div>
                <div className="hidden col-span-4 w-full h-full sm:flex items-center text-white text-sm sm:text-lg tracking-tighter">Oct 2023 - Present</div>
                
                <div className="block sm:hidden col-span-8 sm:col-span-4 w-full h-full ">
                    <div className={timelineCardContainer}>
                    <h1 className={timelineH1}>QA ENGINEER</h1>
                        <h2 className={timelineH2}>Skydev Solutions Inc.</h2>
                        <p className={timelineP}>Got back right on the track as a developer at my first company! But this time, I want to focus more on web development rather than game development!</p>
                        <p className={timelineCardDate}>Oct 2023 - Present</p>
                    </div>
                </div>
                
            </div>     
            
            </div>
   

            

          </div>

            
        </div>

    </div>
  )
}

export default About