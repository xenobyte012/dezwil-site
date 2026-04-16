import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import contactImage from "../images/hero-img.jpg";

function ContactUs() {
  const phoneNumber = "27794663720";
  const message = "Hello, I am interested in your engineering services.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <section id="contact" className="bg-gray-200 py-16 px-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>

        <p className="text-gray-700">
          Let’s discuss your next project. We deliver reliable engineering solutions across mining and industrial operations.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-gray-700">+27 79 466 3720</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-700">wilson.dezwil@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MessageCircle className="text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">WhatsApp</p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Start Chat
              </a>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-semibold text-gray-900">Locations</p>
            <p className="text-gray-700">Phokeng & Rustenburg</p>
          </div>

          {/* IMAGE (only desktop) */}
          <div className="hidden md:block mt-6">
            <img
              src={contactImage}
              alt="Engineering site"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-4">

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Send Us a Message
          </h3>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 rounded-lg bg-gray-100 min-h-[150px] outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactUs;