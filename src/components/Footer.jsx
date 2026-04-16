import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/27794663720?text=Hello%20Dezwil%20Engineering%2C%20I%27m%20interested%20in%20your%20services",
      color: "hover:text-green-500",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "#",
      color: "hover:text-gray-300",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-white py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">
              Dezwil Engineering Construction Pty Ltd
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering reliable Structural, Mechanical, Electrical, Instrumentation,
              and Civil engineering solutions across mining and industrial sectors.
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
                  className="text-gray-400 hover:text-blue-400 transition"
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
              <p>📍 Phokeng & Rustenburg</p>
              <p>📞 +27 79 466 3720</p>
              <p>📧 wilson.dezwil@gmail.com</p>
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

          <p>© {currentYear} Dezwil Engineering Construction Pty Ltd. All rights reserved.</p>

          <p>
            Designed by{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition"
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