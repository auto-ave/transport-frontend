import Image from "next/image"
import AppScreen2 from '@public/images/autoave-app-home-half.webp'
import AppScreen1 from '@public/images/autoave-app-store-page-half.webp'
import { APPSTORE_URL, PLAYSTORE_URL } from "@utils/contants/general"
import PlayStoreBadge from '@public/images/play-store-badge.png'
import AppStoreBadge from '@public/images/app-store-badge.png'
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";

export default function GetTheApp({ homepageRedirect }) {
    const { locale } = useLocale()
    return (
        <>
            <div className="outer-container">
                <div className="container max-w-7xl ">
                    <div className="flex items-center">
                        <div className="px-5 py-16 lg:py-5">
                            <div className="mb-5">
                                <h3 className="text-white text-5xl mb-5">
                                    Car Care made simple
                                </h3>
                                <p className="text-white">
                                    {LOCALISATION_DATA[locale].country}&apos;s only platform where you can choose between various stores and services
                                    to find what&apos;s best for your car. See pricing, images, reviews, and ratings before
                                    selecting the best service store for your vehicle.
                                </p>
                            </div>
                            <div>
                                {homepageRedirect ?
                                    <div>
                                        {/* eslint-disable-next-line */}
                                        <a href="https://www.autoave.in/">
                                            <div className="bg-white text-gray-800 font-bold px-6 py-3 inline-block rounded-lg">
                                                Book Now
                                            </div>
                                        </a>
                                    </div>
                                    :
                                    <>
                                        <h5 className="text-white text-xl bold mb-2">Get the App</h5>
                                        <div className="flex">
                                            <a href={PLAYSTORE_URL} className="mr-2" target="_blank" rel="noreferrer">
                                                <Image src={PlayStoreBadge} alt="Play Store Badge" priority />
                                            </a>
                                            <a href={APPSTORE_URL} className="ml-2" target="_blank" rel="noreferrer">
                                                <Image src={AppStoreBadge} alt="App Store Badge" priority />
                                            </a>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <>
                            <div className="hidden lg:block scale-105">
                                <Image src={AppScreen1} alt="Autoave App Screen 1" height={369 * 2 + 100} width={279 * 2} />
                            </div>
                            <div className="hidden lg:block">
                                <Image src={AppScreen2} alt="Autoave App Screen 2" height={369 * 2 + 100} width={279 * 2} />
                            </div>
                        </>

                    </div>
                </div>
            </div>
            <style jsx>{`
                .outer-container {
                    background-image: url('/images/autoave-circle-background.svg'), radial-gradient(50% 430.06% at 50% 45.32%, #3570B5 0%, #042A56 100%) ;
                    background-size: cover;
                }
            `}</style>
        </>
    )
}