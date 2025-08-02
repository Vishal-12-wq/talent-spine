import React, { useState, useCallback } from "react";
import Categories from "../categories/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, A11y } from "swiper/modules";

const data = [
  {
    id: 1,
    name: "Graphic Design",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card1.png",
  },
  {
    id: 2,
    name: "WordPress",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card2.png",
  },
  {
    id: 3,
    name: "Web Design",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card3.png",
  },
  {
    id: 4,
    name: "Video Editing",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card4.png",
  },
  {
    id: 5,
    name: "Video Editing",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card4.png",
  },
  {
    id: 6,
    name: "Video Editing",
    post: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    adress: "Miami, Florida",
    priceper_hour: "60",
    priceper_month: "1200",
    img: "/assets/images/project-price/card4.png",
  },
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const slides = chunkArray(data, 4); // each slide gets 4 cards


const PricePackage = () => {
  const categories = [
    "All",
    "Designing",
    "Development",
    "Coding",
    "Big Data",
    "Editing",
  ];

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-[1500px] xl-2:max-w-[1600px] mx-auto mt-28  xl-2:mt-[160px] relative xl:px-20 xl-2:px-0 lg:px-10 px-3 max-sm:pt-10">
      <h1 className="section-title xl-2:max-w-[800px] max-w-[630px] mx-auto">
        Buy Pre - Priced{" "}
        <span className="text-primary rounded-b-[10% 20%] ml-2">
          Project Packages
        </span>
        <img
          src="/assets/svg/curve/curve2.svg"
          alt=""
          className="max-md:mx-auto ml-auto mt-[10px] max-w-[270px]  xl-2:max-w-[390px] xl-2:mr-3 sm:mr-10   w-full"
        />
      </h1>
      <div className="mt-8 xl-2:mt-12 md:px-20 px-1">
        <Categories
          categories={categories}
          browse="Browse all Project Packages"
        />
      </div>

      <div className="xl-2:mt-12 mt-8 w-full flex justify-center  mx-auto sm:gap-5 gap-2 xl-2:gap-[30px] items-center relative">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12  border border-primary shrink-0 rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/left.svg" alt="" className="h-4 w-4" />
        </button>

<Swiper
  spaceBetween={20}
  slidesPerView={1}
  onSwiper={setSwiperRef}
  modules={[Pagination, Navigation, A11y]}
  className="!pb-14 !pt-5 !px-2"
>
  {slides.length > 0 ? (
    slides.map((group, index) => (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {group.map((ele) => (
            <div
              key={ele.id}
              className="flex gap-4 w-full max-w-[600px] p-4 border shadow-sm border-bordercolor border-t-2 rounded-2xl hover:border-t-primary hover:shadow-lg transition-all"
            >
              {/* Image Left */}
              <div className="w-[40%] min-w-[120px] max-w-[200px] h-[130px] overflow-hidden rounded-[10px]">
                <img
                  src={ele.img}
                  alt={ele.name}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>

              {/* Content Right */}
              <div className="flex flex-col justify-between w-[60%]">
                <h2 className="text-primary font-bold text-sm xl:text-base">{ele.name}</h2>
                <p className="text-xs xl:text-sm text-[#757575] mt-1 line-clamp-3">
                  {ele.post}
                </p>
                <button className="mt-3 bg-primary w-100 px-4 py-2 rounded text-white text-xs xl:text-sm font-semibold">
                  View All
                </button>
              </div>
            </div>
          ))}
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
          onClick={() => swiperRef?.slideNext()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12  shrink-0 border border-primary rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/right.svg" alt="" className="h-4 w-4" />
        </button>
      </div>

      <img
        src="/assets/svg/work/lefy.svg"
        alt=""
        className="w-[200px] h-20 absolute top-0 max-lg:hidden right-0"
      />
    </div>
  );
};

export default PricePackage;
