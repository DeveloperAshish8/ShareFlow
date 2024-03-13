import React from "react";
import Image from "next/image";

const Progressbar = ({ progress }) => {
  return (
    <div className="mt-3">
      <div className="flex justify-center">
        <Image src="/train.gif" alt="Dog" width={100} height={100} />
      </div>
      <div>
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow="50"
          className="block rounded-full bg-gray-200"
        >
          <span
            className="block h-5 rounded-full bg-primary text-center text-[10px]/4"
            style={{ width: `${progress}%` }}
          >
            <span className="font-bold text-white">
              {" "}
              {progress.toFixed(0)}%{" "}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Progressbar;
