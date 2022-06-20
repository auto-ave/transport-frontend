import VehicleWashImage from '@public/images/vehicle-wash-1.webp';
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";
import Image from 'next/image';

export default function AboutUs(){
    const { locale } = useLocale()

    return (
        <>
            <div className="container max-w-7xl p-5 mb-5 md:mb-32">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="md:flex-1 p-3">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl mb-5">
                            Your Vehicle <br />
                            Your Wash <br />
                            On <span className="text-primary">Demand!</span>
                        </h2>
                        <p className="max-w-lg">
                            {LOCALISATION_DATA[locale].country}&apos;s only platform where you can choose between various stores and 
                            services to find what&apos;s best for your car. See pricing, images, 
                            reviews, and ratings on our app before selecting the best service store for 
                            your vehicle.
                        </p>
                        <p className="max-w-lg">
                            No more waiting in queues to get your services done, pre-book a slot online 
                            according to your schedule and get your services without any wait.
                        </p>
                    </div>
                    <div className="md:flex-1 p-3">
                        <div>
                            <Image src={VehicleWashImage} alt="Car Wash" priority />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

            `}</style>
        </>
    )
}