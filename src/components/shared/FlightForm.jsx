import React from 'react'

const FlightForm = () => {
    return (
        <form id='form' onSubmit={sumbitHandle} className='lg:min-w-[450px] lg:w-[60%] md:min-w-[40%] lg:min-h-[calc(100vh-40px)] flex flex-col gap-y-10 bg-gradient-to-r md:mt-[1px] lg:mb-0 mb-10 
                                    md:rounded-none md:rounded-l-[50px] rounded-[30px] shadow-2xl shadow-[#6e3a2b86] from-[#e77240] via-[#d56230] to-[#faaa1ff1]'>

            <div className='flex justify-center gap-x-2'>
                <button
                    type='button'
                    className={`${location.pathname === '/' ? "bg-white" : "bg-[#00000057] text-[#ffffffac] hover:bg-white hover:text-[#000]"}  text-center font-bold sm:text-3xl text-2xl sm:w-[150px]
                                                sm:rounded-b-[20px] rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                    onClick={() => navigate('/')}
                >
                    Flights
                </button>
                <button
                    type='button'
                    className={`${location.pathname === '/cruise' ? "bg-white text-[#000]" : "bg-[#00000057] text-[#ffffffac] hover:bg-white hover:text-[#000]"} text-center font-bold sm:text-3xl text-2xl sm:w-[150px] sm:rounded-b-[20px]
                                            rounded-b-[22px] sm:px-1 px-8 sm:py-[10px] py-3 mb-5 transition duration-500`}
                    onClick={() => navigate('/cruise')}
                >
                    Cruise
                </button>
            </div>

            <div className='flex flex-col justify-between gap-4 sm:gap-5 lg:gap-7 items-center'>
                <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative'>
                    <input
                        type="search"
                        name='from'
                        id='from'
                        value={data.from}
                        placeholder='From*'
                        required
                        onChange={onChangeHandler}
                        className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-xl text-[#000000b4] font-medium placeholder:text-[#848383]'
                    />
                    {fromList && fromList.length > 0 ?
                        (<SearchAutoComplete
                            searchList={fromList}
                            name={'from'}
                            handler={setData}
                        />)
                        :
                        (<></>)
                    }
                </div>
                <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative'>
                    <input
                        type="search"
                        name='to'
                        id='to'
                        value={data.to}
                        placeholder='To*'
                        required
                        onChange={onChangeHandler}
                        className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-xl text-[#000000b4] font-medium placeholder:text-[#848383]'
                    />
                    {toList && toList.length > 0 ?
                        (<SearchAutoComplete
                            searchList={toList}
                            name={'to'}
                            handler={setData}
                        />)
                        :
                        (<></>)
                    }
                </div>
                <div className='w-3/4 p-1 z-[10] relative rounded-[30px] bg-[#ffffff]'>
                    <div
                        className='w-full flex flex-row gap-2 justify-between items-center px-3 py-1 
                                                    border-[2px] rounded-[30px] border-[#bbab8cad] cursor-pointer 
                                                    outline-none text-xl text-[#BBAB8C]'
                        onClick={() => setOpenUserbox(!openUserbox)}
                    >
                        <span className='flex gap-2'>
                            <LuUser2 className='text-neutral-500 mb-1 sm:block hidden' size={22} />
                            <span className='text-[#848383]'>{`${passengerData.adult} adults · ${passengerData.children} children `}</span>
                        </span>
                        <RiArrowDropDownLine className='text-neutral-900 self-end' size={36} />
                    </div>

                    {
                        openUserbox && (
                            <div
                                className='w-[285px] absolute flex flex-col gap-y-2 px-6 py-2 top-[50%] sm:translate-x-[80%] left-[-1%] translate-x-4 xl:translate-x-[40%] lg:translate-x-[35%] md:translate-x-[5%] md:translate-y-[20%]
                                                            translate-y-[18%] rounded-md p-1 transition-transform duration-150 z-[1000]
                                                            bg-[#ffffff] text-[#000] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
                                                            '
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
                        )
                    }
                </div>
                <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative'>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        value={data.email}
                        placeholder='Email*'
                        required
                        onChange={onChangeHandler}
                        className='w-full px-3 py-2 border-[2px] rounded-[30px] border-[#bbab8cad] outline-none text-xl text-[#000000b4] font-medium placeholder:text-[#848383] placeholder:font-normal'
                    />
                </div>
                <div className='w-3/4 p-1 rounded-[30px] bg-[#ffffff] relative '>
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
                </div>
            </div>

            <div className='mx-auto lg:mb-0 mb-10 z-[0] group'>
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
    )
}

export default FlightForm