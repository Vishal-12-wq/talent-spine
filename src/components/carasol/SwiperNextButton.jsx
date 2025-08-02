import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

const SwiperNextButton = ({ direction }) => {
  const swiper = useSwiper();
  const [swiperReady, setSwiperReady] = useState(false);

  // Check if swiper instance is available
  useEffect(() => {
    if (swiper) {
      setSwiperReady(true);
    }
  }, [swiper]);

  const handleClick = () => {
    if (swiperReady) {
      if (direction === "prev") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <div
      className={`swiper-nav-btns absolute top-1/2 ${
        direction === "prev" ? "left-0" : "right-0"
      } transform -translate-y-1/2 z-10`}
      style={{ zIndex: 10 }}
    >
      <button
        onClick={handleClick}
        className="bg-primary text-white p-3 rounded-full"
      >
        {direction === "prev" ? "<" : ">"}
      </button>
    </div>
  );
};

export default SwiperNextButton;
