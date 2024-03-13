"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const TopHeader = ({ setOpened }) => {
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <AlignLeft
        className="md:hidden cursor-pointer"
        onClick={() => setOpened((p) => !p)}
      />
      <Image src="/logo.svg" width={40} height={40} className="md:hidden" />
      <UserButton />
    </div>
  );
};

export default TopHeader;
