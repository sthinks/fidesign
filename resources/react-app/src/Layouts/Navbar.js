import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/image/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaPinterestP, FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useNavigate } from "react-router-dom";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(""); // Şu anki sayfa için state ekliyoruz
    const { t, i18n } = useTranslation(); // Burada t ve i18n nesnelerini alıyoruz
    const [language, setLanguage] = useState(i18n.language);
    const textRef = useRef();
    useEffect(() => {
        const path = window.location.pathname;
        setCurrentPage(path);
    }, []); // Component yüklendiğinde mevcut sayfa yolu alınacak

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
        localStorage.setItem("lang", lng);
    };

    const startAnimation = () => {
        const splitText = new SplitType(textRef.current, {
            type: "chars,words",
        });
        textRef.current.classList.remove("hidden");
        gsap.from(splitText.chars, {
            opacity: 0,
            y: 100,
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
        });

        // Metni bölen SplitType nesnesinin içindeki öğeleri döngü ile dolaşarak konsola yazdırma
        splitText.chars.forEach((char) => {});

        return () => {
            splitText.revert();
        };
    };
    const stopAnimation = () => {
        textRef.current.classList.add("hidden");
    };
    const navigate = useNavigate();

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-40 max-2xl:px-14 max-xl:px-8 max-lg:px-5 py-2 bg-white">
                <button
                    className={`absolute right-2 top-6 text-white cursor-pointer text-xl leading-none p-2 border border-solid border-black rounded-full block xl:hidden outline-none focus:outline-none z-50 ${
                        navbarOpen && "bg-black"
                    }`}
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <FaBars
                        className={`text-[32px] ${
                            navbarOpen ? "text-white" : "text-black"
                        }`}
                    />
                </button>
                <div className="container mx-auto flex flex-wrap justify-between items-center ">
                    <div className="w-auto w- max-xl:w-full relative flex justify-between lg:static max-xl:h-20  lg:justify-start max-xl:justify-start items-center max-md:relative">
                        <li className="max-xl:w-2/6 hidden max-xl:flex nav-item items-center uppercase font-bold justify-between max-xl:justify-start max-md:px-4 max-md:mt-2">
                            <span
                                className={
                                    language == "tr"
                                        ? "text-black ml-2 max-xl:ml-0 text-base cursor-pointer"
                                        : "ml-2 max-xl:ml-0 text-base text-[#b2b2b2] cursor-pointer"
                                }
                                onClick={() => changeLanguage("tr")}
                            >
                                TR
                            </span>
                            <span className="ml-2 text-black text-base">/</span>
                            <span
                                className={
                                    language == "en"
                                        ? "text-black ml-2 text-base cursor-pointer"
                                        : "ml-2 text-base text-[#b2b2b2] cursor-pointer"
                                }
                                onClick={() => changeLanguage("en")}
                            >
                                ENG
                            </span>
                        </li>
                        <a className="max-xl:w-2/6 max-xl:flex max-xl:flex-col    text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white xl:flex xl:flex-row items-center">
                            <img
                                src={Logo}
                                className="max-md:w-15 w-12 self-center"
                                onClick={() => navigate("/")}
                                alt="Logo"
                                onMouseEnter={startAnimation}
                                onMouseLeave={stopAnimation}
                            />
                            <p
                                ref={textRef}
                                className="text-black max-xl:hidden text-[1rem] leading-none max-md:text-[20px] md:ml-5 max-md:mt-4 h-full items-center hidden"
                            >
                                Fi Design Office
                            </p>
                        </a>
                    </div>
                    <div
                        className={
                            "xl:flex max-xl:w-2/6 flex-grow items-center max-xl:justify-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col xl:flex-row list-none xl:ml-auto max-xl:w-full max-xl:mt-5">
                            <li className="nav-item max-xl:py-2 max-xl:text-center xl:flex xl:items-center">
                                <button
                                    className={`xl:flex max-xl:flex text-md max-xl:justify-start items-center px-8 max-xl:px-4 uppercase font-bold leading-snug transition border-none focus:outline-none duration-300 max-xl:w-full ${
                                        currentPage === "/projects"
                                            ? " max-xl:bg-black  max-xl:text-white"
                                            : "text-black hover:text-[#b2b2b2] group-hover:text-[#b2b2b2]"
                                    }`}
                                    onClick={() =>
                                        setDropdownOpen(!dropdownOpen)
                                    }
                                >
                                    <span className="text-md max-xl:text-[20px] text-with-underline">
                                        {t("projeler")}{" "}
                                    </span>
                                    {dropdownOpen ? (
                                        <MdKeyboardArrowDown className="text-2xl" />
                                    ) : (
                                        <MdKeyboardArrowUp className="text-2xl" />
                                    )}
                                </button>
                                {dropdownOpen && (
                                    <div className="xl:absolute top-full w-max bg-white xl:rounded-md xl:shadow-lg z-10 border-2 max-xl:border-none max-xl:w-full">
                                        <div className="max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-start">
                                            <a
                                                href="/all-projects"
                                                className="xl:block text-start xl:px-4 xl:py-4 max-xl:pl-10 max-md:text-base max-xl:hover:bg-none rounded-t-md transition duration-300 max-md:text-[20px] max-md:mt-2 uppercase"
                                            >
                                                {t("allProjects")}
                                            </a>
                                            <a
                                                href="/projects"
                                                className="xl:block text-start xl:px-4 xl:py-4 max-xl:pl-10 max-md:text-base  rounded-b-md  max-md:text-[20px] transition duration-300 max-md:mt-2 uppercase"
                                            >
                                                {t("exclusiveProjects")}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item max-xl:py-2 max-xl:text-center xl:flex xl:items-center">
                                <a
                                    className={`flex max-xl:justify-start items-center px-8 max-xl:px-4 uppercase font-bold leading-snug transition duration-300 ${
                                        currentPage === "/about"
                                            ? " max-xl:bg-black max-xl:text-white"
                                            : "text-black hover:text-[#b2b2b2]"
                                    }`}
                                    href="/about"
                                >
                                    <span className="text-md max-xl:text-[20px] text-with-underline">
                                        {t("hakkimizda")}
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item xl:mr-10 max-xl:py-2 xl:flex xl:items-center">
                                <a
                                    className={`flex max-xl:justify-start items-center px-8 max-xl:px-4 uppercase font-bold leading-snug transition duration-300 ${
                                        currentPage === "/contact"
                                            ? " max-xl:bg-black max-xl:text-white"
                                            : "text-black hover:text-[#b2b2b2]"
                                    }`}
                                    href="/contact"
                                >
                                    <span className="text-md max-xl:text-[20px] text-with-underline">
                                        {t("iletisim")}
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item max-xl:hidden flex items-center uppercase font-bold justify-between max-md:w-[30%] max-md:px-4 max-md:mt-2">
                                <span
                                    className={
                                        language == "tr"
                                            ? "text-black ml-2 max-xl:ml-0 text-base cursor-pointer"
                                            : "ml-2 max-xl:ml-0 text-base text-[#b2b2b2] cursor-pointer"
                                    }
                                    onClick={() => changeLanguage("tr")}
                                >
                                    TR
                                </span>
                                <span className="ml-2 text-black text-base">
                                    /
                                </span>
                                <span
                                    className={
                                        language == "en"
                                            ? "text-black ml-2 text-base cursor-pointer"
                                            : "ml-2 text-base text-[#b2b2b2] cursor-pointer"
                                    }
                                    onClick={() => changeLanguage("en")}
                                >
                                    ENG
                                </span>
                            </li>
                            <li className="nav-item flex items-center justify-between ml-10 max-xl:mt-4 max-xl:ml-0 max-xl:justify-start max-xl:gap-5 max-xl:px-4">
                                <a
                                    className="border-black border-2 rounded-full p-1 transition duration-300 group "
                                    href="https://www.instagram.com/fidesignoffice?igsh=c3lrM3drZDVlemM2"
                                    target="blank"
                                >
                                    <AiOutlineInstagram className="text-black text-lg transition duration-300 group-hover:text-white" />
                                </a>
                                <a
                                    className="border-black border-2 rounded-full p-1 transition duration-300 group hover:bg-black ml-2"
                                    href="https://www.linkedin.com/company/fidesignoffice"
                                    target="blank"
                                >
                                    <GrLinkedinOption className="text-black text-lg transition duration-300 group-hover:text-white" />
                                </a>
                                <a
                                    className="border-black border-2 rounded-full p-1 transition duration-300 group hover:bg-black ml-2"
                                    href="https://tr.pinterest.com/fidesignoffice/"
                                    target="blank"
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
