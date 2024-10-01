import React from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout';

const CovidFAQ = () => {
    return (
        <div className='bg-[#FFFFFF]'>
            <div className='relative border-t-[#3ba2da] border-[0.5px]'>
                <img
                    src={"https://hms.harvard.edu/sites/default/files/media/COVIDHA850_0.jpg"}
                    alt="covid-19"
                    className='w-full h-[300px] object-center blur-[3px] contrast-100 '
                    loading='eager'
                />
                <p className='absolute sm:text-6xl text-4xl font-bold md:top-[40%] top-[20%] left-[10%] lg:w-[60%] w-[50%] bg-gradient-to-b bg-clip-text text-transparent sm:to-heading-text to-[#0d2b8b]  from-[#2376dbea]'>
                    Corona virus restrictions and requirements
                </p>
            </div>
            <div className='bg-[#79afcf41] mt-0 sm:p-0 p-3'>
                <div className='sm:w-[calc(100%-10%)] mx-auto md:py-10 sm:py-5'>
                    <div className='mt-3 sm:mt-0 sm:mb-1'>
                        <h1 className='font-bold lg:text-4xl text-xl text-[#10439F]'>Jetsetters</h1>
                        <p className='font-semibold text-2xl md:text-3xl text-neutral-900 md:mt-3'>We're here to help</p>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg font-normal text-neutral-500 mb-2 sm:'>
                        Your safety matters. If you think the coronavirus (COVID-19) may affect your plans,please contact or read
                        more important info on the coronavirus here.
                    </p>
                </div>
            </div>
            <div className='sm:w-[calc(100%-10%)] mx-auto my- 5 sm:p-0 p-3'>
                <div className='mt-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3'>Government travel restrictions and advisories</h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.3rem] leading-[0.9rem] text-neutral-900'>
                        Be sure to check for travel restrictions before booking and traveling to an accommodation. Touristic travel
                        might not be allowed, as travel may only be permitted for certain purposes. To help you on your way, we included
                        publicly available links to government websites for several countries around the world. However, not all countries
                        are covered below. A country's absence from the overview does not mean it hasn't set any travel restrictions. We
                        recommend searching for info on any country you're planning to visit. We are not responsible for the content of
                        the public (government) websites linked below. Government responses continue to evolve, so check back for updates
                        often and count on your national and local authorities for the most current info.
                    </p>
                </div>

                <div className='my-10'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Travel restrictions and advisories</h2>
                    <div className='flex flex-col justify-start'>
                        <a
                            href="https://www.mha.gov.in/en/commoncontent/circulars-covid-19"
                            target='_blank'
                            className='px-2 md:px-4 sm:text-lg text-sm text-heading-text hover:underline cursor-pointer transition'
                        >
                            India
                        </a>
                        <a
                            href="https://www.sf.gov/topics/coronavirus-covid-19"
                            target='_blank'
                            className='px-2 md:px-4 sm:text-lg text-sm text-heading-text hover:underline cursor-pointer transition'
                        >
                            San Francisco
                        </a>
                    </div>
                </div>

                <div className='mb-10'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2'>Booking conditions</h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.3rem] leading-[0.9rem] text-neutral-900'>
                        For bookings made on or after April 6, 2020, consider the risk of the coronavirus (COVID-19) and its associated government
                        measures. If you don’t book a flexible rate, you may not be entitled to a refund. Your cancellation request will be handled
                        by the property based on your selected policy and consumer law, where applicable. During times of uncertainty, we recommend
                        booking an option with free cancellation. If your plans change, you can cancel free of charge until free cancellation expires.
                    </p>
                </div>

                <div>
                    <div className='mb-5 sm:mb-10'>
                        <h4 className='text-base sm:text-xl md:text-2xl font-semibold leading-5 mb-2'>How can I get help with an existing reservation on Jetsetters?</h4>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900'>
                            We understand you may want to change your plans due to the coronavirus (COVID-19) and its health implications. For further support,
                            sign in to your Booking.com account and visit our Customer Service Help Center.
                        </p>
                    </div>

                    <div className='mb-5 sm:mb-10'>
                        <h4 className='text-base sm:text-xl md:text-2xl font-semibold leading-5 mb-2'>How do I cancel my booking in this situation?</h4>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-1'>
                            For the best support, sign in to your Booking.com account. If you don't have one, you can use your booking confirmation number and PIN to sign in on a desktop or laptop.
                        </p>
                        <ul className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 list-[circle] list-inside pl-3 mt-1'>
                            <li>
                                If your booking is no longer free to cancel or non-refundable, you may incur a cancellation fee. Properties can also choose to change reservation dates at no extra cost,
                                so contact the property to see if this is possible.
                            </li>
                            <li>
                                If your reservation was affected by coronavirus-related events (e.g. border closures or travel limitations placed by local authorities), but is no longer free to cancel or
                                non-refundable, sign in and check your options for managing your reservation.
                            </li>
                        </ul>
                    </div>

                    <div className='mb-5 sm:mb-10'>
                        <h4 className='text-base sm:text-xl md:text-2xl font-semibold leading-5 mb-2'>What is the cancellation policy related to the coronavirus?</h4>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-1'>
                            You might be able to cancel due to the circumstances related to the coronavirus. However, it depends on several factors, including your destination, the date you made your booking,
                            country of origin, arrival date, and reason for traveling.
                        </p>
                        <ul className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 list-[circle] list-inside pl-3 mt-1'>
                            <li>If your cancellation falls under this category, the property has to provide a refund, offer a free date change, or credit you for a future stay.</li>
                            <li>select the relevant booking to see your options.</li>
                        </ul>
                    </div>

                    <div className='my-10'>
                        <h4 className='text-base sm:text-xl md:text-2xl font-semibold leading-5 mb-2'>Why doesn't the coronavirus impact the general policy for Jetsetters?</h4>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-3'>
                            Cancellation due to the coronavirus depends on several factors, including where you're traveling to, your country of origin, arrival date, and reason for traveling.
                        </p>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-1'>
                            Individual reservation policies are set by the property you booked. As a result, it wouldn't be appropriate to make a universal change to our policy.
                        </p>
                    </div>

                    <div className='mb-5'>
                        <h4 className='text-base sm:text-xl md:text-2xl font-semibold leading-5 mb-2'>Can I move my booking to a future date?</h4>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-3'>
                            Moving your booking to a future date depends on the reservation's policies. Sign in using either your Booking.com account or confirmation number and PIN, select the
                            booking you want to change, and you’ll see what options are available.
                        </p>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-1'>
                            You can also contact the property to ask for a date change.
                        </p>
                    </div>

                    <div className='mt-10'>
                        <h4 className='text-base sm:text-xl md:text-2xl font-semibold leading-5 mb-2'>Will I get charged additionally if I move my reservation to a future date?</h4>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-3'>
                            If you change your dates and the property has availability, there may be a difference in price (higher or lower), which could be due to the season or different rates for
                            weekdays versus weekends.
                        </p>
                        <p className='text-sm sm:text-base md:text-lg md:leading-[1.2rem] leading-[0.9rem] text-neutral-900 mb-3'>
                            If rates are higher, you'll have to pay the difference between the original price and the one for your new dates. If they're lower, the price difference will be reflected in
                            your booking.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WrapperLayout("Covid-19 | FAQs","")(CovidFAQ);