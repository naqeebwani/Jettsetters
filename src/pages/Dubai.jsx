import React, { useState } from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'

import {
    DubaiImg1, DubaiImg2, DubaiImg3, DubaiLogo
} from '../assets/packages-img'
import HazCard from '../components/shared/HazCard'
import PopupModal from '../components/shared/PopupModal'
import PackageLogoCard from '../components/Tour_Packages/PackageLogoCard'
import PackageHeroSection from '../components/Tour_Packages/PackageHeroSection'
import { Link } from 'react-router-dom'

const Dubai = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }
    return (
        <div>
            <PackageHeroSection
                packageClass={"dubai-hero"}
                headText={"Discover the magic of Dubai with our exclusive travel packages."}
                subHeadText={"Experience Unparalleled Luxury and Adventure in the Heart of the UAE"}
                headColor='text-[#FFFFFF]'
                subHeadColor='sm:text-[#ffffffdc] text-[#fff]'
            />
            {/* <div className='dubai-hero min-h-[calc(100vh-60px)] h-full w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full h-full flex flex-col justify-center lg:mt-[5rem] mt-[10rem] md:mt-[4rem] sm:p-10 '>
                    <h1 className='lg:text-6xl md:text-5xl text-6xl text-[#FFFFFF] font-content font-bold drop-shadow-md shadow-black md:leading-[2.4rem] up-animate-head lg:leading-[3rem] leading-[2rem] lg:w-11/12'>Discover the magic of Dubai with our exclusive travel packages.</h1>
                    <p className='sm:text-2xl text-lg sm:text-[#ffffffdc] text-[#fff] font-content md:font-semibold drop-shadow-md shadow-black up-animate-para mt-2 md:w-1/2 w-4/5'>Experience Unparalleled Luxury and Adventure in the Heart of the UAE</p>
                </div>
            </div> */}

            <PackageLogoCard
                logo={DubaiLogo}
                name={"dubai-logo"}
                gradientStyle={"bg-gradient-to-b to-[#95c9fd02] via-[#01a6ff18] from-[#94cff29b]"}
            />

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                <div className='mt-5 mb-[5rem]'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>Our Packages</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>Book now for unforgettable adventures.</p>
                    </div>
                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <HazCard
                            img={DubaiImg1}
                            PackageType={"Silver"}
                            transportTitle={"Dubai City tour"}
                            star={3}
                            handler={openHandler}
                            packageName={"Dubai"}
                            price={"499/per person"}
                        />
                        <HazCard
                            img={DubaiImg2}
                            transportTitle={"Dubai City tour"}
                            extra={"BBQ Dinner"}
                            PackageType={"Gold"}
                            star={4}
                            handler={openHandler}
                            packageName={"Dubai"}
                            price={"699/per person"}
                        />
                        <HazCard
                            img={DubaiImg3}
                            transportTitle={"Dubai City tour"}
                            overload={"Desert Safari"}
                            extra={"BBQ Dinner"}
                            PackageType={"Platinum"}
                            star={5}
                            handler={openHandler}
                            packageName={"Dubai"}
                            price={"899/per person"}
                        />
                    </div>

                    <div className='mx-auto text-center mt-10'>
                        <Link to={'/packages/dubai/activities'}
                            className='cursor-pointer text-2xl text-center font-semibold group text-[#FFF] px-8 py-3 border-2 border-[#144cb5] bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px]'
                        >
                            <span className='inline-block group-hover:-translate-y-[2px] group-hover:scale-[1.01] transition'> Details </span>
                        </Link>
                    </div>
                </div>
            </div>

            {
                open &&
                (<PopupModal
                    setOpen={setOpen}
                    open={open}
                    img={DubaiLogo}
                    title={"Dubai tour Packages"}
                />)
            }
        </div>
    )
}

export default WrapperLayout('', '')(Dubai)