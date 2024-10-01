import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/logos/logo.png'
import { MdOutlineKeyboardArrowRight, MdOutlineLuggage, MdOutlineCalendarMonth } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { FiPlus, FiMinus } from "react-icons/fi";
import PopupModal from '../components/shared/PopupModal';
import Flights from '../components/Flights';
import { flightsData } from '../data';
import SearchAutoComplete from '../components/shared/SearchAutoComplete';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Plane from '../assets/gif/plane.gif';
import WrapperLayout from '../components/Layouts/WrapperLayout';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import ContactForm from '../components/shared/ContactForm';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns/format'
import addDays from 'date-fns/addDays';
import sendEmailHandler from '../utils/EmailSend';
import { getAirportListIataAndCIty } from '../utils/GetAirport';
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

const url = import.meta.env.VITE_SHEET_URL;

const FlightsPage = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(initialData);
    const [formError, setFormError] = useState(errors);
    const [openUserbox, setOpenUserbox] = useState(false)
    const [openCalendar, setOpenCalendar] = useState(false);
    const [fromList, setFromList] = useState([]);
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);
    const [toList, setToList] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const ref = useRef();
    const form = useRef(null);
    const checkRef = useRef();
    const fromRef = useRef();
    const toRef = useRef();
    const passengerRef = useRef(null);
    const [check, setChecked] = useState(false);
    const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
    // console.log(token)

    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection"
    }]);

    const handlePhoneInput = (value) => {
        setData((prev) => ({ ...prev, ['phone']: value }));
    }

    const hideOnClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpenCalendar(false);
        }
    }

    const hideOnEscape = (e) => {
        // console.log(e.key);
        if (e.key === 'Escape') {
            setOpenCalendar(false);
        }
    }

    useEffect(() => {
        const close = (e) => {
            if (!passengerRef.current.contains(e.target)) {
                setOpenUserbox(false);
            }

            if (!fromRef.current.contains(e.target)) {
                setOpenFrom(false);
            }

            if (!toRef.current.contains(e.target)) {
                setOpenTo(false);
            }
        }

        document.addEventListener('mousedown', close, true);
        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);

        return () => {
            document.removeEventListener('mousedown', close, true);
            document.addEventListener('keydown', hideOnEscape, true);
            document.addEventListener('click', hideOnClickOutside, true);
        }
    });

    const getSearchDataFrom = async (city) => {
        const aiportList = await getAirportListIataAndCIty(city, token);
        setFromList(aiportList);
    }
    const getSearchDataTo = async (city) => {
        const aiportList = await getAirportListIataAndCIty(city, token);
        setToList(aiportList);
    }

    function checkvalidation(str, type) {

        function checkEmail(email) {
            if (email.includes("@gmail.com") || email.includes("@yahoo.com")) {
                return false
            }
            return true;
        }

        if (type === "string") {
            if (!str || str == " ") {
                return true;
            }
        }
        else if (type === "number") {
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
        if (checkFields(data.from, "from", "This field is required", "string")) {
            error = true;
        }
        if (checkFields(data.to, "to", "This field is required", "string")) {
            error = true;
        }
        if (checkFields(data.email, "email", "Enter valid email", "email")) {
            error = true;
        }
        if (checkFields(data.phone, "phone", "enter valid number", "number")) {
            console.log("hello");
            error = true;
        }
        return error;
    }

    useEffect(() => {
        if (data.from !== "") {
            getSearchDataFrom(data.from)
        } else {
            setFromList(null);
        }
    }, [data.from])

    useEffect(() => {
        if (data.to !== "") {
            getSearchDataTo(data.to);
        } else {
            setToList(null);
        }
    }, [data.to]);

    const [passengerData, setPassengerData] = useState({
        adult: 2,
        children: 0,
    });

    const handleCheck = () => {
        if (checkRef.current.checked === true) {
            checkRef.current.checked = false;
        } else {
            checkRef.current.checked = true;
        }
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    // console.log(formError);

    const sumbitHandle = async (e) => {
        e.preventDefault();
        console.log(formValidation(data));
        if (!formValidation(data)) {
            setOpen(true);
            await sendEmailHandler(
                "Send from the flight user",
                {
                    data,
                    passengerData,
                    date: {
                        "From Date": format(date[0].startDate, 'MM/dd/yyyy'),
                        "To Date": format(date[0].endDate, 'MM/dd/yyyy')
                    }
                });

            const userData = {
                email: data.email,
                phone: data.phone,
                from: data.from,
                to: data.to,
                passenger: `adult ${passengerData.adult}, children ${passengerData.children}`,
                date: `${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`,
                "query for": "Flight"
            }

            await createSheetData(url, userData);
        }
        // setData(initialData);
        console.log(formError);
    }

    return (
        <>
            <div>
                <div className='hero-flight-image lg:min-h-screen w-[100%] md:pl-10 md:px-0 sm:px-5 px-3'>
                    <div className='w-full flex md:flex-row flex-col gap-y-10 sm:justify-between sm:mb-0 mb-10'>
                        <div className=''>
                            {/* <div className='flex items-center lg:gap-x-[8rem] sm:mt-3'>
                                <Link to="/" className="cursor-pointer">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className='md:w-[200px] md:h-[200px] sm:w-[150px] w-[120px] object-fill'
                                    />
                                </Link>
                                <h1 className='logo-head font-bold lg:text-6xl text-4xl text-[#10439F] lg:text-center lg:ml-0 md:-ml-6'>
                                    JETSETTERS
                                    <p className='sm:text-2xl text-xl leading-4'>Jet, Set, Go</p>
                                </h1>
                            </div> */}
                            <div className='md:ml-14 sm:ml-7 ml-5 md:mt-[10rem] mt-[2rem]'>
                                <h2 className='text-[#302626] font-bold lg:text-6xl xl:text-7xl md:text-5xl text-5xl mt-5'>
                                    Explore Our Cheapest Flight Search
                                </h2>
                            </div>
                        </div>

                        <form ref={form} id='form' onSubmit={sumbitHandle} className='lg:min-w-[450px] lg:w-[60%] md:min-w-[40%] lg:min-h-[calc(100vh-40px)] flex flex-col bg-gradient-to-r md:mt-[1px] lg:mb-0 mb-10 
                                    md:rounded-none md:rounded-l-[50px] rounded-[30px] shadow-2xl shadow-[#6e3a2b86] from-[#e77240] via-[#d56230] to-[#faaa1ff1]'>

                            <div className='flex justify-center gap-x-2'>
                                <button
                                    type='button'
                                    className={`${location.pathname === '/flight' ? "bg-white" : "bg-[#00000057] text-[#ffffffac] hover:bg-white hover:text-[#000]"}  text-center font-bold sm:text-3xl text-2xl sm:w-[150px]
                                                sm:rounded-b-[20px] rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                                    onClick={() => navigate('/flight')}
                                >
                                    Flights
                                </button>
                                <button
                                    type='button'
                                    className={`${location.pathname === '/cruise' ? "bg-white text-[#000]" : "bg-[#00000057] text-[#ffffffac] hover:bg-white hover:text-[#000]"} text-center font-bold sm:text-3xl text-2xl sm:w-[150px] sm:rounded-b-[20px]
                                            rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                                    onClick={() => navigate('/')}
                                >
                                    Cruise
                                </button>
                            </div>

                            <div className='flex flex-col justify-between gap-4 sm:gap-5 items-center'>
                                <div ref={fromRef} className={`w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative ${formError.from ? "mb-3" : "mb-0"}`}>
                                    <input
                                        type="search"
                                        name='from'
                                        id='from'
                                        value={data.from}
                                        placeholder='From*'
                                        // required
                                        onChange={onChangeHandler}
                                        onFocus={() => setOpenFrom(true)}
                                        // onBlur={() => setOpenFrom(false)}
                                        className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-lg text-[#000000b4] font-medium placeholder:text-[#848383]'
                                    />
                                    {formError.from && (
                                        <span className='text-[#ffffff] absolute left-[5%] top-[100%] translate-y-1 text-sm'>{formError.from}<strong className='text-red-600'>*</strong></span>
                                    )}
                                    {openFrom && fromList && fromList.length > 0 ?
                                        (<SearchAutoComplete
                                            data={fromList}
                                            name={'from'}
                                            handler={setData}
                                            setList={setFromList}
                                        />)
                                        :
                                        ("")
                                    }
                                </div>
                                <div ref={toRef} className={`w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative ${formError.to ? "mb-3" : "mb-0"}`}>
                                    <input
                                        type="search"
                                        name='to'
                                        id='to'
                                        value={data.to}
                                        placeholder='To*'
                                        // required
                                        onChange={onChangeHandler}
                                        onFocus={() => setOpenTo(true)}
                                        // onBlur={() => setOpenTo(false)}
                                        className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-lg text-[#000000b4] font-medium placeholder:text-[#848383]'
                                    />
                                    {formError.to && (
                                        <span className='text-[#ffffff] absolute left-[5%] top-[100%] translate-y-1 text-sm'>{formError.to}<strong className='text-red-600'>*</strong></span>
                                    )}
                                    {openTo && toList && toList.length > 0 ?
                                        (<SearchAutoComplete
                                            data={toList}
                                            name={'to'}
                                            handler={setData}
                                            setList={setToList}
                                        />)
                                        :
                                        ("")
                                    }
                                </div>
                                <div ref={ref} className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative cursor-pointer'>
                                    <div className='w-full flex gap-x-5 px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] text-xl font-medium text-[#848383]'
                                        onClick={() => setOpenCalendar(!openCalendar)}
                                    >
                                        <MdOutlineCalendarMonth className='text-[#848383] md:text-[22px] text-[18px] mt-1' />
                                        {/* <span className='text-[#848383] md:text-base text-sm'>
                                            Check-in Date — Check-out Date
                                        </span> */}
                                        <span className='text-sm sm:text-base py-1'>{format(date[0].startDate, 'MM/dd/yyyy',)} to {format(date[0].endDate, 'MM/dd/yyyy',)}</span>
                                    </div>
                                    {openCalendar && <div className='absolute flex flex-col top-[50%] lg:translate-x-[10%] translate-y-8 -translate-x-[10%] -left-2 rounded-md p-1 bg-[#ffffff] 
                                            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-transform duration-150 z-[500]'>
                                        <DateRange
                                            className='dateRange'
                                            ranges={date}
                                            onChange={item => setDate([item.selection])}
                                            editableDateInputs={true}
                                            // months={2}
                                            minDate={new Date()}
                                            showMonthAndYearPickers={false}
                                            scroll={{ enabled: false }}
                                            ariaLabels={{ prevButton: "prev" }}
                                        />

                                        <button
                                            className='w-full text-center py-1 text-[#006CE4] border border-[#006ae4df] 
                                                        rounded-md text-lg hover:bg-[#006ae40d] font-medium'
                                            onClick={() => setOpenCalendar(false)}
                                        >
                                            Done
                                        </button>
                                    </div>
                                    }
                                </div>
                                <div ref={passengerRef} className='w-3/4 p-1 z-[10] relative rounded-[30px] bg-[#ffffff]'>
                                    <div
                                        className='w-full flex flex-row gap-2 justify-between items-center px-3 py-1 
                                                    border-[2px] rounded-[30px] border-[#bbab8cad] cursor-pointer 
                                                    outline-none text-xl text-[#BBAB8C]'
                                        onClick={() => setOpenUserbox(prev => prev ? false : true)}
                                    >
                                        <span className='flex gap-2'>
                                            <LuUser2 className='text-neutral-500 mb-1 sm:block hidden' size={22} />
                                            <span className='text-[#848383]'>{`${passengerData.adult} adults · ${passengerData.children} children `}</span>
                                        </span>
                                        <RiArrowDropDownLine className='text-neutral-900 self-end' size={36} />
                                    </div>
                                    <div
                                        className={`lg:w-[285px] w-[250px] absolute flex flex-col gap-y-2 px-6 py-2 
                                                    ${openUserbox ? "translate-y-[20px] sm:right-5 visible opacity-100" : "translate-y-0 sm:right-5 invisible opacity-0"} 
                                                    rounded-md p-1 transition-all duration-300 ease-linear z-[1000] bg-[#ffffff] 
                                                    text-[#000] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                                                    `}
                                    >
                                        <div className='w-full flex items-center mt-5 justify-between'>
                                            <span className='text-base font-medium'>Adults</span>
                                            <Inc_Dec_Box
                                                min={1}
                                                initialValue={passengerData}
                                                setData={setPassengerData}
                                                name={"adult"}
                                            />
                                        </div>
                                        <div className='w-full flex items-center justify-between'>
                                            <span className='text-base font-medium'>Children</span>
                                            <Inc_Dec_Box
                                                min={0}
                                                initialValue={passengerData}
                                                setData={setPassengerData}
                                                name={"children"}
                                            />
                                        </div>

                                        <button
                                            className='w-full my-3 text-base text-center px-2 py-1 text-[#006CE4] border border-[#006ae4df] 
                                                rounded-[4px] hover:bg-[#006ae40d] font-medium'
                                            onClick={() => setOpenUserbox(false)}
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
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
                                        name="phone"
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
                                    <p onClick={() => handleCheck()}
                                        className='hover:text-heading-text text-[#fff] sm:text-base text-xs cursor-pointer mt-2'>
                                        Disclaimer: By submitting your information, you agree to receive future travel deal notifications. We respect your privacy and won't share your data. You can opt out anytime.                                    </p>
                                </div>
                            </div>

                            <div className='mx-auto lg:mb-5 mb-10 z-[0] group'>
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
                {
                    open && <PopupModal open={open} setOpen={setOpen} title={"Flights"} img={Plane} />
                }
            </div>

            <ContactForm
                title={"Fly For Less – Subscribe Now for Amazing Flight Deals!"}
                description={"Join 2.5 million travelers with insider access to our Exclusive Flight Offers and Save Big on your next flight!"}
                subject={"send from the cruise user for subcribe jetsetters updates"}
            />

            <Flights flightsData={flightsData} />
        </>
    )
}



const Inc_Dec_Box = ({ min = 0, max, initialValue, name, setData }) => {
    const handleIncrement = () => {
        setData({ ...initialValue, [name]: initialValue[name] + 1 });
    }
    const handleDecrement = () => {
        if (initialValue[name] > min) {
            setData({ ...initialValue, [name]: initialValue[name] - 1 });
        }
    }
    return (
        <div className='border-2 border-[#C5C5C5] rounded-[4px] px-2 py-1 min-w-[80px] w-[120px] flex justify-center items-center gap-x-5'>
            <FiMinus
                onClick={handleDecrement}
                size={20}
                className={min >= initialValue[name] ? "cursor-none text-[#C5C5C5]" : "cursor-pointer text-[#006CE4]"}
            />
            <span className='text-[#000000] text-lg'>{initialValue[name]}</span>
            <FiPlus
                onClick={handleIncrement}
                size={20}
                className='cursor-pointer text-[#006CE4]'
            />
        </div>
    )
}



export default WrapperLayout("Flights | Jetsetters", "Book your first flight in wallet friendly budget")(FlightsPage);
