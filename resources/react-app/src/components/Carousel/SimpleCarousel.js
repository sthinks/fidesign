import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleCarousel({ slider }) {
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
        const prevSlide = document.querySelector(
            ".slide-content.animate-zoomIn.scale-up-center"
        );
        if (prevSlide) {
            prevSlide.classList.remove("scale-up-center");
            void prevSlide.offsetWidth;
        }
        const currentSlidee = document.querySelector(
            ".slick-current .slide-content"
        );

        if (currentSlidee) {
            currentSlidee.classList.add("scale-up-center");
        }
    };

    return (
        <Slider {...settings}>
            {slider?.map((item, i) => (
                <div
                    key={i}
                    className="relative h-[calc(100vh-91px)] focus:outline-none"
                >
                    <div className="absolute h-full w-full r-0 t-0 custom-gradient" />
                    <img
                        src={item.image}
                        className="scale-up-center transition-transform max-md:w-full max-md:object-cover h-[calc(100vh-91px)] md:h-[calc(100vh-91px)]"
                        width="100%"
                        height="auto"
                        alt="Slider"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#00000096] py-2 px-10 max-md:bottom-10">
                        <p className="text-white text-lg font-bold">
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SimpleCarousel;
