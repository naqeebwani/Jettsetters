import React from 'react'
import WrapperLayout from '../components/Layouts/WrapperLayout'

const TermsConditions = () => {
    return (
        <div className='bg-[#FFF]'>
            <div className='bg-[#79afcf41] mt-0 sm:p-0 p-4'>
                <div className='sm:w-[calc(100%-10%)] mx-auto md:py-10 sm:py-5'>
                    <h2 className='font-semibold text-2xl md:text-3xl text-neutral-900 md:mt-3'><span className='text-heading-text'>Jetsetters</span> Corporation - Terms and Conditions</h2>
                    <p className='text-sm sm:text-base md:text-lg font-normal text-neutral-500 mb-2'>
                        Welcome to Jetsetters Corporation! These Terms and Conditions ("Terms") outline the rules and
                        regulations governing your use of our services related to airline ticket sales, cruise ticket sales,
                        and hotel bookings. Please carefully read through these Terms before accessing or using our
                        services. Your use of our services constitutes your agreement to be bound by these Terms. If
                        you do not agree to these Terms, please refrain from using our services.
                    </p>
                </div>
            </div>
            <div className='sm:w-[calc(100%-10%)] mx-auto sm:my-5 sm:p-0 px-4 py-0'>
                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3'>1. Services Provided</h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1'>
                        Jetsetters Corporation offers a comprehensive suite of services designed to streamline and
                        simplify your travel experience. Our platform facilitates the booking of airline tickets, cruise
                        tickets, and hotel accommodations, serving as a bridge between you and various reputable
                        travel service providers. Through our user-friendly interface, you can explore, compare, and
                        book a wide range of travel options tailored to your preferences.
                    </p>
                </div>

                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>2. Booking</h2>
                    <ul className='pl-5 ml-1 text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900
                                    list-[disc] list-outside mt-1'
                    >
                        <li className='mt-2'>When you make a booking through Jetsetters Corporation, you enter into a contractual
                            agreement with the respective travel service provider(s). It is imperative that you carefully
                            review and adhere to the terms and conditions imposed by these providers, as they govern the
                            specifics of your booking, including but not limited to booking policies, payment procedures,
                            and cancellation terms
                        </li>
                        <li className='mt-2'>
                            Booking availability is subject to fluctuation based on numerous factors, such as seat
                            availability for flights, cruise itineraries, and hotel room inventory. While we endeavor to
                            provide accurate and real-time information, availability may change rapidly, and we cannot
                            guarantee the availability of any particular booking until it is confirmed by the relevant provider.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        3. Payments
                    </h2>
                    <ul className='pl-5 ml-1 text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900
                                    list-[disc] list-outside mt-1'
                    >
                        <li className='mt-2'>
                            Payment for bookings must be made in full at the time of reservation, unless otherwise
                            stipulated by the travel service provider. Failure to remit full payment may result in the
                            cancellation or suspension of your booking.
                        </li>
                        <li className='mt-2'>
                            Prices quoted on our platform are subject to revision without prior notice. The final price
                            for your booking will be confirmed at the time of payment. We accept various forms of
                            payment, including major credit cards, debit cards, and other electronic payment methods, as
                            specified on our website.
                        </li>
                    </ul>
                </div>
                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        4. Cancellations and Refunds
                    </h2>
                    <ul className='pl-5 ml-1 text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900
                                    list-[disc] list-outside mt-1'
                    >
                        <li className='mt-2'>
                            Cancellation policies vary depending on the policies established by the respective travel
                            service provider(s) and the nature of your booking. It is your responsibility to familiarize yourself
                            with the applicable cancellation policies before finalizing your reservation.
                        </li>
                        <li className='mt-2'>
                            Should you wish to cancel a booking, you may be subject to cancellation fees or penalties
                            levied by the travel service provider(s). Refunds, if applicable, will be processed in accordance
                            with the refund policies outlined by the relevant provider(s).
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        5. Liability
                    </h2>
                    <ul className='pl-5 ml-1 text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900
                                    list-[disc] list-outside mt-1'
                    >
                        <li className='mt-2'>
                            Jetsetters Corporation acts solely as an intermediary between you and the travel service
                            provider(s). While we strive to maintain the accuracy and reliability of the information
                            presented on our platform, we do not warrant or guarantee the quality, accuracy, completeness,
                            or reliability of any content, products, or services offered by third-party providers.
                        </li>
                        <li className='mt-2'>
                            In no event shall Jetsetters Corporation be held liable for any direct, indirect, incidental,
                            consequential, special, or punitive damages arising out of or in connection with your use of our
                            services, including but not limited to lost profits, loss of data, or loss of business opportunity,
                            regardless of the cause of action.
                        </li>
                    </ul>
                </div>

                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        6. Privacy
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1'>
                        Safeguarding your privacy is of paramount importance to us. We collect, utilize, and
                        disclose your personal information in accordance with our Privacy Policy, which delineates our
                        practices concerning the collection, utilization, and disclosure of personal data.
                    </p>
                </div>

                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        7. Intellectual Property
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1'>
                        All content featured on our website, including text, graphics, logos, images, and software, is
                        the intellectual property of Jetsetters Corporation or its licensors and is protected by copyright
                        and other intellectual property laws.
                    </p>
                </div>

                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        8. Governing Law
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1'>
                        These Terms shall be governed by and construed in accordance with the laws of
                        [jurisdiction], excluding its conflict of law provisions.
                    </p>
                </div>

                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        9. Changes to Terms
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1'>
                        Jetsetters Corporation reserves the right to modify or amend these Terms at any time,
                        without prior notification. It is your responsibility to regularly review these Terms for any
                        updates or alterations.
                    </p>
                </div>

                <div className='my-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        10. Chargeback Prevention
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1'>
                        To prevent unwarranted chargebacks and disputes, users are encouraged to contact
                        Jetsetters Corporation directly in the event of any issues or concerns regarding their bookings.
                        Attempting to initiate a chargeback without prior communication with Jetsetters Corporation
                        may result in additional fees and penalties, as well as suspension of services.
                    </p>
                </div>

                <div className='sm:my-10 mt-10'>
                    <h2 className='text-xl md:text-3xl leading-5 font-semibold text-neutral-950 mb-3 -ml-2'>
                        11. Contact Us
                    </h2>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1'>
                        Should you have any inquiries or concerns regarding these Terms or our services, please do not
                        hesitate to reach out to us at
                        <a
                            href="tel:+18885813028"
                            className='mx-1 text-heading-text hover:underline'
                        >
                            +18885813028
                        </a>
                        or
                        <a
                            href="mailto:bookings@jetsetterss.com"
                            className='ml-1 text-heading-text hover:underline'
                        >
                            bookings@jetsetterss.com.
                        </a>
                    </p>
                    <p className='text-sm sm:text-base md:text-lg md:leading-[1.5rem] leading-[1rem] text-neutral-900 pl-5 ml-1 mt-3'>
                        By accessing or utilizing our services, you acknowledge that you have carefully read,
                        comprehended, and consented to be bound by these Terms and any subsequent revisions or
                        modifications thereof.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WrapperLayout("Terms & Conditions | Jetsetters","")(TermsConditions);