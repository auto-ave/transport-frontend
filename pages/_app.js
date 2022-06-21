import { DefaultSeo } from 'next-seo'

import '/styles/global.css'

import { useRouter } from 'next/dist/client/router';
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";
import Script from 'next/script';

// Performance Metrics logging
// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    
    const { locale } = useLocale()

    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IN',
                    url: LOCALISATION_DATA[locale].domain,
                    site_name: 'Autoave',
                }}
                twitter={{
                    cardType: 'summary_large_image',
                }}
            />
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp