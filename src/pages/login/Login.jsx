import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import apiService from "../../apiService";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email address"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[0-9]/, "Password must contain a number")
      .matches(/[!@#$%^&*]/, "Password must contain a special character")
      .required("Please enter your password"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);

    const user = await apiService.auth.login(values);

    if (user && user?.data?.token) {
      toast.success(user?.message);
      localStorage.setItem("accessToken", user?.data?.token);
      setSubmitting(false);
      navigate('/')
    }
    setLoading(false);
  };

  return (
    <div className="mt-8">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="mt-5">
            <label
              htmlFor="email"
              className="text-secondarys1 font-inter block text-base font-bold max-sm:text-sm"
            >
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="mt-2 border border-bordercolor rounded-lg w-full sm:py-2 py-2 xl-2:py-5 outline-none text-secondary px-4"
              placeholder="Enter your Email ID"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-xs text-red-500 w-[90%]"
            />

            <label
              htmlFor="password"
              className="text-secondarys1 font-inter block mt-3 text-base font-bold max-sm:text-sm"
            >
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="mt-2 border border-bordercolor rounded-lg w-full outline-none sm:py-2 py-2 xl-2:py-5 text-secondary px-4"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-[58%] transform -translate-y-1/2 text-secondarys1"
              >
                {!showPassword ? <FaEyeSlash className=" text-[#C4C4C4]" /> : <FaEye className=" text-[#C4C4C4]" />}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-xs text-red-500 w-[90%]"
            />

            <div className="mt-4 flex gap-4 items-center">
              <div class="inline-flex items-center">
                <label class="flex items-center cursor-pointer relative">
                  <input
                    type="checkbox"
                    id="check4"
                    class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-success"
                  />
                  <span class="absolute  text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg> */}
                    <img src="/assets/svg/checkbox/checkbox.svg" alt="" />
                  </span>
                </label>
              </div>

              <p className="text-xs font-inter text-secondarys1 max-sm:text-xs">
                By hitting the Register button, you agree to the
                <span className="text-success font-bold underline">
                  <NavLink> Terms conditions </NavLink> & Privacy Policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              className={`w-full mt-5 flex bg-success justify-center sm:p-3 p-2 text-white rounded-lg text-sm sm:text-sm xl-2:p-4 xl-2:text-xl font-inter font-bold ${isSubmitting || loading || !(isValid && dirty)
                ? "cursor-not-allowed opacity-90"
                : ""
                }`}
              disabled={isSubmitting || loading || !(isValid && dirty)}
            >
              {loading ? <div className="loader"></div> : "Login"}
            </button>
            <NavLink
              to="/forgotpassword"
              className="ml-auto flex justify-end mt-3 font-inter text-sm font-bold text-success underline"
            >
              Forgot Password?
            </NavLink>
            <div className="mt-3 flex justify-between items-center gap-7">
              <div className="h-[1px] bg-bordercolor w-full"></div>
              <p className="text-lg font-inter">Or</p>
              <div className="h-[1px] bg-bordercolor w-full"></div>
            </div>

            <div className="flex justify-between items-center sm:mt-4 mt-3 max-sm:flex-col gap-3">
              <button className="sm:p-3 p-3 border-2 flex-1 border-bordercolor rounded-xl max-sm:w-full justify-start gap-2 flex items-center">
                <img
                  src="/assets/svg/login/Vector (5).svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                <p className="text-secondarys1 font-inter font-bold text-nowrap text-[10px]">
                  Continue with Google
                </p>
              </button>
              <button className="sm:p-3 p-3 border-2 flex-1 border-bordercolor rounded-xl max-sm:w-full justify-start gap-2 flex items-center">
                <img
                  src="/assets/svg/login/image 14.svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                <p className="text-secondarys1 font-inter font-bold text-nowrap text-[10px]">
                  Continue with LinkedIn
                </p>
              </button>
              <button className="sm:p-3 p-3 flex-1 bg-primary rounded-xl max-sm:w-full justify-start gap-2 flex items-center">
                <img
                  src="/assets/svg/login/path14.svg"
                  alt=""
                  className="h-[22px] w-[22px]"
                />
                <p className="text-white font-inter font-bold text-nowrap text-[10px]">
                  Continue with Facebook
                </p>
              </button>
            </div>
            <div className="sm:mt-6 mt-4 text-center font-inter text-secondarys1 text-sm">
              Don’t have an account?{" "}
              <NavLink
                to="?step=2"
                className="text-success underline font-semibold"
              >
                Sign-up
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
