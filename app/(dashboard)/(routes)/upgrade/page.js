import Image from "next/image";
import React from "react";

const Upgrade = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] mx-auto my-9  max-w-[1200px] md:p-3 px-[20px]">
      <h2 className="text-4xl font-bold text-primary mt-4 mb-[-5%]">
        Coming Soon
      </h2>
      <div>
        <Image src="/comingSoon.gif" width={500} height={700} alt="gif" />
      </div>
    </div>
  );
};

export default Upgrade;
