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
    bg_color : 'yellow'
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
    bg_color : 'blue'
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
    bg_color : 'green'
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
    bg_color : 'yellow'
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
    bg_color : 'blue'
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
    bg_color : 'green'
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
            slidesPerView={1} // 👈 default: phones show 1 slide
            breakpoints={{
              640: {
                slidesPerView: 1,  // <=640px: 1 slide (redundant but explicit)
              },
              768: {
                slidesPerView: 2,  // optional: tablets show 2 slides
              },
              1024: {
                slidesPerView: 3,  // desktops show 3 slides
              },
            }}
            onSwiper={setSwiperRef}
            modules={[Pagination, Navigation, A11y]}
          >

          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="flex justify-center mx-auto w-100">
                <div className="w-full max-w-100 rounded-2xl border border-[#E6ECF0] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
                  <div className="relative h-[220px] w-full rounded-[10px] overflow-visible">
  {/* Background image with blue overlay */}
  <div
    className="absolute h-[150px]  inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${ele.img})` }}
  >
    <div className="absolute inset-0  opacity-60"   style={{ backgroundColor: ele.bg_color }} // like ele.color = "#0076CE"
/>
  </div>

  {/* Foreground image (pops out) */}
  <div className="absolute inset-0 flex items-start justify-center mt-[100px] p-6">
    <img
      src={ele.img}
      alt={ele.name}
      className="h-[200px] w-full rounded-[10px] z-[1] -mt-24 object-cover border-4 border-white shadow-lg"
    />
  </div>



                    {/* Verified Badge */}
                    <div className="absolute z-[2] top-11 left-9 bg-[#0076CE] text-white text-[11px] px-2 py-1 rounded font-bold font-roboto tracking-wide">
                      VERIFIED
                    </div>
                    {/* Rating */}
                    <div className="absolute top-11 z-[1] left-[115px] bg-[#0076CE] text-white text-[11px] px-2 py-1 rounded font-bold font-roboto">
                      5 ★
                    </div>
                    
                    {/* Bookmark */}
                    <div className="absolute top-11 right-9 z-[1] border border-[#0076CE] bg-white p-1 rounded-[100px]">
                      <img src="/assets/svg/heart/heart.svg" alt="bookmark" className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-black font-roboto">{ele.name}</h3>
                          <div className="text-sm text-gray-700">{ele.post}</div> {/* Post below name */}
                        </div>

                        <div className="text-right">
                          <div className="text-[#0076CE] text-sm font-semibold border border-[#0076CE] px-2 py-1 rounded">
                            ${ele.priceper_hour}/HR or {ele.priceper_month}/PM
                          </div>
                          <div className="text-sm text-[#FFB800] text-center uppercase mt-1">Premium</div> {/* Moved Premium here */}
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-gray-600 gap-2">
                        <img src="/assets/svg/location/Vector (1).svg" alt="location" className="w-4 h-4" />
                        {ele.adress}
                      </div>
                    


                    <div className="grid grid-cols-2 gap-2 mt-2 text-xs font-semibold font-roboto">
                      <div className="text-black rounded px-2 py-1 border border-l-black border-t-gray-300 border-r-gray-300 border-b-gray-300">
                        $70+ Earned
                      </div>

                      <div className="text-black rounded px-2 py-1 border border-l-black border-t-gray-300 border-r-gray-300 border-b-gray-300">
                        7+ Years of Experience
                      </div>

                      <div className="text-[#228822] rounded px-2 py-1 border border-l-[#228822] border-t-gray-300 border-r-gray-300 border-b-gray-300">
                        Available Now
                      </div>

                      <div className="text-[#7348DE] rounded px-2 py-1 border border-l-[#7348DE] border-t-gray-300 border-r-gray-300 border-b-gray-300">
                        Offer Free Consultations
                      </div>
                    </div>

                    <p className="text-xs text-[#0076CE] leading-5 mt-3">
                      I share close to 4 decades of experience between us in Analytics, Product, Consulting and Strategy.
                    </p>
                    
                    <div className="mt-4">
                      <span className="block text-[11px] text-[#4B4B4B] font-semibold tracking-wide mb-2">
                        Main Skills
                      </span>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-[#0076CE] px-3 py-[6px] rounded-full shadow-md">
                          Analytics
                        </span>
                        <span className="text-[#0076CE] px-3 py-[6px] rounded-full shadow-md">
                          Consulting
                        </span>
                        <span className="text-[#0076CE] px-3 py-[6px] rounded-full shadow-md">
                          Bidding
                        </span>
                        <span className="text-[#0076CE] px-3 py-[6px] rounded-full shadow-md">
                          Development
                        </span>
                        <span className="text-[#0076CE] px-3 py-[6px] rounded-full shadow-md">
                          +5
                        </span>
                      </div>
                    </div>


                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mt-4">
                      <button className="bg-[#0076CE] hover:bg-[#0061a8] text-white px-4 py-2 text-sm rounded-md w-1/2 font-semibold">
                        View Profile
                      </button>
                      <button className="border border-[#0076CE] text-[#0076CE] px-4 py-2 text-sm rounded-md w-1/2 font-semibold hover:bg-[#F0F9FF]">
                        Message
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
