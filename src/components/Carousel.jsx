import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ cardsdata = [], slidesToShow, styles }) => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1
    };
    console.log(cardsdata)
    return (
        <div className='sm:mx-0 mx-5'>
            {
                cardsdata && cardsdata.length > 0 ?
                    (<Slider {...settings}>
                        {
                            cardsdata.map((data, index) => (
                                <Card
                                    data={data}
                                    key={index}
                                    styles={styles}
                                />
                            ))
                        }
                    </Slider>)
                    :
                    (<div> Data not found </div>)
            }
        </div>
    )
}

export default Carousel