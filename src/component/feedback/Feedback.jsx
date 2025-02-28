import React from "react";
import Feedbackbox from "./Feedbackbox";
import "./Feedback.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const Feedback = () => {
  return (
    <div className="flex flex-col innerSection gap-15 max-w-[1240px]">
      <h2 className="text-center text-5xl font-semibold tracking-[0.92px] leading-[56px]">
        Kind Words From Our Customers
      </h2>
      <Swiper className=" w-full m-auto h-auto "
        modules={[Pagination]} // Enable pagination module
        spaceBetween={10} // Space between slides
        slidesPerView={1} // Number of slides to show
        pagination={{ clickable: true }} // Enable pagination dots
        breakpoints={{
          // Responsive breakpoints for larger screens
          768: {
            slidesPerView: 1, // 2 slides on tablet and above
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 2, // 3 slides on desktop
            spaceBetween: 30,
          },
        }}
      >
        {/* Wrap each Feedbackbox in a SwiperSlide */}
        <SwiperSlide>
          <Feedbackbox
            designation={"CEO of Asana"}
            customerName={"Brooklyn Simmons"}
            comment={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
            maxStars={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Feedbackbox
            designation={"CEO of Asana"}
            customerName={"Brooklyn Simmons"}
            comment={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
            maxStars={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Feedbackbox
            designation={"CEO of Asana"}
            customerName={"Brooklyn Simmons"}
            comment={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
            maxStars={5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Feedbackbox
            designation={"CEO of Asana"}
            customerName={"Brooklyn Simmons"}
            comment={`"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`}
            maxStars={5}
          />
        </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Feedback;
