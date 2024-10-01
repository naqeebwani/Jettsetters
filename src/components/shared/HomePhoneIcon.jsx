import React, { useState } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import Plane from '../../assets/gif/trip.gif';
import Ship from '../../assets/gif/ship2.gif';
import PopupModal from './PopupModal';

const HomePhoneIcon = () => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    return (
        <>
            <div
                className='bg-heading-text fixed p-4 sm:top-[80%] sm:right-[2%] rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] top-[85%] right-[5%] z-[1500] cursor-pointer'
                onClick={() => setOpen(true)}
            >
                <div className='m-2'>
                    <BsFillTelephoneFill
                        className='text-[#fff] text-2xl sm:text-4xl animate-pulse'
                    />
                </div>
            </div>

            {open && <PopupModal
                setOpen={setOpen}
                open={open}
                title={pathname === '/flight' ? "Flights" : "/" ? "Cruise" : "best Packages"}
                img={pathname === '/' ? Plane : Ship}
            />}
        </>
    )
}

export default HomePhoneIcon