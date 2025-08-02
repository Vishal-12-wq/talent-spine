import React, { useState, useCallback } from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaAngleLeft,FaAngleRight  } from "react-icons/fa6";

const data = [
  {
    id: 1,
    review:
      "“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”",
    reviewer: "Tom Williams",
    post: "Software Developer",
  },
  {
    id: 2,
    review:
      "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
    reviewer: "Jane Smith",
    post: "Freelance Designer",
  },
  {
    id: 3,
    review:
      "“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”",
    reviewer: "Michael Brown",
    post: "Online Entrepreneur",
  },
  {
    id: 4,
    review:
      "“I was a little hesitant to switch to a new web hosting company, but I'm glad I took the plunge. The control panel is user-friendly and I love the one-click installation for popular apps. Everything has been smooth sailing since I made the switch.”",
    reviewer: "Sarah Johnson",
    post: "Blogger",
  },
  {
    id: 5,
    review:
      "“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”",
    reviewer: "Michael Brown",
    post: "Online Entrepreneur",
  },
  {
    id: 6,
    review:
      "“I was a little hesitant to switch to a new web hosting company, but I'm glad I took the plunge. The control panel is user-friendly and I love the one-click installation for popular apps. Everything has been smooth sailing since I made the switch.”",
    reviewer: "Sarah Johnson",
    post: "Blogger",
  },
];

const Review = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="py-10 profile-alignment  max-w-[1400px] mx-auto max-sm:px-5 px-2">
      <div className=" flex justify-between gap-3 items-center flex-wrap mb-6" >
      <div>
      <h1 className="gradient-text text-3xl font-bold font-roboto"> Rating & Feedback</h1>
      <p className=" form-small">Don't just take our word for it  -see what actual user of our service have to say about their experience.</p>
      </div>
      {/* Navigation buttons */}
     <div className=" flex items-center gap-2 ml-auto">
     <button
        onClick={handlePrevious}
        className="sm:h-10 sm:w-10 h-8 w-8  bg-[#0D58AC]  shrink-0 flex justify-center items-center rounded-full"
      >
        <FaAngleLeft className=" text-white text-lg"  />
      </button>
      <button
        onClick={handleNext}
        className="sm:h-10 sm:w-10 h-8 w-8  bg-[#0D58AC] shrink-0 text-white flex justify-center items-center rounded-full"
      >
        <FaAngleRight className=" text-white text-lg" />
      </button>
     </div>
      </div>

      <div>
        <Swiper
          spaceBetween={30}
          className="!pb-20 max-sm:!pb-10 !pt-5 !px-2"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          onSwiper={setSwiperRef}
          modules={[Pagination, Navigation, A11y]}
        >
          {data.map((ele) => (
            <SwiperSlide key={ele.id}>
              <div className="max-w-[360px] mx-auto hover:border-t-4 hover:shadow-2xl hover:border-x-0 hover:border-b-0 shrink-0 p-5 rounded-2xl flex flex-col justify-start border border-[#0D58AC] font-inter">
                <p className="text-sm text-center leading-7 w-[95%] mx-auto">
                  {ele.review}
                </p>
                <div className="flex items-center gap-1 mx-auto mt-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-xs text-[#FBD300]" />
                  ))}
                </div>
                <div className="mt-auto pt-3">
                  <h1 className="text-center text-base font-semibold">
                    {ele.reviewer}
                  </h1>
                  <h1 className="text-center text-sm">{ele.post}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
