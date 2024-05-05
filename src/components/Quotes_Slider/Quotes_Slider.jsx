import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Quotes_Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  "
      >
        <SwiperSlide className='py-20 '>
          <div className="flex flex-col justify-center items-center max-w-5xl ">
            <div className="h-16 w-16 ">
              <img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2022/03/avatar-3.jpg" alt="" className='rounded-full' />
            </div>

            <p className="px-5 text-justify md:text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat omnis, atque incidunt aliquam distinctio sed voluptate modi? Quibusdam ipsa sunt totam perspiciatis cumque, voluptatum aliquam tempore. </p>
          </div>

        </SwiperSlide>
        <SwiperSlide className='py-20 '>
          <div className="flex flex-col justify-center items-center max-w-5xl">
            <div className="h-16 w-16 ">
              <img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2022/03/avatar-1.jpg" alt="" className='rounded-full' />
            </div>

            <p className="px-5 text-justify md:text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat omnis, atque incidunt aliquam distinctio sed voluptate modi? Quibusdam ipsa sunt totam perspiciatis cumque, voluptatum aliquam tempore. </p>
          </div>

        </SwiperSlide>
        <SwiperSlide className='py-20 '>
          <div className="flex flex-col justify-center items-center max-w-5xl">
            <div className="h-16 w-16 ">
              <img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2022/03/avatar-2.jpg" alt="" className='rounded-full' />
            </div>

            <p className="px-5 text-justify md:text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat omnis, atque incidunt aliquam distinctio sed voluptate modi? Quibusdam ipsa sunt totam perspiciatis cumque, voluptatum aliquam tempore. </p>
          </div>

        </SwiperSlide>


      </Swiper>
    </>
  );
};

export default Quotes_Slider;