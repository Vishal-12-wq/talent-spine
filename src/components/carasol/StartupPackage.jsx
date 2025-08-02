import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const startupPackages = [
  {
    id: 1,
    title: "Startup Basic",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    img: "/assets/images/trending/trenidng2.png",
  },
  {
    id: 2,
    title: "Startup Standard",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    img: "/assets/images/trending/trenidng2.png",
  },
  {
    id: 3,
    title: "Startup Premium",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    img: "/assets/images/trending/trenidng2.png",
  },
  {
    id: 4,
    title: "Startup Premium +",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    img: "/assets/images/trending/trenidng2.png",
  },
];

const StartupPackage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4 xl:px-20 mt-24">
      <h1 className="section-title max-w-[489px] mx-auto flex flex-wrap gap-4 justify-center">
        Startup
        <div>
          <span className="text-primary"> Packages</span>
          <img
            src="/assets/svg/curve/text-curve.svg"
            alt=""
            className="ml-auto mt-1 max-w-[220px] w-full"
          />
        </div>
      </h1>

      <div className="mt-10 relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
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
          modules={[Navigation]}
        >
          {startupPackages.map((pkg) => (
            <SwiperSlide key={pkg.id} className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-md border p-4 max-w-xs w-full flex flex-col items-center text-center">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="rounded-xl w-full h-40 object-cover"
                />
                <h2 className="text-lg font-bold text-[#0076CE] mt-4">
                  {pkg.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {pkg.description}
                </p>
                <button className="mt-4 w-full bg-[#0076CE] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#005fa3]">
                  VIEW DETAILS
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StartupPackage;
