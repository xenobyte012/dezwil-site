import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import ourGoalsImage from "../images/hero-img.jpg";

function ContactUs() {
  const phoneNumber = "27704419275";
  const message = "Hello, I am interested in your service.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <>
      <section className="bg-background-1 text-normal-text-1 py-16 px-6" id="contact">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Contact Us
          </h2>
          <p className="text-heading-1">
            Get in touch with us today for fast and reliable appliance repair services.
          </p>
        </div>

        {/* Layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6 ">
            
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-sub-heading-1">070 441 9275</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sub-heading-1">xenobyte012@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MessageCircle className="text-blue-400" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Start Chat
                </a>
              </div>
            </div>

            {/* Image 
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src={ourGoalsImage}
                alt="contact"
                className="w-full h-64 object-cover"
              />
            </div>
            */}
          </div>

          {/* Form */}
          <form className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-4">
            
            <div>
              <label className="block text-sub-heading-2 mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 rounded-lg bg-slate-900 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sub-heading-2 mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-slate-900 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sub-heading-2 mb-1 text-sm">Phone</label>
              <input
                type="text"
                placeholder="071 234 5678"
                className="w-full p-3 rounded-lg bg-slate-900 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sub-heading-2 mb-1 text-sm">Message</label>
              <textarea
                placeholder="Your message..."
                className="w-full p-3 rounded-lg bg-slate-900 text-white min-h-[120px] outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-500 transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section 
      <section className="py-16 px-6 bg-slate-100 text-center">
        <h2 className="text-3xl font-bold">Find Us</h2>
        <p className="mt-2 text-gray-600">
          Visit us or find our location on the map
        </p>

        <div className="max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=-25.6544,27.2558&output=embed"
            className="w-full h-[500px] md:h-[400px]"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      */}
    </>
  );
}

export default ContactUs;