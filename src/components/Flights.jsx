import React from 'react'
import FlightsCard from './FlightsCard';
import {countinentsPricedata} from '../data'
import GridTemplate from './shared/GridTemplate';

const Flights = ({ flightsData }) => {
    return (
        <div className='bg-[#ffffff]'>
            <div className='sm:w-[calc(100%-10%)] mx-2 sm:mx-auto mt-10'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 md:w-[80%]'>Search cheapest fares across these favourite destinations across the words</h1>
                <p className='text-lg sm:text-xl text-neutral-600 font-medium mt-1 sm:mt-2'>Get 20% off upto 40$ on your first booking.</p>
            </div>
            <div className='sm:w-[calc(100%-10%)] mx-2 sm:mx-auto sm:min-h-screen mt-5 flex justify-between flex-col gap-y-10'>
                {
                    flightsData.map((data, index) => (
                        <FlightsCard
                            data={data}
                            key={index}
                        />
                    ))
                }
            </div>


            <div className='bg-[#3060a90c] my-20'>
                <GridTemplate data={countinentsPricedata} />
            </div>
        </div>
    )
}

export default Flights;