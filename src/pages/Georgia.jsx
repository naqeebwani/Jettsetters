import React, { useState } from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import PackageHeroSection from '../components/Tour_Packages/PackageHeroSection';
import {
    GeorgiaImg1,
    GeorgiaImg2,
    GeorgiaImg3,
    GeorgiaImg4,
    GeorgiaImg5,
    GeorgiaImg6,
    GeorgiaImg7,
    GeorgiaImg8,
    GeorgiaLogo
} from '../assets/packages-img'
import PopupModal from '../components/shared/PopupModal';
import PackageLogoCard from '../components/Tour_Packages/PackageLogoCard';
import PackageCard from '../components/Tour_Packages/PackageCard';

const Georgia = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }
    return (
        <div>
            <PackageHeroSection
                packageClass={"georgia-hero"}
                headText={"Book customized Georgia holiday packages with exciting deals & offers."}
                headColor='text-[#FFFFFF]'
            />

            <PackageLogoCard
                gradientStyle={"bg-gradient-to-b to-[#fff9f90a] via-[#ff838341] from-[#bbf1ff41]"}
                name={"Georgia-logo"}
                logo={GeorgiaLogo}
            />

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4 '>
                <div className='mb-[5rem]'>
                    <div className='mb-10'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>Our Packages</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium mt-3'>Discover Georgia: An Unforgettable 4-Day Adventure</p>
                    </div>

                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <PackageCard
                            imageData={[GeorgiaImg7,GeorgiaImg1, GeorgiaImg2]}
                            level={"Silver"}
                            transportation={"All transfers including (from & to airport)"}
                            hotel={3}
                            meals={"Lunch and Dinner"}
                            handler={openHandler}
                            packageName={"Georgia"}
                            extra={"Sight seeing"}
                            AddOn={["Water - 2 bottles/day"]}
                            delay={1500}
                            price={"499"}
                            discount={"+ Discount rates on Air fare"}
                        />
                        <PackageCard
                            imageData={[GeorgiaImg3, GeorgiaImg4]}
                            level={"Gold"}
                            transportation={"All transfers including (from & to airport)"}
                            hotel={4}
                            meals={"Lunch and Dinner"}
                            handler={openHandler}
                            packageName={"Georgia"}
                            extra={"Sight seeing"}
                            AddOn={["Water - 2 bottles/day"]}
                            delay={2000}
                            price={"599"}
                            discount={"+ Discount rates on Air fare"}
                        />
                        <PackageCard
                            imageData={[GeorgiaImg5, GeorgiaImg8]}
                            level={"Platinum"}
                            transportation={"All transfers including (from & to airport)"}
                            hotel={5}
                            meals={"Lunch and Dinner"}
                            handler={openHandler}
                            packageName={"Georgia"}
                            extra={"Sight seeing"}
                            AddOn={["Water - 2 bottles/day"]}
                            delay={2500}
                            price={"899"}
                            discount={"+ Discount rates on Air fare"}
                        />
                    </div>
                </div>
            </div>

            {
                open &&
                (<PopupModal
                    setOpen={setOpen}
                    open={open}
                    title={"Georgia Packages"}
                    img={GeorgiaLogo}
                />)
            }
        </div>
    )
}

export default WrapperLayout('Jetsetters | Georgia', '')(Georgia);