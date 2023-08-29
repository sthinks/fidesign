import React from 'react';
import Proje from '../../assets/image/project-detail.png';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import { MdOutlineArrowBack } from 'react-icons/md';
import { GrNext } from 'react-icons/gr';

function ProjectDetail() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "360px",
        nextArrow: <GrNext />,
    };

    return (
        <section className='container mx-auto project-detail'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fi Design Office - Projects</title>
            </Helmet>
            <div className='max-md:p-4 md:py-4 md:px-40'>
                <a href='/projects' className='font-semibold text-[30px] flex items-center flex-row gap-5 hover:underline'>Back to Projects  <MdOutlineArrowBack className='text-3xl' /></a>
            </div>
            <Slider {...settings} className='pb-20'>
                <div className='p-5 focus:outline-none'>
                    <img src={Proje} style={{ width: "100%", height: "auto" }} alt="" />
                </div>
                <div className='p-5 focus:outline-none'>
                    <img src={Proje} style={{ width: "100%", height: "auto" }} alt="" />
                </div>
                <div className='p-5 focus:outline-none'>
                    <img src={Proje} style={{ width: "100%", height: "auto" }} alt="" />
                </div>
                <div className='p-5 focus:outline-none'>
                    <img src={Proje} style={{ width: "100%", height: "auto" }} alt="" />
                </div>
                <div className='p-5 focus:outline-none'>
                    <img src={Proje} style={{ width: "100%", height: "auto" }} alt="" />
                </div>
            </Slider>
            <div className='container mx-auto p-4'>
                <div className='md:flex justify-center flex-col items-center'>
                    <h1 className='md:w-1/2 font-bold text-xl border-b-2 border-black mb-5'>Project Name</h1>
                    <div className='md:flex w-1/2'>
                        <div className='flex-1 max-md:mt-3'>
                            <div>DESIGN:</div>
                            <div className='max-md:mt-3'>CONSTRUCTİON:</div>
                        </div>
                        <div className='flex-1'>
                            <div className="max-md:mt-3">CLIENT:</div>
                            <div className='max-md:mt-3'>AREA:</div>
                            <div className='max-md:mt-3'>YEAR:</div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default ProjectDetail;
