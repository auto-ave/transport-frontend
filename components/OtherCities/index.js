import { API_CONTACT, API_TRANSPORT_ENQUIRY } from "@utils/contants/general";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Select from 'react-select'

const city_options = [
    { key: 1, name: "Car Transportation in Bangalore", path: "/bangalore/car-transportation" },
    { key: 2, name: "Car Transportation in Delhi", path: "/delhi/car-transportation" },
    { key: 3, name: "Car Transportation in Ahmedabad", path: "/ahmedabad/car-transportation"},
    { key: 5, name: "Car Transportation in Bengaluru", path: "/bengaluru/car-transportation"},
    { key: 6, name: "Car Transportation in Chandigarh", path: "/chandigarh/car-transportation"},
    { key: 7, name: "Car Transportation in Chennai", path: "/chennai/car-transportation"},
    { key: 8, name: "Car Transportation in Delhi", path: "/delhi/car-transportation"},
    { key: 9, name: "Car Transportation in Hyderabad", path: "/hyderabad/car-transportation"},
    { key: 10, name: "Car Transportation in Indore", path: "/indore/car-transportation"},
    { key: 11, name: "Car Transportation in Kanpur", path: "/kanpur/car-transportation"},
    { key: 12, name: "Car Transportation in Lucknow", path: "/lucknow/car-transportation"},
    { key: 13, name: "Car Transportation in Mumbai", path: "/mumbai/car-transportation"},
    { key: 14, name: "Car Transportation in Noida", path: "/noida/car-transportation"},
    { key: 15, name: "Car Transportation in Patna", path: "/patna/car-transportation"},
    { key: 16, name: "Car Transportation in Pune", path: "/pune/car-transportation"},
    { key: 17, name: "Car Transportation in Kolkata", path: "/kolkata/car-transportation"},
    { key: 18, name: "Car Transportation in Gurgaon", path: "/gurgaon/car-transportation"},

    
]


export default function OtherCities() {
    return (
        <>
            <h2 className="text-center text-xl md:text-4xl lg:text-2xl mb-6 md:mb-8">
                Car Transportation across India
            </h2>
            <div className="flex flex-wrap">
                {city_options.map((city, index) =>
                    <div key={city.key} className="w-1/2 lg:w-1/4 px-3 mb-2">
                        <Link href={city.path}>
                            <a className="text-primary text-md font-bold">
                                {city.name}
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}