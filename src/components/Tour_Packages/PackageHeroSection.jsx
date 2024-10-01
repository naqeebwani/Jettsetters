import React from 'react'

const PackageHeroSection = ({packageClass,headColor="text-[#FFFFFF]",subHeadColor="text-[#ffffffdc]", subHeadText, headText}) => {
    return (
        <div className={`${packageClass} md:min-h-[calc(100vh-15vh)] min-h-[calc(100vh-12vh)]  h-full w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden`}>
            <div className='w-full h-full flex flex-col justify-center lg:mt-[4rem] mt-[8rem] md:mt-[4rem] sm:px-10 py-[5rem] lg:py-[2.5rem]'>
                <h1 className={`${headColor} 2xl:text-[86px] 2xl:leading-[80px] lg:text-7xl lg:leading-[65px] sm:leading-[56px] sm:text-6xl text-5xl max-[350px]:text-4xl leading-[48px] font-content font-bold drop-shadow-md shadow-black up-animate-head lg:w-[95%] w-full`}>{headText}</h1>
                <p className={`${subHeadColor} 2xl:text-[48px] 2xl:leading-[52px] sm:text-4xl text-[28px] leading-[32px] font-content md:font-semibold drop-shadow-md shadow-black up-animate-para sm:w-11/12 w-full xl:w-[76.2%] mt-5 lg:mt-2 px-1`}>{subHeadText}</p>
            </div>
        </div>
    )
}

export default PackageHeroSection