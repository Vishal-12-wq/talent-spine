import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const hiddenRoute =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/forgotpassword") ||
    location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/profile") || location.pathname.startsWith("/auth")
  if (hiddenRoute) {
    return null;
  }
  return (
    <div className=" w-full bg-secondary ">
     <div className="max-w-[1680px] xl-2:max-w-[1800px] mx-auto sm:py-14 py-10 xl:px-24 lg:px-10 px-5">
     <div className=" flex justify-between items-center flex-wrap gap-5">
        <NavLink to="/">
        <img
          src="/assets/svg/footer/Talent Spine.svg"
          alt=""
          className=" h-9 w-[180px]"
        />
        </NavLink>
        <div className=" flex gap-6 items-center">
          <div className=" text-white font-roboto text-lg font-medium ">
            Follow Us
          </div>
          <NavLink>
            <img src="/assets/svg/footer/fb.svg" alt="" className=" h-4 w-4" />
          </NavLink>
          <NavLink>
            <img
              src="/assets/svg/footer/Symbol (1).svg"
              alt=""
              className=" h-4 w-4"
            />
          </NavLink>
          <NavLink>
            <img
              src="/assets/svg/footer/Symbol (2).svg"
              alt=""
              className=" h-4 w-4"
            />
          </NavLink>
          <NavLink>
            <img
              src="/assets/svg/footer/Symbol (3).svg"
              alt=""
              className=" h-4 w-4"
            />
          </NavLink>
        </div>
      </div>
      <div className=" mt-10 bg-[#FFFFFF] h-[1px] opacity-20"></div>
      <div className=" py-14 flex justify-between gap-5 flex-wrap  ">
        <ul>
          <h1 className="  text-footetext font-medium text-lg">Subscribe</h1>
          <div className=" flex justify-between mt-5 gap-2 ">
            <input
              type="text"
              placeholder="Your e-mail"
              className=" text-bordercolor bg-transparent  outline-none font-roboto text-sm"
            />
            <button className=" py-3 px-7 rounded-[44px] text-[#FFFFFF] bg-[#3b3a3a] capitalize text-sm font-medium font-roboto flex items-center gap-1">
              send{" "}
              <span>
                <img
                  src="/assets/svg/footer/footerright.svg"
                  alt=""
                  className=" h-3 w-3"
                />
              </span>
            </button>
          </div>
          <div className=" mt-3 bg-[#FFFFFF] h-[1px] opacity-20"></div>
          <p className=" mt-7  text-white text-sm font-roboto">
            Subscribe to our newsletter to receive our weekly feed.
          </p>
        </ul>
        <ul>
          <h1 className="  text-footetext font-medium text-lg pb-2">
            Discover
          </h1>
          {[
            "Miami",
            "New York",
            "Chicago",
            "Florida",
            "Los Angeles",
            "San Diego",
          ].map((ele) => (
            <li className=" text-white font-roboto  text-sm mt-4">{ele}</li>
          ))}
        </ul>
        <ul>
          <h1 className="  text-footetext font-medium text-lg pb-2 ">
            Quick Links
          </h1>
          {[
            "About",
            "Contact",
            "FAQ’s",
            "Blog",
            "Pricing Plans",
            "Privacy Policy",
            "Terms & Conditions",
          ].map((ele) => (
            <li className=" text-white font-roboto  text-sm mt-4">
              <NavLink> {ele}</NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <h1 className="  text-footetext font-medium text-lg pb-2 ">
            Contact Us
          </h1>
          {["hi@talentspine.com", "(123) 456-7890"].map((ele) => (
            <li className=" text-white font-roboto  text-sm mt-4">
              <NavLink> {ele}</NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <h1 className="  text-footetext font-medium text-lg pb-2 ">
            Our Address
          </h1>
          {["99 Fifth Avenue, 3rd Floor San Francisco, CA 1980"].map((ele) => (
            <li className=" text-white font-roboto  text-sm mt-4 max-w-[170px]">
              <NavLink> {ele}</NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <h1 className="  text-footetext font-medium text-lg pb-2 ">
            Get the app
          </h1>
          {[
            {
              logo: "/assets/svg/footer/apple.svg",
              text: "Download on the",
              title: "Apple Store",
            },
            {
              logo: "/assets/svg/footer/playstore.svg",
              text: "Get in on",
              title: "Google Play",
            },
          ].map((ele) => (
            <li className=" text-white font-roboto  text-sm mt-5 bg-[#3b3a3a] py-2 px-3  rounded-xl">
              <NavLink className="flex  gap-3 items-center">
                <img src={ele.logo} alt="" className=" h-6 w-6" />
                <div className=" pl-4 border-l border-bordercolor">
                  <h2 className=" text-[10px] font-roboto text-white">
                    {ele.text}
                  </h2>
                  <h2 className="text-xs font-roboto text-white font-medium">
                    {ele.title}
                  </h2>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className=" mt-10 bg-[#FFFFFF] h-[1px] opacity-20"></div>
      <p className=" text-center pt-8 text-sm font-roboto text-white">
        Copyright © 2024. Talent Spine
      </p>
     </div>
    </div>
  );
};

export default Footer;
