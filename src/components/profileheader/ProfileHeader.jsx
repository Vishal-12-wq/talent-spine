import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const ProfileHeader = () => {
  return (
    <div className="profile-aligment  sticky top-0 z-50 bg-white py-5 flex justify-between items-center gap-3">
       
      <NavLink to="/">
      <img
        src="/assets/svg/login/PATHMOVER LOGO.svg"
        alt=""
        className=" sm:w-[130px] w-28 h-10"
      />
      </NavLink>
      <div className="lg:flex gap-5 items-center hidden">
        <div className="flex gap-5 items-center">
          {["Home", "Find a Mentor", "Earnings"].map((ele) => (
            <NavLink className=" px-2 font-inter text-base font-semibold text-[#254035]">
              {ele}
            </NavLink>
          ))}
        </div>
        <button className="font-inter text-base font-bold text-success px-2"> Join as Mentor</button>
      </div>
      <div className="flex">
        <button className=" sm:px-2 font-inter text-base font-semibold text-[#254035]" >
        <NavLink to="/auth">Login</NavLink>

        </button>
        <button className=" bg-success sm:px-6 px-3  sm:ml-3 ml-2 py-2 rounded-full text-sm  font-inter text-white">
          <NavLink to="/auth?step=2">
        Register


          </NavLink>

        </button>
        <button className=" ml-3 lg:hidden">
        <FaBars  />
        </button>

      </div>
    </div>
  );
};

export default ProfileHeader;
