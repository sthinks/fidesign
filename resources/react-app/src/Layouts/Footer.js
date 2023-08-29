import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'

function Footer() {
    const { t } = useTranslation(); // Burada t ve i18n nesnelerini alıyoruz

    return (
        <footer className='lg:px-40 max-md:p-4 lg:py-4'>
            <ul className='flex items-center'>
                <li className='text-[#b2b2b2] text-xl font-bold mr-5'>
                    <a href='/projects' className='transition duration-300 hover:text-black'>{t('projeler')}</a>
                </li>
                <li className='text-[#b2b2b2] text-xl font-bold mr-5'>
                    <a href='/about' className='transition duration-300 hover:text-black'>{t('hakkimizda')}</a>
                </li>
                <li className='text-[#b2b2b2] text-xl font-bold'>
                    <a href='/contact' className='transition duration-300 hover:text-black'>{t('iletisim')}</a>
                </li>
            </ul>
            <ul className='mt-10'>
                <li className="flex items-center">
                    <a
                        className="border-[#b2b2b2] border-2 rounded-full p-1 transition duration-300 hover:bg-black hover:border-black"
                        href="#pablo"
                    >
                        <AiOutlineInstagram className="text-[#b2b2b2] text-lg transition duration-300 hover:text-white" />
                    </a>
                    <a
                        className="border-[#b2b2b2] border-2 rounded-full p-1 ml-3 transition duration-300 hover:bg-black hover:border-black"
                        href="#pablo"
                    >
                        <GrLinkedinOption className="text-[#b2b2b2] text-lg transition duration-300 hover:text-white" />
                    </a>
                    <a
                        className="border-[#b2b2b2] border-2 rounded-full p-1 ml-3 transition duration-300 hover:bg-black hover:border-black"
                        href="#pablo"
                    >

                        <FaPinterestP className="text-[#b2b2b2] text-lg transition duration-300 hover:text-white" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer