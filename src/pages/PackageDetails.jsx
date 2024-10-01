import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import WrapperLayout from '../components/Layouts/WrapperLayout';

import {
    KashmirImg1, KashmirImg2, KashmirImg3,
    KashmirImg4, KashmirImg5, KashmirImg6, KashmirImg7,
    KashmirImg8, KashmirImg9, KashmirImg10, KashmirImg11,
    KashmirImg12, KashmirImg13, KashmirImg14, KashmirImg15,
    KashmirImg16, KashmirSponserLogo, KashmirAllCity
} from '../assets/packages-img'
import { DateRange } from 'react-date-range';
import { MdDinnerDining, MdFlight, MdHotel, MdOutlineCalendarMonth, MdHouseboat } from 'react-icons/md';
import { addDays, format } from 'date-fns';
import { LuUser2 } from 'react-icons/lu';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaCar } from "react-icons/fa";
import { FiMinus, FiPlus } from 'react-icons/fi';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { GiMeal } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';
import PopupModal from '../components/shared/PopupModal';

const silver = {
    img: KashmirImg1,
    title: "Silver",
    transportation: "All transfers and sightseeing as itinerary",
    hotel: 2,
    meals: "Daily Breakfast and Dinner",
    packageName: "kashmir",
    extra: "Sanitised service",
    sideImg: KashmirImg16,
    sideTitle : "Beauty of kashmir",
    sideImgStyle: "w-full h-[350px]",
    price : "543 + flight Bookings"
    // AddOn: ["Shikara ride"],
}
const gold = {
    img: KashmirImg2,
    title: "Gold",
    transportation: "All transfers and sightseeing as itinerary",
    hotel: 3,
    extraLiving: "House boat night",
    meals: "Daily Breakfast and Dinner",
    packageName: "kashmir",
    extra: "Sanitised service",
    AddOn: ["Shikara ride complementary", "Welcome drink on arrival"],
    sideImg : "https://www.picnicwale.com/assets/adventure/shikara-ride-in-kashmir-banner.jpg",
    sideTitle : "Shikara Ride",
    sideImgStyle: "w-full h-[400px]",
    price : "750 + flight bookings"
}
const platinum = {
    img: KashmirImg3,
    title: "Platinum",
    transportation: "All transfers and sightseeing as itinerary",
    hotel: 4,
    extraLiving: "House boat night",
    meals: "Daily Breakfast and Dinner",
    packageName: "kashmir",
    extra: "Sanitised service",
    cabService: "Union cabs in SONAMARG and PAHALGAM",
    AddOn: ["Shikara ride complementary", "Traditional welcome shawl and beverage", "Assistance at Srinagar/Jammu airport"],
    sideImg: KashmirImg15,
    sideTitle: "House Boating",
    sideImgStyle: "w-full h-[440px]",
    price : "1515 + flight bookings"
}

const inc = [
    "Welcome Drink on Ariival.",
    " Shikara Ride.",
    " Stay in Well apointed Rooms.",
    " Daily Breakfast and Dinner.",
    " Assistance at Srinagar/Jammu Airport.",
    " All transfers and sightseeing as per itinerary.",
    " Sanitized service",
    " 24X7 Customer support."
];

const exc = [
    " Flight/Bus/Train",
    "Union cabs in SONAMARG and PAHALGAM",
    " Travel Insurance.",
    " Entrance tickets,pony ride,or any other extra curriculum activity of any point during sightseeing.",
    " GST 5%",
    " Vehicle usage post sightseeing and transfers.",
    " Room Heater.",
    " Room service, Minibar, Laundry, Telephone, Tips, and peronal expenses or anything not mentioned in the inclusion part."
]

const PackageDetails = () => {
    const [open, setOpen] = useState(false);
    const roomRef = useRef();
    const passengerRef = useRef(null);
    const [openUserbox, setOpenUserbox] = useState(false)
    const [room, setRoom] = useState(false);
    const [roomData, setRoomData] = useState({ room: 1 });
    const [arrivaldate, setArrivaldate] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection"
    }]);
    const [departuredate, setDeparturedate] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection"
    }]);

    const [passengerData, setPassengerData] = useState({
        adult: 2,
        children: 0,
    });

    useEffect(() => {
        const close = (e) => {
            if (!passengerRef.current.contains(e.target)) {
                setOpenUserbox(false);
            }
            if (!roomRef.current.contains(e.target)) {
                setRoom(false);
            }
        }
        document.addEventListener('mousedown', close, true);

        return () => {
            document.removeEventListener('mousedown', close, true);
        }
    });

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(data);

    // }


    const location = useLocation();
    const packageName = location.pathname.split('/');
    const packageLevel = packageName[packageName.length - 1].split('-')[0];
    const data = packageLevel == "gold" ? gold : packageLevel == "silver" ? silver : platinum;
    // console.log(data);
    // console.log(openCalendar)
    return (
        <div className=''>
            <div className='w-full h-[200px]'>
                <img
                    src={data.img}
                    alt="truck"
                    className='w-full h-full object-cover object-center'
                />
            </div>
            {/* <div className='w-[100%] sm:px-5 px-3 bg-[#9f8eff44] backdrop-blur-sm'>
                <form
                    onSubmit={submitHandler}
                    className='relative grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 pt-8 md:px-[80px]'>
                    <div className='w-full flex md:gap-x-[20px] gap-x-[25px] items-center'>
                        <label htmlFor="name" className='text-lg w-[25%] font-content font-medium text-neutral-700'>Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder='ex. jhon deo'
                            required
                            className='w-3/4 p-3 placeholder:text-lg pl-5 rounded-md outline-none border-none text-base'
                        />
                    </div>
                    <div ref={passengerRef} className='flex items-center w-full gap-x-[25px] md:gap-x-[20px]'>
                        <label htmlFor="passenger" className='w-[25%] text-lg font-content font-medium text-neutral-700'>No. Passenger</label>
                        <div className='w-3/4 z-[10] relative p-1 rounded-md bg-[#ffffff]'>
                            <div
                                className='w-full flex flex-row gap-2 justify-between items-center px-3 py-[3px] cursor-pointer outline-none text-xl text-[#BBAB8C]'
                                onClick={() => setOpenUserbox(prev => prev ? false : true)}
                            >
                                <span className='flex gap-2'>
                                    <LuUser2 className='text-neutral-500 mb-1 sm:block hidden' size={22} />
                                    <span className='text-[#848383] text-lg'>{`${passengerData.adult} adults · ${passengerData.children} children `}</span>
                                </span>
                                <RiArrowDropDownLine className='text-neutral-900 self-end' size={36} />
                            </div>
                            <div
                                className={`lg:w-[285px] w-[250px] absolute flex flex-col gap-y-2 px-6 py-2 
                                                    ${openUserbox ? "translate-y-[20px] left-[10%] top-[50%] sm:right-5 visible opacity-100" : "translate-y-0 left-[10%] top-[50%] sm:right-5 invisible opacity-0"} 
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
                                    type='button'
                                    className='w-full my-3 text-base text-center px-2 py-1 text-[#006CE4] border border-[#006ae4df] 
                                                rounded-[4px] hover:bg-[#006ae40d] font-medium'
                                    onClick={() => setOpenUserbox(false)}
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-x-5 items-center'>
                        <label htmlFor="arrivalData" className='w-[25%] text-lg font-content font-medium text-neutral-700'>Arrival Date</label>
                        <Calendar
                            date={arrivaldate}
                            setDate={setArrivaldate}
                        />
                    </div>
                    <div className='flex w-full gap-x-5 items-center font-content'>
                        <label htmlFor="departureData" className='w-[25%] text-lg font-content font-medium text-neutral-700'>Departure Date</label>
                        <Calendar
                            date={departuredate}
                            setDate={setDeparturedate}
                        />
                    </div>
                    <div className='flex gap-x-8 items-center font-content'>
                        <label htmlFor="hotelCatagory" className='w-[25%] text-lg font-content font-medium text-neutral-700'>Hotel Catagory</label>
                        <div className='flex lg:gap-x-8 md:gap-x-3 sm:gap-x-8 gap-x-5'>
                            <div className='flex flex-row md:gap-x-3 gap-x-1 items-center'>
                                <span className='text-base text-neutral-800 font-light'>2 star</span>
                                <input
                                    type="radio"
                                    name="hotelCatagory"
                                    id="two"
                                    className='cursor-pointer w-5 h-5 mb-1 border-none outline-none p-0'
                                />
                            </div>
                            <div className='flex flex-row md:gap-x-3 gap-x-1 items-center'>
                                <span className='text-base text-neutral-800 font-light'>3 star</span>
                                <input
                                    type="radio"
                                    name="hotelCatagory"
                                    id="three"
                                    className='cursor-pointer w-5 h-5 mb-1 border-none outline-none p-0'
                                />
                            </div>
                            <div className='flex flex-row md:gap-x-3 gap-x-1 items-center'>
                                <span className='text-base text-neutral-800 font-light'>4 star</span>
                                <input
                                    type="radio"
                                    name="hotelCatagory"
                                    id="four"
                                    className='cursor-pointer w-5 h-5 mb-1 border-none outline-none p-0'
                                />
                            </div>
                        </div>
                    </div>
                    <div ref={roomRef} className='flex md:gap-x-[20px] gap-x-[25px] items-center font-content relative'>
                        <label htmlFor="room" className='w-[25%] text-lg font-content font-medium text-neutral-700'>No. Room</label>
                        <div className='bg-white w-3/4 rounded-md py-[2px] flex justify-normal'
                            onClick={() => setRoom(!room)}>
                            <p className='w-full px-5 py-2 rounded-md text-lg font-content text-neutral-500 font-medium'>Room {roomData.room}</p>
                            <RiArrowDropDownLine className='text-neutral-900 self-end mr-5' size={36} />
                        </div>
                        <div
                            className={`lg:w-[285px] w-[250px] absolute flex flex-col gap-y-2 px-6 py-2 
                                                    ${room ? "translate-y-[20px] left-[30%] top-[50%] sm:right-5 visible opacity-100" : "left-[30%] top-[50%] sm:right-5 invisible opacity-0"} 
                                                    rounded-md p-1 transition-all duration-300 ease-linear z-[1000] bg-[#ffffff] 
                                                    text-[#000] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                                                    `}
                        >
                            <div className='w-full flex items-center mt-5 justify-between'>
                                <span className='text-base font-medium'>Room</span>
                                <Inc_Dec_Box
                                    min={1}
                                    initialValue={roomData}
                                    setData={setRoomData}
                                    name={"room"}
                                    max={10}
                                />
                            </div>
                            <button
                                type='button'
                                className='w-full my-3 text-base text-center px-2 py-1 text-[#006CE4] border border-[#006ae4df] 
                                                rounded-[4px] hover:bg-[#006ae40d] font-medium'
                                onClick={() => setRoom(false)}
                            >
                                Done
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-full mx-auto gap-x-5 md:col-span-2 mb-8 mt-5'>
                        <button
                            type="submit"
                            className='text-center text-xl font-content font-semibold text-white px-5 py-2 rounded-md bg-heading-text
                                        hover:bg-[#0d3f8f] flex items-center justify-center tracking-wider'
                        >
                            Book Now
                        </button>

                        <div className='flex gap-x-3 items-center text-lg font-medium tracking-wider text-heading-text'>
                            <span>Price :</span>
                            <span>$ 0</span>
                        </div>
                    </div>
                </form>
            </div> */}
            <div className='sm:w-[calc(100%-10%)] mx-2 sm:mx-auto mt-10'>
                <div className='flex gap-x-5 items-center'>
                    <div>
                        <div className='mt-8'>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 md:w-[80%] font-content'>Kashmir Tour {data.title} Package</h1>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <div className='flex gap-x-3 md:gap-x-5'>
                                    <p className='flex gap-x-3 items-center'>
                                        <MdHotel className='text-[#10439F] md:text-[30px] text-[25px] mb-1' />
                                        <span className='text-lg md:text-2xl font-semibold'>Hotel: </span>
                                    </p>
                                    <p className='flex gap-x-1 mt-[2px] md:mt-0 md:text-[20px]'>
                                        {
                                            Array(data.hotel).fill('.').map((_, index) => (
                                                <FaStar
                                                    key={index}
                                                    className='text-[#FFF455] text-[30px]'
                                                />
                                            ))
                                        }
                                    </p>
                                </div>
                                {data?.extraLiving && (<div className='flex gap-x-3 md:gap-x-5'>
                                    <p className='flex gap-x-3'>
                                        <MdHouseboat className='text-[#10439F] md:text-[30px] text-[25px]' />
                                        <span className='text-lg md:text-2xl font-semibold text-nowrap'>{data.extraLiving} </span>
                                    </p>
                                    <p className='flex gap-x-[1px] mt-[2px] md:mt-0 md:text-[20px]'>
                                        {
                                            Array(data.hotel).fill('.').map((_, index) => (
                                                <FaStar
                                                    key={index}
                                                    className='text-[#FFF455] text-[30px]'
                                                />
                                            ))
                                        }
                                    </p>
                                </div>)}
                                <div className='flex gap-x-3 md:gap-x-5 items-start justify-start'>
                                    <p className='flex gap-x-3'>
                                        <MdFlight className='text-[#10439F] md:text-[30px] text-[25px] rotate-45' />
                                        <span className='text-lg md:text-2xl font-semibold'> Transportation: </span>
                                    </p>
                                    <p className='text-lg md:text-2xl font-normal text-[#10439F] md:text-ellipsis md:text-nowrap'>{data.transportation}</p>
                                </div>
                                <div className='flex gap-x-3 md:gap-x-5'>
                                    <p className='flex gap-x-3'>
                                        <GiMeal className='text-[#10439F] md:text-[30px] text-[25px]' />
                                        <span className='text-lg md:text-2xl font-semibold'>Meals: </span>
                                    </p>
                                    <span className='text-lg md:text-2xl font-normal text-[#10439F]'>{data.meals}</span>
                                </div >
                                {data?.cabService && <div className='flex gap-x-3 md:gap-x-5'>
                                    <p className='flex gap-x-3'>
                                        <FaCar className='text-[#10439F] md:text-[30px] text-[25px]' />
                                        <span className='text-lg md:text-2xl font-semibold'>{data?.cabService}:</span>
                                    </p>
                                    <span className='text-lg md:text-2xl font-normal text-[#10439F]'>Included</span>
                                </div>}
                                {data.extra && (<div className='flex gap-x-3 md:gap-x-5'>
                                    <p className='flex gap-x-3'>
                                        <MdDinnerDining className='text-[#10439F] md:text-[30px] text-[25px]' />
                                        <span className='text-lg md:text-2xl font-semibold text-nowrap'>{data.extra} </span>
                                    </p>
                                    <span className='text-lg md:text-2xl font-normal text-[#10439F]'>Included</span>
                                </div>)}
                                {
                                    data?.AddOn &&
                                    <ul className='gap-x-2 list-inside list-disc flex flex-col pl-[5px]'>
                                        {
                                            data.AddOn.map((item, index) => (
                                                <li key={index} className='text-lg md:text-xl font-normal text-[#10439F]'>{item}</li>
                                            ))
                                        }
                                    </ul>
                                }
                            </div>
                        </div>

                        <div className='flex md:justify-start justify-center items-center w-full mx-auto gap-x-5 md:col-span-2 my-5'>
                            <button
                                type="submit"
                                onClick={() => setOpen(true)}
                                className='text-center text-xl font-content font-semibold text-white px-5 py-2 rounded-md bg-heading-text
                                        hover:bg-[#0d3f8f] flex items-center justify-center tracking-wider'
                            >
                                Book Now
                            </button>

                            <div className='flex gap-x-3 items-center text-lg font-medium tracking-wider text-heading-text'>
                                <span>Price :</span>
                                <span className='capitalize'>${data.price}/Per Person</span>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-full w-0 md:mt-8 hidden md:block'>
                        <Picture
                            url={data.sideImg}
                            style={data.sideImgStyle}
                            title={data.sideTitle}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-y-4 md:block mb-[5rem] mt-10'>
                    <div className='text-center mb-5 px-1 py-[2px] border-b-black border-b w-max mx-auto border-dashed'>
                        <h4 className='text-3xl text-neutral-900 font-semibold tracking-wider text-center'>Days Details</h4>
                    </div>
                    <DetailDayBox
                        day={1}
                        title={"ARRIVAL:"}
                        description={`
                            You will be met by our representative at Srinagar Airport. He will assit you and transfer you
                            to the pre booked Hotel at Srinagar.`
                        }
                        width={"md:w-[100px]"}
                        height={"md:h-[100px]"}
                        color={"#BCD2E8"}
                    />
                    <DetailDayBox
                        day={2}
                        title={"SONAMARG:"}
                        description={`
                            Wakeup early in the morning have breakfast, check out the Hotel and leave for Sonamarg "Meadow of Gold" is a
                            trekkers heaven a starting point for many treks. Spectacular skies, snowy mountains, huge lakes, strewn with
                            the loveliest alpine flowers at an attitude of 2667 meters and 84 km from Srinagar, it lies in the heart of a
                            beautiful valley by the sindh. Full day at Sonmarg to explore on your own. "Visit the famous Thajiwas Glacier on
                            a pony or trek in Sonmarg. Sonmarg is the starting point of many famous treks and the gateway to Leh .Check
                            inn the Hotel, have dinner and overnight stay.`
                        }
                        width={"md:w-[100px]"}
                        height={"md:h-[150px]"}
                        color={"#91BAD6"}
                    />
                    <DetailDayBox
                        day={3}
                        title={"GULMARG:"}
                        description={`
                            After Early breakfast check out the hotel and leave for India's best ski resort and "meadow of flowers" 65 kms drive. Full
                            day at leisure to explore Gulmarg. Visit the famous Maharani Temple and St Mary's church. Full day enjoy Gulmarg on
                            your own by visiting The Gulmarg Gondola, asia's highest cable car ride. Take pony rides or trek to Khilanmarg. You are
                            free to visit the Golf course too. Gulmarg boasts of the world's highest and asia's longest cable car project Gulmarg
                            Gondola. The ropeway, which has 36 cabins, ferries about 600 tourists to and fro the Afarwat peak and comprises 35
                            towers and 30 stations and takes skiers to a height of 4,390 meters the ropeway project is a joint venture of the Jammu
                            and Kashmir government and French firm Poma Glaski. Check in the hotel in Gulmarg , have dinner and overnight stay`
                        }
                        width={"md:w-[100px]"}
                        height={"md:h-[190px]"}
                        color={"#73A5C6"}
                    />
                    <DetailDayBox
                        day={4}
                        title={"PAHALGAM:"}
                        description={`
                            After breakfast checkout the Hotel and depart to Pahalgam. Pahalgam, better known as 'the valley of shepherds'
                            is situated at an altitude of 2130 meters and is 95 kms from Srinagar. It is at the confluence of sheshnag and lidder
                            streams. Pahalgam is considered as Kashmir's premier resort, pahalgam welcomes you with fresh breeze and the
                            famous lidder river rises from the Kolohoi glacier. Enjoy pahalgam "valley of shepherds".Visit the very beautiful
                            lidder river. After Lunch we would proceed to the Valley of Shepherds to enjoy the beautiful view of Pahalgam.
                            Visit the Betaab Valley, Aru Valley, Chandanwari by union Taxi and visit Biasaran, Valley, by pony or trek on your
                            own. Check in the hotel in Pahalgam , have Dinner and overnight stay.`
                        }
                        width={"md:w-[100px]"}
                        height={"md:h-[180px]"}
                        color={"#528AAE"}
                    />
                    <DetailDayBox
                        day={5}
                        title={"LOCAL SIGHTSEEING:"}
                        description={`
                            Wake up early in the morning , have your delicious breakfast and check out the hotel. After this head for local
                            sightseeing of Kashmir, Srinagar to The famous Mughal gardens which linked thryough a channel to the northeast of
                            Dal Lake, he other famous shoreline garden in the vicinity is Nishat Bagh, 'The Garden of Delight', Chashm-e-Shahi is
                            one of the Mughal gardens built in 1632 AD around a spring by Ali Mardan Khan, a governor of Mughal emperor Shah
                            Jahan as per the orders of the Emperor, as a gift for his eldest son Prince Dara Shikoh, Shalimar Garden, later in the
                            evening Visit Dal Lake The urban lake, is integral to tourism and recreation in Kashmir and is named the "Jewel in the
                            crown of Kashmir". After sightseeing check in the Houseboat and overnight stay.
`
                        }
                        width={"md:w-[100px]"}
                        height={"md:h-[180px]"}
                        color={"#2E5984"}
                    />
                    <DetailDayBox
                        day={6}
                        title={"DEPARTURE:"}
                        description={`
                            Wake up early in the morning. Have yor delicious breakfast and checkout from the Housebat Leave
                            towards Srinagar Airport fo r your Deparrture.`
                        }
                        width={"md:w-[100px]"}
                        height={"md:h-[100px]"}
                        color={"#1E3F66"}
                    />
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div>
                        <h3 className='text-4xl font-semibold text-neutral-700'>INCLUSION</h3>
                        <ul className='list-inside list-item mt-3'>
                            {
                                inc.map((item, index) => (
                                    <li
                                        key={index}
                                        className='list-disc text-lg font-light text-neutral-900'
                                    >{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold text-neutral-700'>EXCLUSION</h3>
                        <ul className='list-inside list-item mt-3'>
                            {
                                exc.map((item, index) => (
                                    <li
                                        key={index}
                                        className='list-disc text-lg font-light text-neutral-900'
                                    >{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='mt-10 mb-5'>
                    <div>
                        <h2 className='text-2xl font-bold font-content'>Trending destinations</h2>
                        <p className='text-sm mt-2 font-normal text-neutral-500font-content'>Most Popular choices for travelers from Kashmir India</p>
                    </div>
                    <div className='my-5'>
                        <div className='w-full flex flex-col md:flex-row lg:gap-x-2 sm:gap-x-3 gap-y-5 justify-between'>
                            <Picture
                                title={"Sonmarg"}
                                url={KashmirImg10}
                                style={"w-[670px] h-[280px]"}
                            />
                            <Picture
                                title={"Pehelgam"}
                                url={KashmirImg8}
                                style={"w-[670px] h-[280px]"}
                            />
                        </div>

                        <div className='flex justify-between gap-x-2 mt-3'>
                            <Picture
                                url={KashmirImg13}
                                title={"Gulmarg"}
                                style={"xl:w-[450px] w-[350px] h-[250px]"}
                                responsiveStyle={""}
                            />
                            <Picture
                                url={KashmirImg12}
                                title={"Srinagar"}
                                style={"xl:w-[450px] w-[330px] h-[250px]"}
                                responsiveStyle={true}
                            />
                            <Picture
                                url={KashmirImg14}
                                title={"Mughal Garden"}
                                style={"xl:w-[450px] w-[330px] h-[250px]"}
                                responsiveStyle={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#5072a3] -mb-11'>
                <div className='sm:w-[calc(100%-10%)] mx-2 sm:mx-auto mt-10'>
                    <div className='flex items-center sm:justify-center justify-between md:p-2'>
                        <img
                            src={KashmirSponserLogo}
                            alt='Sponser'
                            className='w-[150px] h-[120px] object-cover -ml-6 md:ml-0'
                        />
                        <p className='text-xl text-[#fff] font-medium'>
                            In affiliation with Innline Tour & Travels
                        </p>
                    </div>
                </div>
            </div>


            {
                open && <PopupModal open={open} setOpen={setOpen} title={"Kashmir Package"} />
            }
        </div >
    )
}

// In affiliation with Innline Tour & Travels

export default WrapperLayout()(PackageDetails)


const Inc_Dec_Box = ({ min = 0, max, initialValue, name, setData }) => {
    // console.log(initialValue);
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

const Calendar = ({ date, setDate }) => {
    const [openCalendar, setOpenCalendar] = useState(false);
    return (
        <div className='p-1 rounded-md bg-[#ffffff] relative cursor-pointer w-3/4'>
            <div className='w-full flex gap-x-5 px-3 py-2 text-xl font-medium text-[#848383] items-center'
                onClick={() => setOpenCalendar(!openCalendar)}
            >
                <MdOutlineCalendarMonth className='text-[#848383] md:text-[22px] text-[18px] mb-1' />
                {/* <span className='text-[#848383] md:text-base text-sm'>
                                            Check-in Date — Check-out Date
                                        </span> */}
                <span className='text-sm sm:text-base'>{format(date[0].startDate, 'MM/dd/yyyy',)}</span>
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
    )
}

const DetailDayBox = ({ day, title, description, width, height, color }) => {
    return (
        <div className='flex lg:flex-row flex-col w-full items-center'>
            <div className={`bg-[red] flex items-center ${height + " " + width} w-full justify-center border border-[#000] border-r-0 p-2`} style={{ backgroundColor: color }}>
                <p className='lg:-rotate-[90deg] font-semibold text-lg text-neutral-800 text-center'>{day} DAY</p>
            </div>
            <div className={`border border-[#000] ${height} w-full md:border-l-0 px-8 flex flex-col gap-x-4 justify-center`}>
                <h4 className='text-xl font-bold text-neutral-800 text-center my-3 md:my-0 md:text-start'>{title}</h4>
                <p className='text-base font-content text-neutral-700'>{description}</p>
            </div>
        </div>
    )
}

const Picture = ({ url, title, style, responsiveStyle }) => {
    return (
        <div className='relative rounded-lg'>
            <div className={`absolute top-0 left-0 px-5 py-3 w-full flex items-center gap-x-3 bg-gradient-to-b from-[#000000e2] to-[#ffffff06] rounded-t-lg ${responsiveStyle}`}>
                <span className={`sm:text-2xl text-lg font-bold text-white drop-shadow-xl shadow-black ${responsiveStyle}`}>{title}</span>
            </div>
            <img
                src={url}
                alt={title}
                loading='lazy'
                className={`${style} rounded-md object-cover bg-contain`}
            />
        </div>
    )
}