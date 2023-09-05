import React, { useEffect, useState } from 'react';
import HomeBg from "../../assets/image/home-bg.png"
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Animation from '../../components/Animation';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const initialData = [
    { id: 1, projectName: 'Project A', type: 'Type 1', year: 2022 },
    { id: 2, projectName: 'Project B', type: 'Type 2', year: 2021 },
    { id: 3, projectName: 'Project C', type: 'Type 1', year: 1997 },
    { id: 4, projectName: 'Project D', type: 'Type 1', year: 2017 },
    { id: 5, projectName: 'Project E', type: 'Type 2', year: 2010 },
    { id: 6, projectName: 'Project F', type: 'Type 1', year: 2001 },
    // ... Diğer projeler
];

function AllProjects() {
    const [data, setData] = useState(initialData);
    const [filterArea, setFilterArea] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [filterName, setFilterName] = useState('');
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState(i18n.language);
    const { t } = useTranslation();

    useEffect(() => {
        // GET isteği için kullanılacak URL
        const url = 'http://127.0.0.1:8000/api/get-projects';

        // Axios ile GET isteği yapma
        axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang,
            },
        })
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }, [lang]);

    i18n.on("languageChanged", (lng) => {
        setLang(lng);
    });

    const filteredData = data
        .filter(item => {
            if (filterArea && !item.area.toLowerCase().includes(filterArea.toLowerCase())) { // Filtreleme için "Area" ekledik
                return false;
            }
            if (filterYear && !item.year.toLowerCase().includes(filterYear.toLowerCase())) {
                return false;
            }
            if (filterName && !item.title.toLowerCase().includes(filterName.toLowerCase())) {
                return false;
            }
            return true;
        })
        .sort((a, b) => b.year - a.year); // Yılı büyükten küçüğe doğru sırala


    return (
        loading ? <Animation /> :
            <section className='container mx-auto lg:px-40 py-16 h-screen max-md:p-4'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Fi Design Office - Projects</title>
                </Helmet>
                <img src={HomeBg} width="25%" height="auto" className='absolute right-0 bottom-0' alt='Background' />
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold my-4">{t('allProjects')}</h1>
                    <div className="flex justify-between w-full mb-4 max-md:flex-col">
                        <div className="w-full md:w-1/4">
                            <label htmlFor="nameFilter">{t('name')}:</label>
                            <input
                                type="text"
                                id="nameFilter"
                                className="block w-full p-2 border rounded"
                                value={filterName}
                                onChange={e => setFilterName(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/4 mb-2 md:mb-0">
                            <label htmlFor="typeFilter">{t('area')}:</label>
                            <input
                                type="text"
                                id="areaFilter"
                                className="block w-full p-2 border rounded"
                                value={filterArea}
                                onChange={e => setFilterArea(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/4 mb-2 md:mb-0">
                            <label htmlFor="yearFilter">{t('year')}:</label>
                            <input
                                type="text"
                                id="yearFilter"
                                className="block w-full p-2 border rounded"
                                value={filterYear}
                                onChange={e => setFilterYear(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr>
                                <th className="border p-2">{t('name')}</th>
                                <th className="border p-2">{t('area')}</th>
                                <th className="border p-2">{t('year')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map(item => (
                                <tr key={item.id}>
                                    <td className="border p-2">{item.title}</td>
                                    <td className="border p-2">{item.area}</td>
                                    <td className="border p-2">{item.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
    )
}

export default AllProjects;
