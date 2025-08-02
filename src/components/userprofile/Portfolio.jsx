import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    title: "Ahuse",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    img:"/assets/images/portfolio/portfoli1.png"
  },
  {
    id: 2,
    title: "App Dashboard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    img:"/assets/images/portfolio/portfoli2.png"
  },
  {
    id: 3,
    title: "Easy Rent",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    img:"/assets/images/portfolio/portfolio3.png"
  },
];
const Portfolio = () => {
  return (
    <div className="py-10  profile-aligment font-inter">
      <div className=" flex justify-between items-end ">
        <div>
          <h1 className=" text-secondarys1 font-semibold text-sm">
            Recent Projects
          </h1>
          <img
            src="/assets/svg/portfolio/My Portfolio.svg"
            alt=""
            className=" w-[200px] mt-2 h-10"
          />
        </div>
        <button className=" py-3 px-5 bg-[#0D58AC] text-white text-sm rounded-full flex items-center gap-1 ">
          See More <RiArrowRightSLine className=" text-lg" />
        </button>
      </div>
      <div className=" mt-10">
        {
            data.length > 0 ? (
                <div className=" flex justify-between gap-6  overflow-x-auto p-1">
                    {data.map((ele, index)=>(
                        <div className=" max-w-[380px] shrink-0 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl" key={index}>
                            <div className=" h-[300px] relative">
                                <img src={ele.img} alt="" className=" h-full w-full object-cover" />

                            </div>
                            <div className=" p-5">
                                <h1 className=" text-xl font-semibold">{ele.title}</h1>
                                <p className=" text-sm text-secondarys1 mt-1">{ele.desc}</p>
                            <button className=" text-xs font-semibold mt-5 pb-2 flex items-center gap-2 border-b-[1.33px] border-[#006B6A] ">View In Dribbble
                                <img src="/assets/svg/portfolio/portfolioarrow.svg" alt="" className=" h-3 w-3" />
                            </button>


                            </div>
                            

                        </div>
                    ))}
                </div>
            ) : <p className=" py-10 text-center text-red-600 font-semibold">
                data not found

            </p>
        }

      </div>
    </div>
  );
};

export default Portfolio;
