import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//react icons
import { FaStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Avatar } from "flowbite-react";
//profile pic
import profilePic from "../assets/profilepic/profilePicture.jpeg";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          {" "}
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          {" "}
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          {" "}
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          {" "}
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          {" "}
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          {" "}
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          {" "}
          <div>
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="mt-5">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magni ad, doloremque possimus nam sequi obcaecati accusamus
                fugit impedit error sapiente harum maiores molestiae.
              </p>
              <Avatar
                img={profilePic}
                alt="avatar of Jese"
                rounded
                className="w-30"
              />
              <h5 className="text-lg font-medium">Mark Ping</h5>
              <p className="text-base">CEO, ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
