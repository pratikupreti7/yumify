


import React from "react";
import "animate.css";
import Logo from "../img/yumify.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 mb-40 animate__slower">
      <h1 className="text-4xl text-teal-500 font-bold mb-8 text-center animate__animated animate__fadeIn">
        About Yumify
      </h1>
      {/* div 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center animate__delay-1s">
                    <img
                      src={Logo}
                      alt="Yumify Logo"
                      className="w-64 h-64 md:w-96 md:h-auto mr-0 md:mr-16 mb-8 md:mb-0 animate__animated animate__bounceInLeft"
                    />
              <div>
      {/* div 2 */}
          <div className="flex-1 animate__animated animate__fadeInLeftBig animate__delay-2s">
            <p className="text-lg text-gray-700 leading-loose mb-6">
              Yumify is a restaurant delivery app that makes it easy for customers to order food from their favorite local restaurants. Our mission is to help restaurants reach new customers and provide a convenient and enjoyable experience for diners.
            </p>
          </div>
          {/* 3 */}
          <div className="flex-1 animate__animated animate__fadeInUpBig animate__delay-3s">
            <p className="text-lg text-gray-700 leading-loose mb-6">
              Yumify is a rapidly growing restaurant food delivery service that has become a household name in many parts of the world. Founded in 2015, the company has quickly gained popularity among food enthusiasts who love the convenience of ordering from their favorite restaurants without leaving their homes.
            </p>
          </div>
          {/* 4 */}
          <div className="flex-1 animate__animated animate__fadeInUpBig animate__delay-4s">
            <p className="text-lg text-gray-700 leading-loose mb-6">
              The team behind Yumify consists of talented and experienced professionals who are passionate about food and technology. The founders of the company are John Smith, a former restaurant owner, and Sarah Johnson, a technology expert. Together, they have built a team of dedicated professionals who work hard to ensure that Yumify's customers receive the best possible service.
            </p>
          </div>
          {/* 5 */}
          <div className="flex-1 animate__animated animate__fadeInUpBig animate__delay-5s">
            <p className="text-lg text-gray-700 leading-loose mb-6">
              John Smith is the CEO of Yumify and is responsible for the overall direction of the company. He brings with him years of experience in the restaurant industry and has a deep understanding of the needs of both restaurants and customers. Sarah Johnson is the CTO and is responsible for the technology that powers Yumify's delivery service. She has a background in computer science and has worked on numerous successful technology projects.
            </p>
          </div>
          {/* 6 */}
          <div className="flex-1 animate__animated animate__fadeInDownBig animate__delay-7s">
            <p className="text-lg text-gray-700 leading-loose mb-6">
              Yumify's success can be attributed to the company's commitment to excellence and its dedication to customer satisfaction. The company has achieved several milestones over the years, including expanding its delivery services to new cities and introducing new features such as real-time tracking of delivery orders. In 2020, Yumify hit a major milestone when it delivered its one millionth order.
            </p>
            </div>

            <div className="flex-1 animate__animated animate__fadeInDownBig animate__delay-7s">
    <p className="text-lg text-gray-700 leading-loose mb-6">
      At Yumify, we believe in providing our customers with the best possible experience. That's why we use only the freshest ingredients and employ highly skilled chefs to prepare our dishes. We also strive to provide fast and reliable delivery services, so you can enjoy your favorite meals without any hassle.
    </p>
  </div>
  <div className="flex-1 animate__animated animate__fadeInUpBig animate__delay-8s">
    <p className="text-lg text-gray-700 leading-loose mb-6">
      Our menu features a wide variety of dishes, including vegetarian and gluten-free options. Whether you're in the mood for pizza, pasta, or something else entirely, we've got you covered. And if you're not sure what to order, our friendly staff are always happy to make recommendations.
    </p>
  </div>
  <div className="flex-1 animate__animated animate__fadeInDownBig animate__delay-9s">
    <p className="text-lg text-gray-700 leading-loose mb-6">
      Thank you for choosing Yumify for your dining needs. We look forward to serving you again soon!
    </p>
  </div>
  </div>
  
  </div>
  </div>
)
  }

  export default About
