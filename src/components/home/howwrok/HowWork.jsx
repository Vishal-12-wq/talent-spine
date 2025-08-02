import React, { useState } from "react";

const HowWork = () => {
  const [activeSection, setActiveSection] = useState("how-it-works"); // Track which section is active

  return (
    <div className=" max-w-[1500px] mx-auto sm:pt-[96px] pt-10 xl-2:pt-20   relative xl:px-[140px] xl-2:px-8 lg:px-20 px-3">
      <div className="flex justify-center items-center gap-5">
        <button
          className={`${
            activeSection === "how-it-works"
              ? "bg-primary text-white"
              : "bg-transparent text-black border border-black"
          } shadow-lg px-4 py-3 xl-2:py-4 xl-2:px-6 xl-2:text-base text-sm font-roboto rounded-2xl font-bold`}
          onClick={() => setActiveSection("how-it-works")} // Show "How it Works"
        >
          How it Works
        </button>
        <button
          className={`${
            activeSection === "domain-expertise"
              ? "bg-primary text-white"
              : "bg-transparent text-black border border-black"
          } shadow-lg px-4 py-3 xl-2:py-4 xl-2:px-6 xl-2:text-base text-sm font-roboto rounded-2xl font-bold`}
          onClick={() => setActiveSection("domain-expertise")} // Show "Domain Expertise"
        >
          Domain Expertise
        </button>
      </div>

      <div className="mt-10 flex justify-center items-center lg:gap-8 sm:gap-6 gap-3 mx-auto">
        <div className="h-[1px] bg-primary sm:max-w-[180px] max-w-[100px] md:max-w-[250px] w-full "></div>
        <h2 className="section-title">
          <span
            className={` text-primary ${
              activeSection === "how-it-works" ? "" : "text-black"
            }`}
          >
            {activeSection === "how-it-works" ? "How it" : "Domain"}
          </span>{" "}
          <span className="text-black">{activeSection === "how-it-works" ? "Work " : "Expertise"}</span>
        </h2>
        <div className="h-[1px] bg-primary sm:max-w-[180px] max-w-[100px] md:max-w-[250px]  w-full "></div>
      </div>

      {/* Conditional rendering of content based on the active section */}
      {activeSection === "how-it-works" ? (
        <>
          {/* "How it Works" section content */}
          <p className="max-w-[1048px] mx-auto mt-7 text-center text-bordercolor text-sm font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          {/* Process for "How it Works" */}
          <div className="mt-10 w-full border border-primary rounded-[60px] p-5 shadow-2xl">
            <div className="radialbg overflow-hidden   relative rounded-[40px] w-full  grid lg:grid-cols-4 place-content-center place-items-center sm:grid-cols-2">
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto xl-2:text-xl text-lg text-white">
                    Sign Up and Complete Your Profile
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    Begin by signing up on TalentSpine. Fill out your profile
                    with essential information, including your skills,
                    experience, and expertise. This helps us match you with the
                    most suitable opportunities.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto text-lg xl-2:text-xl text-white">
                    Explore Job Opportunities
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    Browse through a wide range of job listings from top
                    companies looking for skilled professionals. Filter roles
                    based on your expertise, experience level, and preferred
                    location.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto text-lg xl-2:text-xl text-white">
                    Get Shortlisted and Interview
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    If your application stands out, you’ll be shortlisted for an
                    interview. TalentSpine’s platform makes it easy to schedule
                    and conduct interviews, ensuring a smooth process for both
                    you and the employer.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto text-lg xl-2:text-xl text-white">
                    Continuous Support
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    TalentSpine offers ongoing support, from job placement to
                    career growth. Access resources, training, and advice to
                    help you succeed in your new role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="max-w-[1048px] mx-auto mt-10 text-center text-bordercolor text-base font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          {/* Process for "Domain Expertise" */}
          <div className="mt-10 w-full border border-primary rounded-[60px] p-5 shadow-xl">
            <div className="bg-gradient-to-r from-[#800000] via-[#000080] to-[#332ae2] overflow-hidden grid lg:grid-cols-4 place-content-center place-items-center sm:grid-cols-2 relative rounded-[40px] w-full ">
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto text-lg xl-2:text-xl text-white">
                    Expertise in AI and Data Science
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    We have deep expertise in the fields of AI and Data Science,
                    helping companies integrate cutting-edge technologies for
                    data-driven decisions.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto text-lg xl-2:text-xl text-white">
                    Healthcare Domain
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    Our healthcare domain expertise includes helping
                    organizations build robust healthcare systems, patient
                    management solutions, and health data analytics.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto text-lg xl-2:text-xl text-white">
                    Cloud Infrastructure and DevOps
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    We provide expertise in cloud computing and DevOps, ensuring
                    scalable and reliable cloud infrastructure for modern
                    businesses.
                  </p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:rounded-3xl hover:bg-white hover:bg-opacity-10 h-[260px]">
                <div className="py-8 max-w-[280px] px-10">
                  <h1 className="font-bold font-roboto text-lg xl-2:text-xl text-white">
                    Financial Technology (FinTech)
                  </h1>
                  <p className="text-xs font-roboto xl-2:text-sm text-white mt-2">
                    With expertise in FinTech, we assist organizations in
                    creating innovative financial products, improving user
                    experiences, and driving digital transformation in the
                    finance sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Images */}
      <img
        src="/assets/svg/work/arrow.svg"
        alt=""
        className="w-[150px] h-[87px] absolute top-28 left-2 max-lg:hidden"
      />
      <img
        src="/assets/svg/work/plane.svg"
        alt=""
        className="w-[180px] h-[150px] absolute top-8 right-10 max-lg:hidden"
      />
    </div>
  );
};

export default HowWork;
