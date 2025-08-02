import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";

const data = [
  {
    id: 1,
    date: "27 APR, 2023",
    title: "Print, publishing qui visual layout mockups.",
    img: "https://www.learntos.com/images/media/img_90.jpg",
  },
  {
    id: 2,
    date: "27 APR, 2023",
    title: "Designer’s checklist for every UX/UI project.",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSolX79IaSex2BNtGWyQHLyXZ0wM73z_gnuklBJBMtPDJcrZNEZ",
  },
  {
    id: 3,
    date: "27 APR, 2023",
    title: "Make more productive work flow in few steps.",
    img: "https://resize.indiatv.in/resize/newbucket/1200_675/2024/02/instant-loan-1708912357.webp",
  },
  {
    id: 4,
    date: "27 APR, 2023",
    title: "Designer’s checklist for every UX/UI project.",
    img: "https://www.learntos.com/images/media/img_90.jpg",
  },
  {
    id: 5,
    date: "27 APR, 2023",
    title: "Make more productive work flow in few steps.",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSolX79IaSex2BNtGWyQHLyXZ0wM73z_gnuklBJBMtPDJcrZNEZ",
  },
];

const LatestBlog = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="max-w-[1500px] xl-2:max-w-[1600px] mx-auto lg:mt-28 mt-20  xl-2:mt-[160px] xl:px-20 xl-2:px-0 lg:px-10 px-3 max-sm:pt-10">
      <h1 className="section-title text-center">
        Latest
        <span className="text-primary"> Blogs</span>
      </h1>

      <div className="flex sm:gap-8 gap-4 xl-2:gap-12 items-center justify-start mt-8 xl-2:mt-12">
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12 border border-primary shrink-0 rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/left.svg" alt="Previous" className="h-4 w-4" />
        </button>

        <Swiper
          onSwiper={setSwiperRef}
          modules={[Pagination, Navigation, A11y]}
          className="!py-5 !px-2 w-full !mx-auto blog-swiper"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true, // This makes the pagination bullets clickable
          }}
        >
          {data.length > 0 ? (
            data.map((ele) => (
              <SwiperSlide key={ele.id} className="justify-start mx-auto">
                <div className="group mx-auto p-5 xl-2:p-6 hover:shadow-xl max-w-[340px] xl-2:max-w-[456px] max-sm:rounded-[24px] max-sm:border-t max-sm:shadow-xl hover:rounded-[24px] hover:border-t hover:border-t-primary">
                  <img
                    src={ele.img}
                    alt={ele.title}
                    className="h-[250px] xl-2:h-[300px] max-sm:h-[200px] object-cover object-top w-full"
                  />
                  <h3 className="text-xs text-secondarys1 font-roboto mt-3 xl-2:text-base">{ele.date}</h3>
                  <h5 className="mt-3 xl-2:mt-6 font-roboto text-lg font-medium xl-2:text-2xl ">{ele.title}</h5>
                  <button className="mt-5 xl-2:mt-6 capitalize text-primary border xl-2:text-base xl-2:py-4 xl-2:px-8 text-xs border-primary rounded-lg px-6 py-3 font-medium font-roboto group-hover:bg-primary group-hover:text-white transition-all">
                    Read more
                  </button>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="capitalize text-red-600 font-semibold text-xl text-center">
              No data Found
            </p>
          )}
        </Swiper>

        <button
          onClick={() => swiperRef?.slideNext()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12 shrink-0 border border-primary rounded-full flex justify-center items-center"
        >
          <img src="/assets/svg/carasol/right.svg" alt="Next" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LatestBlog;
