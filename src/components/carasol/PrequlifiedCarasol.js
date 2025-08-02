import React, { useState, useRef, useMemo, useCallback } from "react";
import Categories from "../categories/Categories";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, A11y } from "swiper/modules";
import SwiperNextButton from "./SwiperNextButton";

const data = [
  {
    id: 1,
    name: "Sandy Williams",
    post: "Sales Manager",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "https://audienceview.com/wp-content/uploads/sites/2/2023/09/smile-1490x875-1.webp?w=799",
    job_type: "Internship",
  },
  {
    id: 2,
    name: "Sandy Williams",
    post: "Sales Manager",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "https://fototyp.com/wp-content/uploads/2015/09/Untitled-2.jpg",
    job_type: "Full Time",
  },
  {
    id: 3,
    name: "Sandy Williams",
    post: "Sales Manager",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9hCKZ2g_fF8qNBfCEV_F0IMKM3gm77taJPus8BvViGJBrCzVb",
    job_type: "Part time",
  },
  {
    id: 4,
    name: "Sandy Williams",
    post: "Sales Manager",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvSyx7BLqjJ9-VddqyLEe1d5s32nAqKnuqwRd1d6s1VXhnaEU",
    job_type: "Freelancer",
  },
  {
    id: 5,
    name: "Sandy Williams",
    post: "Sales Manager",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "https://fototyp.com/wp-content/uploads/2015/09/Untitled-2.jpg",
    job_type: "Part time",
  },
  {
    id: 6,
    name: "Sandy Williams",
    post: "Sales Manager",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvSyx7BLqjJ9-VddqyLEe1d5s32nAqKnuqwRd1d6s1VXhnaEU",
    job_type: "Freelancer",
  },
];

const PrequlifiedCarasol = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const categories = [
    "All Programme",
    "UI/UX Design",
    "Program Design",
    "Web Development",
    "Data Science",
  ];

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="max-w-[1500px] xl-2:max-w-[1600px] mx-auto mt-28  xl-2:mt-[160px] xl:px-20 xl-2:px-0 lg:px-10 px-3 max-sm:pt-10">
      <h1 className="section-title xl-2:max-w-[566px] max-w-[390px] mx-auto">
        Hire Prequalified{" "}
        <span className="text-primary ">Talents</span>
        <img
          src="/assets/svg/curve/text-curve.svg"
          alt=""
          className="max-sm:mx-auto ml-auto  xl-2:max-w-[170px] max-w-[120px] max-sm:mt-2"
        />
      </h1>
      <div className="xl-2:mt-12 mt-8 md:px-20 px-1 xl-2:px-0">
        <Categories categories={categories} />
      </div>

      <div className="xl-2:mt-12 mt-8 w-full flex justify-center  mx-auto sm:gap-5 gap-2 xl-2:gap-[30px] items-center relative">
        <button
          onClick={handlePrevious}
          className="  sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12 border border-primary shrink-0  flex justify-center items-center rounded-full"
        >
          <img
            src="/assets/svg/carasol/leftchav.svg"
            alt=""
            className="h-4 w-4"
          />
        </button>

        <Swiper
          spaceBetween={30}
          className="!pb-20 max-sm:!pb-10 !pt-5 !px-2"
          slidesPerView={1}
          breakpoints={{
            660: {
              slidesPerView: 2,
            },
           
            1024:{
              slidesPerView:3
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        
          onSwiper={setSwiperRef}
          modules={[Pagination, Navigation, A11y]}
        >
          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="flex justify-center mx-auto">
                <div className="max-w-[338.5px]  mx-auto shrink-0 w-full rounded-2xl border shadow-sm border-bordercolor overflow-hidden  hover:shadow-2xl hover:brightness-90">
                  <div className="sm:h-[200px] h-[250px] xl-2:h-[228px] relative">
                    <img
                      src={ele.img}
                      alt=""
                      className="h-full w-full object-cover object-center  rounded-2xl"
                    />
                    <div
                      className={`absolute top-3 left-3 px-2 text-[10px] tracking-widest  rounded-[4px]  text-white  py-1 font-roboto font-bold uppercase ${
                        ele.job_type === "Internship"
                          ? " bg-[#6B34CB]"
                          : "" || ele.job_type === "Full Time"
                          ? " bg-[#004B83]"
                          : "" || ele.job_type === "Part time"
                          ? " bg-[#437685]"
                          : "" || ele.job_type === "Freelancer"
                          ? " bg-[#B73708]"
                          : "" 
                      }`}
                    >
                      {ele.job_type}
                    </div>
                  </div>
                  <div className="py-3 xl-2:px-5 px-4 xl-2:p-4">
                    <div className="flex gap-1 items-center justify-between flex-wrap">
                      <h1 className="xl-2:text-2xl text-lg font-bold font-roboto text-black">
                        {ele.name}
                      </h1>
                      <div className="border border-primary ml-auto text-primary px-2 py-1 rounded-[6px] font-roboto xl-2:text-sm text-xs font-semibold -tracking-tighter">
                        ${ele.priceper_hour} / HR
                      </div>
                    </div>
                    <h2 className="mt-2 text-secondarys1 xl-2:text-base text-sm font-roboto">
                      {ele.post}
                    </h2>
                    <ul className="mt-5 font-roboto">
                      <li className="flex items-center">
                        <img
                          src="/assets/svg/location/Vector (1).svg"
                          alt=""
                          className="h-[14.3px] w-[10px]"
                        />
                        <span className="ml-2 text-black text-sm  font-roboto">
                          {ele.adress}
                        </span>
                      </li>
                      <li className="flex items-center mt-1">
                        <img
                          src="/assets/svg/location/Vector (2).svg"
                          alt=""
                          className="h-[15.35px] w-2"
                        />
                        <span className="ml-2 text-black text-sm ">
                          {ele.priceper_hour}/HR or {ele.priceper_month}/PM
                        </span>
                      </li>
                    </ul>
                    <div className="mt-5 flex items-center gap-2">
                      <button className="border-2 shrink-0 border-primary rounded-md h-10 w-10 flex items-center justify-center">
                        <img
                          src="/assets/svg/heart/heart.svg"
                          alt=""
                          className="w-5 h-4"
                        />
                      </button>
                      <button className="bg-primary uppercase tracking-wider w-full py-[12.5px] rounded-lg text-white text-xs xl-2:text-sm font-semibold font-roboto">
                        Invite to job
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="py-10 text-xl text-red-600 font-semibold text-center">
              Data not Available
            </p>
          )}
        </Swiper>

        <button
          onClick={handleNext}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12  border border-primary shrink-0 text-white flex justify-center items-center rounded-full"
        >
          <img
            src="/assets/svg/carasol/rightchv.svg"
            alt=""
            className=" h-4 w-4"
          />
        </button>
      </div>
    </div>
  );
};

export default PrequlifiedCarasol;
