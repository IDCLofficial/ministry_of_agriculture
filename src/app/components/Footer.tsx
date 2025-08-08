'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const info = {
    logo: "/logo.png",
    ministry: "Agriculture",
    description: "The Ministry of Agriculture and Food Security in Imo State was established to spearhead agricultural development and rural transformation. Since its creation in the early years of the state’s formation in 1976, the ministry has evolved through reforms, focusing on food production, agro-industrial growth, farmer support, and policy-driven agricultural transformation across the state.",
    quickLinks: [
        {
            label: "Projects",
            href: "/projects" 
        },
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Departments",     
            href: "/departments"
        },
        {
            label: "Events",
            href: "/events"
        },
        {
            label: "Media",
            href: "/media"
        },
        {
            label: "Contact Us",        
            href: "/contact-us"
        },
    ],
    newsletter: [
        {
            label: "Signup to Our Newsletter",          
            href: "/"
        },
        {
            label: "Subscribe",
            href: "/"
        },
    ],
    contact: [
        {
            label: "+234 812 345 6789",
            href: "/"
        },
        {
            label: "agriculture@imostate.gov.ng",
            href: "/"
        },  
        {
            label: "Ministry Address: Block 4, State Secretariat Complex, Owerri, Imo State.",
            href: "/"
        },
    ]
}

export default function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setEmail("");
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <footer className="w-full bg-white pt-10 px-4 lg:px-18">
            <div className="mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 pb-8">
                {/* Logo and Description */}
                <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-2">
                    <Image src={info.logo} alt="Imo State Logo" width={40} height={40} />
                    <span className="font-semibold text-sm text-gray-900 leading-tight">
                    Imo State Ministry<br />
                    of {info.ministry}
                    </span>
                </div>
                <p className="text-xs text-gray-600 max-w-xs">
                    {info.description}
                </p>
                </div>
                {/* Quick Links */}
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
                <div className="flex flex-col flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
                    {info.quickLinks.map((link) => (
                        <Link href={link.href} className="hover:underline" key={link.label}>{link.label}</Link>
                    ))}
                </div>
                </div>
                {/* Newsletter and Contact */}
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">{info.newsletter[0].label}</h4>
                <form className="flex mb-3" onSubmit={handleSubmit}>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Myemail@gmail.com"
                    className="border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    disabled={loading}
                    />
                    <button 
                        type="submit" 
                        className={`px-4 py-2 rounded-r text-sm font-medium text-white ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'}`}
                        disabled={loading}
                    >
                        {loading ? 'Subscribing...' : info.newsletter[1].label}
                    </button>
                </form>
                {success && (
                    <div className="text-green-600 text-xs mb-3">
                        Thank you for subscribing to our newsletter!
                    </div>
                )}
                <div className="text-xs text-gray-700 space-y-1 flex flex-col">
                    {info.contact.map((item) => (
                        <Link href={item.href} key={item.label}>{item.label}</Link>
                    ))}
                </div>
                </div>
            </div>
            <div className="border-t border-gray-200 text-center py-3 text-xs text-gray-500">Imo State Government</div>
        </footer>
    );
} 