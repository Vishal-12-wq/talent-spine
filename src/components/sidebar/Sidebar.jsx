import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageSquareDetail, BiImages } from "react-icons/bi";
import { LuUserSquare2 } from "react-icons/lu";
import { logOutUser } from "../../utils/auth";
const Sidebar = () => {
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
      <aside className="xl-2:w-[260px] w-56 bg-white px-5 pb-7 pt-5 fixed h-full max-lg:hidden">
        <div>
          <NavLink to="/">
            <img
              src="/assets/svg/login/PATHMOVER LOGO.svg"
              alt=""
              className="  pathmover-logo"
            />
          </NavLink>
          <div className="  sidebar-profile-pic  ">
            <img
              src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className=" h-full w-full rounded-full  object-cover object-top mx-auto "
              alt=""
            />
            <img
              src="/assets/svg/profile/bluetik.svg"
              alt=""
              className=" h-6 w-6 xl-2:h-9 xl-2:w-9 absolute bottom-1 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className=" p-2 max-w-32 xl-2:mt-4 mt-2 xl-2:py-[10px] mx-auto rounded-lg text-center bg-[#EFF6F3] font-inter text-xs font-bold">
            Account ID : 034
          </div>
          <div className=" p-3 shadow-xl border-t-4 mt-4 xl-2:mt-7 xl-2:py-5 xl-2:px-[10px] flex flex-col justify-center items-center border-success rounded-lg">
            <h1 className=" text-xs font-inter text-success font-bold">
              Low Traffic!{" "}
            </h1>
            <h1 className=" text-xs font-inter text-black font-medium">
              Increase your visibility{" "}
            </h1>
            <button className=" mt-3 xl-2:mt-4   py-2 px-4 text-xs text-white font-medium font-inter  rounded-lg bg-[#0D58AC]">
              Share Profile
            </button>
          </div>
        </div>

        <ul className=" mx-auto mt-3 xl-2:mt-7 max-h-[33%]  xl-2:max-h-[33%] custom-scrollbar pr-1 pb-2  overflow-y-auto">
          {routes.map((route, index) => (
            <li key={route.path + index} className="">
              <Link
                to={route.path}
                className={` items-center py-2  xl-2:py-5 xl-2:px-5 px-3  rounded-xl flex gap-4 ${isActive(
                  route.path
                )}`}
              >
                {typeof route.logo === "string" ? (
                  <img src={route.logo} alt={route.label} className="h-4 w-4 xl-2:h-[18px] xl-2:w-[18px] xl-2:text-lg" />
                ) : (
                  route.logo
                )}
                <span className="text-sm font-inter font-medium xl-2:text-base">{route.label}</span>
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
        
        <div className=" absolute bottom-1 xl-2:bottom-2">
          <div className=" mt-3 ">
            <h2 className=" fs18">84%</h2>
            <div className=" bg-success rounded-[10px] h-[5px] mt-1">
              <div className=" w-[84%] h-[5px] bg-[#0D58AC]"></div>
            </div>
            <div className=" text-secondarys1 text-xs font-inter font-medium mt-1">
              Profile Complete
            </div>
          </div>
          <div className=" mt-2 ">
            <button className=" flex  gap-3 items-center px-3 py-2">
              <img
                src="/assets/svg/sidebar/setting.svg"
                alt=""
                className=" h-4 w-4"
              />
              <span className="sidebar-list">Account Setting</span>
            </button>
            <button className=" flex  gap-3 items-center px-3 py-1">
              <img
                src="/assets/svg/sidebar/new.svg"
                alt=""
                className=" h-4 w-4"
              />
              <span className="sidebar-list">What’s New</span>
              <span className=" h-5 w-5 rounded-full text-white bg-success text-xs flex items-center justify-center font-inter font-bold">
                2
              </span>
            </button>
            <button className=" flex  gap-3 items-center px-3 py-2" onClick={() => logOutUser()}>
              <img
                src="/assets/svg/sidebar/logout.svg"
                alt=""
                className=" h-4 w-4"
              />
              <span className="sidebar-list text-[#FF0000]">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
