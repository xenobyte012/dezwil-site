import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/27721234567?text=Hi%20Dave%20Academy",
      color: "hover:text-green-500",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=61552208605900",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/stdaveacademy",
      color: "hover:text-pink-600",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@st_dave_academy",
      color: "hover:text-gray-400",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
{ name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-3">
              A plus Appliance Repair
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Same-day service for all major brands. Affordable, professional, and trusted by homeowners.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>📍 Pretoria, South Africa</p>
              <p>📞 +27 64 182 2578</p>
              <p>📧 A plus Appliance Repair@gmail.com</p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <p>© {currentYear} A plus Appliance Repair. All rights reserved.</p>

          <p>
            Designed by{" "}
            <a
              href="https://xenobytewebstudio.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Xenobyte Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;