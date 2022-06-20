import image1 from '@public/images/car-transport/24-7-support-vector.png';
import image2 from '@public/images/car-transport/package-service-vector.png';
import image3 from '@public/images/car-transport/pick-and-drop-vector.png';
import image4 from '@public/images/car-transport/live-tracking-vector.png';
import Image from 'next/image'

const FEATURES_DATA = [
    {
        'id': '1',
        'title': '24/7 support',
        'image': image1,
    },
    {
        'id': '2',
        'title': 'Live Tracking',
        'image': image4,
    },
    {
        'id': '3',
        'title': 'Pickup and drop',
        'image': image3,
    },
    {
        'id': '4',
        'title': 'Packing service',
        'image': image2,
    },
]

export default function Features() {
    return (
        <div>
            <div className="relative container max-w-7xl py-3 lg:py-16">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-5 mb-4">
                        <h2 className="text-2xl lg:text-4xl font-bold">
                            Why we are the best choice for Car transportation!
                        </h2>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <div className="px-5 flex justify-center lg:justify-between flex-wrap">
                            {FEATURES_DATA.map(feature =>
                                <div className='px-12 lg:px-5 py-4 text-center' key={feature.id}>
                                    <div className='mb-2'>
                                        <Image src={feature.image} alt={feature.title} />
                                    </div>
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}