import image from '@public/images/car-transport/car-image-forest.jpg';
import Image from 'next/image';

export default function Content1() {
    return (
        <div>
            <div className="relative py-2 lg:py-12 container max-w-7xl">
                <div className="flex flex-wrap">
                    
                    <div className="w-full lg:w-7/12">
                        <div className="px-5 mb-8">
                            <p className='mb-4'>
                                Moving a Car is skilled and highly challenged job, Car transport is done by a Car trailer or Car Carrier vehicle which are designed to move a car. Once the car is packed up from your home it is ramped on to the vehicle and then tyre are locked to the body of vehicle container to immobilize the moment during car transport ensuring the safe delivery at destination
                            </p>
                            <p className='mb-4'>
                                Autoave Transport involves outstanding organizational practices including team management in transporting products with uniform measurements and safety controls. Plus, Car Transport in Bangalore provides smooth transportation of all forms of trucks in good condition so that the transport is not interrupted anyhow on the way.
                            </p>
                            <p>
                                Moreover, transportation is a tough event that may occur in your lifetime at any time. Plus, you may find it difficult to do all the jobs for yourself. Hence, you should head to the market to assist you with some transporting agencies. But you have to be careful to pick one of Bangalore&apos;s trustworthy transporters. It is also smart and seamless that we direct our clients to select the proper transporter to move their valuables. Each time we move to make your travel secure and timely with our professional workers.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 mb-4">
                        <div>
                            <Image src={image} alt="Car in Forest" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}