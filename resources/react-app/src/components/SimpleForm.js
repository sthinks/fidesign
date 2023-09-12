import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SocialMedia from "../assets/image/sm.png";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('İsim zorunludur.'),
    mail: Yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta zorunludur.'),
});

function SimpleForm({ contact }) {
    const { t } = useTranslation(); // Burada t ve i18n nesnelerini alıyoruz

    const onSubmit = (values, { resetForm }) => {
        // Form verilerini Axios ile sunucuya POST isteği yaparak gönderme
        console.log('sss')
        axios.post('http://127.0.0.1:8000/api/contact', values)
            .then(response => {
                console.log('Başarıyla gönderildi:', response.data);
                resetForm(); // Formu sıfırla
                toast.success(t('formBasarili'))
            })
            .catch(error => {
                console.error('Hata:', error);
                toast.success(t('formBasarisiz'))
            });
    };

    return (
        <div className='lg:px-40 py-28 max-md:p-4'>
            <div className='md:flex'>
                <div className={contact ? 'w-full' : 'md:w-3/5'}>
                    <h5 className='font-bold text-md'>{t('iletisimeGec')}</h5>
                    <p className='text-gray-500 mb-10'>
                        {t('contactExp')}
                    </p>
                    <Formik
                        initialValues={{ fullname: '', mail: '' }} // initialValues düzeltildi
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className='mb-10'>
                                    <Field placeholder={t('isim')}
                                        type="text" name="fullname" id="fullname" className="w-full border-b-2 border-b-[#b2b2b2] placeholder:text-lg outline-none py-2" />
                                    <ErrorMessage name="fullname" component="div" className="text-red-500" />
                                </div>

                                <div className='mb-10'>
                                    <Field placeholder="E-MAIL" type="mail" name="mail" id="mail" className="w-full border-b-2 border-b-[#b2b2b2] placeholder:text-lg outline-none py-2" />
                                    <ErrorMessage name="mail" component="div" className="text-red-500" />
                                </div>

                                <button type="submit" className='bg-[#b2b2b2] text-white py-2 px-5 mt-14 hover:bg-[#7db2ca] transition duration-300'>{t('gonder')}</button>
                            </Form>
                        )}
                    </Formik>
                </div>
                {contact && <img src={SocialMedia} className='max-md:hidden w-[35%] ml-10' alt="Sosyal Medya" />}
            </div>

        </div>
    )
}

export default SimpleForm;
