import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/image/logo.png"
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaPinterestP, FaBars } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { gsap } from 'gsap'
import SplitType from 'split-type'

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(""); // Şu anki sayfa için state ekliyoruz
    const { t } = useTranslation(); // Burada t ve i18n nesnelerini alıyoruz
    const [language, setLanguage] = useState(i18n.language)
    const textRef = useRef();

    useEffect(() => {
        const path = window.location.pathname;
        setCurrentPage(path);
    }, []); // Component yüklendiğinde mevcut sayfa yolu alınacak

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng)
    };

    const startAnimation = () => {
        const splitText = new SplitType(textRef.current, { type: 'chars,words' });
        textRef.current.classList.remove('hidden')
        gsap.from(splitText.chars, {
            opacity: 0,
            y: 100,
            stagger: 0.05,
            duration: 1,
            ease: 'power4.out',
        });

        // Metni bölen SplitType nesnesinin içindeki öğeleri döngü ile dolaşarak konsola yazdırma
        splitText.chars.forEach((char) => {
            console.log(char.textContent);
        });

        return () => {
            splitText.revert();
        };
    }
    const stopAnimation = () => {
        textRef.current.classList.add('hidden')
    }
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between lg:px-40 py-2 bg-white">
                <button
                    className={`absolute right-2 top-2 text-white cursor-pointer text-xl leading-none p-2 border border-solid border-black rounded-full block lg:hidden outline-none focus:outline-none z-50 ${navbarOpen && 'bg-black'}`}
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <FaBars className={`text-[32px] ${navbarOpen ? 'text-white' : 'text-black'}`} />
                </button>
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static  lg:justify-start max-md:justify-center">
                        <a
                            className="max-md:flex max-md:flex-col text-sm font-bold leading-relaxed inline-block md:mr-4 whitespace-nowrap uppercase text-white md:flex md:flex-row items-end"
                            href="/"
                        >
                            <img src={Logo} className="max-md:w-15 w-12 self-center" alt="Logo" onMouseEnter={startAnimation}
                                onMouseLeave={stopAnimation} />
                            <p ref={textRef} className="text-black text-[1rem] leading-none max-md:text-[20px] md:ml-5 hidden max-md:mt-4">Fi Design Office</p>
                        </a>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center max-md:justify-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto max-md:w-full max-md:mt-5">
                            <li className="nav-item max-md:py-2 max-md:text-center md:flex md:items-center relative">
                                <button
                                    className={`md:flex max-md:justify-center items-center md:px-16 uppercase font-bold leading-snug transition border-none focus:outline-none duration-300 max-md:w-full ${currentPage === "/projects" ? "md:underline max-md:bg-black max-md:text-white" : "text-black hover:text-[#b2b2b2] group-hover:text-[#b2b2b2]"
                                        }`}
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <span className="text-md max-md:text-[20px]">{t('projeler')}</span>
                                </button>
                                {dropdownOpen && (
                                    <div className="md:absolute top-full right-0 w-full md:w-fit bg-white md:rounded-md md:shadow-lg z-10">
                                        <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
                                            <a href="/all-projects" className="md:block md:px-4 md:py-4 text-black hover:bg-black hover:text-white transition duration-300 max-md:text-[20px] max-md:mt-2 uppercase">
                                                {t('allProjects')}
                                            </a>
                                            <a href="/projects" className="md:block md:px-4 md:py-4 hover:bg-black hover:text-white max-md:text-[20px] transition duration-300 max-md:mt-2 uppercase">
                                                {t('exclusiveProjects')}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item max-md:py-2 max-md:text-center md:flex md:items-center">
                                <a
                                    className={`flex max-md:justify-center items-center md:px-16 uppercase font-bold leading-snug transition duration-300 ${currentPage === "/about" ? "md:underline max-md:bg-black max-md:text-white" : "text-black hover:text-[#b2b2b2]"
                                        }`}
                                    href="/about"
                                >
                                    <span className="text-md max-md:text-[20px]">{t('hakkimizda')}</span>
                                </a>
                            </li>
                            <li className="nav-item md:mr-10 max-md:py-2 md:flex md:items-center">
                                <a
                                    className={`flex max-md:justify-center items-center md:px-16 uppercase font-bold leading-snug transition duration-300 ${currentPage === "/contact" ? "md:underline max-md:bg-black max-md:text-white" : "text-black hover:text-[#b2b2b2]"
                                        }`}
                                    href="/contact"
                                >
                                    <span className="text-md max-md:text-[20px]">{t('iletisimNavbar')}</span>
                                </a>
                            </li>
                            <li className="max-md:hidden nav-item flex items-center uppercase font-bold justify-between">
                                <span className={language == 'tr' ? 'text-black ml-2 text-base cursor-pointer' : 'ml-2 text-base text-[#b2b2b2] cursor-pointer'} onClick={() => changeLanguage('tr')}>TR</span>
                                <span className="ml-2 text-black text-base">/</span>
                                <span className={language == 'en' ? 'text-black ml-2 text-base cursor-pointer' : 'ml-2 text-base text-[#b2b2b2] cursor-pointer'} onClick={() => changeLanguage('en')}>ENG</span>
                            </li>
                            <li className="max-md:hidden nav-item flex items-center justify-between ml-10">
                                <a
                                    className="border-black border-2 rounded-full p-1 transition duration-300 group hover:bg-black"
                                    href="#pablo"
                                >
                                    <AiOutlineInstagram className="text-black text-lg transition duration-300 group-hover:text-white" />
                                </a>
                                <a
                                    className="border-black border-2 rounded-full p-1 transition duration-300 group hover:bg-black ml-2"
                                    href="#pablo"
                                >
                                    <GrLinkedinOption className="text-black text-lg transition duration-300 group-hover:text-white" />
                                </a>
                                <a
                                    className="border-black border-2 rounded-full p-1 transition duration-300 group hover:bg-black ml-2"
                                    href="#pablo"
                                >

                                    <FaPinterestP className="text-black text-lg transition duration-300 group-hover:text-white" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}