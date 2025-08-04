// src/pages/ForgotPassword.jsx

import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const location = useLocation();

  // Check if the current route is /forgotpassword/newcredentials
  const isNewCredentialsRoute = location.pathname.includes("newcredentials");

  const handleResetPassword = () => {
    // Simulate email send
    setIsEmailSent(true);
  };

  return (
    <div className="h-screen bg-[#f1f9f2] overflow-y-auto flex flex-col justify-between relative">
      {/* Logo */}
      <img
        src="/assets/svg/login/logo_main.png"
        alt="Logo"
        className="h-16 w-[250px] object-contain absolute top-5 left-5 z-[1000]"
      />

      {/* Main Forgot Password Form (only when not on /newcredentials) */}
      {!isNewCredentialsRoute && (
       <div className="flex flex-col flex-grow justify-center px-5 py-5 mt-[10vh]">
        <div className="max-w-[600px] mx-auto w-full z-50 bg-white sm:p-6 p-4 border-t-2 border-success rounded-[30px] shadow-xl">
          <h1 className="font-inter font-[emoji] text-5xl font-semibold text-start leading-[50px]">
            Forgot Your <br />
            <span className="text-[#0D58AC]">Password?</span>
          </h1>

            {!isEmailSent ? (
              <>
                <h1 className="font-inter text-sm text-secondarys1 text-start my-6">
                  To reset your password, please enter the email address of your Pathmover account.
                </h1>

                <form className="mt-5">
                  <label
                    htmlFor="email"
                    className="text-secondarys1 mt-3 font-inter block text-base font-bold max-sm:text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 border border-bordercolor rounded-lg w-full sm:py-2 py-2 outline-none text-secondary px-4"
                    placeholder="Enter your registered email address"
                    id="email"
                  />

                  <div className="flex items-start justify-start">
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      className="bg-success text-white mt-10 py-3 px-6 rounded-lg text-sm sm:text-sm font-inter font-bold"
                    >
                      Reset password
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div>
                <h1 className="font-inter text-sm text-secondarys1 text-start my-6">
                  The email has been resent. You will receive an email with a link to reset your password.
                </h1>
                <div className="mt-6 flex flex-col justify-start">
                  <NavLink
                    to="/forgotpassword/newcredentials"
                    className="text-[#0D58AC] font-inter font-bold underline"
                  >
                    Resend email link
                  </NavLink>
                  <NavLink
                    to="/forgotpassword"
                    className="text-success font-inter font-bold underline mt-6"
                  >
                    Change email ID
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Background Image only for Forgot Password */}
      {!isNewCredentialsRoute && (
        <img
          src="/assets/images/login/Shapes.png"
          alt="Background"
          className="h-[70vh] w-[40%] absolute right-0 top-0 object-cover object-top"
        />
      )}

      {/* Render child route */}
      <Outlet />
    </div>
  );
};

export default ForgotPassword;
