import TopCTA from "@components/LandingPage/TopCTA";
// import AboutUs from "@components/LandingPage/AboutUs";
// import ContactUs from "@components/LandingPage/ContactUs";
// import GetTheApp from "@components/LandingPage/GetTheApp";
// import RegisterStore from "@components/LandingPage/RegisterStore";
// import WhyUs from "@components/LandingPage/WhyUs";
import LandingFooter from "@components/UI/LandingFooter";
import LandingNavbar from "@components/UI/LandingNavbar";

import dynamic from 'next/dynamic'
const WhyUs = dynamic(() => import('@components/LandingPage/WhyUs'))
const RegisterStore = dynamic(() => import('@components/LandingPage/RegisterStore'))
const GetTheApp = dynamic(() => import('@components/LandingPage/GetTheApp'))
const ContactUs = dynamic(() => import('@components/LandingPage/ContactUs'))
const AboutUs = dynamic(() => import('@components/LandingPage/AboutUs'))

import { FACEBOOK_APP_ID, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SITE_DESCRIPTION, SITE_URL } from "@utils/contants/general";

import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from 'next-seo';
import device_types from "@utils/contants/device_types";
import { useRouter } from "next/router";
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";

export async function getServerSideProps(context) {
    const UA = context.req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))

    return {
        props: {
            deviceType: isMobile ? device_types.MOBILE : device_types.DESKTOP
        }
    }
}

export default function Home({ deviceType }) {
    const router = useRouter()
    
    const { locale } = useLocale()

    return (
        <>
            <NextSeo
                title="Autoave - Online Car Care Service Booking"
                description={SITE_DESCRIPTION(LOCALISATION_DATA[locale].country)}
                tags="Autoave, Car Care"
                canonical={SITE_URL}
                openGraph={{
                    url: SITE_URL,
                    title: 'Autoave - Online Car Care Service Booking',
                    description: SITE_DESCRIPTION(LOCALISATION_DATA[locale].country),
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
                facebook={{
                    appId: FACEBOOK_APP_ID,
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'Car wash near me, Autoave, Autoave app, Car Wash, Online, Booking, Book Car Wash, Car Care, Car Wash in Banglore'
                }]}
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
            <LandingNavbar />
            <div className="content">
                <TopCTA deviceType={deviceType} />
                <AboutUs />
                <WhyUs />
                <RegisterStore />
                <GetTheApp />
                <ContactUs />
                <LandingFooter />
            </div>
            <style jsx>{`
                .content {
                    margin-top: 80px;
                }
            `}</style>
        </>
    )
}
