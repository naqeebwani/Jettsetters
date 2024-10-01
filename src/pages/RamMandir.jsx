import React,{useState} from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import {
    RamImg1, RamImg2, RamImg3,RamLogo
} from '../assets/packages-img'
import HazCard from '../components/shared/HazCard'
import PopupModal from '../components/shared/PopupModal'
import PackageLogoCard from '../components/Tour_Packages/PackageLogoCard'
import PackageHeroSection from '../components/Tour_Packages/PackageHeroSection'

const RamMandir = () => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(true);
    }
    return (
        <div>
            <PackageHeroSection
                packageClass={"ram-hero"}
                headText={"Our spiritual pilgrimage begins here visit Ram Mandir"}
                subHeadText={"Packages for visiting ram mandir and more."}
                headColor='text-[#FFFFFF]'
                subHeadColor='sm:text-[#ffffffdc] text-[#fff]'
            />

            <PackageLogoCard
                logo={RamLogo}
                name={"Ram_logo"}
                gradientStyle={"bg-gradient-to-b to-[#95c9fd02] via-[#ffa60118] from-[#f2be949b]"}
            />

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                <div className='mt-5 mb-[5rem]'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>Our Packages</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>Book now for unforgettable adventures.</p>
                    </div>
                    <div className='flex flex-col hajj-box gap-y-8 md:w-[100%] lg:w-[100%] xl:w-11/12 md:mx-auto md:gap-y-2 md:p-2 md:bg-[#6192d655] md:rounded-[15px]'>
                        <HazCard
                            img={RamImg1}
                            PackageType={"Silver"}
                            transportTitle={"Delhi-Ayodya-Varanasi-Vrindawan-Delhi"}
                            star={3}
                            handler={openHandler}
                            packageName={"Ram Mandir Tour"}
                        />
                        <HazCard
                            img={RamImg3}
                            transportTitle={"Delhi-Ayodya-Varanasi-Vrindawan-Delhi"}
                            // extra={"Ganga Snan"}
                            PackageType={"Gold"}
                            star={4}
                            handler={openHandler}
                            packageName={"Ram Mandir Tour"}
                        />
                        <HazCard
                            img={RamImg2}
                            transportTitle={"Delhi-Ayodya-Varanasi-Vrindawan-Delhi"}
                            overload={"Ganga Snan"}
                            // extra={""}
                            PackageType={"Platinum"}
                            star={5}
                            handler={openHandler}
                            packageName={"Ram Mandir Tour"}
                        />
                    </div>
                </div>
            </div>

            {
                open &&
                (<PopupModal
                    setOpen={setOpen}
                    open={open}
                    img={RamLogo}
                />)
            }
        </div>
    )
}

export default WrapperLayout('', '')(RamMandir);