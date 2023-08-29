import React, { useEffect, useState } from 'react';
import Proje from '../../assets/image/proje.png';
import KisBahcesi from "../../assets/image/kis.png"
import HomeBg from "../../assets/image/home-bg.png"
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from '@react-spring/web';

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('architecture'); // Başlangıçta "architecture" seçili
    const { t } = useTranslation(); // Burada t ve i18n nesnelerini alıyoruz

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
                <li
                    className={`md:mr-3 text-lg ${selectedCategory === 'architecture' ? 'text-[#7db2ca]' : ''}`}
                    onClick={() => handleCategoryChange('architecture')}
                >
                    ARCHITECTURE
                </li>
                <li className='md:mr-3 text-lg'>•</li>
                <li
                    className={`md:mr-3 text-lg ${selectedCategory === 'interior' ? 'text-[#7db2ca]' : ''}`}
                    onClick={() => handleCategoryChange('interior')}
                >
                    INTERIOR
                </li>
                <li className='md:mr-3 text-lg'>•</li>
                <li
                    className={`text-lg ${selectedCategory === 'urban' ? 'text-[#7db2ca]' : ''}`}
                    onClick={() => handleCategoryChange('urban')}
                >
                    URBAN
                </li>
            </ul>
            <div>
                <div className="pswp-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5" >
                    {selectedCategory === "architecture" &&
                        <>
                            <animated.a style={animatedStyles} href='/project-detail' class="relative group" >
                                <img width="100%" height="auto" alt='interior' src={Proje} />
                                <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                    <h3 class="text-lg font-semibold text-white">Çelik Ara Kat Projesi</h3>
                                </div>
                            </animated.a>
                            <animated.a style={animatedStyles} href='/project-detail' class="relative group" >
                                <img width="100%" height="auto" alt='interior' src={Proje} />
                                <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                    <h3 class="text-lg font-semibold text-white">Çelik Ara Kat Projesi</h3>
                                </div>
                            </animated.a>
                            <animated.a style={secondAnimatedStyles} href='/project-detail' class="relative group" >
                                <img width="100%" height="auto" alt='interior' src={Proje} />
                                <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                    <h3 class="text-lg font-semibold text-white">Çelik Ara Kat Projesi</h3>
                                </div>
                            </animated.a>
                        </>
                    }
                    {selectedCategory === "interior" &&
                        <animated.a style={animatedStyles} href='/project-detail' class="relative group" >
                            <img width="100%" height="auto" alt='interior' src={Proje} />
                            <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                <h3 class="text-lg font-semibold text-white">Çelik Ara Kat Projesi</h3>
                            </div>
                        </animated.a>
                    }
                    {selectedCategory === "urban" &&
                        <animated.a style={animatedStyles} href='/project-detail' class="relative group" >
                            <img width="100%" height="auto" alt='interior' src={Proje} />
                            <div className='absolute bottom-10 right-0 pl-16 pr-3 bg-[#00000052] text-end py-2 group-hover:bg-[#7db2ca] transition-colors duration-300'>
                                <h3 class="text-lg font-semibold text-white">Çelik Ara Kat Projesi</h3>
                            </div>
                        </animated.a>
                    }
                </div>
            </div>
            <img className='h-1/2' src={KisBahcesi} width="100%" height="auto" alt='Kış Bahçesi' />
        </section >
    )
}

export default Projects;
