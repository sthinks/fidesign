import React from "react";
import { MdLocationOn } from "react-icons/md"
import { BsTelephoneFill } from "react-icons/Bs"
import { BiWorld } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.362445583778!2d28.821781075579324!3d40.995439520216074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa345bbad6255%3A0x803c00d0f1f1b272!2sFi%20Design%203D%20Studio!5e0!3m2!1str!2str!4v1690988507986!5m2!1str!2str"
                    className="border-none w-full h-[500px]"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="container mx-auto p-4 lg:px-40">
                <p className="border-b-2 border-[#b2b2b2] font-semibold text-xl max-md:text-2xl">FI DESIGN OFFICE</p>
                <p className="text-lg">Architectural Design Office</p>
                <ul className="mt-10">
                    <li className="flex items-center">
                        <MdLocationOn className="text-xl mr-4 max-md:flex-1" />
                        <p className="font-semibold text-lg max-md:flex-[6_6_0]">Çobançeşme Mah. Sanayi Cad. Nish İstanbul C Blok K:14 D:172 Bahçelievler / İSTANBUL</p>
                    </li>
                    <li className="flex items-center mt-4">
                        <BsTelephoneFill className="text-xl mr-4 max-md:flex-1" />
                        <a href="tel:02126036909" className="font-semibold text-lg max-md:flex-[6_6_0]">0212 603 69 09</a>
                    </li>
                    <li className="flex items-center mt-4">
                        <MdEmail className="text-xl mr-4 max-md:flex-1" />
                        <a href="mailto:info@fidesignoffice.com" className="font-semibold text-lg max-md:flex-[6_6_0]">info@fidesignoffice.com</a>
                    </li>
                    <li className="flex items-center mt-4">
                        <BiWorld className="text-xl mr-4 max-md:flex-1" />
                        <a href="www.fidesignoffice.com" className="font-semibold text-lg max-md:flex-[6_6_0]">www.fidesignoffice.com</a>
                    </li>
                </ul>
                <ul className="mt-10">
                    <p>
                        Stajyer Öğrenci – İstanbul
                    </p>
                    <li className="mt-4 text-gray-500">
                        -Üniversitelerin Mimarlık bölümünden mezun,
                    </li>
                    <li className="mt-4 text-gray-500">
                        -Farklı ölçeklerde proje üretebilen, malzeme ve uygulama detaylarına hakim,
                    </li>
                    <li className="mt-4 text-gray-500">
                        -Tasarım ve görsel sunum yönü kuvvetli,
                    </li>
                    <li className="mt-4 text-gray-500">
                        -Takım çalışmasına yatkın, analitik düşünme yetisi olan,
                    </li>
                    <li className="mt-4 text-gray-500">
                        - AutoCAD, Sketchup ve Lumion programlarında yetkin,
                    </li>
                    <li className="mt-4 text-gray-500">
                        - İyi derecede İngilizce bilen takım arkadaşları arıyoruz.
                    </li>
                </ul>
                <p className="mt-4 text-gray-500">
                    Hibrit çalışma sistemine ayak uydurabilecek adayların, portfolyo ve CV’lerini wetransfer linki ile info@fidesignoffice.com
                    adresine göndermelerini rica ederiz.
                </p>
            </div>
            <SimpleForm contact={true} />

        </section>
    );
}

export default Contact;
