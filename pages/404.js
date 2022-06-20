import ROUTES from "@utils/routes";
import Image from "next/image";
import Link from "next/link";
import towing from '@public/images/autoave-towing.svg';
import Navbar from "@components/UI/LandingNavbar";
import LandingFooter from "@components/UI/LandingFooter";

export default function PageNotFound() {
    return (
        <>
            <div>
                <div className="flex flex-col justify-between min-h-screen">
                    <Navbar />
                    <div className="p-5 py-32 text-center">
                        <Image src={towing} alt="Page Not Found" width="400" priority />
                        <h1 className="text-2xl md:text-5xl text-primary mb-2">404</h1>
                        <h2 className="text-xl md:text-3xl text-primary mb-1">
                            Oops! Page not found
                        </h2>
                        <p className="text-muted mb-5">
                            Let’s take you back to the homepage, it’s beautiful there!
                        </p>
                        <Link href={ROUTES.HOME}>
                            <a>
                                <button className="flex-shrink-0 transition-all bg-primary hover:text-black text-sm text-white py-3 px-5 rounded" type="button">
                                    Back to Home
                                </button>
                            </a>
                        </Link>
                    </div>
                    <LandingFooter />
                </div>
            </div>
        </>
    )
}