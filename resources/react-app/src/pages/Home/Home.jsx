import React, { useState, useEffect } from "react";
import axios from "axios";
import SimpleCarousel from "../../components/Carousel/SimpleCarousel";
import SimpleForm from "../../components/SimpleForm";
import HomeBg from "../../assets/image/home-bg.png";
import Animation from "../../components/Animation";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
function Home() {
    const [data, setData] = useState([]);
    const [slider, setSlider] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        // GET isteği için kullanılacak URL
        const url = "http://127.0.0.1:8000/api/get-categories";

        // Axios ile GET isteği yapma
        axios
            .get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": i18n.language,
                },
            })
            .then((response) => {
                const manipulatedData = swapDataItems(response.data, 1, 2); // Örnek olarak 2. ve 3. öğelerin yerini değiştirelim
                setData(manipulatedData); // Manipüle edilmiş veriyi set edin
                window.scrollTo(0, 0);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
                setLoading(false);
            });

        const urlSlider = "/api/get-home-slider";

        // Axios ile GET isteği yapma
        axios
            .get(urlSlider, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": i18n.language,
                },
            })
            .then((response) => {
                setSlider(response.data);
                setLoading(false);
                window.scrollTo(0, 0);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [i18n.language]);
    const getUtf = (value) => {
        // Unicode normalleştirme
        const normalizedTitle = value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        // URL'yi kodla
        const encodedTitle = encodeURIComponent(normalizedTitle);

        return encodedTitle;
    };
    const swapDataItems = (data, indexA, indexB) => {
        const newData = [...data];
        const temp = newData[indexA];
        newData[indexA] = newData[indexB];
        newData[indexB] = temp;
        return newData;
    };

    return loading ? (
        <Animation />
    ) : (
        <div>
            <img
                src={HomeBg}
                width="25%"
                height="auto"
                className="absolute right-0 bottom-0"
                alt="Background"
            />
            <SimpleCarousel slider={slider} />
            <section className="container mx-auto lg:px-40 py-16 text-center max-md:px-5">
                <p className="font-semibold text-black">{t("home1")}</p>
            </section>
            <div className="container mx-auto lg:px-40 py-4 text-center">
                <p className="font-semibold text-[30px]">{t("projeleUpper")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:px-40">
                {data?.map((item, i) => (
                    <a
                        key={i}
                        href={
                            item.title === "İÇ MEKAN"
                                ? `/projects/icmekan`
                                : `/projects/${getUtf(item.title)}`
                        }
                        className="max-md:mb-10 overflow-hidden"
                    >
                        <div className="relative home-card group">
                            <img
                                src={item.image}
                                alt="Architecture"
                                className="w-full h-[550px] object-cover group-hover:scale-125 transition-transform duration-500"
                            />
                            <div className="w-full h-full bg-[#0000007d] absolute left-0 top-0 group-hover:bg-transparent transition-colors duration-300" />
                            <div className="home-card_text absolute bottom-10 right-0 pl-16 pr-3 bg-white text-end py-2 uppercase transition-bg duration-300">
                                <h3 className="text-xl font-semibold transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <SimpleForm />
        </div>
    );
}

export default Home;
