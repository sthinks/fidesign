import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { MdOutlineArrowBack } from "react-icons/md";
import { GrNext, GrPrevious } from "react-icons/gr";
import axios from "axios";
import { useParams } from "react-router";
import Animation from "../../components/Animation";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
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
        prevArrow: <GrPrevious />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "50px",
                },
            },
        ],
    };

    useEffect(() => {
        // GET isteği için kullanılacak URL
        const url = `https://fidesignoffice.com/api/get-project/${slug}`;
        window.scrollTo(0, 0);
        // Axios ile GET isteği yapma
        axios
            .get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": i18n.language,
                },
            })
            .then((response) => {
                setCatData(response.data);
                setLoading(false);
                window.scrollTo(0, 0);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
                setLoading(false);
            });
    }, [i18n.language]);
    useEffect(() => {
        // Sayfa yüklenince ekranı yukarı kaydır
        window.scrollTo(0, 0);
    }, []);
    return loading ? (
        <Animation />
    ) : (
        <>
            <div className="relative flex flex-wrap items-center justify-between px-40 max-2xl:px-14 max-xl:px-8 max-lg:px-5 py-2 bg-white">
                <div className="container mx-auto flex flex-wrap justify-between items-center ">
                    <a
                        href="/projects"
                        className="font-semibold text-[30px] max-md:text-xl flex items-center flex-row gap-5 hover:underline"
                    >
                        {t("geriDon")}
                        <MdOutlineArrowBack className="text-3xl max-md:text-xl" />
                    </a>
                </div>
            </div>

            <section className="container mx-auto project-detail">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Fi Design Office - Projects</title>
                </Helmet>

                <Slider {...settings} className="pb-20">
                    {catData?.image_gallery?.map((item, i) => (
                        <div key={i} className="p-5 focus:outline-none">
                            <img
                                src={item}
                                style={{ width: "100%", height: "auto" }}
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>
                <div className="container mx-auto py-16 fi-font">
                    <div className="md:flex justify-center flex-col items-center max-md:px-4">
                        <h1 className="md:w-1/2 font-bold text-xl border-b-2 border-black mb-5">
                            {catData.subtitle}
                        </h1>
                        <div className="md:flex w-1/2">
                            <div className="flex-1 max-md:mt-3">
                                <div>
                                    {t("pd_dizayn")}: {catData.design}
                                </div>
                                <div className="max-md:mt-3">
                                    {t("pd_yapi")}: {catData.construction}
                                </div>
                                <div className="max-md:mt-3">
                                    {t("pd_client")}: {catData.client}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="max-md:mt-3">
                                    {t("pd_location")}: {catData?.location}
                                </div>
                                <div className="max-md:mt-3">
                                    {t("pd_area")}: {catData.area}
                                </div>
                                <div className="max-md:mt-3">
                                    {t("pd_year")}: {catData.year}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 flex justify-center items-center max-md:px-4">
                        <div
                            className="md:w-1/2"
                            dangerouslySetInnerHTML={{
                                __html: catData.description,
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectDetail;
