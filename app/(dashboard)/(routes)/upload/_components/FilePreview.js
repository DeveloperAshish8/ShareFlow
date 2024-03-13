import { CheckCircle2, X } from "lucide-react";
import React from "react";

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="mt-2 md:max-w-[50%]  md:ml-[25%] flex p-2 bg-slate-200 border rounded-md border-collapse items-center justify-between gap-2">
      <div className="flex items-center p-2">
        <CheckCircle2 className="mr-2 mt-1 fill-current text-green-600 items-center" />
        <div className="text-left">
          <h2 className="">{file.name}</h2>
          <h2 className="text-gray-400 text-[12px]">
            {file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
          </h2>
        </div>
      </div>
      <X className="cursor-pointer" onClick={() => removeFile()} />
    </div>
  );
};

export default FilePreview;
