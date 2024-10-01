import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const GridTemplate = ({data}) => {
    return (
        <div className='sm:w-[calc(100%-10%)] mx-5 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5 gap-y-3 py-10'>
            {
                data.map((countinent, index) => (
                    <div
                        key={index}
                        className='group flex justify-between items-center p-3 bg-[#ffffff] shadow-sm shadow-[#668ad23f] rounded-md cursor-pointer'
                    >
                        <span className='text-lg md:text-xl font-medium text-neutral-700'>{countinent.region}</span>
                        <div className='flex items-center gap-x-1'>
                            <span className='group-hover:text-heading-text font-bold text-base md:text-lg transition text-neutral-800'>${countinent.price}*</span>
                            <MdKeyboardArrowRight
                                className='text-[22px] font-thin text-neutral-700'
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default GridTemplate