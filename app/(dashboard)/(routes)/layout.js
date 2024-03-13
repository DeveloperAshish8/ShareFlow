"use client";
import { useState } from "react";
import "../../globals.css";
import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";
// import TopHeader from './_components/TopHeader'

const layout = ({ children }) => {
  const [menuOpened, setOpened] = useState(false);
  function toggle() {
    setOpened((prev) => !prev);
  }
  return (
    <div>
      <div className="md:ml-64 block">
        <TopHeader setOpened={setOpened} />
        {children}
      </div>
      <div
        className={`h-full w-64 flex-col fixed inset-y-0 md:flex sidenav ${(menuOpened?"":"hidden")}`}
      >
        <SideNav />
      </div>
    </div>
  );
};

// <div className=' h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
export default layout;
