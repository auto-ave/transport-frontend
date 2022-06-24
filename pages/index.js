import CarTransportForm from "@components/Forms/CarTransportForm";
import LandingContactUs from "@components/LandingPage/ContactUs";
import LandingFooter from "@components/UI/LandingFooter";
import Navbar from "@components/UI/LandingNavbar";
import { FACEBOOK_APP_ID, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SITE_URL } from "@utils/contants/general";
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";

import { NextSeo } from "next-seo";
import { SocialProfileJsonLd, LocalBusinessJsonLd, BrandJsonLd } from 'next-seo';
import { useRouter } from "next/router";
import Image from 'next/image'
import image2 from '@public/images/car-transport/price-tag.png'
import image1 from '@public/images/car-transport/delivery-notes.png'
import image3 from '@public/images/car-transport/delivery-cart.png'
import image4 from '@public/images/car-transport/empty-pocket.jpg'
import image5 from '@public/images/car-transport/trucks-lined-up.jpg'
import image6 from '@public/images/car-transport/human-thumb.jpg'
import background from '@public/images/car-transport/car-transport-background.jpg'
import BgImage from "@components/Custom/BgImage";
import BasicOverview from "@components/CarTransport/BasicOverview";
import Features from "@components/CarTransport/Features";
// import GetTheApp from "@components/LandingPage/GetTheApp";
import Content1 from "@components/CarTransport/Content1";
import Content2 from "@components/CarTransport/Content2";
import CarTransportHomepage from "@components/CarTransport/Homepage";

const HOW_IT_WORKS = [
    {
        key: "car-transport-works-1",
        title: "Share your moving details",
        description: "Share Your Moving Details through Website/ Mobile App / Call",
        image: image1
    },
    {
        key: "car-transport-works-2",
        title: "Get free quotes",
        description: "Get Free Online Quotations from Verified Car & Bike Movers",
        image: image2
    },
    {
        key: "car-transport-works-3",
        title: "Confirm mover and schedule the service",
        description: "Our Experts Help You to Book Verified Car movers and confirm the moving.",
        image: image3
    }
]

export const WHY_US = [
    {
        'key': 'whyus1',
        'title': 'Affordable prices',
        'description': 'Get the lowest prices available on the market.',
        'image': image4
    },
    {
        'key': 'whyus2',
        'title': 'Diverse Options',
        'description': 'Get quotes from many verified movers and compare prices.',
        'image': image5
    },
    {
        'key': 'whyus3',
        'title': 'Customer Satisfaction',
        'description': 'Our best in class feedback system makes the service provider work efficiently and accurately.',
        'image': image6
    },
]

export default function CarTransportServiceIndex() {
    const router = useRouter()

    const { locale } = useLocale()

    const goToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <CarTransportHomepage />
        </>
    )
}