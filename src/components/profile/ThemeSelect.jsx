import React, { useState } from "react";

const ThemeSelect = () => {
  const [selectedColor, setSelectedColor] = useState("#58AF47");
  const [isSelected, setIsSelected] = useState(null); // Track the selected color

  const colorOptions = ["#58AF47", "#FF6347", "#1E90FF", "#FFD700", "#6A5ACD"];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setIsSelected(color); 
  };

  return (
    <div className="  form-basic-need h-full ">
      <h1 className="my-2 pb-8 border-b border-[#E5E5E5] text-center font-inter text-xl font-bold">
        Display
      </h1>

      <div className="mt-5">
        <h1 className="font-inter font-bold text-sm text-center">
          Profile theme
        </h1>
        <h2 className="text-xs text-center text-secondarys1 mt-1">
          Customize your profile to your brand
        </h2>
      </div>

      <div className="mt-5 text-center">
        {/* Outer Block for Color Selection with Border and Spacing */}
        <div className="flex justify-center xl:gap-4 gap-2">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorChange(color)}
              className={`rounded-lg p-[2px] ${
                isSelected === color
                  ? "border-2 border-black"
                  : "border-2 border-gray-300"
              }`}
            >
              <div
                className="xl:w-8 w-6 h-6 xl:h-8 rounded-lg cursor-pointer"
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>

     
      <div className="mt-5 text-center gap-3  border border-gray-300 p-3 rounded-xl flex items-center justify-between">
        <button className=" rounded-lg bg-[#C7EAFB] p-2 w-8 h-8">
          <img
            src="/assets/svg/profile/craetetheme.svg"
            alt=""
            className=" h-4 w-4 "
          />
        </button>
        <h3 className="xl:text-base lg:text-sm text-base font-bold">Selected Theme</h3>
        <div className=" p-[2px] border-2 border-secondarys1 rounded-lg">
          <div
            className="w-8 h-8 rounded-lg"
            style={{ backgroundColor: selectedColor }}
          />
        </div>
      </div>
      <button className="  mt-8 w-full text-xs  py-3 px-4 font-inter font-bold  text-white bg-primary  rounded-xl">
      Save Changes
        </button>
    </div>
  );
};

export default ThemeSelect;
