import { LANDING_WHY_US } from "@utils/contants/landing_page";
import useWindowSize from "hooks/useWindowSize";
import Image from "next/image";

export default function WhyUs(){
    const windowSize = useWindowSize()
    return (
        <>
            <div className="outer-container">
                <div className="container max-w-7xl p-5">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl mb-8 md:mb-2">
                        You&apos;ll love <span className="text-primary">autoave</span>
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-between items-center">
                        {LANDING_WHY_US.map((item, index) => {
                            return (
                                <div 
                                    className={`md:flex-1 p-3 max-w-xs`} 
                                    key={item.key} 
                                    style={windowSize.width > 992 ? { marginTop: `${item.marginTop}rem` } : {}}
                                >
                                    <div className="mb-4 relative pt-56">
                                        <Image src={item.image} layout="fill" objectFit="contain" alt={item.title} priority />
                                        <div className="icon-container absolute flex align-middle justify-center">
                                            <Image src={item.icon} alt={`Why us icon ${index}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-2xl mb-2">
                                            {item.title} 
                                        </h5>
                                        <p className="">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .outer-container {
                    background-image: url('/images/circles-background.svg');
                    background-repeat: no-repeat;
                    background-size: 90%;
                    background-position: center;
                }
                .icon-container {
                    position: absolute;
                    top: -25px;
                    right: -25px;
                    background: white;
                    border-radius: 50%;
                    height: 50px;
                    width: 50px;
                    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </>
    )
}