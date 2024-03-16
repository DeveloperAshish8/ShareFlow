import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center w-[100%] md:mx-auto my-12 max-w-[1200px] md:p-7 px-[20px]"
      id="home"
    >
      <div className="flex flex-col flex-grow-1 max-w-[600px] md:text-left text-center">
        <h1 className="md:text-[3.3rem] text-4xl font-extrabold md:leading-[4.5rem] leading-[3rem]">
          Share your files in seconds, Online
        </h1>
        <p className="max-w-[530px] text-lg mt-3 pt-3 leading-8">
          Share your files in any format through instantly shareable links.
          ShareFlow allows you to encrypt your files and documents with
          password.
        </p>
        <div className="flex md:gap-2 my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="black"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-check"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="font-medium text-sm">
            We Delights our users by processing over 50 file formats online
          </span>
        </div>
        <div className="sm:flex sm:gap-4 mt-3">
          <Link
            className="rounded bg-primary px-12 py-4 text-base font-medium text-white shadow"
            href="/upload"
          >
            Start Sharing - It's Free
          </Link>
        </div>
      </div>
      <div className="max-w-[500px] mt-3">
        <Image
          src="/Side-image.png"
          width={1000}
          height={400}
          alt="Hero Image"
          className=""
        />
      </div>
    </div>
  );
}

export default Hero;
