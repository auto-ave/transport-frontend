import image1 from '@public/images/car-transport/24-7-support-vector.png';
import image2 from '@public/images/car-transport/package-service-vector.png';
import image3 from '@public/images/car-transport/pick-and-drop-vector.png';
import image4 from '@public/images/car-transport/live-tracking-vector.png';
import Image from 'next/image'

const TEAM_DATA = [
    {
        'id': '1',
        'title': 'Subodh Verma',
        'image': image1,
        'description': '',
    },
    {
        'id': '2',
        'title': 'Saurabh Nanwai',
        'image': image4,
        'description': '',
    },
    {
        'id': '3',
        'title': 'Suryansh Tomar',
        'image': image3,
        'description': '',
    },
    {
        'id': '4',
        'title': 'Jayesh Jaiswal',
        'image': image2,
        'description': '', 
    },
]

export default function Team() {
    return (
        <div>
            <div className="relative container max-w-7xl py-16">
                <div className="flex flex-wrap">
                    <div className="w-full px-5 mb-4">
                        <h2 className="text-2xl lg:text-4xl font-bold">
                            Who are we?
                        </h2>
                    </div>
                    <div className="w-full ">
                        <div className="px-5 flex justify-center lg:justify-between flex-wrap">
                            {TEAM_DATA.map(feature =>
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