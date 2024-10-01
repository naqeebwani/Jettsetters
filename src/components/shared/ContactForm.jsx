import React, { useRef, useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import sendEmailHandler from '../../utils/EmailSend';
import toast from "react-hot-toast";
import { createSheetData } from '../../utils/SheetDatabaseServices'

const url = import.meta.env.VITE_SUBSCRIBE_URL;

const ContactForm = ({ title, description }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("+1");
    const checkRef = useRef();
    const [check, setChecked] = useState(false);
    
    const handlePhoneInput = (value) => {
        setPhone(value);
    }

    const handleCheck = () => {
        if (checkRef.current.checked === true) {
            checkRef.current.checked = false;
        } else {
            checkRef.current.checked = true;
        }
    }

    const sumbitHandle = async (e) => {
        e.preventDefault();
        await sendEmailHandler("", { email, phone });
        toast.success("Thanks for subscribe Jetsetters");
        await createSheetData(url, { email, phone })
    }

    return (
        <div className='bg-[#279bee20]'>
            <div className='sm:w-[calc(100%-10%)] mx-2 sm:mx-auto mt-10 pb-5 p-4'>
                <div className='my-[2rem] flex justify-center items-center flex-col gap-2'>
                    <h1 className='text-center md:text-2xl font-semibold text-neutral-900'>{title}</h1>
                    <p className='text-center md:text-lg text-neutral-700'>{description}</p>
                </div>
                <form onSubmit={sumbitHandle} className='flex flex-col bg-[#fff] p-6 md:w-[70%] mx-auto'>
                    <div className='flex md:flex-row flex-col gap-x-8 gap-y-5'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter your email'
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                            className='border-[#bbbbbbd4] border outline-none hover:outline-[#4154bb] hover:border-none px-5 md:w-[40%] w-full h-[50px]'
                        />
                        <p className=' whitespace-pre-line text-sm text-neutral-600 font-light text-center'>
                            {`And / OR
                            you can totally do both
                        `}
                        </p>
                        <div className='md:w-[40%] w-full h-[50px] bg-[#ffffff] border border-[#bbbbbbd4] hover:border-none outline-none hover:outline-[#4154bb]'>
                            <PhoneInput
                                country={'us'}
                                value={phone}
                                onChange={handlePhoneInput}
                                inputProps={{ required: true }}
                                placeholder='Phone*'
                                required
                                inputStyle={{
                                    width: '100%',
                                    padding: "22px 0px",
                                    paddingLeft: "4rem",
                                    fontSize: "18px",
                                    color: "#000000b4",
                                    border: "none"
                                }}
                                buttonStyle={{
                                    width: "15%",
                                    height: "40px",
                                    border: "none",
                                    marginTop: "3px", paddingLeft: "0.7rem",
                                    background: "none"
                                }}
                                dropdownStyle={{
                                    padding: "10px",
                                }}
                            />
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col items-center gap-x-3 mt-5'>
                        <div className='flex gap-5 mb-5'>
                            <input
                                type="checkbox"
                                name="agree"
                                id="agree"
                                value={check}
                                required
                                ref={checkRef}
                                onChange={e => setChecked(!check)}
                                className='w-[40px] h-[40px] cursor-pointer rounded-lg self-start checked:bg-heading-text aria-checked:text-heading-text'
                            />
                            <p
                                onClick={() => handleCheck()}
                                className='hover:text-heading-text sm:text-sm text-xs cursor-pointer mt-2'>
                                I agree to receive promotional SMS texts via an autodialer, and this agreement isn’t a condition of purchase. I also agree to T&Cs and Privacy Policy. Up to 5 Msgs/month. Msg & Data rates may apply.
                            </p>
                        </div>
                        <button
                            type='submit'
                            className='rounded-lg bg-heading-text px-4 py-2 text-[#FFF] text-lg tracking-wider'
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm