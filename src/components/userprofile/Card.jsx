import React from "react";
import { FaStar } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

const Card = () => {
  return (
    <div className=" py-20 profile-aligment ">
      <div className=" ml-auto flex gap-3  justify-end items-center">
        <h1 className=" text-sm font-bold font-inter">Currency Preference</h1>
        <select
          name=""
          id=""
          className=" rounded-xl text-sm font-medium border border-success px-3 outline-none py-2"
        >
          <option value="">Default</option>
        </select>
      </div>
      <div className=" mt-8 grid xl:grid-cols-3  md:grid-cols-2 mx-auto  xl:gap-14 gap-8 ">
        {/* card -1 */}
        <div className=" max-w-[500px] hover:shadow-2xl p-5 rounded-2xl mx-auto overflow-hidden  border border-bordercolor relative  card-zoom ">
          <div className=" bg-gradient-to-b from-[#d5efd1]  to-white absolute top-0 left-0 right-0 h-[100px] -z-10"></div>
          <h1 className=" form-heading w-[90%]">
            Scaling into Leadership Roles - 5 sessions
          </h1>
          <div className=" flex items-center gap-3 mt-2">
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <FaStar className=" text-xs" />
              <div className=" text-xs font-bold">4.5</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-[#9747FF]">Popular</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-success">Best Deal</div>
            </div>
          </div>
          <div className=" pt-2 form-small !text-sm">
            AI, ML, and Business Strategy Mentorship
          </div>
          <div className=" mt-6">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#CCEBC7] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#CCEBC7] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" py-3 mt-5 text-center font-inter text-xs  bg-gradient-to-r from-white via-[#CCEBC7] to-white">
            We’ll work together every month to help reach your goals
          </div>
          <button className=" bg-[#F7FBF6] border text-sm rounded-lg  border-success p-3 w-full mt-4 flex justify-center items-center">
            <del>₹ 50,000</del>{" "}
            <span className=" ml-1 mr-1 font-bold">₹29,999</span>{" "}
            <LuArrowRight className=" font-bold" />
          </button>
          <div className=" bg-[#CCEBC7] text-[10px] rounded-lg p-2 w-full mt-4  text-center">
            <h2 className="font-bold">Packages</h2>
            <h1 className=" font-bold">5 products</h1>
          </div>
          <div className=" flex justify-between items-center mt-3">
            <div className=" form-small">
              Package ID: <span className=" font-bold">D454AS</span>
            </div>
            <div className=" form-small">
              Coupon Code: <span className=" font-bold">5H7GFD9</span>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className=" max-w-[500px] p-5 rounded-2xl overflow-hidden  mx-auto  border border-bordercolor relative card-zoom ">
          <div className=" bg-gradient-to-b from-[#C7EAFB]  to-white absolute top-0 left-0 right-0 h-[100px] -z-10"></div>
          <h1 className=" form-heading w-[90%]">
            Scaling into Leadership Roles - 5 sessions
          </h1>
          <div className=" flex items-center gap-3 mt-2">
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <FaStar className=" text-xs" />
              <div className=" text-xs font-bold">4.5</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-[#9747FF]">Popular</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-success">Best Deal</div>
            </div>
          </div>
          <div className=" pt-2 form-small !text-sm">
            AI, ML, and Business Strategy Mentorship
          </div>
          <div className=" mt-6">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#C7EAFB] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#C7EAFB] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" py-3 mt-5 text-center font-inter text-xs  bg-gradient-to-r from-white via-[#C7EAFB] to-white">
            We’ll work together every month to help reach your goals
          </div>
          <button className=" bg-[#F4FBFE] border text-sm rounded-lg  border-primary p-3 w-full mt-4 flex justify-center items-center">
            <del>₹ 50,000</del>{" "}
            <span className=" ml-1 mr-1 font-bold">₹29,999</span>{" "}
            <LuArrowRight className=" font-bold" />
          </button>
          <div className=" bg-[#1EABF1] text-white text-[10px] rounded-lg p-2 w-full mt-4  text-center">
            <h2 className="font-bold">Packages</h2>
            <h1 className=" font-bold">5 products</h1>
          </div>
          <div className=" flex justify-between items-center mt-3">
            <div className=" form-small">
              Package ID: <span className=" font-bold">D454AS</span>
            </div>
            <div className=" form-small">
              Coupon Code: <span className=" font-bold">5H7GFD9</span>
            </div>
          </div>
        </div>

        {/* card 2 end */}

        {/* crd 3 */}

        <div className=" max-w-[500px] p-5 rounded-2xl overflow-hidden mx-auto  border border-bordercolor relative card-zoom ">
          <div className=" bg-gradient-to-b from-[#FFBFBF]  to-white absolute top-0 left-0 right-0 h-[100px] -z-10"></div>
          <h1 className=" form-heading w-[90%]">
            Scaling into Leadership Roles - 5 sessions
          </h1>
          <div className=" flex items-center gap-3 mt-2">
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <FaStar className=" text-xs" />
              <div className=" text-xs font-bold">4.5</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-[#9747FF]">Popular</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-success">Best Deal</div>
            </div>
          </div>
          <div className=" pt-2 form-small !text-sm">
            AI, ML, and Business Strategy Mentorship
          </div>
          <div className=" mt-6">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#FFBFBF] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#FFBFBF] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" py-3 mt-5 text-center font-inter text-xs  bg-gradient-to-r from-white via-[#FFBFBF] to-white">
            We’ll work together every month to help reach your goals
          </div>
          <button className=" bg-[#FFF2F2] border text-sm rounded-lg  border-[#FF0000] p-3 w-full mt-4 flex justify-center items-center">
            <del>₹ 50,000</del>{" "}
            <span className=" ml-1 mr-1 font-bold">₹29,999</span>{" "}
            <LuArrowRight className=" font-bold" />
          </button>
          <div className=" bg-[#FFBFBF]  text-[10px] rounded-lg p-2 w-full mt-4  text-center">
            <h2 className="font-bold">Packages</h2>
            <h1 className=" font-bold">5 products</h1>
          </div>
          <div className=" flex justify-between items-center mt-3">
            <div className=" form-small">
              Package ID: <span className=" font-bold">D454AS</span>
            </div>
            <div className=" form-small">
              Coupon Code: <span className=" font-bold">5H7GFD9</span>
            </div>
          </div>
        </div>
        {/* card 3 end */}

        {/* card 4 start */}
        <div className=" max-w-[500px] p-5 rounded-2xl overflow-hidden mx-auto  border border-bordercolor relative card-zoom ">
          <div className=" bg-gradient-to-b from-[#C7EAFB]  to-white absolute top-0 left-0 right-0 h-[100px] -z-10"></div>
          <h1 className=" form-heading w-[90%]">
            Scaling into Leadership Roles - 5 sessions
          </h1>
          <div className=" flex items-center gap-3 mt-2">
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <FaStar className=" text-xs" />
              <div className=" text-xs font-bold">4.5</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-[#9747FF]">Popular</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-success">Best Deal</div>
            </div>
          </div>
          <div className=" pt-2 form-small !text-sm">
            AI, ML, and Business Strategy Mentorship
          </div>
          <div className=" mt-6">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#C7EAFB] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#C7EAFB] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" py-3 mt-5 text-center font-inter text-xs  bg-gradient-to-r from-white via-[#C7EAFB] to-white">
            We’ll work together every month to help reach your goals
          </div>
          <div className=" mt-4 flex gap-3">
          <button className=" bg-[#F4FBFE] border text-sm rounded-lg  border-[#C7EAFB] p-3 w-full  flex justify-center items-center">
            <del>₹ 50,000</del>{" "}
            <span className=" ml-1 mr-1 font-bold">₹29,999</span>{" "}
            <LuArrowRight className=" font-bold" />
          </button>
          <div className=" bg-[#C7EAFB] text-black text-[10px] rounded-lg p-2 w-full   text-center">
            <h2 className="font-bold">Packages</h2>
            <h1 className=" font-bold">5 products</h1>
          </div>
          </div>
          <div className=" flex justify-between items-center mt-3">
            <div className=" form-small">
              Package ID: <span className=" font-bold">D454AS</span>
            </div>
            <div className=" form-small">
              Coupon Code: <span className=" font-bold">5H7GFD9</span>
            </div>
          </div>
        </div>
        

        {/* card 4 end */}

        {/* card 5start */}
        <div className=" max-w-[500px] p-5 rounded-2xl overflow-hidden mx-auto  border border-bordercolor relative card-zoom ">
          <div className=" bg-gradient-to-b from-[#FEE1EF]  to-white absolute top-0 left-0 right-0 h-[100px] -z-10"></div>
          <h1 className=" form-heading w-[90%]">
            Scaling into Leadership Roles - 5 sessions
          </h1>
          <div className=" flex items-center gap-3 mt-2">
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <FaStar className=" text-xs" />
              <div className=" text-xs font-bold">4.5</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-[#9747FF]">Popular</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-success">Best Deal</div>
            </div>
          </div>
          <div className=" pt-2 form-small !text-sm">
            AI, ML, and Business Strategy Mentorship
          </div>
          <div className=" mt-6">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#C7EAFB] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#C7EAFB] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" py-3 mt-5 text-center font-inter text-xs  bg-gradient-to-r from-white via-[#FEE1EF] to-white">
            We’ll work together every month to help reach your goals
          </div>
          <div className=" mt-4 flex gap-3">
          <button className=" bg-[#FEE5F1]  text-sm rounded-lg p-3 w-full  flex justify-center items-center">
            <del>₹ 50,000</del>{" "}
            <span className=" ml-1 mr-1 font-bold">₹29,999</span>{" "}
            <LuArrowRight className=" font-bold" />
          </button>
          <div className=" bg-[#FEE5F1] text-black text-[10px] rounded-lg p-2 w-full   text-center">
            <h2 className="font-bold">Packages</h2>
            <h1 className=" font-bold">5 products</h1>
          </div>
          </div>
          <div className=" flex justify-between items-center mt-3">
            <div className=" form-small">
              Package ID: <span className=" font-bold">D454AS</span>
            </div>
            <div className=" form-small">
              Coupon Code: <span className=" font-bold">5H7GFD9</span>
            </div>
          </div>
        </div>

        {/* card 5 end */}

        {/* catrd 6 start */}
        <div className=" max-w-[500px] p-5 rounded-2xl overflow-hidden mx-auto  border border-bordercolor relative card-zoom ">
          <div className=" bg-gradient-to-b from-[#d5efd1]  to-white absolute top-0 left-0 right-0 h-[100px] -z-10"></div>
          <h1 className=" form-heading w-[90%]">
            Scaling into Leadership Roles - 5 sessions
          </h1>
          <div className=" flex items-center gap-3 mt-2">
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <FaStar className=" text-xs" />
              <div className=" text-xs font-bold">4.5</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-[#9747FF]">Popular</div>
            </div>
            <div className=" bg-white py-1 px-4 rounded-full flex items-center gap-1">
              <div className=" text-xs font-bold text-success">Best Deal</div>
            </div>
          </div>
          <div className=" pt-2 form-small !text-sm">
            AI, ML, and Business Strategy Mentorship
          </div>
          <div className=" mt-6">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#CCEBC7] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" mt-4">
            <div className=" flex justify-between items-start gap-1 py-3 px-5  rounded-3xl border border-bordercolor">
              <div>
                <h1 className=" form-heading !text-sm">
                  2:1 Mentorship - Leadership, AI, Startup, Career
                </h1>
                <h2 className=" form-small">Video Meeting</h2>
              </div>
              <div className=" p-2 bg-[#CCEBC7] text-xs  font-inter font-medium rounded-lg text-nowrap">
                x 2
              </div>
            </div>
          </div>
          <div className=" py-3 mt-5 text-center font-inter text-xs  bg-gradient-to-r from-white via-[#CCEBC7] to-white">
            We’ll work together every month to help reach your goals
          </div>
          <div className=" mt-4 flex gap-3  justify-center">
          <button className=" bg-[#F7FBF6]  border border-success text-sm rounded-lg p-3 w-full  flex justify-center items-center">
            <del>₹ 50,000</del>{" "}
            <span className=" ml-1 mr-1 font-bold">₹29,999</span>{" "}
            <LuArrowRight className=" font-bold" />
          </button>
          <div className=" bg-[#CCEBC7] text-black text-[10px] rounded-lg p-2 w-full   text-center">
            <h2 className="font-bold">Packages</h2>
            <h1 className=" font-bold">5 products</h1>
          </div>
          </div>
          <div className=" flex justify-between items-center mt-3">
            <div className=" form-small">
              Package ID: <span className=" font-bold">D454AS</span>
            </div>
            <div className=" form-small">
              Coupon Code: <span className=" font-bold">5H7GFD9</span>
            </div>
          </div>
        </div>

        {/* card 6 end */}
      </div>
    </div>
  );
};

export default Card;
