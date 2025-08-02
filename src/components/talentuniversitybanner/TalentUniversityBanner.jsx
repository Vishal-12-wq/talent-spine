import React from "react";
import bannerImage from "./backgroundimage/image.jpg"; // ✅ Correct path

const TalentUniversityBanner = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat rounded-[20px] my-10 shadow-xl overflow-hidden mx-auto xl:px-20 xl-2:!px-0 max-w-[1600px] px-5 lg:px-10 "
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="bg-blue-900 bg-opacity-80 w-full px-5 sm:px-10 md:px-16 py-10 flex flex-col md:flex-row justify-between items-start md:items-center text-white gap-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Talent University - Free Learning - Certification
          </h2>
          <p className="text-sm md:text-base text-gray-200">
            "Unlock your potential with free learning opportunities and earn certifications to advance your skills and career—all at no cost."
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md">
          JOIN NOW
        </button>
      </div>

      
    </div>
  );
};

export default TalentUniversityBanner;
