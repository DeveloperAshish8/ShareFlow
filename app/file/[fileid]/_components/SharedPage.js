"use client";
const bcrypt = require("bcryptjs");
import { ArrowDownToLine, Download, Eye } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SharedPage = ({ file }) => {
  const [showPassword, setshowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const Download = (url) => {
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordCheck = async () => {
    const allowed = await bcrypt.compare(password, file.password);
    if (allowed) {
      setIsPasswordValid(true);
      setError("");
      window.open(file.fileUrl); // Proceed with download
    } else {
      setIsPasswordValid(false);
      setError("Incorrect password.");
    }
  };
  return (
    file && (
      <div className="flex justify-center items-center h-screen w-full">
        <div
          className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 rounded-lg"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div className="mt-4 space-y-6 flex flex-col justify-center">
            <div className="">
              <h2 className="">
                <strong className="text-primary">{file?.userName}</strong>{" "}
                Shared a File with You
              </h2>
              <h2 className="text-gray-400 text-[12px] uppercase mx-auto">
                {(file.fileSize / 1024 / 1024).toFixed(2)}MB / {file.fileType}
              </h2>
            </div>
            <div className="p-4 m-auto flex justify-center rounded-full  w-[90%] items-center">
              <Image
                src="/downloadGif.gif"
                width={300}
                height={300}
                alt="Picture of the author"
                className="rounded-full"
              />
            </div>
            {file.password.length > 3 ? (
              <div className="relative rounded-lg">
                {/* <label className="text-gray-300">Password</label> */}
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm bg-gray-200"
                  placeholder="Encrypted File (Enter the Password)"
                  onChange={(e) => setPassword(e.target.value.toString())}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                  <Eye
                    onClick={() => {
                      setshowPassword((p) => !p);
                    }}
                  />
                </span>
              </div>
            ) : null}

            <button
              className="p-4 m-auto flex justify-center rounded-lg bg-primary text-white w-[80%] items-center disabled:bg-gray-400"
              disabled={file.password.length > 3 && password.length === 0}
              onClick={handlePasswordCheck}
            >
              {" "}
              Download
              <ArrowDownToLine />
            </button>
            {error && (
              <span className="text-red-600 text-sm font-semibold flex justify-center items-center">
                {error}
              </span>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SharedPage;
