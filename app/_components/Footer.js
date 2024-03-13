import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Image src="/logo.svg" width={50} height={50} alt="Logo" />
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%] md:mx-auto mt-4 mb-6 max-w-[1200px] ">
        {" "}
        <h1 className="font-semibold text-xl">
          Built with ❤️ by{" "}
          <Link
            className="ml-2 underline text-primary "
            href="https://ashish4.vercel.app"
            target="_blank"
          >
            Ashish
          </Link>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
