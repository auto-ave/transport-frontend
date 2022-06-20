import LandingContactUs from "@components/LandingPage/ContactUs";
import LandingFooter from "@components/UI/LandingFooter";
import Navbar from "@components/UI/LandingNavbar";
import { FACEBOOK_APP_ID, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SITE_URL } from "@utils/contants/general";
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";

import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from 'next-seo';
import { useRouter } from "next/router";


export default function ContactUs(){
    const router = useRouter()
    
    const { locale } = useLocale()

    return (
        <>
            <NextSeo
                title="Contact Us | Autoave - Car care made simple"
                description="Contact Us at Autoave - Simplifying the way you take care of your car."
                canonical={`${LOCALISATION_DATA[locale].domain}/contact-us`}
                openGraph={{
                    url: `${LOCALISATION_DATA[locale].domain}/contact-us`,
                    title: 'Contact Us | Autoave - Car care made simple',
                    description: 'Contact Us at Autoave - Simplifying the way you take care of your car.',
                    images: [
                        {
                            url: `${LOCALISATION_DATA[locale].domain}/autoave-banner.jpg`,
                            width: 1200,
                            height: 628,
                            alt: 'Autoave Banner',
                            type: 'image/jpeg',
                        },
                    ],
                    site_name: 'Autoave',
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'Autoave, autoave contact us, Car Wash, Book Car Wash, Car Care, Car Wash in Banglore'
                }]}
                facebook={{
                    appId: FACEBOOK_APP_ID,
                }}
            />
            <SocialProfileJsonLd
                type="Organization"
                name="Autoave"
                url={SITE_URL}
                sameAs={[
                    FACEBOOK_URL,
                    INSTAGRAM_URL,
                    LINKEDIN_URL
                ]}
            />
            <div className="flex flex-col justify-between min-h-screen">
                <Navbar />
                <div className="py-32">
                    <LandingContactUs />
                </div>
                <LandingFooter />
            </div>
            
        </>
    )
}