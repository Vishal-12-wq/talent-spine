import React from "react";
import { IoSearch } from "react-icons/io5";
const UserForm = () => {
  return (
    <div className="profile-aligment py-10  max-w-[1300px] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 form-basic-need !rounded-xl">
  
        <div className="w-full">
          <label
            htmlFor=""
            className="block  form-heading !text-sm pb-2"
          >
            Keyword or Title
          </label>
          <div className="input-field flex justify-between items-center">
          <input type="text" className=" bg-transparent outline-none"  placeholder="Name or Keyword"/>
          <IoSearch />
          </div>
        </div>
        <div className="w-full">
        <label
            htmlFor=""
            className="block  form-heading !text-sm pb-2"
          >
            Services
          </label>
          <select name="" id="" className="w-full input-field text-secondarys1">
            <option value="">Design</option>
          </select>
        </div>
        <div className="w-full">
        <label
            htmlFor=""
            className="block  form-heading !text-sm pb-2"
          >
            Sort by
          </label>
          <select name="" id="" className="w-full input-field text-secondarys1">
            <option value="">Subscriptions</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
