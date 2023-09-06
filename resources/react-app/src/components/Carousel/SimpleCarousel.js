import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/image/slide1.jpg"
import Image2 from "../../assets/image/slide2.jpg"
import Image3 from "../../assets/image/slide3.jpg"
import Image4 from "../../assets/image/slide4.jpg"
import Image5 from "../../assets/image/slide5.jpg"
import Image6 from "../../assets/image/slide6.jpg"
import Image7 from "../../assets/image/slide7.jpg"
import { useTranslation } from 'react-i18next';

function SimpleCarousel() {
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const { t } = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false,
        cssEase: "linear",
        afterChange: (currentSlide) => handleSlideChange(currentSlide),
    };

    const handleSlideChange = (currentSlide) => {

        const prevSlide = document.querySelector(".slide-content.animate-zoomIn.scale-up-center");
        if (prevSlide) {
            prevSlide.classList.remove("scale-up-center");
            void prevSlide.offsetWidth;
        }
        const currentSlidee = document.querySelector(".slick-current .slide-content");

        if (currentSlidee) {
            currentSlidee.classList.add("scale-up-center");
        }

        setActiveSlide(currentSlide);
        setShowInfoBox(false);

        const timer = setTimeout(() => {
            setShowInfoBox(true);
        }, 2000);

        return () => clearTimeout(timer);
    };


    return (
        <Slider {...settings}>

            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <div className='absolute h-full w-full r-0 t-0 custom-gradient' />
                <img src={Image1} className='scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <div className='absolute h-full w-full r-0 t-0 custom-gradient' />
                <img src={Image2} className='scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <div className='absolute h-full w-full r-0 t-0 custom-gradient' />
                <img src={Image3} className='scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <div className='absolute h-full w-full r-0 t-0 custom-gradient' />
                <img src={Image4} className='scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <div className='absolute h-full w-full r-0 t-0 custom-gradient' />
                <img src={Image5} className='scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <div className='absolute h-full w-full r-0 t-0 custom-gradient' />
                <img src={Image6} className='scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
            <div className='relative h-[calc(100vh-91px)] focus:outline-none'>
                <div className='absolute h-full w-full r-0 t-0' style={{}} />
                <img src={Image7} className='scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]' width="100%" height="auto" alt='Slider' />
                <div className='absolute bottom-0 right-0 bg-[#00000096] py-2 pr-10 pl-2 max-md:bottom-10'>
                    <p className='text-white text-lg font-bold'>{t('slideTitle')}</p>
                    <p className='text-white font-thin'>{t('slideDetail')}</p>
                </div>
            </div>
        </Slider>
    )
}

export default SimpleCarousel