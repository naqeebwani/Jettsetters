import React from 'react'
import { IoAirplane } from "react-icons/io5";

const SearchAutoComplete = ({ data, name, handler, setList }) => {
    const clickHanlder = (info) => {
        console.log("hello");
        handler((prev) => ({ ...prev, [name]: `${info?.iataCode} ${info.name}, ${info?.address?.cityName}` }));
        setList("");
    }

    return (
        <div
            className='sm:w-[calc(100%-10%)] h-min max-h-[200px] md:max-h-[250px]  absolute bg-white rounded-lg p-2 auto-search sm:translate-x-4 translate-y-[5px] translate-x-0 overflow-y-auto
                        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex flex-col gap-1 z-[1000]'
        >
            {

                data.map((info, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-x-2 border border-neutral-300 px-3 py-[2px] rounded-lg hover:border-[#10439F] cursor-pointer hover:shadow-md'
                        onClick={() => clickHanlder(info)}
                    >
                        <IoAirplane className='text-[#2d85f2] text-lg rotate-[-40deg]' />
                        <div>
                            <p className='text-sm text-neutral-600'><span className='mr-1 uppercase text-[#2d85f2] text-sm font-bold'>{info?.iataCode}</span>{info.name}</p>
                            <p className='text-[10px] text-neutral-400 -mt-1 flex gap-1'>
                                {info?.address?.cityName}, {info?.address?.stateCode}, {info?.address?.countryName}
                            </p>
                        </div>
                    </div>))
            }
        </div>
    )
}

export default SearchAutoComplete