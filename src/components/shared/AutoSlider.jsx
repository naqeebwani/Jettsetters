import React, { useState } from 'react'
import { Scrollbar, A11y, Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';

const AutoSlider = ({ data,delay}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='w-full h-full'>
            <Swiper
                style={{
                    width: "100%",
                    height : "100%"
                }}
                modules={[Scrollbar, A11y, Autoplay, Thumbs]}
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                scrollbar={{ draggable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={(swiper) => "console.log(swiper)"}
                onSlideChange={() => "console.log('slide change')"}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true
                }}
            >
                {
                    data.map((img, index) => (
                        <SwiperSlide key={index} style={{ borderRadius: "15px", height : "100%" }}>
                            <img src={img} loading='lazy' className='w-full h-full'/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default AutoSlider