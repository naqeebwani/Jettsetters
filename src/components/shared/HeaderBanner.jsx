import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import { ArcIcon } from '../../assets/footer/index';
import { FaPhoneVolume } from "react-icons/fa";

const HeaderBanner = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    return (
        <div className='bg-main-bg h-[50px] w-full p-2 flex md:gap-x-3 gap-2 lg:justify-evenly justify-between items-center z-[1000]'>
            {pathname === "/" ? ("") : <button
                className='relative md:p-2 p-1 rounded-full bg-gradient-to-r first:to-[#f5892a] from-[#f99f18] group'
                onClick={() => navigate(-1)}
            >
                <div className='absolute cursor-pointer text-[#fff] px-2 bg-[#1111113f] rounded-md -bottom-[80%] opacity-0 group-hover:opacity-100 -left-2 transition duration-[0.5s]'>
                    back
                </div>
                <IoMdArrowBack
                    className='sm:text-[20px] text-[#fff]'
                />
            </button>}
            <Link to="/about">
                <img
                    src={ArcIcon}
                    alt="arc"
                    className='h-[35px] lg:h-[45px] w-[35px] lg:w-[45px] object-fill cursor-pointer -mt-2'
                />
            </Link>
            <p className='lg:block hidden text-[#dde5f1] text-[10px] lg:text-[18px] sm:text-base overflow-hidden font-medium'>ARC Certified Ticketing Agent for 250+ Airlines and leading Cruise Lines
                <span
                    className='cursor-pointer md:text-lg font-semibold hover:text-[#FFC100] transition ml-1'
                    onClick={() => navigate('/about')}
                >
                    (ARC # 05511704)
                </span>
            </p>
            <p className='text-[#fff]cursor-pointer flex items-center lg:gap-x-5 cursor-pointer md:mt-1'>
                <a href="tel:+18885813028" className='lg:block hidden'>
                    <FaPhoneVolume
                        className='text-[#FFC100] lg:text-3xl text-[20px] -rotate-[40deg] -mt-2 call-animate'
                    />
                </a>
                <a href="tel:+18885813028">
                    <span className='animate-ping hover:animate-none text-[#FFC100] font-bold xl:text-5xl lg:text-3xl sm:text-5xl text-[28px] max-[300px]:text-xl max-[240px]:text-base drop-shadow-md shadow-[#c97156]'>
                        +1-888-581-3028
                    </span>
                </a>
            </p>
        </div>
    )
}

export default HeaderBanner;