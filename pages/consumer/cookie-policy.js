import LandingContactUs from "@components/LandingPage/ContactUs";
import LandingFooter from "@components/UI/LandingFooter";
import Navbar from "@components/UI/LandingNavbar";
import { FACEBOOK_APP_ID, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SITE_URL } from "@utils/contants/general";
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";

import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from 'next-seo';
import { useRouter } from "next/router";


export default function CookiePolicy() {
    const router = useRouter()
    
    const { locale } = useLocale()

    return (
        <>
            <NextSeo
                title="Cookie Policy - Autoave"
                description="Cookie Policy for Consumers at Autoave - Simplifying the way you take care of your car."
                canonical={`${LOCALISATION_DATA[locale].domain}/consumer/cookie-policy`}
                openGraph={{
                    url: `${LOCALISATION_DATA[locale].domain}/consumer/cookie-policy`,
                    title: 'Cookie Policy - Autoave',
                    description: 'Cookie Policy for Consumers at Autoave - Simplifying the way you take care of your car.',
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
                    content: 'Autoave, Car Wash, Book Car Wash, Car Care, Car Wash in Banglore'
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
            <Navbar light />
            <div className="container p-3 py-40">
                <h1 className="text-2xl md:text-4xl">Cookie Policy</h1>
                <p className="mb-5">Updated at 2021-12-23</p>

                <h1>Definitions and key terms</h1>
                <p>To help explain things as clearly as possible in this Cookie Policy, every time any of these terms are referenced, are strictly defined as:</p>
                <ul>
                    <li>Cookie: small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</li>
                    <li>Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Autoave, that is responsible for your information under this Cookie Policy.</li>
                    <li>Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Autoave and use the services.</li>
                    <li>Personal Data: any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</li>
                    <li>Service: refers to the service provided by Autoave as described in the relative terms (if available) and on this platform. </li>
                    <li>Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
                    <li>Website:  site, which can be accessed via this URL: {LOCALISATION_DATA[locale].domain}</li>
                </ul>

                <h1>Introduction</h1>
                <p>This Cookie Policy explains how Autoave and its affiliates (collectively &apos;Autoave&apos;, &apos;we&apos;, &apos;us&apos;, and &apos;ours&apos;), use cookies and similar technologies to recognize you when you visit our website/app, including without limitation {LOCALISATION_DATA[locale].domain} and any related URLs, mobile or localized versions and related domains / sub-domains (&apos;Websites&apos;). It explains what these technologies are and why we use them, as well as the choices for how to control them.</p>

                <h1>What is a cookie?</h1>
                <p>A cookie is a small text file that is stored on your computer or other internet connected device in order to identify your browser, provide analytics, remember information about you such as your language preference or login information. They&apos;re completely safe and can&apos;t be used to run programs or deliver viruses to your device.</p>

                <h1>Why do we use cookies?</h1>
                <p>We use first party and/or third party cookies on our website/app for various purposes such as:</p>
                <ul>
                    <li>To facilitate the operation and functionality of our website/app;</li>
                    <li>To improve your experience of our website/app and make navigating around them quicker and easier;</li>
                    <li>To allow us to make a bespoke user experience for you and for us to understand what is useful or of interest to you;</li>
                    <li>To analyze how our website/app is used and how best we can customize it;</li>
                    <li>To identify future prospects and personalize marketing and sales interactions with it;</li>
                    <li>To facilitate the tailoring of online advertising to your interests.</li>
                    <li>You: a person or entity that is registered with Autoave to use the Services.</li>
                </ul>

                <h1>What type of cookies does Autoave use?</h1>
                <p>Cookies can either be session cookies or persistent cookies. A session cookie expires automatically when you close your browser. A persistent cookie will remain until it expires or you delete your cookies. Expiration dates are set in the cookies themselves; some may expire after a few minutes while others may expire after multiple years. Cookies placed by the website you’re visiting are called “first party cookies”.</p>
                <p>Strictly Necessary cookies are necessary for our website/app to function and cannot be switched off in our systems. They are essential in order to enable you to navigate around the website/app and use its features. If you remove or disable these cookies, we cannot guarantee that you will be able to use our website/app.</p>
                <p>We use the following types of cookies in our website/app:</p>
                <h1>Essential Cookies</h1>
                <p>We use essential cookies to make our website/app work. These cookies are strictly necessary to enable core functionality such as security, network management, your cookie preferences and accessibility. Without them you wouldn&apos;t be able to use basic services. You may disable these by changing your browser settings, but this may affect how the Websites function.</p>
                <h1>Analytics and Customization Cookies</h1>
                <p>These cookies collect information that is used to help us understand how our website/app is being used or how effective our marketing campaigns are, or to help us customize our website/app for you.</p>
                <p>We use cookies served by Google Analytics to collect limited data directly from end-user browsers to enable us to better understand your use of our website/app. Further information on how Google collects and uses this data can be found at: https://www.google.com/policies/privacy/partners/. You can opt-out of all Google supported analytics on our Websites by visiting: https://tools.google.com/dlpage/gaoptout.</p>
                <h1>How you can manage cookies?</h1>
                <p>Most browsers allow you to control cookies through their &apos;settings&apos; preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information. Browser manufacturers provide help pages relating to cookie management in their products.</p>
                <p>Browser manufacturers provide help pages relating to cookie management in their products. Please see below for more information.</p>
                <ul>
                    <li>Google Chrome</li>
                    <li>Internet Explorer</li>
                    <li>Mozilla Firefox</li>
                    <li>Safari (Desktop)</li>
                    <li>Safari (Mobile)</li>
                    <li>Android Browser</li>
                    <li>Opera</li>
                    <li>Opera Mobile</li>
                </ul>

                <h1>Blocking and disabling cookies and similar technologies</h1>
                <p>Wherever you&apos;re located you may also set your browser to block cookies and similar technologies, but this action may block our essential cookies and prevent our website from functioning properly, and you may not be able to fully utilize all of its features and services. You should also be aware that you may also lose some saved information (e.g. saved login details, site preferences) if you block cookies on your browser. Different browsers make different controls available to you. Disabling a cookie or category of cookie does not delete the cookie from your browser, you will need to do this yourself from within your browser, you should visit your browser&apos;s help menu for more information.</p>

                <h1>Changes To Our Cookie Policy</h1>
                <p>We may change our Service and policies, and we may need to make changes to this Cookie Policy so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Cookie Policy and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Cookie Policy. If you do not want to agree to this or any updated Cookie Policy, you can delete your account.</p>

                <h1>Your Consent</h1>
                <p>By using our website/app, registering an account, or making a purchase, you hereby consent to our Cookie Policy and agree to its terms.</p>
                <h1>Contact Us</h1>
                <p>Don&apos;t hesitate to contact us if you have any questions regarding our Cookie Policy.</p>
                <ul><li>Via Email:  <a href={`mailto:${LOCALISATION_DATA[locale].email}`}>{LOCALISATION_DATA[locale].email}</a></li>
                </ul>
            </div>
            <LandingContactUs />
            <LandingFooter />
        </>
    )
}