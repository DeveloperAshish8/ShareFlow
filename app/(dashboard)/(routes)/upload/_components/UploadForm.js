import React, { useState } from "react";
import Alert from "./Alert";
import FilePreview from "./FilePreview";
import Progressbar from "./Progressbar";

const UploadForm = ({ uploadbuttonClicked, progress }) => {
  const [file, setfile] = useState();
  const [error, seterror] = useState(false);
  const controlSize = (file) => {
    if (file.size > 10485760) {
      console.log("size exceed");
      seterror(true);
      return;
    }
    seterror(null);
    setfile(file);
  };
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-primary "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 md:text-2xl">
              <span className="font-semibold text-primary">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX: 10MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => controlSize(event.target.files[0])}
          />
        </label>
      </div>
      {error ? <Alert /> : null}
      {file ? (
        <FilePreview file={file} removeFile={() => setfile(null)} />
      ) : null}
      {progress > 0 ? (
        <Progressbar progress={progress} />
      ) : (
        <button
          disabled={!file}
          className="p-2 rounded-full bg-primary text-white w-[30%] m-4 disabled:bg-gray-400"
          onClick={() => {
            uploadbuttonClicked(file);
          }}
        >
          {" "}
          Upload
        </button>
      )}
    </div>
  );
};

export default UploadForm;
