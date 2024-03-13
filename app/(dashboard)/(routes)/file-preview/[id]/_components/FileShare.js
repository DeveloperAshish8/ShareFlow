import React, { useState } from "react";
import ShareForm from "./ShareForm";
import Image from "next/image";

const FileShare = ({ file, onPasswordSave }) => {
  // console.log(file, "f");
  return (
    <div className="flex lg:flex-row flex-col p-4 justify-evenly">
      <ShareForm file={file} onPasswordSave={onPasswordSave} />
      <div className="right">
        <div className="mt-8">
          <h2 className="font-semibold text-2xl text-primary text-center">
            Yes, It's Done 😍
          </h2>
          <Image
            src="/Successful.gif"
            width={500}
            height={500}
            alt="completed"
          />
        </div>
      </div>
    </div>
  );
};

export default FileShare;
