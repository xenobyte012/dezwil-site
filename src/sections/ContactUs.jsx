import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MessageCircle } from "lucide-react";
import contactImage from "../images/hero-img.jpg";

function ContactUs() {
  const formRef = useRef();

  const phoneNumber = "27794663720";
  const message = "Hello, I am interested in your engineering services.";
  const encodedMessage = encodeURIComponent(message);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lh7ims6",
        "template_0i4sy8b",
        formRef.current,
        "zcHvdMDTRE0XNKDJC"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-200 py-16 px-6">

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>

        <p className="text-gray-700">
          Let’s discuss your next project.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE (unchanged) */}
        <div className="space-y-6">
          {/* your existing contact info */}
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Send Us a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-lg bg-gray-100"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg bg-gray-100"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-3 rounded-lg bg-gray-100 min-h-[150px]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;