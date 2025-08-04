import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordUpdated = () => {
  const navigate = useNavigate();

  return (
     <div className="flex flex-col flex-grow justify-center px-8 py-5 mt-[10vh]">
      <img
        src="/assets/svg/login/logo_main.png"
        alt="Logo"
        className="h-16 w-[250px] absolute top-5 left-5"
      />
      

      {/* Center card */}
     <div
        className="max-w-[600px] mx-auto w-full z-50 bg-white sm:p-6 p-4 border-t-2 border-success rounded-[30px] shadow-xl"
        style={{ padding: "55px" }}
      >
        <h1 className="font-[emoji] font-inter text-5xl font-semibold text-start leading-[50px]">
          Password <span className="text-[#0D58AC]">Updated</span>
        </h1>
        <p className="mt-4 text-sm  font-inter" style={{'color':'#0784E2'}}>
          Your password has been updated.
        </p>
        <div className="flex gap-4 justify-start" style={{'margin-top':'20px'}}>
          <button
            onClick={() => navigate("/")}
            className="bg-[#0D58AC] hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold"
          >
            Login
          </button>
        </div>
      </div>

      <img
        src="/assets/images/login/Shapes.png"
        alt="Background Shapes"
        className="absolute right-0 top-0 h-[100%] max-h-[100vh] w-auto object-contain z-0"
      />
    </div>
  );
};

export default PasswordUpdated;
