import Image from 'next/image'
import BgImage from '@components/Custom/BgImage'

import background from '@public/images/cta-background.webp'
import mobileBackground from '@public/images/cta-background-mobile.webp'
import PlayStoreBadge from '@public/images/play-store-badge.png'
import AppStoreBadge from '@public/images/app-store-badge.png'
import AppScreen1 from '@public/images/autoave-app-1.webp'
import AppScreen2 from '@public/images/autoave-app-2.webp'
import AppScreen3 from '@public/images/autoave-app-3.webp'
import { APPSTORE_URL, PLAYSTORE_URL } from '@utils/contants/general'
import MixpanelTracking from 'service/mixpanel'
import { DOWNLOAD_CLICK } from '@utils/contants/tracking_events'

export default function TopCTA(props){
    const { deviceType } = props
    const handleDownload = (type) => {
        MixpanelTracking.getInstance().track(DOWNLOAD_CLICK, {
            "Download Type": type
        })
    }
    return (
        <>
            <BgImage 
                imgsrc={background} 
                mobileImgsrc={mobileBackground} 
                imgalt={"Car Wash Background"} 
                className="cta-background" 
                tintOpacity="0.65" 
                priority={true} 
                deviceType={deviceType}
            >
                <div className="container px-5 py-32 md:py-48 text-center">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-7xl max-w-4xl mx-auto mb-3">
                        Giving your vehicle the <span className='text-secondary'>love</span> it deserves
                    </h1>
                    <p className='text-white max-w-2xl mx-auto mb-7'>
                        Choose from a variety of stores &amp; services and book according to your schedule. No more waiting in queues.
                    </p>
                    <div className='flex justify-center'>
                        <a href={PLAYSTORE_URL} className='m-2' target="_blank" rel="noreferrer" onClick={() => handleDownload("Play Store - Page Top CTA")}>
                            <Image src={PlayStoreBadge} alt="Play Store Badge" priority />
                        </a>
                        <a href={APPSTORE_URL} className='m-2' target="_blank" rel="noreferrer" onClick={() => handleDownload("App Store - Page Top CTA")}>
                            <Image src={AppStoreBadge} alt="App Store Badge" priority />
                        </a>
                    </div>
                </div>
            </BgImage>
            <div className="app-showcase flex items-center justify-center">
                <div className="appimage image1">
                    <Image src={AppScreen1} alt="Autoave App Screen 1" priority />
                </div>
                <div className="appimage image2">
                    <Image src={AppScreen2} alt="Autoave App Screen 2" priority />
                </div>
                <div className="appimage image3">
                    <Image src={AppScreen3} alt="Autoave App Screen 3" priority />
                </div>
            </div>
            <style jsx>{`
                .cta-background {
                    position: relative;
                    background-image: url('${background}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    z-index: 3;
                }
                .app-showcase {
                    position: relative;
                    top: -100px;
                    z-index: 100;
                }
                .appimage {
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                }
                .image1 {
                    position: relative;
                    top: 20px;
                    left: 130px;
                    transform: rotate(-15deg);
                }
                .image3 {
                    position: relative;
                    top: 20px;
                    right: 130px;
                    transform: rotate(15deg);
                }
                @media(min-width: 992px) {
                    .image1 {
                        animation-name: leftImage;
                        animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
                        animation-duration: 1.4s;
                        animation-delay: 2s;
                    }
                    .image3 {
                        animation-name: rightImage;
                        animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
                        animation-duration: 1.4s;
                        animation-delay: 2s;
                    }
                }
                @media(max-width: 768px) {
                    .image1 {
                        left: 90px;
                    }
                    .image3 {
                        right: 90px;
                    }
                }
                @media(max-width: 550px) {
                    .image1 {
                        left: 50px;
                    }
                    .image3 {
                        right: 50px;
                    }
                }
                .image1:hover {
                    transform: rotate(-15deg) translateY(-15px) scale(1.02);
                }
                .image2:hover {
                    transform: translateY(-15px) scale(1.02);
                }
                .image3:hover {
                    transform: rotate(15deg) translateY(-15px) scale(1.02);
                }
            `}</style>
        </>
    )
}