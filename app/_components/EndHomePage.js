import React from "react";
import Image from "next/image";
import Link from "next/link";

const EndHomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] mx-auto my-12 max-w-[1200px] md:p-7 px-[20px]">
      <div className="">
        <Image
          src="/endImage.png"
          width={500}
          height={200}
          alt="Hero End Image"
          className=""
        />
      </div>
      <h1 className="md:text-4xl text-3xl font-bold text-center leading-[3rem] mb-7">
        Get started with ShareFlow today
      </h1>
      <div className="sm:flex sm:gap-4 mt-3">
        <Link
          className="rounded bg-primary px-12 py-4 text-base font-medium text-white shadow"
          href="/upload"
        >
          Start Sharing - It's Free
        </Link>
      </div>
    </div>
  );
};

export default EndHomePage;
