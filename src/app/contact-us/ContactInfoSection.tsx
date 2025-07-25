import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const contactInfo = {
  address: "Block 8 Ministry of Tourism, Creative Arts and culture, Imo State Secretariat, along Port Harcourt road, Owerri Owerri, Nigeria 460271.",
  email: "imotcac@yahoo.com",
  phone: "0803 092 5349",
  socials: [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/Imotcac/" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ],
};

const ContactInfoSection = () => (
  <div className="mb-8 md:mb-0">
    <p className="mb-4 text-[#151A21] text-[1rem]">Have questions, proposals, or feedback? We&apos;re here to support you. Reach out through any of the channels below.</p>
    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
    <ul className="space-y-2 mb-4">
      <li className="flex items-start gap-2 text-[#151A21]"><FaMapMarkerAlt className="mt-1 text-xl" /> <span>{contactInfo.address}</span></li>
      <li className="flex items-center gap-2 text-[#151A21]"><FaEnvelope /> <span>{contactInfo.email}</span></li>
      <li className="flex items-center gap-2 text-[#151A21]"><FaPhone /> <span>{contactInfo.phone}</span></li>
    </ul>
    <div className="flex gap-4 mt-2">
      {contactInfo.socials.map((s, i) => (
        <a key={i} href={s.href} className="text-white hover:bg-primary-green rounded-full bg-black p-2" target="_blank" rel="noopener noreferrer">{s.icon}</a>
      ))}
    </div>
  </div>
);

export default ContactInfoSection; 