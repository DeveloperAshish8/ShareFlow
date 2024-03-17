"use client";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];
  const [currIndex, setcurrIndex] = useState(0);
  return (
    <div className="shadow-sm sidenav border-r h-full md:bg-transparent bg-white">
      <Link href="/">
        <div className="px-5 py-4  md:block hidden">
          <Image src="./logo.svg" width={40} height={40} />
        </div>
      </Link>
      <div className="flex flex-col float-left w-full ">
        {menuList.map((item, index) => (
          <Link href={item.path}>
            <button
              className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-grey-500
          ${currIndex == index ? "bg-blue-50 text-primary" : null}`}
              onClick={() => setcurrIndex(index)}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
