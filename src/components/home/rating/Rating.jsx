import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";

import { Pagination } from "swiper/modules";

const data = [
  {
    id: 1,
    title: "Nice work!",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10524.jpg",
  },
  {
    id: 2,
    title: "Impressive",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
  {
    id: 3,
    title: "Good Work",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
  {
    id: 3,
    title: "Good Work",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
  {
    id: 3,
    title: "Good Work",
    text: "“This is absolutely unique and clean design that I'm looking for. Also, the code quality is great!”",
    reviewr: "James Stephens",
    city: "sydney",
    avtar:
      "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
  },
];
const Rating = () => {
  return (
   <div className=" relative xl-2:ml-40 lg:ml-10">
     <div className=" lg:my-16 max-w-[1820px] overflow-hidden  lg:py-10 pt-14  z-50 xl:pl-16 lg:pl-10 gap-8  xl:gap-20  max-sm:px-3 flex max-lg:flex-col items-center  xl-2:px-0  mx-auto relative">
      <div className="lg:pr-10 lg:max-w-[370px] shrink-0 w-full mx-auto max-lg:flex justify-center flex-col items-center">
        <h1 className="text-secondarys1 text-xs font-roboto">TESTIMONIAL</h1>
        <div className=" max-lg:flex items-center sm:gap-5 max-sm:flex-col">
        <h2 className="text-6xl font-[emoji] font-medium mt-2 text-secondary">
          Clients loves
        </h2>
        <h3 className="text-6xl font-[emoji] font-medium text-primary mt-2">
          Talent Spine.
        </h3>
        </div>
        <h2 className="mt-5 font-roboto font-medium text-3xl">
          <span className="text-primary">A+</span> Rating
        </h2>
        <p className="text-xs mt-3 text-secondarys1 font-roboto">
          Avg rating 4.8 makes us best market place.
        </p>
      </div>
      <div className=" z-[1000] w-full lg:overflow-x-hidden">
        {data.length > 0 ? (
          <div className="">
            <Swiper
             spaceBetween={30}
              pagination={{
                dynamicBullets: true,
                clickable:true
              }}
              modules={[Pagination]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
              }}
              className="mySwiper !pl-2  rating-slider !py-20 !mx-auto !z-50"
            >
              {data.map((ele) => (
                <SwiperSlide key={ele.id} className="xl-2:max-w-[440px] max-w-[360px] sm:mr-10 w-full">
                  <div className="p-7 bg-white shadow-xl rounded-[24px]  border-t-2 border-white   hover:border-primary z-50">
                    <h1 className="text-primary font-medium font-roboto text-2xl xl-2:text-3xl">
                      {ele.title}
                    </h1>
                    <div className="flex items-center gap-1 mt-2 xl-2:mt-3">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar className="text-sm text-[#FBD300]" />
                      ))}
                    </div>
                    <div className="mt-9 leading-8 xl-2:max-w-[90%] text-secondary pb-8 border-b-2 border-bordercolor font-roboto text-lg">
                      {ele.text}
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img
                          src={ele.avtar}
                          alt=""
                          className="h-10 rounded-full object-top object-cover w-10 xl-2:h-12 xl-2:w-12"
                        />
                        <div>
                          <h2 className="font-roboto text-sm xl-2:text-base text-secondary font-medium">
                            {ele.reviewr}
                          </h2>
                          <h2 className="font-roboto text-xs xl-2:text-sm xl-2:mt-1 text-secondarys1">
                            {ele.city}
                          </h2>
                        </div>
                      </div>
                      <img src="/assets/svg/review/review99.svg" alt="" className=" h-7 w-7" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <p className="py-10 text-3xl text-red-600 text-center">
            Data not available
          </p>
        )}
      </div>

    
      <img src="/assets/svg/work/arrow.svg" alt="" className=" absolute top-0 left-[25%] max-lg:hidden  w-[150px] h-14" />
    </div>
    <div className="rounded-3xl flex    h-full w-full absolute top-0 right-0 -z-10 max-lg:hidden">
        <div className=" flex-1 h-full"></div>
        <div className="flex-1 h-full bg-[#E6F3FC] rounded-tl-r30 rounded-bl-r30"></div>
      </div>
   </div>
  );
};

export default Rating;
