import React from "react";
import Banner from "../../assets/image/office-photo-2.png";
import Image1 from "../../assets/image/ferhat.jpg";
import Image2 from "../../assets/image/ece-arman.jpg";
import ReferancesBanner from "../../assets/image/office-photo-1.png";
import Referance1 from "../../assets/image/referance-1.png";
import Referance2 from "../../assets/image/referance-2.png";
import Referance3 from "../../assets/image/referance-3.png";
import Referance4 from "../../assets/image/referance-4.png";
import HomeBg from "../../assets/image/home-bg.png";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Popup from "reactjs-popup";

function About() {
    const { t } = useTranslation();

    return (
        <section>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fi Design Office - {t("hakkimizda")}</title>
            </Helmet>

            <img
                src={HomeBg}
                width="25%"
                height="auto"
                className="absolute right-0 bottom-0"
                alt="Background"
            />
            <div>
                <img
                    src={Banner}
                    className="w-full max-md:h-72 object-cover h-[calc(100vh-91px)]"
                    alt="About Banner"
                />
            </div>
            <div className="flex justify-center py-5 text-center flex-col items-center lg:px-40">
                <ul className="flex items-center font-bold max-md:flex-wrap gap-5 max-md:justify-center">
                    <li className={`md:mr-3 text-lg`}>
                        {t("about_us_mimari")}
                    </li>
                    <li className="md:mr-3 text-lg max-md:hidden">•</li>
                    <li className={`text-lg`}>{t("about_us_kentsel")}</li>

                    <li className="md:ml-3 mr-3 text-lg max-md:hidden">•</li>

                    <li className={`md:mr-3 text-lg `}>
                        {t("about_us_icmekan")}
                    </li>
                </ul>
                <p
                    className="py-4 max-md:px-4"
                    style={{ fontFamily: "sans-serif" }}
                >
                    {t("about1")}
                </p>
            </div>
            <div className="lg:px-40 py-4 max-md:text-center">
                <p className="font-semibold text-[30px] uppercase">
                    {t("takim")}
                </p>
            </div>
            <div className="flex flex-wrap lg:px-40">
                <Popup
                    trigger={
                        <div className="w-full md:w-1/2 md:pr-4 cursor-pointer">
                            <div className="relative">
                                <img
                                    src={Image1}
                                    className="h-96 w-full object-cover"
                                    alt="Architecture"
                                />
                                <div className="bg-[#00000052] absolute w-full h-full top-0 left-0" />
                                <div className="absolute bottom-10 right-0 pl-16 pr-3 bg-[#ffffff57] text-end py-2 transition-colors duration-300">
                                    <h3 className="text-xl font-semibold transition-colors duration-300 text-white">
                                        Ferhat İbrahimoğlu
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }
                    modal
                    nested
                >
                    {(close) => (
                        <div className="modal fixed inset-0 flex items-center justify-center bg-white">
                            <div className="relative bg-white max-md:w-full md:w-1/2">
                                <div className="content p-4 flex flex-row h-full max-md:flex-col">
                                    <p
                                        className="close absolute top-0 right-0 m-4 text-black text-3xl max-md:right-3 max-md:top-3 max-md:hidden cursor-pointer"
                                        onClick={close}
                                    >
                                        X
                                    </p>
                                    <div className="flex-1">
                                        <img
                                            src={Image1}
                                            className="w-96 h-full max-md:h-52 object-cover"
                                            alt="Architecture"
                                        />
                                    </div>
                                    <div className="flex-[2_2_0] md:px-4 max-md:py-5 relative">
                                        <p
                                            className="close absolute top-0 right-0 text-black text-3xl visible max-md:top-3 cursor-pointer"
                                            onClick={close}
                                        >
                                            X
                                        </p>
                                        <h1 className="text-2xl text-black">
                                            Ferhat İbrahimoğlu
                                        </h1>
                                        <h1 className="text-md text-black mt-2">
                                            {t("owner")}, {t("architect")} – YTÜ
                                        </h1>
                                        <a
                                            href="mailto:ferhat@fidesignoffice.com"
                                            className="text-xs text-[#181818] mt-2"
                                        >
                                            ferhat@fidesignoffice.com
                                        </a>
                                        <p className="text-black text-xs py-2">
                                            - {t("ferhat1")}
                                        </p>
                                        <p className="text-black text-xs  py-2">
                                            - {t("ferhat2")}
                                        </p>
                                        <p className="text-black text-xs  py-2">
                                            - {t("ferhat3")}
                                        </p>
                                        <p className="text-black text-xs">
                                            - {t("ferhat4")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
                <Popup
                    trigger={
                        <div className="w-full md:w-1/2 md:pl-4 max-md:mt-10 cursor-pointer">
                            <div className="relative">
                                <img
                                    src={Image2}
                                    className="h-96 w-full object-cover"
                                    alt="Architecture"
                                />
                                <div className="bg-[#00000052] absolute w-full h-full top-0 left-0" />
                                <div className="absolute bottom-10 right-0 pl-16 pr-3 bg-[#ffffff57] text-end py-2 transition-colors duration-300">
                                    <h3 className="text-xl font-semibold transition-colors duration-300 text-white">
                                        Ece Arman
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }
                    modal
                    nested
                >
                    {(close) => (
                        <div className="modal fixed inset-0 flex items-center justify-center bg-white">
                            <div className="relative bg-white max-md:w-full md:w-1/2">
                                <div className="content p-4 flex flex-row h-full max-md:flex-col">
                                    <p
                                        className="close absolute top-0 right-0 m-4 text-black text-3xl max-md:hidden cursor-pointer"
                                        onClick={close}
                                    >
                                        X
                                    </p>
                                    <div className="flex-1">
                                        <img
                                            src={Image2}
                                            className="w-96 h-full max-md:h-52 object-cover"
                                            alt="Architecture"
                                        />
                                    </div>
                                    <div className="flex-[2_2_0] md:px-4 max-md:py-5 relative">
                                        <p
                                            className="close absolute top-0 right-0 text-black text-3xl visible max-md:top-3 cursor-pointer"
                                            onClick={close}
                                        >
                                            X
                                        </p>
                                        <h1 className="text-2xl text-black">
                                            Ece Arman
                                        </h1>
                                        <h1 className="text-md text-black mt-2">
                                            {t("restorer")}, {t("architect")} –
                                            İTÜ
                                        </h1>
                                        <a
                                            href="mailto:ece@fidesignoffice.com"
                                            className="text-xs text-black mt-2"
                                        >
                                            ece@fidesignoffice.com
                                        </a>
                                        <p className="text-black text-xs py-2">
                                            - {t("ece1")}
                                        </p>
                                        <p className="text-black text-xs  py-2">
                                            - {t("ece2")}
                                        </p>
                                        <p className="text-black text-xs  py-2">
                                            - {t("ece3")}
                                        </p>
                                        <p className="text-black text-xs">
                                            - {t("ece4")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>

            <div className="lg:px-40 py-4 max-md:text-center">
                <p className="font-semibold text-[30px] py-4 uppercase">
                    {t("referanslar")}
                </p>
            </div>
            <div>
                <img
                    src={ReferancesBanner}
                    className="max-md:h-72 object-cover"
                    width="100%"
                    height="500px"
                    alt="About Banner"
                />
            </div>
            <div class="lg:px-40 py-4 max-md:text-center">
                <p class="font-semibold text-[30px] py-4 uppercase">
                    {t("about_us_solutions")}
                </p>
            </div>
            <div className="lg:px-40 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mb-80 items-center">
                    <a
                        href="https://www.mth.com.tr/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col justify-between items-center text-center md:border-b-2 border-gray-500 py-10"
                    >
                        <img src={Referance1} alt="marka" className="w-72" />
                        <div className="mt-5">
                            <p className="text-md">
                                1 - MTH Mimarlık Mühendislik
                            </p>
                            <p className="mt-4">{t("marka1")}</p>
                        </div>
                    </a>
                    <a
                        href="https://nikabim-dc.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col justify-between items-center text-center md:border-b-2 border-gray-500 py-10"
                    >
                        <img src={Referance2} alt="marka" className="w-72" />
                        <div className="mt-5">
                            <p className="text-md">
                                2 - Nika Proje Yönetimi Danışmanlık
                            </p>
                            <p className="mt-4">{t("marka2")}</p>
                        </div>
                    </a>
                    <a
                        href="https://www.farklimuhendislik.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col justify-between items-center text-center py-10"
                    >
                        <img src={Referance3} alt="marka" className="w-72" />
                        <div className="mt-5">
                            <p className="text-md">3 - Farklı Mühendislik</p>
                            <p className="mt-4">{t("marka3")}</p>
                        </div>
                    </a>
                    <a
                        href="https://velar.com.tr/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col justify-between items-center text-center py-10"
                    >
                        <img src={Referance4} alt="marka" className="w-72" />
                        <div className="mt-5">
                            <p className="text-md">4 - Velar Mühendislik</p>
                            <p className="mt-4">{t("marka4")}</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
