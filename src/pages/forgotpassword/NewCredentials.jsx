import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCredentials = () => {
  const navigate = useNavigate(); // ✅ MUST be here, at the top level inside the component

  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validation = {};

    if (newPassword.length < 8) {
      validation.newPassword = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(newPassword)) {
      validation.newPassword = "Must include at least one uppercase letter.";
    } else if (!/[a-z]/.test(newPassword)) {
      validation.newPassword = "Must include at least one lowercase letter.";
    } else if (!/[0-9!@#$%^&*]/.test(newPassword)) {
      validation.newPassword = "Must include a number or special character.";
    }

    if (newPassword !== retypePassword) {
      validation.retypePassword = "Password doesn't match";
    }

    setErrors(validation);
    return Object.keys(validation).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/passwordupdate"); // ✅ Only if validation passes
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center px-8 py-5 mt-[10vh]">
      <img
        src="/assets/svg/login/logo_main.png"
        alt="Logo"
        className="h-16 w-[250px] absolute top-5 left-5"
      />
      <div
        className="max-w-[600px] mx-auto w-full z-50 bg-white sm:p-6 p-4 border-t-2 border-success rounded-[30px] shadow-xl"
        style={{ padding: "55px" }}
      >
        <h1 className="font-[emoji] font-inter text-5xl font-semibold text-start leading-[50px]">
          New <span className="text-[#0D58AC]"> Credentials</span>
        </h1>
        <ul className="text-sm mt-4 ml-4 list-disc mb-10">
          <li className="font-inter text-sm text-secondarys1 text-start my-3">
            Password must be at least 8 characters long.
          </li>
          <li className="font-inter text-sm text-secondarys1 text-start my-3">
            Must contain at least one upper case.
          </li>
          <li className="font-inter text-sm text-secondarys1 text-start my-3">
            One lower case letter.
          </li>
          <li className="font-inter text-sm text-secondarys1 text-start my-3">
            Must contain at least one number or special character.
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new Password"
              className={`w-full border rounded-md px-4 py-2 outline-none ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              }`}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span>❗</span> {errors.newPassword}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Re-type Password
            </label>
            <input
              type="password"
              placeholder="Re-type your new password"
              className={`w-full border rounded-md px-4 py-2 outline-none ${
                errors.retypePassword ? "border-red-500" : "border-gray-300"
              }`}
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
            {errors.retypePassword && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span>❗</span> {errors.retypePassword}
              </p>
            )}
          </div>

          <div className="flex gap-4 justify-start">
            <button
              type="submit"
              className="bg-[#0D58AC] hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold"
            >
              Submit
            </button>
            <button
              type="button"
              className="border-2 border-bordercolor text-gray-600 px-6 py-2 rounded-md font-semibold"
              disabled
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <img
        src="/assets/images/login/Shapes.png"
        alt="Background pattern"
        className="absolute bottom-0 right-0 w-[45%] object-cover object-top opacity-80"
      />
    </div>
  );
};

export default NewCredentials;
