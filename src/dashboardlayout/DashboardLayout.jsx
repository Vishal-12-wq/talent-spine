import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import DashBoardHeader from "../components/dahboardheader/DashBoardHeader";
import Sidebar from "../components/sidebar/Sidebar";
const DashboardLayout = () => {
  return (
    <main className=" min-h-[calc(100vh-120px)]">
      <div className="min-h-screen flex overflow-y-auto ">
        <Sidebar />

        <main
          className="flex-1 lg:ml-56 xl-2:ml-[260px]  overflow-x-hidden  lg:px-1 relative"
          style={{ minHeight: "90svh" }}
        >
          <DashBoardHeader />

          <Outlet />
        </main>
      </div>
    </main>
  );
};

export default DashboardLayout;
