import Image from 'next/image'

import logo from '@public/logo.png'
import ROUTES from '@utils/routes'
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '@utils/contants/general'
import facebookIcon from '@public/icons/facebook.svg'
import instagramIcon from '@public/icons/instagram.svg'
import linkedinIcon from '@public/icons/linkedin.svg'

export default function LandingFooter() {
    return (
        <>
            <div className="bg-tertiary">
                <div className="container max-w-7xl px-5">
                    <div className="border-b-2 py-5">
                        <div className="flex flex-wrap justify-center md:justify-between items-center">
                            <div className='mb-4 md:mb-0'>
                                <a href={ROUTES.HOME}> 
                                    <Image src={logo} alt="Autoave Logo" priority />
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <a href={ROUTES.HOME} className="footer-item">
                                    Home
                                </a>
                                <a href={ROUTES.CONTACT_US} className="footer-item">
                                    Contact Us
                                </a>
                                <a href={ROUTES.CAR_TRANSPORTATION_SERVICE} className="footer-item">
                                    Car Transportation Service
                                </a>
                                <a href={ROUTES.COOKIES_POLICY} className="footer-item hidden">
                                    Cookie Policy
                                </a>
                                <a href={ROUTES.TERMS_AND_CONDITIONS} className="footer-item hidden">
                                    Terms and Conditions
                                </a>
                                <a href={ROUTES.PRIVACY_POLICY} className="footer-item hidden">
                                    Privacy Policy
                                </a>
                                <a href={ROUTES.REFUND_POLICY} className="footer-item hidden">
                                    Refund Policy
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                &copy;2022 Autoave Private Limited. All rights reserved
                            </div>
                            <div className="flex">
                                <a href={INSTAGRAM_URL} target="_blank" rel="me noreferrer" className='footer-icon'>
                                    <Image src={instagramIcon} alt="Instagram Icon" />
                                </a>
                                <a href={FACEBOOK_URL} target="_blank" rel="me noreferrer" className='footer-icon'>
                                    <Image src={facebookIcon} alt="Facebook Icon" />
                                </a>
                                <a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className='footer-icon'>
                                    <Image src={linkedinIcon} alt="Linkedin Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .footer-item {
                    padding: 0.5rem 1rem;
                }
                .footer-icon {
                    margin: 5px;
                }
            `}</style>
        </>
    )
}