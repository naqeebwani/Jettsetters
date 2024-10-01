import React, { useRef, useState } from 'react'
import Logo from '../assets/logos/logo2.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import PopupModal from '../components/shared/PopupModal'
import { cruiseCardData, cruiseServiceCardData } from '../data'
import CruiseImgCard from '../components/CruiseImgCard'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import ContactForm from '../components/shared/ContactForm'
import sendEmailHandler from '../utils/EmailSend';
import { createSheetData } from '../utils/SheetDatabaseServices';


const initialData = {
    from: "",
    to: "",
    phone: "+1",
    email: "",
}

const errors = {
    from: "",
    to: "",
    phone: "",
    email: "",
}

const url = import.meta.env.VITE_SHEET_URL

const Cruise = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(initialData);
    const [formError, setFormError] = useState(errors);
    const location = useLocation();
    const navigate = useNavigate();
    const checkRef = useRef();
    const [check, setChecked] = useState(false);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const handlePhoneInput = (value) => {
        setData((prev) => ({ ...prev, ['phone']: value }));
    }

    const handleCheck = () => {
        if (checkRef.current.checked === true) {
            checkRef.current.checked = false;
        } else {
            checkRef.current.checked = true;
        }
    }

    function checkvalidation(str, type) {

        function checkEmail(email) {
            if (email.includes("@gmail.com") || email.includes("@yahoo.com")) {
                return false
            }
            return true;
        }

        // if (type === "string") {
        //     if (!str || str == " ") {
        //         return true;
        //     }
        // }
        if (type === "number") {
            console.log(str);
            if (!str || str == " " || str.length - 1 < 10) {
                return true;
            }
        }
        else if (type === "email") {
            if (!str || str === " " || checkEmail(str)) {
                return true;
            }
        }

        return false;
    }

    function handleError(name, value) {
        setFormError(prev => ({ ...prev, [name]: value }));
        console.log(formError);
    }

    function checkFields(field, name, value, type) {
        if (checkvalidation(field, type)) {
            handleError(name, value);
            return true;
        } else {
            handleError(name, "");
            return false;
        }
    }

    const formValidation = (data) => {
        let error = false;
        // if (checkFields(data.from, "from", "This field is required", "string")) {
        //     error = true;
        // }
        // if (checkFields(data.to, "to", "This field is required", "string")) {
        //     error = true;
        // }
        if (checkFields(data.email, "email", "Enter valid email", "email")) {
            error = true;
        }
        if (checkFields(data.phone, "phone", "enter valid number", "number")) {
            console.log("hello");
            error = true;
        }
        return error;
    }

    const sumbitHandle = async (e) => {
        e.preventDefault();
        if (!formValidation(data)) {
            setOpen(true);
            await sendEmailHandler("send from the cruise user", data);

            const userData = {
                ...data,
                "query for": "Cruise"
            }
            await createSheetData(url, userData);
        }
    }

    return (
        <>
            <div className='hero-cruise-image lg:min-h-screen w-[100%] md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full flex md:flex-row flex-col gap-y-10 sm:justify-between sm:mb-0 mb-10'>
                    <div className='flex flex-col'>
                        {/* <div className='flex items-center lg:gap-x-[7rem] sm:mt-0 -mt-8'>
                            <img
                                src={Logo}
                                alt="logo"
                                onClick={() => navigate('/')}
                                className='md:w-[200px] md:h-[250px] w-[200px] object-cover cursor-pointer sm:-ml-[2.5rem] -ml-[3.2rem] sm:-mt-8 -mt-5'
                            />
                            <h1 className='logo-head block font-bold lg:text-6xl text-3xl text-[#10439F] lg:text-center lg:ml-0 md:-ml-6'>
                                JETSETTERS
                                <p className='sm:text-2xl text-xl leading-4'>Jet, Set, Go</p>
                            </h1>
                        </div> */}
                        <div className='md:ml-14 sm:ml-7 ml-5 lg:mt-[150] md:mt-[9rem] mt-[2rem]'>
                            <h2 className='text-[#f1f8fc] font-bold lg:text-6xl xl:text-7xl md:text-5xl text-5xl mt-5 drop-shadow-xl shadow-[#000]'>
                                Explore Our Cheapest Cruise Search
                            </h2>
                        </div>
                    </div>

                    <form id='form' onSubmit={sumbitHandle} className='lg:min-w-[450px] lg:w-[60%] md:min-w-[40%] lg:min-h-[calc(100vh-40px)] flex flex-col gap-y-16 bg-gradient-to-r lg:mb-0 mb-10 
                                    md:rounded-none md:rounded-l-[50px] rounded-[30px] shadow-2xl shadow-[#6e3a2b86] from-[#e77240] via-[#d56230] to-[#faaa1ff1] sm:mt-0 mt-[1rem]'>
                        <div className='flex justify-center gap-x-5 mb-5 overflow-hidden'>
                            <button
                                type='button'
                                className={`${location.pathname === '/flight' ? "bg-[#fff]" : "bg-[#00000057] text-[#ffffffac] hover:bg-[#fff] hover:text-[#000]"}  text-center font-bold sm:text-3xl text-2xl sm:w-[150px]
                                                sm:rounded-b-[20px] rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                                onClick={() => navigate('/flight')}
                            >
                                Flights
                            </button>
                            <button
                                type='button'
                                className={`${location.pathname === '/' ? "bg-[#fff] text-[#000]" : "bg-[#00000057] text-[#ffffffac] hover:bg-[#fff] hover:text-[#000]"} text-center font-bold sm:text-3xl text-2xl sm:w-[150px] sm:rounded-b-[20px]
                                            rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                                onClick={() => navigate('/')}
                            >
                                Cruise
                            </button>
                        </div>
                        <div className='flex flex-col justify-between gap-7 items-center'>
                            <div className={`w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative ${formError.email ? "mb-3" : "mb-0"}`}>
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    value={data.email}
                                    placeholder='Email*'
                                    // required
                                    onChange={onChangeHandler}
                                    className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-xl text-[#000000b4] font-medium placeholder:text-[#848383] placeholder:font-normal'
                                />
                                {formError.email && (
                                    <span className='text-[#ffffff] absolute left-[5%] top-[100%] translate-y-1 text-sm'>{formError.email}<strong className='text-red-600'>*</strong></span>
                                )}
                            </div>
                            <div className={`w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative ${formError.phone ? "mb-3" : "mb-0"}`}>
                                <PhoneInput
                                    country={'us'}
                                    value={data.phone}
                                    onChange={handlePhoneInput}
                                    inputProps={{ required: true }}
                                    placeholder='Phone*'
                                    inputStyle={{
                                        width: '100%',
                                        borderRadius: "30px",
                                        padding: "22px 0px",
                                        paddingLeft: "4rem",
                                        border: "2px solid #bbab8cad",
                                        fontSize: "18px",
                                        color: "#000000b4"
                                    }}
                                    buttonStyle={{
                                        width: "15%",
                                        height: "40px",
                                        border: "none",
                                        borderRight: "1px solid #bbab8cad",
                                        marginTop: "3px", paddingLeft: "0.7rem",
                                        borderRadius: "30px 0px 0px 30px",
                                        background: "none"
                                    }}
                                    dropdownStyle={{
                                        borderRadius: "30px 30px 0px 0px",
                                        padding: "10px",
                                    }}
                                />
                                {formError.phone && (
                                    <span className='text-[#ffffff] absolute left-[5%] top-[100%] translate-y-1 text-sm'>{formError.phone}<strong className='text-red-600'>*</strong></span>
                                )}
                            </div>
                            <div className='flex gap-5 px-8'>
                                <input
                                    type="checkbox"
                                    name="agree"
                                    id="agree"
                                    value={check}
                                    required
                                    ref={checkRef}
                                    onChange={e => setChecked(!check)}
                                    className='w-[60px] h-[60px] cursor-pointer rounded-[15px] self-start checked:bg-heading-text aria-checked:text-heading-text'
                                />
                                <p
                                    onClick={() => handleCheck()}
                                    className='hover:text-heading-text text-[#fff] sm:text-base text-xs cursor-pointer mt-2'>
                                    Disclaimer: By submitting your information, you agree to receive future travel deal notifications. We respect your privacy and won't share your data. You can opt out anytime.                                </p>
                            </div>
                        </div>
                        <div className='mx-auto lg:mb-0 mb-10 z-[0] group self-end'>
                            <button
                                type='submit'
                                className='relative text-white bg-[#10439F] group-hover:bg-[#1e66ee] text-xl text-center font-semibold 
                                                px-7 py-3 border-2 border-[#2b355d1b] rounded-l-[30px] transition-colors duration-[0.25s]'>
                                <span className='mr-5'>
                                    BOOK NOW
                                </span>
                                <MdOutlineKeyboardArrowRight
                                    className='absolute text-[#10439F] group-hover:text-[#1e66ee] bg-white text-[53px] rounded-full 
                                        top-[-0.5px] -right-[24px] transition-colors duration-[0.25s]'
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <ContactForm
                title={"Subscribe Now for Amazing Cruise Deals!"}
                description={"Join 2.5 million travelers with insider access to our Exclusive Cruise Offers and Save Big on your next Cruise!"}
                subject={"send from the cruise user for subcribe jetsetters updates"}
            />

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto my-10 sm:p-0 p-4'>
                <div className='my-10'>
                    <h1 className='text-6xl font-medium mt-10 pt-10 pb-5 text-neutral-700'>Explore by Departure Port</h1>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5'>
                        {
                            cruiseCardData.map((data, index) => (
                                <CruiseImgCard
                                    key={index}
                                    data={data}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='my-10'>
                    <h1 className='text-6xl font-medium mt-10 pt-10 pb-5 text-neutral-700'>
                        Explore by Cruise Line
                    </h1>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:gap-10 gap-5 px-2'>
                        {
                            cruiseServiceCardData.map((data, index) => (
                                <div
                                    key={index}
                                    className='w-full h-[300px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
                                            overflow-hidden group cursor-pointer relative'
                                >
                                    <img
                                        src={data.img}
                                        alt={data.title}
                                        loading='lazy'
                                        className='w-full h-full object-cover rounded-sm group-hover:border-[5px] border-[#1f3d4759]'
                                    />

                                    <div className='text-white absolute top-[5px] -left-[100%] text-lg z-[100] px-4 py-4 bg-[#1f3d4738] group-hover:left-[5px] transition-all 
                                            duration-[0.5s] backdrop-blur-[5px] rounded-r-sm font-medium
                                    ' onClick={() => setOpen(true)}
                                    >
                                        Book your choice Cruise Line
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* <div className='bg-[#3060a90c] my-20'>
                <GridTemplate data={cruisePriceData} />
            </div> */}


            {
                open && <PopupModal
                    title={"Cruise"}
                    open={open}
                    setOpen={setOpen}
                />
            }
        </>
    )
}

export default WrapperLayout("Cruise | Jetsetters", "Plan your trip with Jetsetters cruise service")(Cruise);