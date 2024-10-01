import React from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'
import {
    RamBg,
    Haz_bg,
    DubaiBg, DubaiImg3,
    ItalyImg1, LondonImg1, ParisImg1, EuropeBg,
    KashmirImg11, KashmirImg13, KashmirImg16, KashmirImg4,
    NorthDarjeeling, NorthBhutan2, NorthMeghalaya,
    GeorgiaImg6,GeorgiaImg5,GeorgiaImg4,

} from '../assets/packages-img'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'

const Packages = () => {
    return (
        <div className='bg-white'>
            <div className='package-hero-bg xl:h-[300px] h-[250px] w-full md:pl-10 md:px-0 sm:px-5 px-3 overflow-hidden'>
                <div className='w-full h-full flex flex-col justify-center sm:p-10'>
                    <h1 className='lg:text-7xl md:text-6xl text-6xl text-[#FFFFFF] font-content font-bold drop-shadow-md shadow-black lg:leading-[4rem] leading-[3.5rem] lg:w-11/12'>Our Packages</h1>
                    <p className='sm:text-2xl text-lg sm:text-[#ffffffdc] text-[#fff] font-content md:font-semibold drop-shadow-md shadow-black md:w-3/4 w-4/5 opacity-90 pl-2'>Explore the World with Our Exclusive Tour Packages and Airfare Deal</p>
                </div>
            </div>

            <div className='sm:w-[calc(100%-10%)] sm:mx-auto mb-10 sm:p-0 p-4'>
                {/* <div className='mt-5 mb-[5rem]'>
                    <div className='mb-5 md:mb-7'>
                        <h1 className='text-3xl md:text-6xl text-center text-[#e59545] font-bold'>Our Packages</h1>
                        <p className='text-lg md:text-xl text-center text-[#000] font-medium'>Book now for unforgettable adventures.</p>
                    </div>
                </div> */}

                <div className='my-10'>
                    <div className='flex flex-row md:gap-x-5 gap-x-2 w-full items-center'>
                        <div className='w-[50%]'>
                            <div>
                                <h2 className='md:text-4xl text-2xl font-bold'>Ram Mandir Packages</h2>
                                <p className='md:text-base text-sm font-normal text-neutral-500'>Popular Packages for Spiritual Journeys</p>
                            </div>
                            <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5 justify-between my-5'>
                                <Picture
                                    title={"Ram Mandir"}
                                    url={RamBg}
                                    style={"w-full md:h-full h-[250px]"}
                                />
                            </div>
                            <div className='relative'>
                                <div className='p-2 flex sm:flex-row flex-col sm:gap-5 gap-2 items-center justify-center'>
                                    {/* <p className='text-lg font-medium text-heading-text'>Price : <span className='font-bold'>$0 <span className='font-medium'>to</span> $0</span></p> */}
                                    <Link to={"tel:+18885813028"} className='group'>
                                        <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium border-[#144cb5] border rounded-[5px] text-[#144cb5] cursor-pointer'>
                                            Call us
                                            <FaPhone className='text-[16px] group-hover:-rotate-[110deg] transition group-hover:scale-105 -rotate-90 mb-1' />
                                        </button>
                                    </Link>
                                    <Link to={'/packages/ram-mandir-tour'} className='group'>
                                        <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                                            Details
                                            <FaArrowRight className='text-[12px] group-hover:translate-x-2 transition group-hover:scale-105' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div>
                                <h2 className='md:text-4xl text-2xl font-bold'>Hajj & Umrah Packages</h2>
                                <p className='md:text-base text-sm font-normal text-neutral-500'>Best Packages for Hajj and Umrah Pilgrimages</p>
                            </div>
                            <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5 justify-between my-5'>
                                <Picture
                                    title={"Hajj & Umrah"}
                                    url={Haz_bg}
                                    style={"w-full md:h-full h-[250px]"}
                                />
                            </div>
                            <div className='relative'>
                                <div className='p-2 flex sm:flex-row flex-col sm:gap-5 gap-2 items-center justify-center'>
                                    {/* <p className='text-lg font-medium text-heading-text'>Price : <span className='font-bold'>$0 <span className='font-medium'>to</span> $0</span></p> */}
                                    <Link to={"tel:+18885813028"} className='group'>
                                        <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium border border-[#144cb5] rounded-[5px] text-[#144cb5] cursor-pointer'>
                                            Call us
                                            <FaPhone className='text-[16px] group-hover:-rotate-[110deg] transition group-hover:scale-105 -rotate-90 mb-1' />
                                        </button>
                                    </Link>
                                    <Link to={'/packages/hajj&umrah'} className='group'>
                                        <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                                            Details
                                            <FaArrowRight className='text-[12px] group-hover:translate-x-2 transition group-hover:scale-105' />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-[5rem]'>
                    <div>
                        <h2 className='text-4xl font-bold'>Dubai Packages</h2>
                        <p className='text-base font-normal text-neutral-500'>Discover Luxury and Adventure in the Desert</p>
                    </div>
                    <div className='my-5'>
                        <div>
                            <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5 justify-between'>
                                <Picture
                                    title={"Dubai"}
                                    url={DubaiBg}
                                    style={"w-[650px] h-[330px]"}
                                />
                                <div className=' md:block hidden'>
                                    <Picture
                                        title={"Dubai"}
                                        url={DubaiImg3}
                                        style={"w-[650px] h-[330px]"}
                                    />
                                </div>
                                <div className='relative flex md:ustify-end'>
                                    <div className='p-2 flex flex-col gap-y-5 md:self-end'>
                                        <p className='text-lg font-medium text-heading-text'>Price :
                                            <span className='font-bold block'>$499<span className='font-medium'> to</span> $899</span></p>                                        <Link to={'/packages/dubai'} className='group'>
                                            <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                                                Details
                                                <FaArrowRight className='text-[12px] group-hover:translate-x-2 transition group-hover:scale-105' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='my-[5rem]'>
                    <div>
                        <h2 className='text-4xl font-bold'>Europe Packages</h2>
                        <p className='text-base font-normal text-neutral-500'>Most Popular choices for travelers</p>
                    </div>

                    <div className='my-5'>
                        <div>
                            <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5'>
                                <Picture
                                    title={"Europe"}
                                    url={EuropeBg}
                                    style={"w-[650px] h-[250px]"}
                                />
                                <Picture
                                    title={"London"}
                                    url={LondonImg1}
                                    style={"w-[650px] h-[250px]"}
                                />
                            </div>

                            <div className='flex gap-x-2 md:gap-x-4 xl:gap-x-6 mt-3'>
                                <Picture
                                    url={ItalyImg1}
                                    title={"Italy"}
                                    style={"xl:w-[450px] w-[350px] h-[250px]"}
                                    responsiveStyle={""}
                                />
                                <Picture
                                    url={ParisImg1}
                                    title={"Paris"}
                                    style={"xl:w-[450px] w-[330px] h-[250px]"}
                                    responsiveStyle={true}
                                />
                                <div className='relative flex items-center justify-center xl:w-[400px] w-[300px] h-[250px]'>
                                    <div className='p-5 flex flex-col gap-y-5 items-center justify-center'>
                                        {/* <p className='text-lg font-medium text-heading-text'>Price : <span className='font-bold'>$0 <span className='font-medium'>to</span> $0</span></p> */}
                                        <Link to={"tel:+18885813028"} className='group'>
                                            <button className='inline-flex items-center gap-x-2 md:px-6 px-5 py-2 md:text-xl text-lg font-medium border-[#144cb5] border rounded-[5px] text-[#144cb5] cursor-pointer'>
                                                Call us
                                                <FaPhone className='text-[16px] group-hover:-rotate-[110deg] transition group-hover:scale-105 -rotate-90 mb-1' />
                                            </button>
                                        </Link>
                                        <Link to={'/packages/europe'} className='group'>
                                            <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                                                Details
                                                <FaArrowRight className='text-[12px] group-hover:translate-x-2 transition group-hover:scale-105' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 mb-[5rem]'>
                    <div>
                        <h2 className='text-4xl font-bold'>Kashmir Packages</h2>
                        <p className='text-base font-normal text-neutral-500'>Most Popular choices for travelers from Kashmir India</p>
                    </div>

                    <div className='my-5'>
                        <div>
                            <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5'>
                                <Picture
                                    title={"Mughal Garden"}
                                    url={KashmirImg4}
                                    style={"w-[650px] h-[250px]"}
                                />
                                <Picture
                                    title={"Gulmarg"}
                                    url={KashmirImg13}
                                    style={"w-[650px] h-[250px]"}
                                />
                            </div>

                            <div className='flex gap-x-2 md:gap-x-4 xl:gap-x-6 mt-3'>
                                <Picture
                                    url={KashmirImg11}
                                    title={"Srinagar"}
                                    style={"xl:w-[450px] w-[350px] h-[250px] object-fill "}
                                    responsiveStyle={""}
                                />
                                <Picture
                                    url={KashmirImg16}
                                    title={"Pehelgam"}
                                    style={"xl:w-[450px] w-[330px] h-[250px]"}
                                    responsiveStyle={true}
                                />
                                <div className='relative flex items-center justify-center xl:w-[400px] w-[300px] h-[250px]'>
                                    <div className='p-5 flex flex-col gap-y-5 items-center justify-center'>
                                        <p className='text-lg font-medium text-heading-text'>Price :
                                            <span className='font-bold inline-block'>$543 <span className='font-medium'>to</span> $1515</span></p>                                        <Link to={'/packages/kashmir'} className='group'>
                                            <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                                                Details
                                                <FaArrowRight className='text-[12px] group-hover:translate-x-2 transition group-hover:scale-105' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 mb-[4rem]'>
                    <div>
                        <h2 className='text-4xl font-bold'>North East & Bhutan Packages</h2>
                        <p className='text-base font-normal text-neutral-500'>Explore the Mystical Beauty of the North East and Bhutan</p>
                    </div>
                    <div className='my-5'>
                        <div>
                            <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5 justify-between'>
                                <Picture
                                    title={"Darjeeling"}
                                    url={NorthDarjeeling}
                                    style={"md:w-[350px] xl:w-[100%] w-full h-[330px]"}
                                />
                                <div className='md:block hidden'>
                                    <Picture
                                        title={"Meghalaya"}
                                        url={NorthMeghalaya}
                                        style={"w-[350px] h-[330px] xl:w-[100%]"}
                                    />
                                </div>
                                <Picture
                                    title={"Bhutan"}
                                    url={NorthBhutan2}
                                    style={"md:w-[350px] w-full h-[330px] xl:w-[100%]"}
                                />
                                <div className='relative flex md:ustify-end'>
                                    <div className='p-2 flex flex-col gap-y-5 md:self-end'>
                                        <p className='text-lg font-medium text-heading-text'>Price :
                                            <span className='font-bold block'>$479 <span className='font-medium'>to</span> $869</span></p>
                                        <Link to={'/packages/north-east'} className='group'>
                                            <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                                                Details
                                                <FaArrowRight className='text-[12px] group-hover:translate-x-2 transition group-hover:scale-105' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='mt-10 mb-[4rem]'>
                    <div>
                        <h2 className='text-4xl font-bold'>Georgia Packages</h2>
                        <p className='text-base font-normal text-neutral-500'>Myth and Mystery Sacred Sites and Legends of Georgia</p>
                    </div>
                    <div className='my-5'>
                        <div>
                            <div className='w-full flex flex-col md:flex-row md:gap-x-5 gap-y-5 justify-between'>
                                <Picture
                                    title={"Ananuri Fortress"}
                                    url={GeorgiaImg6}
                                    style={"md:w-[350px] xl:w-[100%] w-full h-[330px]"}
                                />
                                <div className='md:block hidden'>
                                    <Picture
                                        title={"Tbilisi"}
                                        url={GeorgiaImg5}
                                        style={"w-[350px] h-[330px] xl:w-[100%]"}
                                    />
                                </div>
                                <Picture
                                    title={"Rike Park"}
                                    url={GeorgiaImg4}
                                    style={"md:w-[350px] w-full h-[330px] xl:w-[100%]"}
                                />
                                <div className='relative flex md:ustify-end'>
                                    <div className='p-2 flex flex-col gap-y-5 md:self-end'>
                                        <p className='text-lg font-medium text-heading-text'>Price :
                                            <span className='font-bold block'>$499<span className='font-medium'> to</span> $899</span>
                                                <span className='text-xs lg:text-sm -mt-1 block'>+ Discount rates</span>
                                        </p>
                                        <Link to={'/packages/georgia'} className='group'>
                                            <button className='inline-flex items-center gap-x-2 px-6 py-2 md:text-xl text-lg font-medium bg-[#144cb5] hover:bg-[#0d3f8f] rounded-[5px] text-[#fff] cursor-pointer'>
                                                Details
                                                <FaArrowRight className='text-[12px] group-hover:translate-x-2 transition group-hover:scale-105' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WrapperLayout()(Packages);


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
                className={`rounded-md object-cover bg-contain ${style}`}
            />
        </div>
    )
}