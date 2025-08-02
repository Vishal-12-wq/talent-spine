import React from "react";
import Button from "../button/Button";

const RoadService = () => {
  return (
    <div className="form-basic-need">
      <h1 className="form-heading">Reorder Services</h1>
      <p className="form-small">
        Drag and arrange services as you'd like them to be seen on your
        pathmover page
      </p>
      <div className=" mt-10 max-w-[400px]">
        <div className=" flex gap-2 items-center">
          <img
            src="/assets/svg/profile/roadservice.svg"
            alt=""
            className=" h-8 w-8"
          />
          <div className="input-field">
            <h1 className=" font-inter font-medium text-sm">
              Brand Identity Discuss
            </h1>
            <h2 className=" text-xs  text-bordercolor">Video Call</h2>
          </div>
        </div>
      </div>
      <div className=" mt-4 max-w-[400px]">
        <div className=" flex gap-2 items-center">
          <img
            src="/assets/svg/profile/roadservice.svg"
            alt=""
            className=" h-8 w-8"
          />
          <div className="input-field">
            <h1 className=" font-inter font-medium text-sm">
              Brand Identity Discuss
            </h1>
            <h2 className=" text-xs  text-bordercolor">Video Call</h2>
          </div>
        </div> 
      </div>  <div className=" mt-4 max-w-[400px]">
        <div className=" flex gap-2 items-center">
          <img
            src="/assets/svg/profile/roadservice.svg"
            alt=""
            className=" h-8 w-8"
          />
          <div className="input-field">
            <h1 className=" font-inter font-medium text-sm">
              Brand Identity Discuss
            </h1>
            <h2 className=" text-xs  text-bordercolor">Video Call</h2>
          </div>
        </div>
      </div>
      <div className=" mt-8">
      <Button text="Save" bgcolor=' bg-success !capitalize ' textcolor="text-white"/>

      </div>
    </div>
  );
};

export default RoadService;
