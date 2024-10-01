import React, { useState } from 'react'
import { NorthDarjeeling, NorthSikkim } from '../assets/packages-img'
import WrapperLayout from '../components/Layouts/WrapperLayout';
import { MdDinnerDining, MdFlight, MdHotel, MdHouseboat } from 'react-icons/md';
import { FaCar, FaStar } from 'react-icons/fa6';
import { GiMeal } from 'react-icons/gi';
import PopupModal from '../components/shared/PopupModal';

const data = {
    img: NorthDarjeeling,
    hotel: 4,
    AddOn : ["5 Nights","PACKAGE CATEGORY : Honeymoon, Family, Adventure","DESTINATIONS COVERED : 2N Gangtok, 1N Pelling, 2N Darjeeling"],
    price: "479",
    extra: "",
    cabService : "",
};

const DarjeelingSikkimDetailPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div className='w-full h-[200px]'>
                <img
                    src={data.img}
                    alt="truck"
                    loading='lazy'
                    className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='sm:w-[calc(100%-10%)] mx-2 sm:mx-auto mt-10'>
                <div className='flex gap-x-5 items-center'>
                    <div>
                        <div className='mt-8'>
                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 md:w-[80%] font-content'>Darjeeling and Sikkim Tour Package</h1>
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

                    <div className='md:w-[60%] w-0 md:mt-8 hidden md:block'>
                        <Picture
                            url={NorthSikkim}
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
                        title={" Arrive Guwahati - Drive to Shillong"}
                        description={`
                            On arrival at Guwahati Airport, our local tour representative will meet you at the specified area and transfer you to Shillong (110 kms, approx. 3 hours’ drive). En
                            route visit Umium Lake- the biggest artificial lake in midst of sylvan hills. On arrival at Shillong, check in at the hotel. Remaining day is free at own leisure. You may
                            relax in the hotel or step out to explore the nearby areas.`
                        }
                        stay={"Stay overnight at hotel in Shillong."}
                        width={"md:w-[100px]"}
                        height={"md:h-[150px]"}
                        color={"#BCD2E8"}
                    />
                    <DetailDayBox
                        day={2}
                        title={"Excursion to Cherrapunjee"}
                        description={`
                            Today morning take a fill at morning breakfast. Later get ready for a day excursion to Cherrapunjee. En route visit Elephanta falls for some breathtaking views. It is
                            a mountain stream gorging down two successive falls set in dells of fern covered rocks. Cherrapunji in Meghalaya is one of the wettest places on the planet and the
                            only place in India to receive rain throughout the year. The town of Cherrapunji is nestled in the East Khasi Hills about 50 km southwest of the state’s capital,
                            Shillong. Cherrapunji, also known as Sohra or Churra, means ‘the land of oranges’. The cliffs of Cherrapunji also offer stunning views of the plains of Bangladesh.
                            Visit to Arwah Cave, Nohkalikai Falls, Mawsmai Cave, Seven Sisters Waterfall, Dainthlen Falls & Eco Park. Also visit the Ramakrishna Mission Ashrama and later
                            drive back to Shillong.`
                        }
                        stay={"Stay overnight at hotel in Shillong"}
                        width={"md:w-[100px]"}
                        height={"md:h-[230px]"}
                        color={"#91BAD6"}
                    />
                    <DetailDayBox
                        day={3}
                        title={"Visit to Dawki & Mawlynnong"}
                        description={`
                            Have a fill at morning breakfast at hotel and later drive to Dawki, visit Indo-Bangladesh border and Umngot River (one can enjoy country boat ride here on direct
                            payment basis). Later on proceed to visit Mawlynnong Village. It is located in the East Khasi Hills of Meghalaya, also referred as ‘God’s own garden’ has won the
                            acclaim of being the cleanest village in Asia in 2003. The village known for its cleanliness is located around 90 kms from Shillong and is a community based ecotourism initiative. The community has made collective effort to maintain the ambience of a clean village. The village offers picturesque natural beauty, a trek to the
                            living root bridge at a neighbouring village Riwai. The village also offers a sight of natural balancing rock, a strange natural phenomenon of a boulder balancing on
                            another rock. Evening return back to Shillong.`
                        }
                        stay={"Stay overnight at hotel in Shillong"}
                        width={"md:w-[100px]"}
                        height={"md:h-[230px]"}
                        color={"#73A5C6"}
                    />
                    <DetailDayBox
                        day={4}
                        title={"Drive from Shillong to Guwahati"}
                        description={`
                            After breakfast, Check out from the hotel & pack your bags. Today we drive back to Guwahati (110 kms, approx. 3 hours drive). On arrival, check in at hotel and
                            relax.
                            In afternoon, we will visit Kamakhya temple- the temple is dedicated to goddess Kamakhya an incarnation of Sati. It is on Nilachal hill, says the Shiva Purana, that
                            the yoni or creative organ of Sati fell when Vishnu, in a bid to save the world from the Shiva’s tandava nrittya or dance of destruction, cut her dead body into 51
                            pieces with his suddarshan chakra. Also visit Navagraha temple and Balaji temple before returning back to the hotel.`
                        }
                        stay={"Stay overnight at hotel in Guwahati."}
                        width={"md:w-[100px]"}
                        height={"md:h-[180px]"}
                        color={"#528AAE"}
                    />
                    <DetailDayBox
                        day={5}
                        title={" Guwahati - Departure"}
                        description={`
                            Today morning after breakfast, Pack your bags & check out from the hotel. Later take transfer to the Airport & board your return flight for Delhi.`
                        }
                        width={"md:w-[100px]"}
                        height={"md:h-[100px]"}
                        color={"#2E5984"}
                    />
                </div>
            </div>

            {/* <div className='bg-[#5072a3] -mb-11'>
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
            </div> */}


            {
                open && <PopupModal open={open} setOpen={setOpen} title={"Darjeeling and Sikkim Package"} />
            }
        </div >
    )
}

export default WrapperLayout()(DarjeelingSikkimDetailPage);

const DetailDayBox = ({ day, title, description, width, height, color,stay }) => {
    return (
        <div className='flex lg:flex-row flex-col w-full items-center'>
            <div className={`bg-[red] flex items-center ${height + " " + width} w-full justify-center border border-[#000] border-r-0 p-2`} style={{ backgroundColor: color }}>
                <p className='lg:-rotate-[90deg] font-semibold text-lg text-neutral-800 text-center'>{day} DAY</p>
            </div>
            <div className={`border border-[#000] ${height} w-full md:border-l-0 px-8 flex flex-col gap-x-4 justify-center`}>
                <h4 className='text-xl font-bold text-neutral-800 text-center my-3 md:my-0 md:text-start'>{title}</h4>
                <p className='text-base font-content text-neutral-700'>{description}</p>
                {stay && <p className='text-base font-content font-medium text-neutral-900'>{stay}</p>}
            </div>
        </div>
    )
}

const Picture = ({ url, title, style, responsiveStyle }) => {
    return (
        <div className='relative rounded-lg'>
            <div className={`absolute top-0 left-0 px-5 py-3 w-full flex items-center gap-x-3 bg-gradient-to-b from-[#000000e2] to-[#ffffff06] rounded-t-lg ${responsiveStyle}`}>
                <span className={`sm:text-2xl text-lg font-bold text-white drop-shadow-xl shadow-black ${responsiveStyle}`}>{title}</span>
                {/* <img
                    src={IndiaIcon}
                    alt="India"
                    width={responsiveStyle ? 20 : 25}
                    className='mt-[5px]'
                /> */}
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