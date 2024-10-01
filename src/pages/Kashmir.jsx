import React, { useState } from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import PopupModal from '../components/shared/PopupModal';
import PackageCard from '../components/Tour_Packages/PackageCard';
import {
    KashmirImg1, KashmirImg2, KashmirImg3,
    KashmirImg4, KashmirImg5, KashmirImg6, KashmirImg7
} from '../assets/packages-img'
import PackageHeroSection from '../components/Tour_Packages/PackageHeroSection';
import PackageLogoCard from '../components/Tour_Packages/PackageLogoCard';

const Kashmir = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }

    return (
        <div>
            <PackageHeroSection
                packageClass={"kashmir-hero"}
                headText={"Discover Kashmir Majestic Mountains and Lush Valleys"}
                subHeadText={"Find Your Bliss in Kashmir Perfect Getaways for Every Traveler"}
                headColor='text-[#000a49]'
                subHeadColor='text-[#090d26]'
            />
            
            <PackageLogoCard
                gradientStyle={"bg-gradient-to-b to-[#ffffff73] via-[#fa9d0841] from-[#01a11954]"}
                name={"dubai_logo"}
                logo={"https://packtokashmir.com/wp-content/uploads/2023/03/logo_final1.png"}
            />

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                <div className='mt-5 mb-[5rem]'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>Our Packages</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>Book now for unforgettable adventures.</p>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>6 Days and 5 Nights</p>
                    </div>
                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <PackageCard
                            imageData={[KashmirImg1,KashmirImg2]}
                            level={"Silver"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={2}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"kashmir"}
                            extra={"Sanitised service"}
                            // AddOn={["Shikara ride"]}
                            redirectPage={"/kashmir/silver-details"}
                            delay={1500}
                            price={"543 + flight Bookings"}
                        />
                        <PackageCard
                            imageData={[KashmirImg4, KashmirImg6]}
                            extraLiving={"House boat night"}
                            level={"Gold"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={3}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"kashmir"}
                            extra={"Sanitised service "}
                            AddOn={["Shikara ride complementary","Welcome drink on arrival"]}
                            redirectPage={"/kashmir/gold-details"}
                            delay={2000}
                            price={"750 + flight bookings"}
                        />
                        <PackageCard
                            imageData={[KashmirImg5,KashmirImg3,KashmirImg7]}
                            level={"Platinum"}
                            extraLiving={"House boat night"}
                            transportation={"All transfers and sightseeing as itinerary"}
                            hotel={4}
                            meals={"Daily Breakfast and Dinner"}
                            handler={openHandler}
                            packageName={"kashmir"}
                            cabService={"Union cabs in SONAMARG and PAHALGAM"}
                            extra={"Sanitised service"}
                            AddOn={["Shikara ride complementary","Traditional welcome shawl and beverage","Assistance at Srinagar/Jammu airport"]}
                            redirectPage={"/kashmir/platinum-details"}
                            delay={2500}
                            price={"1515 + flight bookings"}
                        />
                    </div>
                </div>
            </div>

            {
                open &&
                (<PopupModal
                    setOpen={setOpen}
                    open={open}
                    img={"https://www.europetourpackage.net/Images/europe_logo.png"}
                />)
            }
        </div>
    )
}

export default WrapperLayout()(Kashmir);