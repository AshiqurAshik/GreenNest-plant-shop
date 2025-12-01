import React from 'react';
import aboutImg2 from '../../assets/about-img2.jpg';
import aboutImg3 from '../../assets/about-img3.jpg';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 drop-shadow-sm">
            About <span className="text-green-600">GreenNest</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            Your trusted partner for growing a greener, healthier, and more
            beautiful living space.
          </p>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-8 text-lg sm:text-xl">
              At <span className="font-semibold text-green-700">GreenNest</span>
              , our mission is simple — to empower people to grow plants
              confidently. Whether you’re a beginner or an enthusiast, we
              provide the best plant care guidance, expert tips, and curated
              suggestions to help your garden thrive.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImg2}
              alt="Plants"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 text-center border border-green-100 mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl leading-8">
            We aim to build a world where every home has its own green corner —
            a peaceful space filled with nature and beauty. GreenNest believes
            that plants are more than decoration — they improve health, mood,
            and the environment around us.
          </p>
        </div>

        {/* New Section: Join Our Community */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20 bg-green-50 rounded-3xl shadow-lg p-8 md:p-16">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImg3}
              alt="Community"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl leading-8 mb-6">
              Become part of the{' '}
              <span className="font-semibold text-green-700">GreenNest</span>{' '}
              family! Share your plant journey, ask questions, and get expert
              tips. Learn, grow, and make your space greener together with
              fellow plant lovers.
            </p>
            <ul className="text-gray-700 text-lg sm:text-xl leading-8 space-y-2 mb-6 list-disc list-inside">
              <li>🌿 Access exclusive plant guides</li>
              <li>💬 Get support from experts & community</li>
              <li>📦 Explore new plants and tips regularly</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
