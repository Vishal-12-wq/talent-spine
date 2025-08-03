import React from "react";
import AuthTabs from "../../components/authtabs/AuthTabs";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <div className="min-h-screen bg-[#f1f9f2] overflow-y-auto flex flex-col justify-between box-border relative">
      <NavLink to='/'>
        <img
          src="/assets/svg/login/logo_main.png"
          alt=""
          className="h-16 w-[250px] object-contain absolute max-sm:-translate-x-1/2 left-1/2 max-sm:transform top-5 sm:left-5 z-[1000]"
        />
      </NavLink>

      <div className="flex flex-col flex-grow justify-center px-5 py-5 mt-[10vh]">
        <div className="max-w-[600px] mx-auto w-full z-50 bg-white sm:p-6 p-4 border-t-2 border-success rounded-[30px] shadow-xl">
          <AuthTabs />
        </div>
      </div>

      <img
        src="/assets/images/login/Shapes.png"
        alt=""
        className="h-[70vh] w-[40%] absolute right-0 top-0 object-cover object-top"
      />
    </div>
  );
};

export default Auth;
