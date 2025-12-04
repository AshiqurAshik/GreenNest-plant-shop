import React, { useState, useEffect } from 'react';
import aboutImg2 from '../../assets/about-img2.jpg';
import aboutImg3 from '../../assets/about-img3.jpg';

const About = () => {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  // Observe dark mode changes from header toggle
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`py-16 px-4 sm:px-6 lg:px-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-gray-300' : 'bg-gradient-to-b from-green-50 to-white text-gray-800'
      }`}
    >
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl sm:text-6xl font-extrabold drop-shadow-sm transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-800'
            }`}
          >
            About{' '}
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>
              GreenNest
            </span>
          </h1>
          <p className={`mt-4 text-lg sm:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Your trusted partner for growing a greener, healthier, and more
            beautiful living space.
          </p>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="md:w-1/2">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-700'
            }`}>
              Our Mission
            </h2>
            <p className={`leading-8 text-lg sm:text-xl transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              At <span className={`font-semibold transition-colors duration-300 ${isDark ? 'text-green-300' : 'text-green-700'}`}>GreenNest</span>, our mission is simple — to empower people to grow plants confidently. Whether you’re a beginner or an enthusiast, we provide the best plant care guidance, expert tips, and curated suggestions to help your garden thrive.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImg2}
              alt="Plants"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Our Vision */}
        <div className={`rounded-3xl p-10 text-center border mb-20 shadow-2xl transition-colors duration-300 ${
          isDark
            ? 'bg-gray-800 border-gray-700 shadow-gray-700 text-gray-300'
            : 'bg-white border-green-100 text-gray-700 shadow-lg'
        }`}>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-green-300' : 'text-green-700'
          }`}>
            Our Vision
          </h2>
          <p className={`max-w-3xl mx-auto text-lg sm:text-xl leading-8 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We aim to build a world where every home has its own green corner — a peaceful space filled with nature and beauty. GreenNest believes that plants are more than decoration — they improve health, mood, and the environment around us.
          </p>
        </div>

        {/* Join Our Community */}
        <div className={`flex flex-col md:flex-row items-center gap-10 mb-20 rounded-3xl p-8 md:p-16 shadow-lg transition-colors duration-300 ${
          isDark ? 'bg-gray-900 shadow-gray-700 text-gray-300' : 'bg-green-50 shadow-lg text-gray-800'
        }`}>
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImg3}
              alt="Community"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-700'
            }`}>
              Join Our Community
            </h2>
            <p className={`text-lg sm:text-xl leading-8 mb-6 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Become part of the{' '}
              <span className={`font-semibold transition-colors duration-300 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                GreenNest
              </span>{' '}
              family! Share your plant journey, ask questions, and get expert tips. Learn, grow, and make your space greener together with fellow plant lovers.
            </p>
            <ul className={`text-lg sm:text-xl leading-8 space-y-2 mb-6 list-disc list-inside transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
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
