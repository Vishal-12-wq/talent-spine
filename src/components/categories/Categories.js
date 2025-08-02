import React, { useState, useEffect } from "react";

const Categories = ({ categories = [] ,browse=" Browse all Packages"}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0] || null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="max-w-[1440px] mx-auto flex justify-between gap-5 items-center flex-wrap">
      <div className="max-w-[100%] overflow-x-auto flex justify-between gap-3 xl-2:gap-6 items-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`capitalize lg:px-4 px-3 py-2 xl-2:py-[10px] xl-2:px-5 text-nowrap rounded-[5px] xl-2:text-sm text-xs font-medium font-roboto ${
              activeCategory === category
                ? "bg-primary text-white"
                : "text-secondarys1 border-bordercolor border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <button className=" ml-auto  lg:px-8 px-4 py-4 xl-2:text-base hover:bg-primary hover:text-white hover:border-white  text-nowrap text-xs font-roboto text-primary font-bold shadow-lg hover:shadow-2xl rounded-2xl border-b-2 border-primary">
     {browse}
        </button>

    </div>
  );
};

export default Categories;
