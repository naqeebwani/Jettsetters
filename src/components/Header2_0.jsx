import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/logos/logo_white.png'
import { Link, useLocation } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import HeaderBanner from './shared/HeaderBanner'

const Header2_0 = () => {
    const menuRef = useRef();
    const [open, setOpen] = useState(false);

    const showNav = () => {
        if (!menuRef.current.classList.contains("active")) {
            setOpen(true)
            menuRef.current.classList.add("active")
        }
        else {
            setOpen(false);
            menuRef.current.classList.remove("active");
        }
    }

    useEffect(() => {
        const close = (e) => {
            if (menuRef.current.classList.contains('active') && !menuRef.current.contains(e.target)) {
                setOpen(false);
                menuRef.current.classList.remove("active");
            }
        }
        document.addEventListener('mousedown', close, true);

        return () => {
            document.removeEventListener('mousedown', close, true);
        }
    })

    return (
        <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div className='bg-main-bg px-4 text-[#fff] flex justify-between relative'>
                <div className='flex items-center gap-x-10 justify-between w-[70%]'>
                    <div className='flex items-center gap-x-2'>
                        <Link to={'/'} >
                            <img
                                src={Logo}
                                alt="jetsetters"
                                className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] aspect-auto mb-2 mt-3'
                            />
                        </Link>

                        <div className='font-heading lg:text-4xl md:text-2xl text-3xl tracking-wide font-bold capitalize text-[#10439F] drop-shadow-head-shade'>
                            Jetsetters
                            <p className='md:text-sm text-xs font-normal md:font-medium text-start ml-2 -mt-1'>Jet, Set, Go</p>
                        </div>
                    </div>
                    <div className='md:flex lg:gap-x-6 gap-x-2 hidden lg:w-[55%] w-full justify-between font-content'>
                        <NavLink
                            title={"Cruise"}
                            to={'/'}
                            style={"md:text-lg"}
                        />
                        <NavLink
                            title={"Flight"}
                            to={'/flight'}
                            style={"md:text-lg"}
                        />
                        <NavLink
                            title={"Packages"}
                            to={'/packages'}
                            style={"md:text-lg"}
                        />
                        <NavLink
                            title={"About Us"}
                            to={'/about'}
                            style={"md:text-lg"}
                        />
                        <NavLink
                            title={"Contact Us"}
                            to={'/contact-us'}
                            style={"md:text-lg"}
                        />
                    </div>
                </div>
                <div className='flex flex-row items-center gap-x-2 lg:mr-[2rem]'>
                    <p className='text-[#fff] font-medium lg:text-lg text-base md:block hidden'>Packages & more</p>
                    {!open && <button
                        className='cursor-pointer'
                        onClick={showNav}
                    >
                        <TiThMenu className='text-[30px]' />
                    </button>}

                    {open && <button
                        className='cursor-pointer'
                        onClick={showNav}
                    >
                        <FaTimes className='text-[30px]' />
                    </button>}

                    <div
                        ref={menuRef}
                        className='nav-menu bg-main-bg'>
                        {/* <p className='text-white text-xl text-center md:block hidden'>Working on</p> */}
                        <div className='flex flex-col items-center justify-center gap-y-2 font-content pb-1'>
                            <NavLink
                                title={"Cruise"}
                                to={'/'}
                                style={"text-lg md:hidden"}
                            />
                            <NavLink
                                title={"Flight"}
                                to={'/flight'}
                                style={"text-lg md:hidden"}
                            />
                            <NavLink
                                title={"Packages"}
                                to={'/packages'}
                                style={"text-lg md:hidden"}
                            />
                            <NavLink
                                title={"About Us"}
                                to={'/about'}
                                style={"text-lg md:hidden"}
                            />
                            <NavLink
                                title={"Contact Us"}
                                to={'/contact-us'}
                                style={"text-lg md:hidden "}
                            />
                            <div className='flex items-center gap-x-2'>
                                <NavLink
                                    title={"Ram Mandir Tour"}
                                    to={'/packages/ram-mandir-tour'}
                                    style={"text-lg"}
                                />
                                <span className='font-extrabold text-heading-text'>|</span>
                                <NavLink
                                    title={"Hajj & Umrah"}
                                    to={'/packages/hajj&umrah'}
                                    style={"text-lg"}
                                />
                            </div>
                            <NavLink
                                title={"Dubai"}
                                to={'/packages/dubai'}
                                style={"text-lg"}
                            />
                            <NavLink
                                title={"Europe"}
                                to={'/packages/europe'}
                                style={"text-lg"}
                            />
                            <NavLink
                                title={"Kashmir"}
                                to={'/packages/kashmir'}
                                style={"text-lg"}
                            />
                            <NavLink
                                title={"North East & Bhutan"}
                                to={'/packages/north-east'}
                                style={"text-lg"}
                            />
                            <NavLink
                                title={"Georgia"}
                                to={'/packages/georgia'}
                                style={"text-lg"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[0.7px] w-full bg-[#90ccf8f8]'></div>
            <HeaderBanner />
        </div>
    )
}

export default Header2_0


const NavLink = ({ title, to, style }) => {
    const { pathname } = useLocation();
    return (
        <Link to={to}>
            <span className={`${style} font-semibold hover:underline transition-all duration-150 cursor-pointer
                            ${pathname === to ? "text-heading-text" : "text-[#fff] hover:text-heading-text"}`
            }>
                {title}
            </span>
        </Link>
    )
}