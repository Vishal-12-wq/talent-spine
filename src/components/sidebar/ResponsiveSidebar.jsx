import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {logOutUser} from '../../utils/auth'
import { CiGrid41 } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageSquareDetail, BiImages } from "react-icons/bi";
import { LuUserSquare2 } from "react-icons/lu";
const ResponsiveSidebar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-white bg-success  font-bold"
      : "text-black hover:text-white hover:bg-success font-medium";
  };
  const routes = [
    { path: "/dashboard", label: "Dashboard", logo: <CiGrid41 /> },
    { path: "/dashboard/booking", label: "Booking", logo: <FiPhoneCall /> },
    {
      path: "/dashboard/prioritydm",
      label: "Priority DM",
      logo: <BiMessageSquareDetail />,
    },
    {
      path: "/dashboard/testimonials",
      label: "Testimonials",
      logo: "/assets/svg/sidebar/Vector (6).svg",
    },
    {
      path: "/dashboard/profile",
      label: "My Profile",
      logo: <LuUserSquare2 />,
    },

    { path: "/dashboard/posts", label: "My Post", logo: <BiImages /> },
    {
      path: "/dashboard/communicate",
      label: "Communicate",
      logo: "/assets/svg/sidebar/Icon (6).svg",
    },
    {
      path: "/dashboard/calendar",
      label: "Calendar",
      logo: "/assets/svg/sidebar/calender.svg",
    },
    {
      path: "/dashboard/services",
      label: "Services",
      logo: "/assets/svg/sidebar/services.svg",
    },

    {
      path: "/dashboard/payments",
      label: "Payments",
      logo: "/assets/svg/sidebar/payment.svg",
    },
    {
      path: "/dashboard/salesreport",
      label: "Sales Report",
      logo: "/assets/svg/sidebar/sales.svg",
    },
    {
      path: "/dashboard/taxinformation",
      label: "Tax Information",
      logo: "/assets/svg/sidebar/tax.svg",
    },
  ];

  const dropdownItems = [
    { path: "/dashboard/option1", label: "Option 1" },
    { path: "/dashboard/option2", label: "Option 2" },
  ];
  return (
    <div>
      <div className="w-56 bg-white px-2 py-4 pb-20 lg:hidden shadow-xl relative  min-h-screen max-h-[90vh]   border border-bordercolor  overflow-y-auto ">
        <div className="flex items-center  gap-1">
          <div className=" h-10 w-10 rounded-full  object-cover object-top mx-auto relative">
            <img
              src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className=" h-full w-full rounded-full  object-cover object-top mx-auto "
              alt=""
            />
            <img
              src="/assets/svg/profile/bluetik.svg"
              alt=""
              className=" h-6 w-6 absolute bottom-1  -right-2 transform"
            />
          </div>
          <div className=" p-2 max-w-32 mx-auto rounded-lg text-center bg-[#EFF6F3] font-inter text-xs font-bold">
            Account ID : 034
          </div>
        </div>
        <div className=" p-2 shadow-xl border-t-2 mt-3 flex flex-col justify-center items-center border-success rounded-lg">
          <h1 className=" text-xs font-inter text-success font-bold">
            Low Traffic!{" "}
          </h1>
          <h1 className=" text-xs font-inter text-black font-medium">
            Increase your visibility{" "}
          </h1>
          <button className=" mt-2 py-1 px-4 text-xs text-white font-medium font-inter  rounded-lg bg-[#0D58AC]">
            Share Profile
          </button>
        </div>
        <div className=" mt-3">
          <button className="p-2 w-full  bg-success py-2 xl:px-7 px-4 shadow-xl font-bold font-inter xl:text-sm text-xs rounded-2xl text-white">
            Visit Candidate dashboard
          </button>
          <button className="flex  w-full mt-2 items-center gap-[10px] border justify-center bg-white shadow-xl border-success rounded-2xl py-2 px-3">
            <img src="/assets/svg/dashboardheader/earth.svg" alt="" />
            <div className="text-success text-xs font-bold font-inter border-l border-success pl-[10px]">
              Online
            </div>
            <div className="bg-success h-2 w-2 rounded-full "></div>
          </button>
          <button className="flex mt-2 w-full items-center gap-[10px] border  justify-center bg-white shadow-2xl border-success rounded-2xl py-2 px-4">
            <div className="text-black text-xs font-inter">How it works</div>
            <div className="bg-[#EFF6F3] p-1 rounded-xl">
              <img src="/assets/svg/dashboardheader/youtube.svg" alt="" />
            </div>
          </button>
        </div>

        <ul className=" mx-auto mt-3 max-sm:max-h-[35vh] h-full pb-2 custom-scrollbar pr-1  overflow-y-auto">
          {routes.map((route) => (
            <li key={route.path} className="mb-1">
              <Link
                to={route.path}
                className={` items-center py-2 px-2 text-xs font-inter rounded-xl flex gap-2 ${isActive(
                  route.path
                )}`}
              >
                {typeof route.logo === "string" ? (
                  <img src={route.logo} alt={route.label} className="h-4 w-4" />
                ) : (
                  route.logo
                )}
                <span>{route.label}</span>
              </Link>
            </li>
          ))}

          {/* <li>
            <div className="block cursor-pointer" onClick={toggleDropdown}>
              <div
                className={`flex justify-between items-center ${isActive(
                  "/dashboard"
                )}`}
              >
                <span>Marketing</span>
                {isDropdownOpen ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </div>
            </div>

            {isDropdownOpen && (
              <ul className="space-y-2 pl-6">
                {dropdownItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block ${isActive(item.path)}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li> */}
        </ul>

        <div className=" absolute bottom-24">
        <div className=" mt-2">
          <h2 className=" font-inter text-sm font-medium">84%</h2>
          <div className=" bg-success rounded-[10px] h-[5px] mt-1">
            <div className=" w-[84%] h-[5px] bg-[#0D58AC]"></div>
          </div>
          <div className=" text-secondarys1 text-xs font-inter font-medium mt-1">
            Profile Complete
          </div>
        </div>
        <div className=" mt-2">
          <button className=" flex  gap-3 items-center px-3 py-1">
            <img
              src="/assets/svg/sidebar/setting.svg"
              alt=""
              className=" h-4 w-4"
            />
            <span className="text-sm font-inter">Account Setting</span>
          </button>
          <button className=" flex  gap-3 items-center px-3 py-1">
            <img
              src="/assets/svg/sidebar/new.svg"
              alt=""
              className=" h-4 w-4"
            />
            <span className="text-sm font-inter">What’s New</span>
            <span className=" h-5 w-5 rounded-full text-white bg-success text-xs flex items-center justify-center font-inter font-bold">
              2
            </span>
          </button>
          <button className=" flex  gap-3 items-center px-3 py-1" onClick={()=> logOutUser()}>
            <img
              src="/assets/svg/sidebar/logout.svg"
              alt=""
              className=" h-4 w-4"
            />
            <span className="text-base font-inter text-[#FF0000]">Logout</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
