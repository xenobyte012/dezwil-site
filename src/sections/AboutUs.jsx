import React from "react";
import ourGoalsImage from '../images/ct (2).jpg' 

function AboutUs() {
  return (
    <section className="bg-basckground-2 bg-slate-900 text-normal-text-2 py-12  px-4 text-center">
      <div>
        <h1 className="text-4xl font-bold text-center pb-3 text-heading-2">
          About Us
        </h1>
      </div>
      <div className="  grid md:grid-cols-2 gap-6 pt-6">
        <div className="text-left">
          <h1 className="text-xl font-semibold pb-6 text-subheading-2">
            We Don’t Just Tutor. We Transform
          </h1>
          <div className="block md:hidden  pt-2 px-4 pb-4">
            <img
              loading="lazy"
              src={ourGoalsImage}
              alt="our goal images"
              className="rounded-xl object-cover shadow-2xl w-full"
            />
          </div>
          <div className="pl-4">
            <p className="pb-4 ">
              At St Dave Academy , we replace frustration with clarity. Our
              structured, one‑on‑one and small‑group sessions are designed to
              help learners not only raise their grades but also rediscover the
              joy of learning.
            </p>
            <p>
              We believe every student has untapped potential — our job is to
              give them the tools, confidence, and support to unlock it.
            </p>
          </div>
        </div>
        <div className="hidden md:block  pt-2 ">
          <img
            loading="lazy"
            src={ourGoalsImage}
            alt="our goal images"
            className="rounded-xl object-cover shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
