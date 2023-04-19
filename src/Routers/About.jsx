import React from "react";
import "animate.css";
import Logo from "../img/yumify.jpg";
import "react-slideshow-image/dist/styles.css";
import "./About.css";

const About = () => {
  return (
    <div className="mb-48">
      <div className="about-container bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="about-header animate__animated animate__fadeIn flex flex-col items-center justify-between">
          <h1 className="about-title text-4xl lg:text-6xl font-bold mb-4 text-teal-500">
            Welcome to Yumify
          </h1>
          <img
            src={Logo}
            alt="Yumify Logo"
            className="about-logo animate__animated animate__bounceInLeft h-24 w-24 lg:h-32 lg:w-32"
          />
        </div>
        
        <div className="about-content animate__animated animate__fadeIn mt-8">
          <div className="about-section mb-12 ">
            <h2 className="about-section-title text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Mission
            </h2>
            <div className="bg-teal-500 p-4 text-white text-lg rounded-lg shadow-inner">
              <p className="about-section-description">
                At Yumify, our mission is to make it easy for customers to order
                food from their favorite local restaurants. We are dedicated to
                helping restaurants reach new customers and providing a
                convenient and enjoyable experience for diners.
              </p>
            </div>
          </div>
          <div className="about-section mb-12">
            <h2 className="about-section-title text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Story
            </h2>
            <div className="bg-teal-500 p-4 text-white text-lg rounded-lg shadow-inner">
              <p className="about-section-description">
                Yumify is a rapidly growing restaurant food delivery service that
                has become a household name in many parts of the world. Founded in
                2015 by John Smith, a former restaurant owner, and Sarah Johnson,
                a technology expert, Yumify has quickly gained popularity among
                food enthusiasts who love the convenience of ordering from their
                favorite restaurants without leaving their homes.
              </p>
            </div>
          </div>
          <div className="about-section mb-12">
            <h2 className="about-section-title text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Team
            </h2>
            <div className="bg-teal-500 p-4 text-white text-lg rounded-lg shadow-inner">
              <p className="about-section-description">
                The team behind Yumify consists of talented and experienced
                professionals who are passionate about food and technology. John
                Smith is the CEO of Yumify and is responsible for the overall
                direction of the company, bringing with him years of experience in
                the restaurant industry. Sarah Johnson is the CTO and is responsible for the technology that powers Yumify's delivery
                service, with a background in computer science and a track record
                of successful technology projects. Together, they lead a team of
                developers, designers, and customer service representatives who
                work tirelessly to ensure that Yumify remains at the forefront of
                the food delivery industry. Our team is dedicated to providing
                exceptional service and delivering delicious food straight to
                your door 
.
</p>
</div>
</div>
<div className="about-section mb-12">
<h2 className="about-section-title text-2xl md:text-3xl lg:text-4xl mb-4">
Contact Us
</h2>
<div className="bg-teal-500 p-4 text-white text-lg rounded-lg shadow-inner">
<p className="about-section-description">
We would love to hear from you! Whether you have a question about
our service or just want to say hello, you can reach us anytime at
<a
               href="mailto:contact@yumify.com"
               className="text-blue-200 hover:text-blue-500 underline"
             >
{" "}
contact@yumify.com
</a>
. You can also follow us on social media for the latest news and
updates.
</p>
</div>
</div>
<div className="about-section">
<p className="about-thankyou text-lg lg:text-xl font-semibold text-center">
Thank you for choosing Yumify for your dining needs. We look
forward to serving you again soon!
</p>
</div>
</div>
</div>
</div>
);
};

export default About;






