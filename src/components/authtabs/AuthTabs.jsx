import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "../../pages/login/Login"; 
import Signup from "../../pages/signup/Signup"; 

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const step = urlParams.get("step");
    if (step) {
      setActiveTab(step === "1" ? "login" : "signup");
    }
  }, [location.search]);

  useEffect(() => {
    const step = activeTab === "login" ? 1 : 2;
    navigate(`?step=${step}`);
  }, [activeTab, navigate]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="auth-container">
      <div className="flex justify-start items-center bg-success max-w-[250px] rounded-[75px] mx-auto">
        <button
          onClick={() => handleTabChange("login")}
          className={`text-white font-roboto font-bold py-3 grow ${
            activeTab === "login"
              ? "bg-[#0D58AC] rounded-[75px] h-full "
              : " text-sm"
          }`}
        > 
          Login
        </button>
        <button
          onClick={() => handleTabChange("signup")}
          className={`text-white font-roboto font-bold py-3 text-center grow ${
            activeTab === "signup"
              ? "bg-[#0D58AC] rounded-[75px] h-full "
              : " text-sm"
          }`}
        >
          Sign-up
        </button>
      </div>

      {activeTab === "login" && <Login />}
      {activeTab === "signup" && <Signup />}
    </div>
  );
};

export default AuthTabs;
