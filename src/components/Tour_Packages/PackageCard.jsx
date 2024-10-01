import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { MdHotel, MdFlight, MdTour, MdDinnerDining, MdHouseboat } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import AutoSlider from '../shared/AutoSlider';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ imageData, level, packageName, cabService, extraLiving, hotel, transportation, meals, extra, AddOn, redirectPage, price = 0, handler, delay,discount }) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col md:flex-row md:h-[400px] sm:w-full w-[350px] rounded-t-[10px] md:rounded-[15px] md:shadow-none shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-[#fff] group overflow-hidden'>
            <div className='lg:w-[50%] md:h-full h-[280px] w-full overflow-hidden md:rounded-[15px] relative'>
                <AutoSlider
                    delay={delay}
                    data={imageData}
                />
            </div>
            <div className='py-2 border-[#10439F] bg-[#fff] border-[2px] px-4 md:px-8 border-t-0 md:border-none md:w-[60%] h-full md:rounded-[0px_15px_15px_0px]'>
                <div className='flex mt-2 flex-col w-[] justify-between h-full'>
                    <div className='flex flex-col'>
                        <h3 className='text-[30px] md:text-3xl font-extrabold font-heading text-[#10439F] mb-2'>{level}</h3>
                        <div>
                            <div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <MdHotel className='text-[#10439F] md:text-[20px]' />
                                    <span className='text-base md:text-xl font-semibold'>Hotel: </span>
                                </p>
                                <p className='flex gap-x-[1px] mt-[2px] md:mt-0 md:text-[20px]'>
                                    {
                                        Array(hotel).fill('.').map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className='text-[#FFF455]'
                                            />
                                        ))
                                    }
                                </p>
                            </div>
                            {extraLiving && <div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <MdHouseboat className='text-[#10439F] md:text-[20px] mt-[2.5px]' />
                                    <span className='text-base md:text-xl font-semibold'>{extraLiving}:</span>
                                </p>
                                <p className='flex gap-x-[1px] mt-[2px] md:mt-0 md:text-[20px]'>
                                    {
                                        Array(hotel).fill('.').map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className='text-[#FFF455]'
                                            />
                                        ))
                                    }
                                </p>
                            </div>}
                            <div className='flex gap-x-2 items-start justify-start'>
                                <p className='flex gap-x-2'>
                                    <MdFlight className='text-[#10439F] md:text-[20px] rotate-45' />
                                    <span className='text-base md:text-xl font-semibold'> Transportation: </span>
                                </p>
                                <p className='text-base md:text-xl font-normal text-[#10439F] md:text-ellipsis md:text-nowrap'>{transportation}</p>
                            </div>
                            <div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <GiMeal className='text-[#10439F] md:text-[20px]' />
                                    <span className='text-base md:text-xl font-semibold'>Meals: </span>
                                </p>
                                <span className='text-base md:text-xl font-normal text-[#10439F]'>{meals}</span>
                            </div >
                            {cabService && <div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    <FaCar className='text-[#10439F] md:text-[20px]' />
                                    <span className='text-base md:text-xl font-semibold'>{cabService}</span>
                                </p>
                                <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                            </div>}
                            {extra && (<div className='flex gap-x-2'>
                                <p className='flex gap-x-2'>
                                    {packageName === "Hajj" ?
                                        (<MdTour className='text-[#10439F] md:text-[20px]' />)
                                        :
                                        (<MdDinnerDining className='text-[#10439F] md:text-[20px]' />)
                                    }
                                    <span className='text-base md:text-xl font-semibold text-nowrap'>{extra} </span>
                                </p>
                                <span className='text-base md:text-xl font-normal text-[#10439F]'>Included</span>
                            </div>)}
                            {AddOn && <ul className='gap-x-2 list-inside list-disc flex flex-col pl-[5px]'>
                                {
                                    AddOn.map((item, index) => (
                                        <li key={index} className='text-base md:text-lg font-normal text-[#10439F]'>{item}</li>
                                    ))
                                }
                            </ul>
                            }
                        </div>
                    </div>

                    <div className={`w-full flex px-2 md:mb-8 mb:mt-0 mt-5 mb-2 items-center gap-x-5 md:justify-end`}>
                        <p className='text-base capitalize md:text-xl text-[#10439F] font-bold leading-[18px] mt-2 text-right'>
                            ${price}
                            {discount && <span className='block text-xs'>{discount}</span>}
                        </p>
                        {redirectPage && <button
                            onClick={() => navigate("/packages" + redirectPage)}
                            className='px-5 py-1 text-lg font-medium border-[#144cb5] border-2 outline-none hover:bg-[#0d3f8f] rounded-[5px] text-[#144cb5] hover:text-[#fff] cursor-pointer'>
                            Details
                        </button>}
                        <button
                            onClick={handler}
                            className='px-4 py-1 text-lg leading-[18px] md:leading-7 font-medium border-2 border-[#144cb5] bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                            Book now
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PackageCard