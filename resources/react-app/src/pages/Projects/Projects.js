import React, { useEffect, useState } from 'react';
import Proje from '../../assets/image/proje.png';
import KisBahcesi from "../../assets/image/kis.png"
import HomeBg from "../../assets/image/home-bg.png"
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';
import axios from "axios"

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('architecture'); // Başlangıçta "architecture" seçili
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation(); // Burada t ve i18n nesnelerini alıyoruz

    useEffect(() => {
        // GET isteği için kullanılacak URL
        const url = 'http://127.0.0.1:8000/api/get-categories';

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

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const [key, setKey] = useState(0);

    const animatedStyles = useSpring({
        key: key, // Key'i değiştirerek animasyonun tekrar çalışmasını sağlarız
        from: { opacity: 0, transform: 'translateX(-100%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 },
        reset: true, // Animasyonun her sıfırlandığında tekrar çalışmasını sağlar
    });

    const secondAnimatedStyles = useSpring({
        key: key, // Key'i değiştirerek animasyonun tekrar çalışmasını sağlarız
        from: { opacity: 0, transform: 'translateY(-100%)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 },
        reset: true, // Animasyonun her sıfırlandığında tekrar çalışmasını sağlar
    });

    useEffect(() => {
        // Kategori değiştiğinde key'i güncelle
        setKey((prevKey) => prevKey + 1);
    }, [selectedCategory]);



    return (
        <section className='container mx-auto lg:px-40 py-4'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fi Design Office - Projects</title>
            </Helmet>
            <img src={HomeBg} width="25%" height="auto" className='absolute right-0 bottom-0' alt='Background' />
            <ul className='flex items-center font-bold max-md:flex-col cursor-pointer'>
                {catData.map((item) => (
                    <>
                        <li
                            className={`md:mr-3 text-lg ${selectedCategory === `${item.title}` ? 'text-[#7db2ca] uppercase' : 'uppercase'}`}
                            onClick={() => handleCategoryChange(item.title)}
                        >
                            {item.title}
                        </li>
                        <li className='md:mr-3 text-lg'>•</li>

                    </>
                ))}
            </ul>
            <div>
                <div className="pswp-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5" >
                    {selectedCategory === `${catData[0]?.title}` &&
                        <>
                            {catData[0]?.projects.map((item) => (
                                <animated.a style={animatedStyles} href={`/project-detail/${item.slug}`} className="relative group" >
                                    <div className='w-full h-full bg-[#0000007d] absolute left-0 top-0 group-hover:bg-transparent transition-colors duration-300' />
                                    <img width="100%" height="auto" alt='interior' src={item.image} />
                                    <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    </div>
                                </animated.a>
                            ))}
                        </>
                    }
                    {selectedCategory === `${catData[1]?.title}` &&
                        <>
                            {catData[1]?.projects.map((item) => (
                                <animated.a style={animatedStyles} href={`/project-detail/${item.slug}`} className="relative group" >
                                    <div className='w-full h-full bg-[#0000007d] absolute left-0 top-0 group-hover:bg-transparent transition-colors duration-300' />
                                    <img width="100%" height="auto" alt='interior' src={item.image} />
                                    <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    </div>
                                </animated.a>
                            ))}
                        </>
                    }
                    {selectedCategory === `${catData[2]?.title}` &&
                        <>
                            {catData[2]?.projects.map((item) => (
                                <animated.a style={animatedStyles} href={`/project-detail/${item.slug}`} className="relative group" >
                                    <div className='w-full h-full bg-[#0000007d] absolute left-0 top-0 group-hover:bg-transparent transition-colors duration-300' />
                                    <img width="100%" height="auto" alt='interior' src={item.image} />
                                    <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    </div>
                                </animated.a>
                            ))}
                        </>
                    }
                </div>
            </div>
            <img className='h-1/2' src={KisBahcesi} width="100%" height="auto" alt='Kış Bahçesi' />
        </section >
    )
}

export default Projects;
