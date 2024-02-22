import React ,{ useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import fem from '../assets/fem.png';

const Navbar = () => {

    const [ nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-50 w-full h-[80px] bg-slate-950 flex justify-between items-center px-12 text-gray-300'>
        <div>
            <h1 className='font-bold text-sky-400 text-2xl hover:scale-105 cursor-pointer transition duration-300'>
            <Link to="home" smooth={true} duration={600}>
                {'< AEDAN />'}
            </Link>
            </h1>
        </div>

        {/* Menu */}

        <ul className='hidden md:flex justify-between items-center'>
            <li className='hover:text-sky-400 transition duration-200'>
                <Link to="home" smooth={true} duration={600}>
                    HOME
                </Link>
            </li>
            <li className='hover:text-sky-400 transition duration-200'>
                <Link to="about" smooth={true} duration={600}>
                    ABOUT
                </Link>
            </li>
            <li className='hover:text-sky-400 transition duration-200'>
                <Link to="skill" smooth={true} duration={600}>
                    SKILL
                </Link>
            </li>
            <li className='hover:text-sky-400 transition duration-200'>
                <Link to="work" smooth={true} duration={600}>
                    WORK
                </Link>
            </li>
            <li className='hover:text-sky-400 transition duration-200'>
                <Link to="contact" smooth={true} duration={600}>
                    CONTACT
                </Link>    
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer scale-125 transition duration-300'>
            {!nav ? <FaBars className='hover:text-sky-400 transition-all duration-300' /> : <FaTimes className='scale-[1.3] hover:text-sky-400 transition-all duration-300'/>}
        </div>

        {/* Mobile Menu */}
        <ul className={`absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center transition-transform duration-500 transform ${nav ? 'translate-y-0' : '-translate-y-full'}`}>
            <li className='py-6 text-4xl hover:text-sky-400 transition duration-200 '>
                <Link onClick={handleClick} to="home" smooth={true} duration={600}>
                    HOME
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-sky-400 transition duration-200'>
                <Link onClick={handleClick} to="about" smooth={true} duration={600}>
                    ABOUT
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-sky-400 transition duration-200'>
                <Link onClick={handleClick} to="skill" smooth={true} duration={600}>
                    SKILL
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-sky-400 transition duration-200'>
                <Link onClick={handleClick} to="work" smooth={true} duration={600}>
                    WORK
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-sky-400 transition duration-200'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={600}>
                    CONTACT
                </Link>  
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden xl:flex fixed flex-col top-[35%] left-0 text-white font-Inter font-semibold text-sm'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center transition-all ml-[-100px] hover:ml-[-0px] duration-500 bg-sky-600'>
                    <a href="https://www.linkedin.com/in/aedan-jarel-evangelista-7737911bb/" target="_blank" className='flex justify-between items-center w-full h-full visited:text-white'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center transition-all ml-[-100px] hover:ml-[-0px] duration-500 bg-gray-700'>
                    <a href="https://github.com/aedanevangelista" className='flex justify-between items-center w-full'>
                        Github <FaGithub size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center transition-all ml-[-100px] hover:ml-[-0px] duration-500 bg-blue-700'>
                    <a href="https://www.facebook.com/aedanevangelista/" className='flex justify-between items-center w-full'>
                        Facebook <FaFacebook size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center transition-all ml-[-100px] hover:ml-[-0px] duration-500 bg-gray-500'>
                    <a href="" className='flex justify-between items-center w-full'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>

                <li className='w-[165px] h-[60px] flex justify-between items-center transition-all ml-[-105px] hover:ml-[-0px] duration-500 bg-[#FE0B81]'>
                    <a href="https://www.frontendmentor.io/profile/aedanevangelista" className='flex justify-between items-center w-full'>
                        Frontend Mentor <img src={fem} alt="fem" className='w-8 h-auto' />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar