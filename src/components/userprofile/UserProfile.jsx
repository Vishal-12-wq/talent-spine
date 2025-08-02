import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import apiService from "../../apiService";

const UserProfile = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState({})

  const fetchData = useCallback(async (slug) => {
    const response = await apiService.auth.getProfileBySlug(slug)
    if (response) {
      setData(response?.data)
    }
  }, [])

  useEffect(() => {
    const slug = searchParams.get("slug")
    if (slug) {
      fetchData(slug)
    }
  }, [fetchData, searchParams])

  return (
    <div className="profile-aligment bg-gradient-to-b from-[#0D58AC] to-white py-10 ">
      <div className=" p-6 bg-white rounded-2xl border-b-4 border-success">
        <div className=" flex justify-between max-md:justify-center gap-5 flex-wrap">
          <div className="flex gap-7 max-md:flex-col max-md:justify-center">
            <div className=" h-40 w-40 rounded-full  object-cover object-top mx-auto  relative">
              <img
                src={
                  data?.image_url ||
                  data?.image ||
                  "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                className=" h-full w-full rounded-full  object-cover object-top brightness-50"
                alt="..."
              />
              <img
                src={"/assets/svg/profile/bluetik.svg"}
                alt=""
                className=" h-6 w-6 absolute bottom-1 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div>
              <h1 className=" font-inter text-3xl font-bold max-md:text-center">
                {data?.display_name ? data.display_name : 'Ranjani And Vignesh'}
              </h1>
              <p className="form-small  mt-1 !text-sm max-md:text-center">
                Analytics, Product, Strategy, Consulting
              </p>
              <div className=" sm:flex grid grid-cols-2 items-center gap-4 py-2">
                <div className=" p-1 bg-skygreen border-l-2 max-w-20 flex mt-5 flex-col justify-center items-center w-full border-success rounded-xl">
                  <h1 className="form-small">Top</h1>
                  <h2 className=" text-xl font-inter font-bold mt-2">1%</h2>
                </div>
                <div className=" p-1 bg-skygreen border-l-2 max-w-20 flex mt-5 flex-col justify-center items-center w-full border-success rounded-xl">
                  <h1 className="form-small">Bookings</h1>
                  <h2 className=" text-xl font-inter font-bold mt-2">196</h2>
                </div>
                <div className="hexa-bg  flex justify-center items-center  mt-5  shrink-0 flex-col">
                  <h2 className=" text-xs font-black font-inter">Top</h2>
                  <h3 className=" text-xs font-black font-inter">RATED</h3>
                  <div className=" text-[8px] font-inter mt-1">2023</div>
                </div>
                <img
                  src="/assets/images/profile/Frame 18605.png"
                  alt=""
                  className=" sm:w-[200px]  h-16 mt-5 md:ml-3 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <button className="bg-success px-6  py-2 rounded-full text-sm  font-inter text-white">
              Start Page
            </button>
            <button className="bg-[#0D58AC] px-6  py-2 rounded-full text-sm  font-inter text-white">
              My Portfolio
            </button>
            <div className=" mt-auto flex justify-between">
              <NavLink>
                <img
                  src="/assets/svg/socialmedia/greenfb.svg"
                  alt=""
                  className=" h-6 w-6"
                />
              </NavLink>
              <NavLink>
                <img
                  src="/assets/svg/socialmedia/greeninsta.svg"
                  alt=""
                  className=" h-6 w-6"
                />
              </NavLink>
              <NavLink>
                <img
                  src="/assets/svg/socialmedia/greentwit.svg"
                  alt=""
                  className=" h-6 w-6"
                />
              </NavLink>
              <NavLink>
                <img
                  src="/assets/svg/socialmedia/greenlinkidien.svg"
                  alt=""
                  className=" h-6 w-6"
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mt-7 flex gap-5 max-md:justify-center">
          <div className="form-heading  rounded-[24px] !text-xs px-7 border-l-2 border-bordercolor bg-skygreen py-2 text-center">
            Status - <span className=" text-secondarys1">Offline</span>
          </div>
          <div className="form-heading flex  flex-wrap justify-center rounded-[24px] !text-xs items-center px-6 border-l-2 border-success bg-skygreen py-2 text-center">
            Rating - <span className=" text-success">4.9/5</span>{" "}
            <div className=" flex items-center gap-1 ml-2 ">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar className=" text-[10px]  text-[#FBD300]" key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-7">
          <h1 className=" form-heading">About us!</h1>
          <p className=" form-small !text-sm">
            {data?.about ? data.about : '-'}
            {/* <span>
              {" "}
              <NavLink className=" text-[#0D58AC] font-bold">
                Read More...
              </NavLink>
            </span> */}
          </p>
        </div>
        <div className=" mt-7">
          <h1 className=" form-heading">Seeking to get mentored by us - connect with us below</h1>

          <ul className=" list-disc">
            {data?.socialLinks?.length ? data?.socialLinks?.map((d) => <li className="form-small !text-sm ml-4">
              <NavLink to={d?.url} target="_blank">{d?.url}</NavLink>
            </li>) :
              <>
                <li className="form-small !text-sm ml-4">
                  <NavLink>https://www.linkedin.com/in/kumarvignesh/ </NavLink>
                </li>
                <li className="form-small !text-sm ml-4">
                  <NavLink>https://www.linkedin.com/in/ranjanimani/ </NavLink>
                </li></>
            }


          </ul>
        </div>
        <div className=" lg:mt-10 mt-8 flex gap-6 lg:justify-start items-center lg:flex-wrap overflow-x-auto pb-2">
          {[
            "Analytics",
            "Product",
            "Produts",
            "Strategy",
            "Creators",
            "Development",
            "AI",
            "Data",
            "Study Aboard ",
            "Consulting",
            "Leadership",

          ].map((ele) => (
            <div
              className=" font-roboto text-base py-3 px-10 shrink-0 rounded-full text-center text-[#0D58AC] "
              style={{ boxShadow: "0 10px 25px rgba(215, 234, 254,0.8)" }}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
