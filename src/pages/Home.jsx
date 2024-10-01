import React, { useState } from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import { MdOutlineLuggage, MdOutlineCalendarMonth } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// import Button from '../components/Button';
// import { IndiaIcon } from '../assets/headerIcons';
// import Carousel from '../components/Carousel';
import { explore_India, browseImg, plannerImg } from '../data';

const Home = () => {
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openUserbox, setOpenUserbox] = useState(false);
    const [plannerSlide, setPlannerSlide] = useState("City");
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    });

    const slideClickHandler = (title) => {
        setPlannerSlide(title)
    }

    return (
        <>
            <div className='bg-[#003B95] text-white'>
                <div className='sm:w-[calc(100%-28%)] w-full sm:px-0 px-4 relative mx-auto pt-12 pb-5'>

                    <div className='mt-3 mb-14'>
                        <h1 className='text-4xl font-extrabold mb-2'>Find your next stay</h1>
                        <p className='text-[22px] font-normal'>Search deals on hotels, homes, and much more...</p>
                    </div>

                    <div className='flex md:absolute md:-translate-y-[85%] md:p-0 pr-2 z-50 md:flex-row flex-col rounded-lg bg-[#FFB700] mt-10 w-full'>
                        <div className='flex items-center md:w-[31%] w-full bg-[#ffffff] my-1 mx-1 p-2 rounded-lg gap-1'>
                            <MdOutlineLuggage className='text-[#c5c5c5] md:text-[22px] text-[18px]' />
                            <input
                                type="search"
                                name="location"
                                id="location"
                                placeholder='Where are you going?'
                                className='outline-none border-none text-neutral-900 placeholder:text-neutral-900 md:placeholder:text-base placeholder:text-sm'
                            />
                        </div>
                        <div className='relative md:w-[30%] w-full bg-[#ffffff] my-1 p-2 rounded-lg mx-[2px] cursor-pointer'>
                            <div
                                className='flex flex-row items-center gap-1 mt-[3px]'
                                onClick={() => setOpenCalendar(!openCalendar)}
                            >
                                <MdOutlineCalendarMonth className='text-[#c5c5c5] md:text-[22px] text-[18px]'/>
                                <span className='text-neutral-900 md:text-base text-sm'>
                                    Check-in Date — Check-out Date
                                </span>
                            </div>
                            {openCalendar && <div className='absolute flex top-[50%] translate-y-8 translate-x-2 -left-2 rounded-md p-1 bg-[#ffffff] 
                                            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-transform duration-150'>
                                <DateRangePicker
                                    className='dateRange'
                                    ranges={[date]}
                                    onChange={() => { }}
                                    // months={2}
                                    minDate={new Date()}
                                    showMonthAndYearPickers={false}
                                    scroll={{ enabled: false }}
                                    ariaLabels={{ prevButton: "prev" }}
                                />
                            </div>
                            }
                        </div>

                        <div className='relative md:w-[30%] w-full bg-[#ffffff] my-1 p-2 rounded-lg mx-[2px] cursor-pointer'>
                            <div
                                className='flex flex-row items-center gap-1 justify-between'
                                onClick={() => setOpenUserbox(!openUserbox)}
                            >
                                <div className='flex items-center gap-x-2 justify-center'>
                                    <LuUser2 className='text-[#c5c5c5] md:text-[22px] text-[18px]'/>
                                    <span className='text-neutral-900 md:text-base text-sm'>2 adults · 0 children · 1 room</span>
                                </div>
                                <RiArrowDropDownLine className='text-neutral-900' size={30} />
                            </div>

                            {
                                openUserbox && (
                                    <div
                                        className='w-[285px] absolute flex flex-col gap-y-2 px-6 py-2 top-[50%] translate-y-8 translate-x-2 -left-2 rounded-md p-1 bg-[#ffffff] text-[#000]
                                        shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition-transform duration-150'
                                    >
                                        <div className='w-full flex items-center mt-5 justify-between'>
                                            <span className='text-base font-medium'>Adults</span>
                                            <Inc_Dec_Box
                                                min={1}
                                                initialValue={2}
                                            />
                                        </div>
                                        <div className='w-full flex items-center justify-between'>
                                            <span className='text-base font-medium'>Children</span>
                                            <Inc_Dec_Box
                                                min={0}
                                                initialValue={0}
                                            />
                                        </div>
                                        <div className='w-full flex items-center justify-between'>
                                            <span className='text-base font-medium'>Room</span>
                                            <Inc_Dec_Box
                                                min={1}
                                                initialValue={1}
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
                                )
                            }
                        </div>

                        <button
                            className='bg-[#006CE4] md:px-6 md:py-0 py-2 md:my-1 my-2 ml-[2px] md:mr-1 text-xl font-semibold rounded-md shadow-lg'>
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white text-black mt-10'>
                <div className='sm:w-[calc(100%-28%)] sm:p-0 px-4 w-full mx-auto text-[#000]'>
                    <div className='flex items-center gap-x-2 mt-2'>
                        <input
                            type="checkbox"
                            name='flightcheckbox'
                            id='flightcheckbox'
                            className='w-[24px] h-5'
                        />
                        <label
                            htmlFor="flightcheckbox"
                            className='text-sm font-extralight text-neutral-700'
                        >
                            I’m looking for flights
                        </label>
                    </div>


                    {/* offers */}
                    <div className='mb-5 mt-7'>
                        <div>
                            <h2 className='text-2xl font-bold'>Offers</h2>
                            <p className='text-sm mt-2 font-normal text-neutral-500'>Promotions, deals, and special offers for you</p>
                        </div>

                        <div className='flex lg:flex-row flex-col my-5 gap-5'>
                            <div className='lg:w-[50%] w-full flex flex-row rounded-lg items-center justify-between px-5 py-5 border border-[#C5C5C5]'>
                                <div className='flex flex-col gap-3'>
                                    <div>
                                        <h3 className='text-xl font-bold'>Fly away to your dream vacation</h3>
                                        <p className='w-[80%] text-sm font-normal text-neutral-700'>Get inspired – compare and book flights with flexibility</p>
                                    </div>
                                    <Button
                                        title={"Search for flights"}
                                        text={"text-white"}
                                        bg={"bg-[#006CE4]"}
                                        style={"self-start"}
                                    />
                                </div>

                                <img
                                    src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o="
                                    alt="offers"
                                    width={110}
                                    height={110}
                                    className='bg-contain'
                                />
                            </div>

                            <div className='lg:w-[50%] w-full flex flex-row rounded-lg items-center justify-between px-5 py-2 bg-offer-image bg-no-repeat bg-cover'>
                                <div className='flex flex-col gap-3 text-[#fff]'>
                                    <div>
                                        <h3 className='text-xl font-bold text-[#fff]'>Seize the moment!</h3>
                                        <p className='w-[80%] text-sm font-normal text-[#fff]'>Save 15% or more when you book and stay before October 1, 2024</p>
                                    </div>
                                    <Button
                                        title={"Find Gateway Deals"}
                                        text={"text-white"}
                                        bg={"bg-[#006CE4]"}
                                        style={"self-start"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Trending Destination  */}
                    <div className='mt-10 mb-5'>
                        <div>
                            <h2 className='text-2xl font-bold'>Trending destinations</h2>
                            <p className='text-sm mt-2 font-normal text-neutral-500'>Most Popularchoices for travelers from India</p>
                        </div>

                        <div className='my-5'>
                            <div>
                                <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5 justify-between'>
                                    <Picture
                                        title={"New Delhi"}
                                        url={"https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="}
                                        style={"w-[650px] h-[250px]"}
                                    />
                                    <Picture
                                        title={"Bangalore"}
                                        url={"https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="}
                                        style={"w-[650px] h-[250px]"}
                                    />
                                </div>

                                <div className='flex justify-between gap-x-2 mt-3'>
                                    <Picture
                                        url={"https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="}
                                        title={"Mumbai"}
                                        style={"xl:w-[450px] w-[350px] h-[250px]"}
                                        responsiveStyle={""}
                                    />
                                    <Picture
                                        url={"https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="}
                                        title={"Chennai"}
                                        style={"xl:w-[450px] w-[330px] h-[250px]"}
                                        responsiveStyle={true}
                                    />
                                    <Picture
                                        url={"https://cf.bstatic.com/xdata/images/city/600x600/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o="}
                                        title={"Ooty"}
                                        style={"xl:w-[450px] w-[330px] h-[250px]"}
                                        responsiveStyle={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Explore India  */}
                    <div className="mt-2 mb-5">
                        <div>
                            <h2 className='text-2xl font-bold'>Explore India</h2>
                            <p className='text-sm mt-2 font-normal text-neutral-500'>These popular destinations have a lot to offer</p>
                        </div>
                        <div>
                            <Carousel
                                cardsdata={explore_India}
                                slidesToShow={6}
                                styles={"w-[300px] h-[150px]"}
                            />
                        </div>
                    </div>

                    {/* Browse by property type */}
                    <div>
                        <div>
                            <h2 className='text-2xl font-bold'>Browse by property type</h2>
                        </div>

                        <div className='my-3'>
                            <Carousel
                                cardsdata={browseImg}
                                slidesToShow={4}
                                styles={"w-[350px] h-[220px]"}
                            />
                        </div>
                    </div>

                    {/* Quick and easy trip planner */}
                    <div className='mt-5 mb-5'>
                        <div>
                            <h2 className='text-2xl font-bold'>Quick and easy trip planner</h2>
                            <p className='text-sm mt-2 font-normal text-neutral-500'>Pick a vibe and explore the top destinations in India</p>
                        </div>

                        <div>
                            <div className='flex gap-x-2 my-5'>
                                {
                                    plannerImg.map((data, index) => (
                                        <button
                                            key={index}
                                            className={`border rounded-[30px] px-4 py-3 flex items-center gap-2 
                                                        ${data.title === plannerSlide ? "text-[#006CE4] border-[#006CE4] bg-[#006ae40e]" :
                                                    "text-neutral-700 hover:bg-[#C5C5C5] transition duration-200"}`}
                                            onClick={() => slideClickHandler(data.title)}
                                        >
                                            <data.Icon
                                                className={`${data.title === plannerSlide ? "text-[#006CE4]" : "text-neutral-700"} hidden sm:block`}
                                            />
                                            <span className={``}>{data.title}</span>
                                        </button>
                                    ))
                                }
                            </div>

                            <div>
                                {
                                    plannerImg.map((data, index) => (
                                        data.title === plannerSlide &&
                                        <Carousel
                                            key={index}
                                            cardsdata={data.imgData}
                                            styles={"w-[300px] h-[150px]"}
                                            slidesToShow={6}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* next trip */}
                    <div>
                        <h2 className='text-2xl font-bold'>Get inspiration for your next trip</h2>
                        <div className='flex justify-between md:flex-row flex-col lg:gap-0 gap-x-5'>
                            <div className='relative my-5 lg:w-[450px] w-[350px] lg:h-[350px] h-[300px] overflow-hidden group rounded-lg '>
                                <div
                                    className='rounded-lg bg-trip-image w-full h-full group-hover:scale-[1.1] transition duration-300'
                                >
                                </div>
                                <div className='absolute text-white bottom-0 p-2 rounded-b-lg z-[100] bg-gradient-to-b from-[#ffffff09] to-[#000000b3]'>
                                    <h4 className='font-bold md:text-xl text-lg'>
                                        5 of the best hotels in Los Angeles
                                    </h4>
                                    <p className='md:text-sm text-xs'>
                                        From Hollywood to Beverly Hills discover
                                        5 of the best hotels in Los Angeles for
                                        your stay
                                    </p>
                                </div>
                            </div>
                            <div className='lg:flex flex-col gap-y-5 my-auto hidden'>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                            </div>
                            <div className='lg:flex flex-col gap-y-5 my-auto hidden'>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                                <p className='w-4 h-4 bg-[#c5c5c56a] rounded-full'></p>
                            </div>
                            <div className='relative my-5 lg:w-[450px] w-[350px] lg:h-[350px] h-[300px] overflow-hidden group rounded-lg '>
                                <div
                                    className='rounded-lg bg-trip-image w-full h-full group-hover:scale-[1.1] transition duration-300'
                                >
                                </div>
                                <div className='absolute text-white bottom-0 p-2 rounded-b-lg z-[100] bg-gradient-to-b from-[#ffffff09] to-[#000000b3]'>
                                    <h4 className='font-bold md:text-xl text-lg'>
                                        5 of the best hotels in Los Angeles
                                    </h4>
                                    <p className='md:text-sm text-xs'>
                                        From Hollywood to Beverly Hills discover
                                        5 of the best hotels in Los Angeles for
                                        your stay
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Picture = ({ url, title, style, responsiveStyle }) => {
    return (
        <div className='relative rounded-lg'>
            <div className={`absolute top-0 left-0 px-5 py-3 w-full flex items-center gap-x-3 bg-gradient-to-b from-[#000000e2] to-[#ffffff06] rounded-t-lg ${responsiveStyle}`}>
                <span className={`sm:text-2xl text-lg font-bold text-white drop-shadow-xl shadow-black ${responsiveStyle}`}>{title}</span>
                <img
                    src={IndiaIcon}
                    alt="India"
                    width={responsiveStyle ? 20 : 25}
                    className='mt-[5px]'
                />
            </div>
            <img
                src={url}
                alt={title}
                className={`${style} rounded-md object-cover bg-contain`}
            />
        </div>
    )
}

const Inc_Dec_Box = ({ min = 0, max, initialValue = 0, handle }) => {
    const [count, setCount] = useState(initialValue);
    const handleIncrementCount = () => {
        setCount(count + 1);
    }
    const handleDecrementCount = () => {
        if (count > min) {
            setCount(count - 1);
        }
    }
    return (
        <div className='border-2 border-[#C5C5C5] rounded-[4px] px-2 py-1 flex justify-center items-center gap-x-5'>
            <FiMinus
                onClick={handleDecrementCount}
                size={20}
                className={min >= count ? "cursor-none text-[#C5C5C5]" : "cursor-pointer text-[#006CE4]"}
            />
            <span className='text-[#000000] text-lg'>{count}</span>
            <FiPlus
                onClick={handleIncrementCount}
                size={20}
                className='cursor-pointer text-[#006CE4]'
            />
        </div>
    )
}

export default WrapperLayout()(Home);