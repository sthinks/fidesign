import React, { useState } from 'react';
import HomeBg from "../../assets/image/home-bg.png"
import { Helmet } from 'react-helmet';
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
    const [filterType, setFilterType] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [filterName, setFilterName] = useState('');

    const filteredData = data
        .filter(item => {
            if (filterType && item.type !== filterType) {
                return false;
            }
            if (filterYear !== '' && item.year !== parseInt(filterYear)) {
                return false;
            }
            if (filterName && !item.projectName.toLowerCase().includes(filterName.toLowerCase())) {
                return false;
            }
            return true;
        })
        .sort((a, b) => b.year - a.year); // Yılı büyükten küçüğe doğru sırala

    const handleTypeFilterChange = event => {
        setFilterType(event.target.value);
    };

    return (
        <section className='container mx-auto lg:px-40 py-4'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fi Design Office - Projects</title>
            </Helmet>
            <img src={HomeBg} width="25%" height="auto" className='absolute right-0 bottom-0' alt='Background' />
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold my-4">All Projects</h1>
                <div className="flex justify-between w-full mb-4">
                    <div className="w-full md:w-1/4">
                        <label htmlFor="nameFilter">Name:</label>
                        <input
                            type="text"
                            id="nameFilter"
                            className="block w-full p-2 border rounded"
                            value={filterName}
                            onChange={e => setFilterName(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/4 mb-2 md:mb-0">
                        <label htmlFor="typeFilter">Type:</label>
                        <select
                            id="typeFilter"
                            className="block w-full p-2 border rounded"
                            value={filterType}
                            onChange={handleTypeFilterChange}
                        >
                            <option value="">All</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            {/* ... Diğer tipler */}
                        </select>
                    </div>
                    <div className="w-full md:w-1/4 mb-2 md:mb-0">
                        <label htmlFor="yearFilter">Year:</label>
                        <input
                            type="number"
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
                            <th className="border p-2">Project Name</th>
                            <th className="border p-2">Type</th>
                            <th className="border p-2">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => (
                            <tr key={item.id}>
                                <td className="border p-2">{item.projectName}</td>
                                <td className="border p-2">{item.type}</td>
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
