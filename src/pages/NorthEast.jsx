import React, { useState } from 'react'
import PopupModal from '../components/shared/PopupModal'
import {
    NorthAssam, NorthBhutan1, NorthBhutan2, NorthDarjeeling,
    NorthMeghalaya, NorthSikkim,
} from '../assets/packages-img'
import PackageCard from '../components/Tour_Packages/PackageCard';
import WrapperLayout from '../components/Layouts/WrapperLayout';
import PackageLogoCard from '../components/Tour_Packages/PackageLogoCard';
import PackageHeroSection from '../components/Tour_Packages/PackageHeroSection';

const NorthEast = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }

    return (
        <div>
            <PackageHeroSection
                packageClass={"north-east-hero"}
                headText={"Discover the Untouched Beauty Explore North East India and Bhutan"}
                subHeadText={"Journey Through Mystical Landscapes, Rich Cultures, and Hidden Gems"}
                subHeadColor='text-[#ffffffaf]'
            />
            <PackageLogoCard
                gradientStyle={"bg-gradient-to-b to-[#a1a1a10a] via-[#3c3e1841] from-[#49a10154]"}
                name={"bhutan-logo"}
                logo={"https://sharondavisdesign.com/newsite/wp-content/uploads/2021/06/Logo-Kingdom-of-Bhutan.png"}
            />

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                <div className='mb-[5rem]'>
                    <div className='mb-10'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>Our Packages</h1>
                        {/* <p className='text-lg md:text-xl text-center text-[#000] font-medium'>Book now for unforgettable adventures.</p> */}
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-2xl md:text-4xl opacity-80 text-center text-[#000e] font-bold drop-shadow-md shadow-black'>North East India</h1>
                    </div>

                    <div className='flex mb-[2rem] flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <PackageCard
                            imageData={[NorthDarjeeling,NorthSikkim]}
                            level={"Darjeeling and Sikkim"}
                            // extraLiving={"House boat night"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={4}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"North East"}
                            // cabService={"Union cabs in SONAMARG and PAHALGAM"}
                            extra={"Sikkim Adventures with Darjeeling"}
                            AddOn={["5 Nights","DESTINATIONS COVERED : 2N Gangtok, 1N Pelling, 2N Darjeeling"]}
                            redirectPage={"/north-east/darjeeling-sikkim"}
                            delay={1500}
                            price={"479 + flight bookings"}
                        />
                    </div>

                    <div className='flex mb-[3rem] flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <PackageCard
                            imageData={[NorthMeghalaya,NorthAssam]}
                            level={"Meghalaya and Assam"}
                            // extraLiving={"House boat night"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={4}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"North East"}
                            // cabService={"Union cabs in SONAMARG and PAHALGAM"}
                            extra={"Wonders of Meghalaya & Assam "}
                            AddOn={["4 Nights","DESTINATIONS COVERED: 3N Shillong, 1N Guwahati"]}
                            delay={2000}
                            price={"669 + flight bookings"}
                        />
                    </div>

                    <div className='mb-5 pt-8 md:pt-10'>
                        <h1 className='text-2xl md:text-4xl opacity-80 text-center text-[#000e] font-bold drop-shadow-md shadow-black'>Bhutan</h1>
                    </div>

                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <PackageCard
                            imageData={[NorthBhutan1,NorthBhutan2]}
                            level={"Bhutan"}
                            // extraLiving={"House boat night"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={4}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"North East"}
                            // cabService={"Union cabs in SONAMARG and PAHALGAM"}
                            extra={"Breathtaking Journey through Bhutan"}
                            AddOn={["6 Nights","DESTINATIONS COVERED : 1N Phuentsholing, 2N Thimphu, 1N Punakha, 2N Paro, 1N Jaldapara"]}
                            delay={2500}
                            price={"869 + flight bookings"}
                        />
                    </div>
                </div>
            </div>

            {
                open &&
                (<PopupModal
                    setOpen={setOpen}
                    open={open}
                    title={"North East Packages"}
                    img={"https://sharondavisdesign.com/newsite/wp-content/uploads/2021/06/Logo-Kingdom-of-Bhutan.png"}
                />)
            }
        </div >
    )
}

export default WrapperLayout('', '')(NorthEast);