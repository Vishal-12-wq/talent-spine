import React from "react";
import SelectDate from "../../datepicker/SelectDate";

const DateSelect = () => {
  return (
    <div className=" lg:pt-[200px] mt-24  relative">
      <div className="bg-custom max-lg:py-10 ">
        <div className="flex  relative mx-auto max-w-[1440px] max-lg:flex-col xl:px-32 sm:px-10 px-3 xl-2:max-w-[1432px] xl-2:px-0 xl:gap-40  max-sm:gap-5 gap-10">
          <div className=" lg:py-24 max-lg:pt-40 flex-1">
            <img
              src="/assets/svg/dateselector/arrowdate.svg"
              alt=""
              className=" h-10 w-[160px]"
            />
            <h1 className=" font-raleway font-bold text-5xl mt-1 xl-2:mt-3  leading-[60px]">
              Request a free <br /> coaching sessions.
            </h1>
            <h3 className=" font-roboto text-primary font-bold text-lg mt-2">
              Take the first step today
            </h3>
            <p className=" mt-2  font-roboto text-base  text-secondarys1">
              We receive payment and usually work on a fixed schedule to share
              actionable feedback, personalized advice, and growth plans for our
              clients to increase their company revenue.
            </p>

            <button className=" px-7 py-3 bg-white shadow-xl text-primary mt-4 font-roboto text-base font-bold uppercase rounded-2xl border-b border-primary">
              Schedule a Call
            </button>
            <div className="flex mt-10 ">
              <img
                src="/assets/svg/dateselector/“.svg"
                alt=""
                className=" w-7 h-4"
              />
              <p className=" capitalize max-w-[382px] text-sm ">
                unique content the explores beneath the surface of coaching and
                offers great functional tools.
              </p>
            </div>
            <div className=" flex gap-4 items-center mt-5">
              <img
                src="https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10524.jpg"
                alt=""
                className=" h-10 w-10  rounded-full object-cover object-top"
              />
              <div>
                <h1 className=" font-semibold font-roboto text-sm">John Doe</h1>
                <div className=" text-xs text-secondarys1 flex items-center gap-1 font-medium">
                  CEO
                  <p className=" h-[2px] w-[2px] rounded-full bg-secondarys1"></p>
                  <span>Advance Ltd.</span>
                  <p className=" h-[2px] w-[2px] rounded-full bg-secondarys1"></p>
                  <span>Dallas, TX</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-[500px] bg-white shadow-2xl rounded-[30px] border-t-4 relative lg:bottom-36 border-primary xl:p-7 p-5">
            <h6 className=" text-sm text-center font-roboto text-secondarys1">
              Talent Spin - Sales Team
            </h6>
            <h2 className=" font-roboto text-xl pb-4 border-b border-bordercolor text-center font-black">
              30 Minutes Meeting
            </h2>
            <h1 className=" font-roboto text-center font-bold py-4">
              Select a Day
            </h1>
            {/* <img
              src="/assets/images/dateselector/Calender Template.png"
              alt=""
              className=" w-full h-[280px] object-fill  object-top"
            /> */}
            <div className="">
              <SelectDate />
            </div>
            <div className=" mt-5">
              <h3 className=" font-roboto font-bold text-base">
                Select time of day
              </h3>
              <div className=" mt-4 flex justify-between xl:gap-3 gap-2 items-center">
                <button className=" border border-bordercolor py-2 text-sm  max-sm:text-xs shadow-sm xl:px-4 px-3 rounded-[10px]">
                  10 : 45 AM
                </button>
                <button className=" border border-primary text-primary py-2 text-sm font-sm max-sm:text-xs  shadow-sm xl:px-4 px-3  rounded-[10px]">
                  11 : 30 AM
                </button>
                <button className=" border border-bordercolor py-2 font-sm  text-sm shadow-sm max-sm:text-xs   xl:px-4 px-3  rounded-[10px]">
                  12 : 15 AM
                </button>
                <button className=" border border-bordercolor py-2 font-sm text-sm shadow-sm max-sm:text-xs  xl:px-4 px-3  rounded-[10px]">
                  01 : 00 AM
                </button>
              </div>
            </div>
            <div className="mt-5">
              <h3 className=" font-roboto font-bold text-base capitalize">
                TImzone
              </h3>
              <select className=" w-full outline-none mt-4  ">
                <option value="" className=" ">
                  (GMT+5:30) Chennai, Kolkata, Mumbai, new Delhi (IST)
                </option>
                <option value="">hekk</option>
              </select>
              <button className=" w-full bg-primary rounded-full p-3 font-roboto font-bold  text-white mt-6">
                Schedule
              </button>
            </div>
          </div>
          <img
            src="/assets/svg/wave/wave.svg"
            className=" absolute -top-40 xl-2:-left-20 left-8 max-lg:hidden w-[100px] h-12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
