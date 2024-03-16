import Image from "next/image";
import React from "react";

const Alert = () => {
  return (
    <div className="flex justify-center mb-0">
      <div className="mt-4 ">
        <div className="">
          <div className="flex ">
            <div className="p-2 flex ">
              <div className="items-center">
                <p className=" text-red-600 font-semibold text-sm md:text-lg">
                  File Size Exceeds 10MB..
                </p>
                <div className="ml-[20%]">
                  <Image src="/dog.gif" alt="Dog" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
