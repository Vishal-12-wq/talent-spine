import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "angular",
    logo: "/assets/svg/socialmedia/Angular.svg fill.svg",
  },
  { id: 2, name: "React", logo: "/assets/svg/socialmedia/React.svg fill.svg" },
  {
    id: 3,
    name: "Html",
    logo: "/assets/svg/socialmedia/Figure → HTML5.svg.svg",
  },
  { id: 4, name: "vue", logo: "/assets/svg/socialmedia/Vue.svg fill.svg" },
  { id: 5, name: "mearn", logo: "/assets/svg/socialmedia/Mern.svg fill.svg" },
];

const DigitalSkill = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(1);
  const [activeTab, setActiveTab] = useState("software"); // State for active tab

  return (
    <div
      className={` ${
        activeTab === "skill"
          ? "bg-[#E6F3FC]" // Sky blue gradient when "Skill Expertise" is active
          : "bg-[#EFEFEF]" // Default background when "Software Expertise" is active
      }`}
    >
      <div className="xl-2:mt-[184px] mt-20  py-[100px] px-3 max-w-[1440px] xl-2:max-w-[1500px] xl-2:px-7 mx-auto xl:px-32 lg:px-10">
        <h1 className="section-title max-w-[1067px] mx-auto leading-[50px]">
          Discover
          <span className="text-primary ml-2">talents</span>
          <span className=" ml-2">with expert proficiency across </span> <br />
          <span className="text-primary">100 tech & digital skills</span>
        </h1>

        <div className="flex justify-center items-center gap-5 mt-10">
          <button
            onClick={() => setActiveTab("software")}
            className={`${
              activeTab === "software"
                ? "bg-primary text-white text-sm"
                : "bg-transparent text-black  border border-black "
            } shadow-lg px-4 py-3 xl-2:py-4 xl-2:px-6 xl-2:text-base text-sm font-roboto rounded-2xl font-bold`}
          >
            Software Experties
          </button>
          <button
            onClick={() => setActiveTab("skill")}
            className={`${
              activeTab === "skill"
                ? "bg-primary text-white text-sm"
                : "bg-transparent text-black border border-black "
            } shadow-lg px-4 py-3 xl-2:py-4 xl-2:px-6 xl-2:text-base text-sm font-roboto rounded-2xl font-bold border `}
          >
            Skill Experties
          </button>
        </div>

        <div className="w-full flex mt-12 max-lg:flex-col max-lg:gap-5">
          <div
            className={`rounded-2xl shrink-0 lg:p-8 p-5 xl-2:p-10 shadow-2xl border-r border-l-primary border-r-bordercolor border-b-bordercolor border-b border-l-2 ${
              activeTab === "skill"
                ? "bg-white" // Sky blue gradient when "Skill Expertise" is active
                : "bg-[#EFEFEF]" // Default background when "Software Expertise" is active
            }`}
          >
            <ul className="max-lg:flex gap-5 overflow-x-auto remove-scrollbar">
              {[
                "Front-End Developers",
                "Back-End Developers",
                "Software Engineers",
                "App Developers",
                "DevOps Engineer",
                "Principal Software Engineer",
                "Staff Software Engineer",
                "Machine Learning Engineer",
                "Data Science Engineer",
                "Engineer Manager",
              ].map((ele, index) => (
                <li
                  key={index}
                  className={`shrink-0 pb-3 font-roboto text-black text-base xl-2:text-xl xl-2:pb-5 border-b lg:mb-3 xl-2:mb-5 ${
                    activeId === index + 1
                      ? "text-primary font-bold border-primary"
                      : "border-[#DDDDDD]"
                  }`}
                >
                  <button
                    onClick={() => setActiveId(index + 1)}
                    className="hover:text-primary transition-colors"
                  >
                    {ele}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:px-10 w-full">
            <div className="flex justify-start gap-5 w-full flex-wrap max-sm:justify-center">
              {data.length > 0 &&
                data.map((ele) => (
                  <div
                    key={ele.id}
                    className="bg-white hover:bg-primary shadow-xl p-5 max-w-[150px] xl-2:max-w-[178px] rounded-[15px] h-[100px] xl-2:h-[126px] flex flex-col justify-center items-center w-full relative overflow-hidden"
                    onMouseEnter={() => setHoveredId(ele.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img
                      src={ele.logo}
                      className={`transition-all duration-300 ease-in-out w-8 h-8 xl-2:w-10 xl-2:h-10 ${
                        hoveredId === ele.id ? "opacity-0" : "opacity-100"
                      }`}
                      alt={ele.name}
                    />
                    <h2
                      className={`transition-all duration-300 ease-in-out font-roboto text-sm font-medium capitalize ${
                        hoveredId === ele.id ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {ele.name}
                    </h2>
                    <div
                      className={`absolute inset-0 left-2 right-2  flex flex-col justify-center items-center text-white text-sm opacity-0 transition-opacity duration-300 ease-in-out ${
                        hoveredId === ele.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button className="p-1 border border-white rounded-md uppercase bg-primary w-full">
                        hire talent
                      </button>
                      <button className="p-1 border border-white rounded-md uppercase bg-primary w-full mt-2">
                        project manage
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSkill;
