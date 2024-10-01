import React, { useState } from 'react'
import PopupModal from './shared/PopupModal';
import Ship from '../assets/gif/ship1.gif'

const CruiseImgCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='relative w-full h-[400px] rounded-[20px] overflow-hidden border-[8px] border-[#fff] group'>
            <img
                src={data.img}
                alt="card"
                loading='lazy'
                className='w-full h-full object-cover rounded-[15px]'
            />
            <div className='absolute flex sm:flex-col flex-row justify-between sm:items-start items-center sm:justify-center w-full sm:h-full h-[40%] sm:top-0 bottom-0 sm:-right-[100%] text-[#fff] p-[30px] 
                            sm:bg-[#1f3d4738] sm:backdrop-blur-[5px] rounded-[15px] sm:group-hover:right-0 transition-all duration-[1.5s] sm:bg-bg-image-none bg-gradient-to-b
                            to-[#000] via-[#151c1fc4] from-[#ffffff0e]'
            >
                <div>
                    <h1 className='uppercase sm:text-[50px] text-4xl font-medium leading-[3rem]'>{data.title}</h1>
                    <p className='capitalize text-base font-medium md:text-lg md:font-semibold'>Starts from $ {data.price}/p.p </p>
                </div>
                <button className='w-[120px] text-[#1f3d47] bg-[#8fabba] rounded-[5px] capitalize border-none outline-none 
                                font-medium cursor-pointer p-2 hover:bg-[#378dbc] transition md:self-auto self-end'
                    onClick={() => setOpen(true)}
                >
                    Book now
                </button>
            </div>

            {
                open && <PopupModal
                    title={"Cruise"}
                    open={open}
                    setOpen={setOpen}
                    img={Ship}
                />
            }
        </div>
    )
}

export default CruiseImgCard