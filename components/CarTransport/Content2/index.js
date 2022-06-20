import image from '@public/images/car-transport/car-transport-truck.jpg';
import Image from 'next/image';

export default function Content2() {
    return (
        <div>
            <div className="relative py-2 lg:py-12 container max-w-7xl">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-5/12 mb-4">
                        <div>
                            <Image src={image} alt="Car in Forest" />
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12">
                        <div className="px-5 mb-8">
                            <p className='mb-4'>
                                Being one of the most leading Car Carriers In Bangalore Companies in the market, Autoave provides you with the most prominent and instant online transportation and packing services to move your vehicle to another destination. Our major goal is to provide you with the best logistics solutions at affordable prices and effective communication as well. Also, we are highly committed to satisfying you with the best car shifting and moving services.
                            </p>
                            <p>
                                We have served many clients with our reliable as well as efficient services. We are having years of experience along with market understanding. Our executives know how to provide excellent service to clients. Our skilled team is actually the backbone of our company. They have high experience in handling the commercial as well as household Vehicles Transport Services in Bangalore. In order to make reaching any destination easier for us, we are having a large network of Transporters and truck owners
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}