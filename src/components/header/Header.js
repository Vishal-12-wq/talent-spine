import React, { useEffect, useState } from "react";
import { navlist } from "../../helpers/helpers";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { getUserFromToken } from "../../utils/auth";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const user = getUserFromToken();

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  const hiddenRoute =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/forgotpassword") ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/auth");

  if (hiddenRoute) {
    return null;
  }

  return (
    <div className="shadow-lg bg-white z-[100000] sticky top-0 m-0 ">
      <div className="max-w-[1920px] mx-auto xl-2:px-24  md:px-5 px-3 xl:px-14 xl-2:py-[21px] py-4    ">
      <div className="flex justify-between items-center gap-2">
        <NavLink to="/" className="xl-2:max-w-[230px] max-w-[160px] w-full  xl-2:h-[58px] h-10">
          <img
            src="/assets/svg/logo/talentspinelogo.svg"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </NavLink>

        <div className="flex items-center xl-2:gap-10 xl:gap-8 gap-5 max-lg:hidden">  
          {navlist &&
            navlist.map((ele) => (
              <NavLink
                key={ele.href}
                to={ele.href}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 xl-2:text-xl text-base xl:text-lg   pb-1 capitalize border-primary font-bold  text-primary font-raleway"
                    : "text-secondarys1  xl-2:text-xl text-base xl:text-lg  capitalize   pb-1 font-medium hover:text-primary font-raleway"
                }
              >
                {ele.list}
              </NavLink>
            ))}
        </div>

        <div className="flex justify-between items-center xl-2:gap-6 gap-3 max-lg:hidden">
          <div className="flex items-center gap-1 py-3 xl-2:py-3 px-6 rounded-full lg:max-w-[136px] border border-primary search-placeholder">
            <input
              type="text"
              placeholder="Search"
              className="text-base font-medium  outline-none w-full text-black capitalize font-raleway "
              style={{ "--placeholder-color": "#757575" }}
            />
            <img
              src="/assets/svg/search/serach.svg"
              alt=""
              className="h-4 w-4"
            />
          </div>
          {!user ? (
            <>
              <NavLink to="auth" className="font-bold text-base font-raleway xl-2:py-4 py-3 xl-2:px-8 px-5 ">
                LOG IN
              </NavLink>
              <button className="bg-primary rounded-md xl-2:py-4 py-3 xl-2:px-8 px-4 text-base font-bold text-white uppercase font-raleway">
                <NavLink to="auth?step=2">sign up</NavLink>
              </button>
            </>
          ) : (
            <NavLink to="/dashboard/profile">
              <FaCircleUser className=" h-8  w-8 text-primary" />
            </NavLink>
          )}
        </div>

        <div className=" lg:hidden flex items-center gap-3  ml-auto flex-row-reverse">
          <button className="" onClick={handleToggle}>
            {!toggle ? (
              <FaBars className="text-primary text-xl" />
            ) : (
              <IoMdClose className="text-red-600 text-xl font-bold" />
            )}
          </button>
          <div>
            {!user ? (
              <></>
            ) : (
              <NavLink to="/dashboard/profile">
                <FaCircleUser className=" h-8  w-8 text-primary max-sm:h-7 max-sm:w-7" />
              </NavLink>
            )}
          </div>
        </div>

        {toggle && (
          <div className="gap-2 absolute h-screen top-[73px] border-l border-t bg-white p-5 right-0 w-80 shadow-lg lg:hidden">
            <div className="flex items-center gap-1 py-3 px-4 rounded-full w-full border border-primary mb-5">
              <input
                type="text"
                placeholder="Search..."
                className="text-sm outline-none w-full text-black capitalize"
              />
              <img
                src="/assets/svg/search/serach.svg"
                alt=""
                className="h-4 w-4"
              />
            </div>
            <div className=" flex flex-col gap-3">
              {navlist &&
                navlist.map((ele) => (
                  <NavLink
                    key={ele.href}
                    to={ele.href}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b px-2 capitalize border-primary font-bold text-primary font-raleway"
                        : "text-secondarys1 capitalize px-2 font-medium font-raleway"
                    }
                    onClick={() => setToggle(false)}
                  >
                    {ele.list}
                  </NavLink>
                ))}
            </div>

            <div className=" mt-5 px-2 flex flex-col justify-start items-start">
              {!user ? (
                <>
                  <NavLink
                    to="auth"
                    className="font-bold text-sm font-raleway block"
                    onClick={() => setToggle(false)}
                  >
                    LOG IN
                  </NavLink>
                  <button className="bg-primary rounded-md py-3 px-6 text-sm mt-5 font-bold text-white uppercase font-raleway">
                    <NavLink to="auth?step=2" onClick={() => setToggle(false)}>
                      sign up
                    </NavLink>
                  </button>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Header;
