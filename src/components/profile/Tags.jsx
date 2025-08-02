import React from "react";
import { NavLink } from "react-router-dom";
import Toggle from "../toggle/Toggle";

const data = [
  {
    id: 1,
    title: "Support My Work",
    desc: "Let followers pay you after booking. ",
  },
  {
    id: 2,
    title: "Smart Discounts",
    desc: "Increase bookings by offering discounts. ",
  },
  {
    id: 2,
    title: "Sell session recordings",
    desc: "Enable customers to buy sessions recordings. ",
  },
];
const Tags = () => {
  return (
    <div className=" grow flex h-full gap-5 max-lg:flex-col">
      {data &&
        data.map((ele) => (
          <div
            key={ele.id}
            className="form-basic-need w-full flex gap-2 justify-between items-center"
          >
            <div>
              <h1 className="form-heading">{ele.title}</h1>
              <p className=" form-small max-w-[250px] !leading-5">
                {ele.desc}{" "}
                <span className=" font-bold text-black underline ">
                  <NavLink>Learn more</NavLink>
                </span>
              </p>
            </div>
            <Toggle/>
          </div>
        ))}
    </div>
  );
};

export default Tags;
