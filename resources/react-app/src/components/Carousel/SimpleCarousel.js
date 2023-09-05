import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import First from "../../assets/image/slider1.png"
import { useTranslation } from 'react-i18next';

function SimpleCarousel() {
    const { t } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider {...settings}>
            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <img src={First} className='max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
        </Slider>
    )
}

export default SimpleCarousel