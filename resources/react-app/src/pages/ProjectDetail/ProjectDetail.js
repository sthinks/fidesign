import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import { MdOutlineArrowBack } from 'react-icons/md';
import { GrNext } from 'react-icons/gr';
import axios from 'axios';
import { useParams } from 'react-router';
import Animation from '../../components/Animation';
import { useTranslation } from 'react-i18next';

function ProjectDetail() {
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();
    const { slug } = useParams();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "360px",
        nextArrow: <GrNext />,
    };

    useEffect(() => {
        // GET isteği için kullanılacak URL
        const url = `http://127.0.0.1:8000/api/get-project/${slug}`;

        // Axios ile GET isteği yapma
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setCatData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('An error occurred:', error);
                setLoading(false);
            });
    }, []);

    return (
        loading ? <Animation /> :
            <section className='container mx-auto project-detail'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Fi Design Office - Projects</title>
                </Helmet>
                <div className='max-md:p-4 md:py-4 md:px-40'>
                    <a href='/projects' className='font-semibold text-[30px] flex items-center flex-row gap-5 hover:underline'>{t('geriDon')}<MdOutlineArrowBack className='text-3xl' /></a>
                </div>
                <Slider {...settings} className='pb-20'>
                    {catData?.image_gallery?.map((item) => (
                        <div className='p-5 focus:outline-none'>
                            <img src={item} style={{ width: "100%", height: "auto" }} alt="" />
                        </div>
                    ))}
                </Slider>
                <div className='max-md:p-4 md:py-4 md:px-40'>
                    <div className='md:flex justify-center flex-col items-center'>
                        <h1 className='md:w-1/2 font-bold text-xl border-b-2 border-black mb-5'>{catData.subtitle}</h1>
                        <div className='md:flex w-1/2'>
                            <div className='flex-1 max-md:mt-3'>
                                <div>DESIGN: {catData.design}</div>
                                <div className='max-md:mt-3'>CONSTRUCTİON: {catData.construction}</div>
                            </div>
                            <div className='flex-1'>
                                <div className="max-md:mt-3">CLIENT: {catData.client}</div>
                                <div className='max-md:mt-3'>AREA: {catData.area}</div>
                                <div className='max-md:mt-3'>YEAR: {catData.year}</div>
                            </div>
                        </div>
                    </div>
                    <div className='py-20'>
                        <div
                            dangerouslySetInnerHTML={{ __html: catData.description }}
                        />
                    </div>
                </div>

            </section >
    )
}

export default ProjectDetail;
