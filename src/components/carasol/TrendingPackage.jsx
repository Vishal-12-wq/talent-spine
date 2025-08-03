import React, { useState } from "react";
import Categories from "../categories/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";

const data = [
  {
    id: 1,
    name: "Startup",
    post: "What can a Business Coach Help With?",
    adress: "2 Day Delivery",
    priceper_hour: "From $40",
    review: "4.8(782)",
    priceper_month: "782",
    reviwemen:
      "https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trending1.png",
    reviewer: "James",
    review_text: "top rated",
    bg_color : 'yellow'
  },
  {
    id: 2,
    name: "Tips",
    post: "Build the right team working the right way",
    adress: "2 Day Delivery",
    priceper_hour: "From $40",
    priceper_month: "782",
    review: "4.8(782)",
    reviwemen:
      "https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trenidng2.png",
    reviewer: "James",
    review_text: "top rated",
    bg_color : 'blue'
  },
  {
    id: 3,
    name: "Coaching",
    post: "Is A Small Business Coach Different?",
    adress: "2 Day Delivery",
    priceper_hour: "From $40",
    priceper_month: "782",
    reviwemen:
      "https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trenidng3.png",
    reviewer: "James",
    review_text: "top rated",
    bg_color : 'green'
  },
  {
    id: 4,
    name: "Tips",
    post: "Build the right team working the right way",
    adress: "2 Day Delivery",
    priceper_hour: "From $40",
    priceper_month: "782",
    reviwemen:
      "https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trending4.png",
    reviewer: "James",
    review_text: "top rated",
    bg_color : 'yellow'
  },
  {
    id: 5,
    name: "Tips",
    post: "Build the right team working the right way",
    adress: "2 Day Delivery",
    priceper_hour: "From $40",
    priceper_month: "782",
    reviwemen:
      "https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trending4.png",
    reviewer: "James",
    review_text: "top rated",
    bg_color : 'blue'
  },
  {
    id: 6,
    name: "Tips",
    post: "Build the right team working the right way",
    adress: "2 Day Delivery",
    priceper_hour: "From $40",
    priceper_month: "782",
    reviwemen:
      "https://r2-us-west.photoai.com/1726204507-41c93c794ee27f57a83004455c8b6482-3.png",
    img: "/assets/images/trending/trending4.png",
    reviewer: "James",
    review_text: "top rated",
    bg_color : 'green'
  },
];

const TrendingPackage = () => {
  const categories = [
    "All Programme",
    "UI/UX Design",
    "Program Design",
    "Web Development",
    "Data Science",
  ];

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-[1500px] relative xl-2:max-w-[1600px] mx-auto mt-28  xl-2:mt-[96px] xl:px-20 xl-2:px-0 lg:px-10 px-3 max-sm:pt-10">
      <h1 className="section-title max-w-[489px] mx-auto flex flex-wrap gap-4 justify-center">
        Trending
        <div>
          <span className="text-primary"> Packages</span>
          <img
            src="/assets/svg/curve/text-curve.svg"
            alt=""
            className="ml-auto mt-1 max-w-[220px] w-full"
          />
        </div>
      </h1>

      <div className="mt-7 xl-2:mt-12 md:px-20 px-3">
        <Categories categories={categories} />
      </div>

      <div className="xl-2:mt-12 mt-8 w-full flex justify-center  mx-auto sm:gap-5 gap-2 xl-2:gap-[30px] items-center relative">

        <button
          onClick={() => swiperRef?.slidePrev()}
          className="sm:h-10 sm:w-10 h-8 w-8  border border-primary shrink-0 rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/left.svg" alt="" className="h-4 w-4" />
        </button>

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            660: {
              slidesPerView: 1,
            },
           
            1024:{
              slidesPerView:2
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          onSwiper={setSwiperRef}
          modules={[Pagination, Navigation, A11y]}
           className="!pb-14 max-sm:!pb-10 !pt-5 !px-2"
        >
          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="flex justify-center mx-auto">
                <div className="mx-auto  transition-all duration-300 bg-white    max-w-[338.8px] shrink-0 w-full rounded-2xl border-t-2 hover:border-t-primary border shadow-sm border-bordercolor overflow-hidden  hover:shadow-xl hover:brightness-90">
           

                  <div className="relative h-[150px] w-full rounded-[10px] overflow-visible">
  {/* Background image with blue overlay */}
  <div
    className="absolute h-[150px]  inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${ele.img})` }}
  >
    <div className="absolute inset-0  opacity-70"   style={{ backgroundColor: ele.bg_color }} // like ele.color = "#0076CE"
/>
  </div>

  {/* Foreground image (pops out) */}
  <div className="absolute inset-0 flex items-start justify-center mt-[100px] p-3">
    <img
      src={ele.img}
      alt={ele.name}
      className="h-[200px] w-full rounded-[10px] z-[1] -mt-24 object-cover  shadow-lg"
    />
  </div>
  
                    {/* Bookmark */}
                    <div className="absolute z-[2] top-6 right-6 border border-[#0076CE] bg-white p-1 rounded-[100px]">
                      <img src="/assets/svg/heart/heart.svg" alt="bookmark" className="h-5 w-5" />
                    </div>
                  </div>

<div className="mt-[80px] px-4">
                    <div className="flex gap-1 items-center justify-between">
                      <h1 className="text-base xl-2:text-lg font-roboto font-bold text-primary uppercase tracking-wider">
                        {ele.name}
                      </h1>
                      <div className="border border-primary text-primary px-2 py-1 rounded-[6px] text-sm font-semibold">
                        {ele.priceper_hour}
                      </div>
                    </div>
                    <h2 className=" text-black font-bold text-xl xl-2:text-2xl leading-6 capitalize mt-4">
                    {ele.post.length > 20 ? ele.post.slice(0, 20) + "..." : ele.post}
                    </h2>
                    <ul className="mt-4">
                      <li className="flex items-center">
                        <img
                          src="/assets/svg/trending/treindingtime.svg"
                          alt=""
                          className="h-3 w-3"
                        />
                        <span className="ml-2 text-black text-xs font-roboto">{ele.adress}</span>
                      </li>
                      <li className="flex items-center mt-1">
                        <img
                          src="/assets/svg/trending/star.svg"
                          alt=""
                          className="h-3 w-3"
                        />
                        <span className="ml-2 text-black text-xs font-roboto">
                          {ele.priceper_hour} ({ele.priceper_month})
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center gap-3 flex-wrap justify-between ">
                      <div className="flex-1 flex items-center gap-2">
                        <img
                          src={ele.reviwemen}
                          alt=""
                          className="h-8 w-8 xl-2:h-10 xl-2:w-10 rounded-full object-cover object-top"
                        />
                        <div>
                          <h3 className="text-xs text-black xl-2:text-sm font-medium">{ele.reviewer}</h3>
                          <h3 className="text-[10px] text-secondarys1 capitalize  xl-2:text-xs">
                            {ele.review_text}
                          </h3>
                        </div>
                      </div>
                      <button className="uppercase flex-1 border border-[#0076CE] text-[#0076CE] py-3 rounded-lg lg:text-[10px] text-[10px] font-semibold">
                        Message
                      </button>
                    </div>
                    <div className="font-medium text-[10px] mt-2 mb-2 text-[#7348DE] rounded px-2 py-1 border border-l-[#7348DE] border-t-gray-300 border-r-gray-300 border-b-gray-300">
                      Book a Custom Consultations
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
          onClick={() => swiperRef?.slideNext()}
          disabled={swiperRef?.realIndex + 1 >= data.length}
          className="sm:h-10 sm:w-10 h-8 w-8  border border-primary rounded-full  shrink-0 flex justify-center items-center disabled:opacity-50"
        >
          <img src="/assets/svg/carasol/right.svg" alt="" className="h-4 w-4" />
        </button>
      </div>

      <img
        src="/assets/svg/work/arrow.svg"
        alt=""
        className="absolute left-14 w-[150px] h-16 top-1 hidden lg:block"
      />
    </div>
  );
};

export default TrendingPackage;
