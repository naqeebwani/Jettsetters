import React from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import { LuLoader2 } from "react-icons/lu";

const Contact = () => {
    return (
        <div className='h-[calc(100vh-200px)] flex flex-col gap-4 justify-center items-center'>
            <h1 className='2xl:text-7xl text-center sm:text-5xl text-4xl font-bold text-main-bg'>Contact Us page is under maintenance</h1>
            <LuLoader2
                className='2xl:text-[64px] text-[50px] font-bold text-main-bg animate-spin'
            />
        </div>
    )
}

export default WrapperLayout('Contact Us', '')(Contact);