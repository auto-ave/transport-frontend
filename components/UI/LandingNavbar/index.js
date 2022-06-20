import Image from "next/image"
import logo from '@public/logo.png'
import Link from "next/link"
import React from "react"
import ROUTES from "@utils/routes";

export default function Navbar({ light }) {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <>
            <div className={`navbar p-5 ${light ? 'backdrop-blur-3xl' : 'backdrop-blur-xl'}`}>
                <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4">
                    <div>
                        <Link href={ROUTES.HOME}>
                            <a>
                                <Image src={logo} alt="Autoave Logo" priority />
                            </a>
                        </Link>
                    </div>
                    <div className="flex">
                        <Link href={ROUTES.HOME} >
                            <a className="navbar-item text-primary hidden md:block">
                                Home
                            </a>
                        </Link>
                        <Link href={ROUTES.CONTACT_US}>
                            <a className="navbar-item text-primary">
                                Contact Us
                            </a>
                        </Link>
                        <Link href={ROUTES.CAR_TRANSPORTATION_SERVICE}>
                            <a className="navbar-item text-primary hidden md:block">
                                Car Transport Service
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .navbar {
                    background: ${scrollPosition > 500 ? 'rgba(255,255,255, 0.8)' : 'white'};
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    z-index: 1000;
                    transition: 0.5s;
                }
                .navbar-item {
                    padding: 0.5rem 1rem;
                    font-weight: 700;
                }
            `}</style>
        </>
    )
}