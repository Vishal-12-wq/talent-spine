import React from "react";
import { NavLink } from "react-router-dom";
const Course = () => {
  return (
    <div className=" mx-auto xl:px-20 xl-2:!px-0 max-w-[1600px] px-5 lg:px-10">
      <div className=" w-full pb-5 overflow-x-auto gap-4 rounded-[20px] xl-2:px-14 px-8 py-6  flex justify-between items-center shadow-xl   bg-white">
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          AWS
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          Google Cloud
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          IOS
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          Android
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          React JS
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          {" "}
          My SQL
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          Angular
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          Adobe Illustrator
        </NavLink>
        <NavLink className=" font-roboto text-base font-normal text-nowrap text-primary">
          PHP
        </NavLink>
        <NavLink className=" font-roboto text-base font-black text-nowrap text-primary ">
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Course;
