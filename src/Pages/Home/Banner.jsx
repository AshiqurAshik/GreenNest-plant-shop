import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img4 from '../../assets/img-4.jpg';
import img5 from '../../assets/img-5.jpg';

const Banner = () => {
  const bannerImages = [img1, img2, img3, img4, img5];
  const swiperRef = useRef(null);

  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-5 mt-10 rounded-3xl shadow-2xl overflow-hidden transition-colors duration-300 relative">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, EffectFade]}
        speed={1000}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-[60vh]" // Fixed height 60% of viewport
      >
        {bannerImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover brightness-90"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8 ${
                  isDark
                    ? 'bg-black/40 text-green-300'
                    : 'bg-black/25 text-white'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-xl">
                  Transform Your Space with Plants
                </h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl drop-shadow-lg">
                  Premium Indoor Plants for Every Room
                </p>
                <Link
                  to="/plant"
                  className={`mt-6 px-6 py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base transition-all duration-300 ${
                    isDark
                      ? 'bg-green-600 hover:bg-green-500 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full shadow-lg z-50 focus:outline-none hover:scale-110 ${
          isDark ? 'text-gray-200' : 'text-gray-800'
        }`}
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        &#10094;
      </button>
      <button
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full shadow-lg z-50 focus:outline-none hover:scale-110 ${
          isDark ? 'text-gray-200' : 'text-gray-800'
        }`}
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;
