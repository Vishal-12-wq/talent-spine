import React from "react";

const Button = ({ text, textcolor, bgcolor ,bghover,texthover}) => {
  return (
    <button
      className={`uppercase font-raleway  xl:px-6 lg:px-3 sm:px-3 px-2 py-4 xl-2:text-base sm:text-xs text-[10px] ${bghover} ${texthover} ${textcolor} font-bold ${bgcolor} rounded-[10px]`}
    >
      {text}
    </button> 
  );
};

export default Button;
