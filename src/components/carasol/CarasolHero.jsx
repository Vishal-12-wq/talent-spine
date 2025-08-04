import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Button from "../button/Button";
import { motion } from "framer-motion";
import AnimatedBoxes from "../shared/home-animation/Main";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaPlus } from "react-icons/fa6";
import "./style.css";

const swiperData = [
  {
    id: 0,
    date: "27 APR, 2023",
    title: "Work Anywhere from the World with ",
    img: "/assets/images/swiper/swiper 2.png",
    tag: "Global Talent Network",
    desc: "Take a chance and explore the world of public speaking! Join us right now!",
    bluetext1: "Virtually",
    bluetext2: "Talent Spine",
    animation: true,
    mainTitleJsx: (
      <p className=" mt-[21px] xl:text-[32px]  xl-2:max-w-[551px] text-[28px] font-normal leading-[50px] font-daysOne">
        <span className=" text-primary">Connecting</span> the Best <br /> Talent
        Worldwide with
        <span className=" text-primary">Talent Spine</span>
      </p>
    ),
  },
  {
    id: 1,
    date: "27 APR, 2023",
    title: "Work  Anywhere from the World with ",
    img: "/assets/images/swiper/swiper 2.png",
    tag: "Hire top talent",
    desc: "Take a chance and explore the world of public speaking! Join us right now!",
    bluetext1: "Virtually",
    bluetext2: "Talent Spine",
    topTipText: "",
    mainTitleJsx: <>
      <p className=" mt-[21px] xl-2:text-[40px]  xl-2:max-w-[551px] text-[28px] font-normal leading-[50px] font-daysOne">
        Work <span className=" text-primary">Virtually</span> Anywhere
        from the World with <span className=" text-primary">Talent </span>
        <span className=" text-primary">Spine</span>
      </p>
    </>
  },
  {
    id: 2,
    date: "27 APR, 2023",
    title: "Find the  for Your Team with  ",
    img: "/assets/images/swiper/swiper3.png",
    tag: "Precision in Hiring",
    desc: "Leverage our expertise to connect with skilled candidates who align with your specific needs.",
    bluetext1: "Perfect Match",
    bluetext2: "Talent Spine",
    mainTitleJsx: <p className=" mt-[21px] xl-2:text-[40px]  xl-2:max-w-[551px] text-[28px] font-normal leading-[50px] font-daysOne">
      Find the
      <span className=" text-primary"> Perfect Match</span> for your Team with <span className=" text-primary">Talent Spine</span>
    </p>
  },
  {
    id: 3,
    date: "27 APR, 2023",
    title: " Execute a Project , Buy a Pre Priced Package with",
    img: "/assets/images/swiper/swiper4.png",
    tag: "Empowering Growth",
    desc: "Leverage our expertise to connect with skilled candidates who align with your specific needs.",
    bluetext1: "Hire an  AI Veted Talent,",
    bluetext2: "Talent Spine",
    mainTitleJsx: <p className=" mt-[21px] xl-2:text-[40px]  xl-2:max-w-[551px] text-[28px] font-normal leading-[50px] font-daysOne">
      <span className=" text-primary">Hire an AI Veted Talent,</span> Execute a Project , Buy a Pre Priced Package with
      <span className=" text-primary">Talent Spine</span>
    </p>
  },
  {
    id: 4,
    date: "27 APR, 2023",
    title: "Hire top talent",
    img: "/assets/images/swiper/swiper5.png",
    tag: "Global Talent Network",
    desc: "Leverage our expertise to connect with skilled candidates who align with your specific needs.",
    bluetext1: "Virtually",
    bluetext2: "Talent Spine",
    mainTitleJsx: <p className=" mt-[21px] xl-2:text-[40px]  xl-2:max-w-[551px] text-[28px] font-normal leading-[50px] font-daysOne">
      Work <span className=" text-primary">Virtually</span> Anywhere
      from the World with <span className=" text-primary">Talent</span>

      <span className=" text-primary">Spine</span>
    </p>
  },
];

const CarasolHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [trianglePosition, setTrianglePosition] = useState({ x: 0, y: 0 });

  const handleSlideChange = (swiper) => {
    setTransitioning(true);

    const randomX = Math.random() * 70 - 20;
    const randomY = Math.random() * 5 - 30;
    setTrianglePosition({ x: randomX, y: randomY });

    setTimeout(() => {
      setCurrentImageIndex(swiper.realIndex);
      setTransitioning(false);
    }, 700);
  };

  return (
    <div className="max-w-[1600px] mx-auto xl-2:px-0  px-3 lg:px-24 ">
      <div className=" max-lg:gap-5 xl-2:h-[100vh] xl-25:h-screen  overflow-y-hidden  relative overflow-x-hidden   max-lg:pt-14 h-full max-lg:py-5 flex max-xl-25:flex-col justify-center items-center gap-[14.5px]">
        <div className=" xl-25:max-w-[669.36px] xl-25:w-[40%] w-full  ">
          <div className="  inline-block ">
            <div
              className={`mt-10 relative text-[18.7px] font-medium font-raleway px-[25.04px]  rounded-[10.2px] bg-primaryp1 text-center transition-all duration-300 py-[10.2px]`}
            >
              <div key={currentImageIndex} className="fade-up">
                {swiperData[currentImageIndex]?.tag && (
                  <div>{swiperData[currentImageIndex]?.tag || ""}</div>
                )}
              </div>
              <motion.div
                animate={{ x: trianglePosition.x, y: trianglePosition.y }}
                transition={{ duration: 0.9 }}
                key={trianglePosition}
              >
                <img
                  src="/assets/svg/hero/triagle.svg"
                  alt=""
                  className=" h-10 w-10 ml-auto absolute -top-24 -right-0"
                />
              </motion.div>
            </div>
          </div>
          {/* Main title jsx */}
          <div key={currentImageIndex} className="fade-up">
            {swiperData[currentImageIndex]?.mainTitleJsx}
          </div>

          {/* Main title jsx */}
          <div className=" xl-2:mt-10 mt-7 flex items-center gap-6">
            {/* ai based search */}
              <div >
                <h4 className="text-sm font-semibold mb-4 flex items-center gap-1">
                  <img
                    src="/assets/images/icons/tab.png"
                    alt="Sparkle"
                    className="w-5 h-5"
                  />
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
                    AI Based Search
                  </span>
                </h4>
                <div
                  className="mx-auto w-full z-50 bg-white sm:p-6 p-4 border-t-2 custom-gradient-border-top rounded-[24px] shadow-xl"
                  style={{ padding: "16px" }}
                >
                 {/* Tabs */}
                  <div className="flex items-center justify-between border border-gray-300 p-1 rounded-xl mb-4 overflow-hidden">
                    <button className="bg-[#007bff] text-white text-sm font-semibold px-4 py-2 rounded-lg">
                      Find Talent
                    </button>
                    <button className="text-black text-sm font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                      Project Packages
                    </button>
                    <button className="text-black text-sm font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                      Find Work
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
  <input
    type="text"
    placeholder="Search by role, skills and keywords"
    className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
  />
  <button
    className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-lg shadow-md border border-white"
    style={{
      background: 'linear-gradient(90deg, #007bff 0%, #0062cc 100%)',
      boxShadow: '0 4px 6px rgba(0, 123, 255, 0.3)',
    }}
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
      />
    </svg>
    SEARCH
  </button>
</div>
                  
                </div>
              </div>
            {/* closed here ai based */}
          </div>
          <div className=" xl-2:mt-10 mt-7 text-secondary xl-2:text-base text-xs font-normal font-roboto">
            Discover top professionals from every corner of the globe, ready to
            elevate your business.
          </div>
          <div className=" xl-2:mt-10 mt-7 flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center xl-2:gap-5  gap-3">
              <div className="flex items-center">
                <img
                  src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                  alt=""
                  className=" xl-2:h-12 xl-2:w-12 h-10 w-10 rounded-full object-cover"
                />
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo"
                  alt=""
                  className=" h-12 w-12 rounded-full object-cover border-4 border-white -ml-3"
                />
                <img
                  src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                  alt=""
                  className=" h-14 w-14 rounded-full object-cover border-4 border-white -ml-3"
                />
                <div className=" h-14 w-14 rounded-full object-cover border-4 bg-skygreen text-customgreen  text-2xl leading-[1] flex justify-center items-center border-white -ml-3">
                  <FaPlus className=" text-success text-lg" />
                </div>
              </div>
              <div>
                <h3 className=" text-secondary xl-2:text-[22px] text-lg font-medium leading-[33px] font-roboto ">
                  18k+
                </h3>
                <h2 className=" text-secondarys1 leading-6 text-base font-normal font-roboto">
                  Individual Freelancer
                </h2>
              </div>
            </div>
            <div>
              <h3 className=" text-secondary xl-2:text-[22px]  leading-[33px] text-lg font-medium  font-roboto">
                A+ Rating
              </h3>
              <div className=" flex ">
                <div className=" flex items-center gap-1 ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar className=" text-xs  text-[#FBD300]" />
                  ))}
                </div>
                <h2 className=" text-secondarys1 text-sm font-normal leading-6 ml-3 font-roboto">
                  4.78 (300k+)
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Here just text will change end */}

        {/* This will show in swiper start*/}
        <div className=" w-full xl-25:max-w-[986px] xl-25:w-[60%]   h-full max-xl-2:h-[500px] flex lg:justify-center  justify-center flex-col max-lg:mt-12 items-center lg:h-full relative">
          <Swiper
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper home-hero-carasol !w-full h-full"
            slidesPerView={1}
            loop={true}
            speed={1500}
            onSlideChange={handleSlideChange}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            virtualTranslate={true}
            autoPlay
            autoplayDisableOnInteraction={true}
          >
            {swiperData.map((data) => (
              <SwiperSlide key={data.id}>
                {data.animation ? (
                  <>
                    <div className="xl-2:h-[95%] h-full w-full mx-auto pt-5 ">
                      <img
                        src="/assets/images/hero/Map (1).png"
                        alt=""
                        className=" h-full w-full max-lg:pb-10 object-contain "
                      />
                    </div>
                    <div className="border border-primary rounded-2xl p-3 shadow-2xl absolute sm:bottom-0 bottom-0 xl-25:bottom-20 left-1/2 sm:left-[60%] transform -translate-x-1/2 font-inter text-secondary text-xs w-[250px] sm:max-w-[230px]">
                      <span className=" font-semibold">Work</span> from our hubs
                      USA, Canada, Europe, India, Australia, Philippine
                    </div>
                  </>
                ) : (
                  <div className="h-full w-full sm:top-0 top-0  md:top-0   absolute xl-25:top-0 flex max-sm:items-start  justify-center max-lg:items-start items-center">
                    <AnimatedBoxes
                      currentImage={data?.img}
                      currentIndex={currentImageIndex}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* This will show in swiper start*/}
      </div>
    </div>
  );
};

export default CarasolHero;
