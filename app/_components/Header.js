"use client";
import Image from "next/image";
import Link from "next/link";
import ".././globals.css";
import React, { useState } from "react";

const Header = () => {
  const [menuOpened, setOpened] = useState(false);
  const handleClick = () => {
    setOpened(!menuOpened);
  };
  return (
    <header className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4  lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">
              <Image src="./logo.svg" width={40} height={40} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* <nav
              aria-label="Global"
              className={menuOpened ? "mobile-menu-link" : "menu-link"}
            > */}
            <ul
              className={menuOpened ? "mobile-menu-link" : "menu-link"}
              // menuOpened
              //   ? ""
              //   : "flex-col absolute gap-5 mt-14 bg-white px-14 py-10 text-lg rounded-xl"
            >
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/upload"
                >
                  {" "}
                  Upload{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#HowTo"
                >
                  {" "}
                  How to{" "}
                </Link>
              </li>
            </ul>
            {/* </nav> */}

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/upload"
                >
                  Get Started
                </Link>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => handleClick()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
