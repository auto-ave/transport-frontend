import { API_CONTACT, API_TRANSPORT_ENQUIRY } from "@utils/contants/general";
import axios from "axios";
import { useState } from "react";
import Select from 'react-select'

const city_options = [
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Gurgaon", label: "Gurgaon" },
    { value: "Indore", label: "Indore" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Kochi", label: "Kochi" },
    { value: "Lucknow", label: "Lucknow" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Noida", label: "Noida" },

]

const customStyles = {
    control: styles => ({
        ...styles,
        borderRadius: 4,
        padding: "5px 20px",
        width: "183px",
        marginBottom: "10px"
    })
}

export default function CarTransportForm() {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [name, setName] = useState('');

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess('')
        setError('')
        console.log('Submitting form...');
        console.log(`From City: ${fromCity}`);
        console.log(`To City: ${toCity}`);
        console.log(`Contact Number: ${contactNumber}`);
        console.log(`Name: ${name}`);

        let phone_number_pattern = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/;
        if (!phone_number_pattern.test(contactNumber)) {
            setError("Please enter valid phone number");
            return;
        }

        axios.post(API_TRANSPORT_ENQUIRY, {
            from_city: fromCity,
            to_city: toCity,
            contact: contactNumber,
            name: name
        })
            .then((response) => {
                console.log(response);
                setFromCity('')
                setToCity('')
                setContactNumber('')
                setName('')
                setSuccess("You message has been sent! We will get back to you as soon as possible!");
            })
            .catch((error) => {
                console.log(error);
                setError('There was an error sending your message. Please try again.');
            })
    }
    return (
        <>
            <div className="relative z-10">
                <form className="w-full mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap justify-center -mx-3 mb-4">
                        <div className="px-3 text-left">
                            <label className="block tracking-wide text-white text-sm mb-2" htmlFor="grid-first-name">
                                Shifting From
                            </label>
                            <Select placeholder="Select City" options={city_options} type="text"  onChange={(option) => {setToCity(option.value)}} styles={customStyles} isReq/>
                        </div>
                        <div className="px-3 text-left">
                            <label className="block tracking-wide text-white text-sm mb-2" htmlFor="grid-last-name">
                                Shifting To
                            </label>
                            <Select placeholder="Select City" options={city_options} type="text"  onChange={(option) => {setFromCity(option.value)}} styles={customStyles} required />
                        </div>
                        {/* <div className="px-3 text-left">
                            <label className="block tracking-wide text-white text-sm mb-2" htmlFor="grid-last-name">
                                Shifting To
                            </label>
                            <input className="appearance-none transition-all block w-full border rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Select City" value={toCity} onChange={(event) => setToCity(event.target.value)} required />
                        </div> */}
                        <div className="px-3 text-left">
                            <label className="block tracking-wide text-white text-sm mb-2" htmlFor="grid-password">
                                Contact Phone Number
                            </label>
                            <input className="appearance-none transition-all block w-full border rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Contact Number" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} type="tel" required />
                        </div>
                        <div className="px-3 text-left">
                            <label className="block tracking-wide text-white text-sm mb-2" htmlFor="grid-password">
                                Name
                            </label>
                            <input className="appearance-none transition-all block w-full border rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        
                        <div className="w-full px-3">
                            {success && <p className="bg-white p-1 inline-block text-emerald-500 text-xs italic mb-3">{success}</p>}
                            {error && <p className="bg-white p-1 inline-block text-rose-600 text-xs italic mb-3">{error}</p>}
                            <div>
                                <button className="flex-shrink-0 elevation transition-all bg-primary text-lg text-white py-2 px-10 rounded" type="submit" disabled={success}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}