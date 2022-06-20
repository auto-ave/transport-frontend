import { API_CONTACT } from "@utils/contants/general";
import axios from "axios";
import { useState } from "react";

export default function ContantUsForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess('')
        setError('')

        console.log('Submitting form...');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        
        axios.post(API_CONTACT, {
            name: name,
            email: email,
            message: message
        })
            .then((response) => {
                console.log(response);
                setName('')
                setEmail('')
                setMessage('')
                setSuccess("You message has been sent! We will get back to you as soon as possible!");
            })
            .catch((error) => {
                console.log(error);
                setError('There was an error sending your message. Please try again.');
            })
    }
    return (
        <>
            <div className="">
                <form className="w-full md:max-w-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Full Name
                            </label>
                            <input className="appearance-none transition-all block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={name} onChange={(event) => setName(event.target.value)} required />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Email
                            </label>
                            <input className="appearance-none transition-all block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="jane@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea className="appearance-none transition-all block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Your Message" rows="3" value={message} onChange={(event) => setMessage(event.target.value)} required />
                                <p className="text-gray-600 text-xs italic">We are always there to listen you</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        
                        <div className="w-full px-3 text-right">
                            {success && <p className="text-emerald-500 text-xs italic mb-3">{success}</p>}
                            {error && <p className="text-rose-600 text-xs italic mb-3">{error}</p>}
                            <button className="flex-shrink-0 transition-all bg-primary text-sm text-white py-3 px-5 rounded" type="submit" disabled={success}>
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}