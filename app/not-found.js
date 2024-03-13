import Image from "next/image";
import React from "react";

const Error = () => {
  return (
    <div className="text-center h-screen">
      <div className="flex items-center justify-center w-full h-full my-auto">
        <Image src="/404.png" width={500} height={500} alt="404" />
      </div>
    </div>
  );
};

export default Error;
