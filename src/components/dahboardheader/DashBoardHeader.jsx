import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import ResponsiveSidebar from "../sidebar/ResponsiveSidebar";
import { IoMdClose } from "react-icons/io";

const DashBoardHeader = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="bg-[#EFF6F3] xl:px-7 py-4 p-4 z-50 xl-2:py-11 xl-2:px-14 rounded-bl-2xl sticky left-0 top-0 w-full">
      <div className="flex justify-between items-center gap-2">
        <NavLink to="/dashboard" className="lg:hidden">
          <img
            src="/assets/svg/login/PATHMOVER LOGO.svg"
            alt=""
            className="h-12 max-w-24 mx-auto object-contain"
          />
        </NavLink>
        <h1 className="font-inter sm:text-2xl text-sm xl-2:text-[40px] font-bold">
          My Profile
        </h1>

        <div className="flex items-center gap-3 ">
          <button className="max-lg:hidden bg-success custom-button text-white">
            Visit Candidate dashboard
          </button>
          <button className="flex max-lg:hidden items-center gap-[10px] border bg-white shadow-xl border-success rounded-2xl py-3 !px-4  custom-button">
            <img src="/assets/svg/dashboardheader/earth.svg" alt="" />
            <div className="text-success  border-l border-success pl-[10px]">
              Online
            </div>
            <div className="bg-success h-2 w-2 rounded-full "></div>
          </button>
          <button className="flex items-center gap-[10px] custom-button border max-lg:hidden bg-white shadow-2xl border-success  py-3 !px-4">
            <div className="text-black ">How it works</div>
            <div className="bg-[#EFF6F3] p-1 rounded-xl xl-2:w-10 xl-2:h-8 flex justify-center items-center">
              <img src="/assets/svg/dashboardheader/youtube.svg" alt="" />
            </div>
          </button>
          <button className="border-success sm:rounded-2xl flex items-center justify-center rounded-full border sm:py-3 xl-2:h-16 xl-2:w-16 py-2 sm:px-5 px-2 bg-white shadow-xl">
            <img
              src="/assets/svg/dashboardheader/info (2).svg"
              alt=""
              className=" max-sm:h-3 max-sm:w-3  xl-2:w-[6px] xl-2:h-6"
            />
          </button>
          <button className="border-success sm:rounded-2xl flex items-center justify-center rounded-full border sm:py-3 xl-2:h-16 xl-2:w-16 py-2 sm:px-5 px-2 bg-white shadow-xl">
            <img
              src="/assets/svg/dashboardheader/bell (2).svg"
              alt=""
              className=" max-sm:h-3 max-sm:w-3  xl-2:w-[15px] xl-2:h-7"
            />
          </button>
          <button className="lg:hidden" onClick={handleToggle}>
            {open ? (
              <IoMdClose className=" text-red-600 text-xl" />
            ) : (
              <FaBars className=" text-xl" />
            )}
          </button>
        </div>

        {open && (
          <>
            <div className="absolute top-20 right-0 z-50">
              <ResponsiveSidebar />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default DashBoardHeader;
