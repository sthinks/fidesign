import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const lngEn = {
    "projeler": "Projects",
    "hakkimizda": "About Us",
    "iletisim": "Contact",
    "iletisimeGec": "Get In Touch",
    "gonder": "SEND",
    "isim": "NAME SURNAME",
    "takim": "Team",
    "referanslar": "Referances",
    "iletisimNavbar": "CONTACT"
}

const lngTR = {
    "projeler": "Projeler",
    "hakkimizda": "Hakkımızda",
    "iletisim": "İletişim",
    "iletisimeGec": "İletişime Geç",
    "gonder": "GÖNDER",
    "isim": "İSİM SOYİSİM",
    "takim": "Takım",
    "referanslar": "Referanslar",
    "iletisimNavbar": "İLETİŞİM"
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            tr: { translation: lngTR },
            en: { translation: lngEn },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;
