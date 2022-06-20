import Image from 'next/image'
import React from 'react'

import BgImage from '@components/Custom/BgImage'
import ContantUsForm from '@components/Forms/ContactUsform'
import localisation, { COUNTRY_TO_LOCALE } from '@utils/localisation'
import useLocale from "@utils/useLocale";
import Team from '../Team'

export default function LandingContactUs(){
    const { locale } = useLocale()

    return (
        <>
            <div className="outer-container">
                <div className="container md:max-w-7xl p-5 py-16">
                    <div className="md:flex flex-wrap items-center w-100">
                        <div className='flex-1 mb-4 md:mb-0'>
                            <div className='md:max-w-lg mb-5'>
                                <BgImage imgsrc={localisation[locale].city_image} imgalt="Autoave Logo" borderRadius="8px">
                                    <div className='pt-52'>
                                        <h3 className='text-white text-3xl p-5 tracking-tight text-shadow'>
                                            {localisation[locale].service_location_text}
                                        </h3>
                                    </div>
                                </BgImage>
                            </div>
                            <div className='p-3'>
                                <h3 className='mb-4 text-xl'>AUTOAVE PRIVATE LIMITED</h3>
                                <p className='mb-3'>
                                    {localisation[locale].address}
                                </p>
                                <p>
                                    Email: <a href={`mailto:${localisation[locale].email}`} className="font-bold">{localisation[locale].email}</a>
                                </p>
                                {/* <p>
                                    PAN: AAWCA2056P
                                </p> */}
                            </div>
                        </div>
                        <div className="flex-1 p-5 w-100">
                            <div className=''>
                                <h4 className='text-4xl mb-5 md:mb-8'>
                                    Contact Us
                                </h4>
                                <ContantUsForm />
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <Team /> */}
                    </div>
                </div>
            </div>
        </>
    )
}