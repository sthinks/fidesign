import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            about_us_solutions: "Our Solution Partners",
            contact_job: "JOBS AND INTERNSHIPS",
            mesaj: "MESSAGE",
            projeler: "Projects",
            projeleUpper: "PROJECTS",
            hakkimizda: "ABOUT US",
            hakkimizda2: "About Us",

            iletisim: "Contact",
            iletisimeGec: "GET IN TOUCH",
            gonder: "SEND",
            isim: "NAME SURNAME",
            takim: "Team",
            referanslar: "References",
            iletisimNavbar: "CONTACT",
            geriDon: "Back to Projects",
            contact1: "Architectural Intern – Istanbul",
            contact2:
                "- Graduated from Architecture Department of Universities",
            contact3:
                "- Able to produce projects in different scales, having knowledge of material and application details",
            contact4: "- Strong in design and visual presentation",
            contact5: "- Teamwork prone, analytical thinking ability",
            contact6: "- Competent in AutoCAD, Sketchup and Lumion programs",
            contact7:
                "- We are looking for teammates who can speak English fluently.",
            contact8:
                "We kindly ask the candidates who can keep up with the hybrid working system to send their portfolio and CV to info@fidesignoffice.com via the wetransfer link.",
            about1: "Istanbul based design office Fi Design Office established in 2021, produces projects  on architectural , urban and interior scales. It is continued its architectural practices with a talented young team. Regardless of the scale of the project we are working on, we are in an exciting search from the masterplan to the smallest detail in order to increase architectural communication and express ourselves in a simple language.",
            home1: "Fi Design Office produces design-based projects in architectural, interior and urban scale projects in its office in Fulya, Istanbul, while providing services in application projects and project sites with engineering companies that it is in partnership with.",
            contactExp:
                "If you are excited about architecture and design and intend to realize the projects you have in mind, do not hesitate to write to us.",
            slideTitle: "Title",
            slideDetail: "Detail",
            allProjects: "All Projects",
            exclusiveProjects: "Exclusive Projects",
            name: "Project Name",
            area: "Project Area",
            year: "Project Year",
            ferhat1: "He is an architect and designer in Fi Design Office.",
            ferhat2:
                "He studied architecture at Yıldız Technical University and graduated with a bachelor's degree in January 2019. He worked as an intern architect in many valuable architectural offices and has participated in many student and professional competitions. He has been studying for his master's degree in architectural design at Yıldız Technical University.",
            ferhat3:
                "After graduation, he developed his wide range of international professional architectural experience by working on significant projects of varying scales from social housing, to masterplans, pavilions, and museums. He participated in many workshops as a participant and organizer as he attached importance to the interactive architecture environment.",
            ferhat4:
                "Now, he is the founder and architect of Fi Design Office since 2021.",
            ece1: "Restorer and architect at Fi Design Office.",
            ece2: "After graduating from Istanbul Bilgi University with a high honour degree in Architectural Restoration, she continued her education at Istanbul Technical University, Department of Architecture. During her undergraduate career, she worked as an assistant to Prof. Ruhi Kafescioğlu, who was working on 'Earth Building Materials'. She participated in internships and workshops both in Turkey and abroad in the fields of architecture, restorator and design.",
            ece3: "She continues her studies on design and production in an academic framework by conducting workshops in events organized within various universities.",
            ece4: "In 2023, she joined Fi Design Office as a restorer architect and continues her work.",
            architect: "Architect",
            owner: "Owner",
            restorer: "Restorer",
            marka1: "Construction – Commitment",
            marka2: "Static – Project Management",
            marka3: "Electricity – Energy Audit",
            marka4: "Mechanical",
            formBasarili: "Your form has been submitted successfully.",
            formBasarisiz: "An error occurred while submitting the form!",
            about_us_mimari: "ARCHITECTURE",
            about_us_kentsel: "INTERIOR",
            about_us_icmekan: "URBAN",
            pd_dizayn: "DESIGN",
            pd_yapi: "CONSTRUCTİON",
            pd_client: "CLIENT",
            pd_area: "AREA",
            pd_year: "YEAR",
            pd_location: "LOCATION",
            hepsi: "ALL",
        },
    },
    tr: {
        translation: {
            hepsi: "TÜMÜ",
            restorer: "Restoratör",
            pd_year: "YIL",
            pd_location: "KONUM",
            pd_area: "ALAN",
            pd_client: "İŞVEREN",
            pd_yapi: "YAPI",
            pd_dizayn: "TASARIM",
            about_us_mimari: "MİMARİ",
            about_us_kentsel: "İÇ MEKAN",
            about_us_icmekan: "KENTSEL",
            projeleUpper: "PROJELER",
            contact_job: "İŞLER VE STAJLAR",
            about_us_solutions: "ÇÖZÜM ORTAKLARIMIZ",
            mesaj: "MESAJ",
            projeler: "Projeler",
            hakkimizda: "HAKKIMIZDA",
            hakkimizda2: "Hakkımızda",

            iletisim: "İletİşİm",
            iletisimeGec: "İLETİŞİME GEÇ",
            gonder: "GÖNDER",
            isim: "İSİM SOYİSİM",
            takim: "Takım",
            referanslar: "Referanslar",
            iletisimNavbar: "İLETİŞİM",
            geriDon: "Projelere geri dön",
            contact1: "Stajyer Öğrenci – İstanbul",
            contact2: "- Üniversitelerin Mimarlık bölümünden mezun,",
            contact3:
                "- Farklı ölçeklerde proje üretebilen, malzeme ve uygulama detaylarına hakim,",
            contact4: "- Tasarım ve görsel sunum yönü kuvvetli,",
            contact5:
                "- Takım çalışmasına yatkın, analitik düşünme yetisi olan,",
            contact6: "- AutoCAD, Sketchup ve Lumion programlarında yetkin,",
            contact7:
                "- İyi derecede İngilizce bilen takım arkadaşları arıyoruz.",
            contact8:
                "Hibrit çalışma sistemine ayak uydurabilecek adayların, portfolyo ve CV’lerini wetransfer linki ile info@fidesignoffice.com adresine göndermelerini rica ederiz.",
            about1: "2021 yılında kurulan İstanbul merkezli tasarım ofisi Fi Design Office, mimari, kentsel ve iç mekan ölçeğinde proje üretmekte, genç kadrosuyla mimari tasarımlarına devam etmektedir. Çalıştığımız projenin ölçeği ne olursa olsun, mimari iletişimi arttırabilmek ve kendimizi yalın bir dille aktarabilmek adına, masterplandan en küçük detaya kadar heyecanlı bir arayış içerisindeyiz.",
            home1: "Fi Design Office; İstanbul Fulya’daki ofisinde mimari, iç mekan ve kentsel ölçekli projelerde tasarım bazlı projeler üretirken, öte yandan uygulama projelerinde ve proje sahalarında çözüm ortaklığında olduğu mühendislik firmalarıyla da hizmet vermektedir.",
            contactExp:
                "Mimariye, tasarıma dair bir heyecanınız var ve aklınızdaki projeleri hayata geçirmek niyetindeyseniz, bize yazmaktan çekinmeyin.",
            slideTitle: "Başlık",
            slideDetail: "Detay",
            allProjects: "Bütün Projeler",
            exclusiveProjects: "Seçkİn Projeler",
            name: "Proje Adı",
            area: "Proje Alanı",
            year: "Proje Yılı",
            ferhat1: "Fi Design Office’de mimar ve tasarımcı.",
            ferhat2:
                "Yıldız Teknik Üniversitesi’ndeki mimarlık eğitimini 2019’un Ocak ayında tamamladı. Lisans yıllarında pek çok kreatif ofiste çalışmış, birden fazla yarışmada ödül ve mansiyon kazanmıştır. Yüksek lisans tez çalışmasını da mimari tasarım anadalında sürdürmektedir.",
            ferhat3:
                "Mezuniyetinden sonra, yurtiçinde ve yurtdışında görev aldığı sosyal konut, masterplan, pavilyon, müze gibi farklı ölçeklerde projeler ile mimari vizyonunu ve perspektifini geliştirdi. Ayrıca, atölye yürütücülüğü ve misafir öğretim üyeliği ile mimarinin ara mekanlarında üretim yapmaya devam etmektedir.",
            ferhat4:
                "2021 yılında da Fi Design Office’i kurarak kurucu mimar olarak çalışmalarına devam etmektedir.",
            ece1: "Fi Design Office'de restoratör ve mimar.",
            ece2: "İstanbul Bilgi Üniversitesi'nde başladığı Mimari Restorasyon bölümünü yüksek onur derecesiyle bitirip, eğitim hayatına İstanbul Teknik Üniversitesi Mimarlık bölümünde devam etti. Lisans kariyerinde, 'Toprak Yapı Malzemeleri' üzerine çalışmalarını sürdüren Prof. Ruhi Kafescioğlu'na asistanlık yaptı. Mimarlık, restorasyon ve tasarım alanlarında, hem yurtiçi hem de yurtdışında stajlar ve workshoplara dahil oldu.",
            ece3: "Çeşitli üniversiteler bünyesinde düzenlenen etkinliklerde atölye yürütücülüğü yaparak, tasarım ve üretim üzerine çalışmalarını akademik bir çerçevede devam ettirmektedir.",
            ece4: "2023 yılında Fi Design Office bünyesine restoratör mimar olarak katılıp çalışmalarına devam etmektedir.",
            architect: "Mimar",
            owner: "Kurucu",
            marka1: "İnşaat – Taahhüt",
            marka2: "Statik – Proje Yönetimi",
            marka3: "Elektrik – Enerji Denetimi",
            marka4: "Mekanik",
            formBasarili: "Formunuz başarıyla iletildi.",
            formBasarisiz: "Form gönderilirken bir hata oluştu!",
        },
    },
};

i18n.use(initReactI18next).init({
    lng: localStorage.getItem("lang"),
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    fallbackLng: "tr",
    resources,
});

export default i18n;
