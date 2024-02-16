import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/Bs";
import { BiWorld } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import SimpleForm from "../../components/SimpleForm";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation(); // Burada t ve i18n nesnelerini alıyoruz

    return (
        <section>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fi Design Office - Contact</title>
            </Helmet>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.362445583778!2d28.821781075579324!3d40.995439520216074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa345bbad6255%3A0x803c00d0f1f1b272!2sFi%20Design%203D%20Studio!5e0!3m2!1str!2str!4v1690988507986!5m2!1str!2str"
                    className="border-none w-full h-[500px]"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className=" lg:px-40 py-16 max-md:p-4">
                <p className="border-b-2 border-[#b2b2b2] text-xl max-md:text-2xl ">
                    FI DESIGN OFFICE
                </p>
                <p className="text-lg" style={{ fontFamily: "sans-serif" }}>
                    Architectural Design Office
                </p>
                <ul className="mt-10" style={{ fontFamily: "sans-serif" }}>
                    <li className="flex items-center">
                        <MdLocationOn className="text-xl mr-4 max-md:flex-1" />
                        <p className="text-lg max-md:text-base max-md:flex-[6_6_0]">
                            Çobançeşme Mah. Sanayi Cad. Nish İstanbul C Blok
                            K:14 D:172 Bahçelievler / İSTANBUL
                        </p>
                    </li>
                    <li className="flex items-center mt-4">
                        <BsTelephoneFill className="text-xl mr-4 max-md:flex-1" />
                        <a
                            href="tel:02126036909"
                            className="text-lg max-md:text-base max-md:flex-[6_6_0]"
                        >
                            0212 603 69 09
                        </a>
                    </li>
                    <li className="flex items-center mt-4">
                        <MdEmail className="text-xl mr-4 max-md:flex-1" />
                        <a
                            href="mailto:info@fidesignoffice.com"
                            className="text-lg max-md:flex-[6_6_0]"
                        >
                            info@fidesignoffice.com
                        </a>
                    </li>
                    <li className="flex items-center mt-4">
                        <BiWorld className="text-xl max-md:text-base mr-4 max-md:flex-1" />
                        <a
                            href="www.fidesignoffice.com"
                            className="text-lg max-md:text-base max-md:flex-[6_6_0]"
                        >
                            www.fidesignoffice.com
                        </a>
                    </li>
                </ul>
                <ul className="mt-10">
                    <p class="font-semibold text-[30px] uppercase mb-3">
                        {t("contact_job")}
                    </p>
                    <p>{t("contact1")}</p>
                    <li className="mt-4 text-gray-500">{t("contact2")}</li>
                    <li className="mt-4 text-gray-500">{t("contact3")}</li>
                    <li className="mt-4 text-gray-500">{t("contact4")}</li>
                    <li className="mt-4 text-gray-500">{t("contact5")}</li>
                    <li className="mt-4 text-gray-500">{t("contact6")}</li>
                    <li className="mt-4 text-gray-500">{t("contact7")}</li>
                </ul>
                <p className="mt-4 text-gray-500">{t("contact8")}</p>
            </div>
            <SimpleForm contact={true} />
        </section>
    );
}

export default Contact;
