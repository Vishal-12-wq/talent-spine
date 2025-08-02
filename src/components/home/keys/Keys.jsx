import React, { useState } from "react";

const Keys = () => {
  const [activeCategory, setActiveCategory] = useState("marketplace");
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = {
    marketplace: [
      "PHP",
      "UI/UX Design",
      "My SQL",
      "DevOps",
      "React JS",
      "ElenaSkill",
      "Dot Net",
      "Graphic Designing",
      "Mental health",
      "Tech",
      "Study Aboard",
      "Career",
      "Coding",
    ],
    startupHub: [
      "Tech & Innovation",
      "Health & Wellness",
      "E-commerce & Retail",
      "Green & Sustainability",
      "Finance & Fin-tech",
      "Education & Ed Tech",
      "Entertainment & Media",
      "Social Impact",
    ],
  };

  const handleButtonClick = (category) => {
    if (category !== activeCategory) {
      setIsAnimating(true); 
      setTimeout(() => {
        setActiveCategory(category);
        setIsAnimating(false); 
      }, 1000); // 1 second delay to show the fade-in effect
    }
  };

  return (
    <div className="lg:pt-[150px] xl-2:pt-[200px] lg:pb-20 py-10 max-w-[1600px] mx-auto xl:px-28 xl-2:px-0 lg:px-10 px-3 relative">
      <h1 className="section-title text-center">
        We Focus on <span className="text-primary"> Key Categories</span>
      </h1>
      <div className="flex justify-center items-center gap-5 lg:mt-14 mt-8 xl-2:mt-14">
        <button
          className={`px-4 py-3 xl-2:py-4 xl-2:px-6 xl-2:text-base text-sm font-roboto rounded-2xl font-bold ${
            activeCategory === "marketplace" ? "bg-primary text-white" : "bg-transparent text-black border border-black"
          }`}
          onClick={() => handleButtonClick("marketplace")}
        >
          Market Place
        </button>
        <button
          className={`px-4 py-3 xl-2:py-4 xl-2:px-6 xl-2:text-base text-sm font-roboto rounded-2xl font-bold ${
            activeCategory === "startupHub" ? "bg-primary text-white" : "bg-transparent text-black border border-black"
          }`}
          onClick={() => handleButtonClick("startupHub")}
        >
          Startup Hub
        </button>
      </div>

      <div
        className={`xl-2:mt-14 mt-8 flex gap-6 lg:justify-center items-center p-3 lg:flex-wrap overflow-x-auto pb-8 ${
          isAnimating ? "fade-in" : ""
        }`}
      >
        {categories[activeCategory].map((ele, index) => (
          <div
            key={index}
            className={`font-roboto text-sm py-3 px-10 shrink-0 rounded-full text-center ${
              isAnimating ? "fade-in-key" : ""
            }`}
            style={{
              boxShadow: "0 10px 25px rgba(215, 234, 254, 0.8)",
              animationDelay: `${index * 0.1}s`, // Stagger the delay for each item
            }}
          >
            {ele}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center xl-2:mt-14">
        <button className="px-7 py-3 text-primary text-base border-b border-primary rounded-2xl shadow-xl font-roboto font-bold">
          View More
        </button>
      </div>
      <img
        src="/assets/svg/work/upside.svg"
        alt=""
        className=" h-20 w-[180px] absolute top-20 max-lg:hidden left-20 transform "
      />
      <img
        src="/assets/svg/work/plane.svg"
        alt=""
        className=" h-[160px] w-[200px]  absolute top-14 max-lg:hidden right-20 transform "
      />

      {/* bussines part */}
      <div className=" sm:pt-36 xl-2:pt-[248px] pt-10 relative">
        <h1 className=" section-title  xl-2:leading-[55px] leading-10 text-center max-w-[1430px]  mx-auto ">
          We’ve helped millions of owners create a <br /> business that works.
        </h1>
        <p className=" mt-6 xl-2:mt-10 font-roboto text-base xl-2:text-xl text-secondarys1 text-center">
          Hundreds of companies trust us with their success. It’s time for you
          to experience quality mentoring for your business.
        </p>
        <div className=" mt-8  xl-2:mt-10 py-4 flex justify-around items-center flex-wrap gap-5">
          {[
            "/assets/svg/socialmedia/Link → b1.png.svg",
            "/assets/svg/socialmedia/Link → b2.png.svg",
            "/assets/svg/socialmedia/Link → b3.png.svg",
            "/assets/svg/socialmedia/Link → b4.png.svg",
            "/assets/svg/socialmedia/Link → b5.png.svg",
            "/assets/svg/socialmedia/Link → b6.png.svg",



          ].map(ele=>(
            <img src={ele} alt="" className=" object-cover"/>
          ))}
        </div>
        <img src="/assets/svg/work/plane.svg" alt="" className="  w-[180px] h-[120px]  transform rotate-90 max-lg:hidden absolute top-5 xl-2:top-32 xl:top-16 xl:left-0 left-1" />
        <img src="/assets/svg/work/bulb.svg" alt="" className="  w-[100px] h-[100px] absolute top-10 xl-2:top-20 right-5 max-lg:hidden" />

      </div>
    </div>
  );
};

export default Keys;
