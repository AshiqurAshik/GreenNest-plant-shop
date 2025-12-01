import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router';

import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img4 from '../../assets/img-4.jpg';
import img5 from '../../assets/img-5.jpg';

const Banner = () => {
  const bannerImages = [img1, img2, img3, img4, img5];
  const swiperRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto mt-10 rounded-3xl shadow-2xl shadow-green-500/30 overflow-hidden">
      <div className="relative w-full">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay, EffectFade]}
          speed={900}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh]"
        >
          {bannerImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full group relative overflow-hidden rounded-3xl">
                <img
                  src={img}
                  alt={`Banner Slide ${index + 1}`}
                  className="w-full h-full object-cover transition-transform ease-linear group-hover:scale-[1.05] brightness-90 hover:brightness-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 flex flex-col items-center justify-center p-4 sm:p-8 backdrop-blur-sm">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-2xl text-center animate-fadeIn">
                    Explore Our Indoor Plants
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl text-white mt-2 sm:mt-3 drop-shadow-xl text-center animate-fadeIn delay-200">
                    Shop Now & Refresh Your Space
                  </p>
                  <Link
                    to="/plant"
                    className="mt-3 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 animate-fadeIn delay-400 text-sm sm:text-base"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 focus:outline-none active:shadow-none"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 focus:outline-none active:shadow-none"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Banner;
