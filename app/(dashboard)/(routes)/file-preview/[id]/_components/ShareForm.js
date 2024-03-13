"use client";
import React, { useState } from "react";
import { BadgeCheck, Copy, Eye } from "lucide-react";
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import QRCode from "qrcode.react";

const ShareForm = ({ file, onPasswordSave }) => {
  const [copy, setCopy] = useState(false);
  const [password, setPassword] = useState();
  // const [savedPassword, setsavedPassword] = useState();
  const [showPassword, setshowPassword] = useState(false);
  const [passwordEnabled, setpasswordEnabled] = useState(false);
  const copylink = () => {
    navigator.clipboard.writeText(file?.shortUrl);
    setCopy(true);
  };
  const link = file?.shortUrl;
  return (
    <div className=" md:min-w-[25%] md:max-w-[30%] min-h-[50%] rounded shadow-md items-center p-6 md:mt-[10%] md:ml-6 ml-2 mt-4">
      <div className="justify-center">
        <div className="text-left">
          <h2 className="inline-block whitespace-nowrap text-primary font-semibold md:max-w-[60%] overflow-hidden text-ellipsis">
            {file?.fileName}
          </h2>
          <h2 className="text-gray-400 text-[16px] uppercase">
            {(file.fileSize / 1024 / 1024).toFixed(2)}MB
          </h2>
        </div>

        <div className="border-slate-600">
          <label className="sr-only">Short URL</label>

          <div className="relative bg-gray-200 rounded-lg mt-4">
            <input
              type="text"
              className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm"
              disabled
              value={file?.shortUrl || ""}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
              {copy ? (
                <BadgeCheck
                  onClick={() => setCopy((copy) => !copy)}
                  color="green"
                />
              ) : (
                <Copy onClick={copylink} className="w-4" />
              )}
            </span>
          </div>
        </div>

        <div className="mt-4 w-[100%]">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option1"
                onChange={() => setpasswordEnabled((p) => !p)}
              />
            </div>

            <div>
              <strong className="font-base text-sm text-gray-700">
                Enable Encryption
              </strong>
            </div>
          </label>

          {passwordEnabled ? (
            <div className="flex flex-row justify-between mt-2">
              <div className="relative rounded-lg">
                {/* <label className="text-gray-300">Password</label> */}
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm bg-gray-200"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer">
                  <Eye
                    onClick={() => {
                      setshowPassword((p) => !p);
                    }}
                  />
                </span>
              </div>
              <button
                className="inline-block rounded-lg border bg-primary p-4 ml-4 text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring"
                onClick={() => onPasswordSave(password)}
              >
                SAVE
              </button>
            </div>
          ) : null}
        </div>
        <div className="flex flex-row justify-between">
          <div
            style={{
              height: "auto",
              maxWidth: 64,
            }}
            className="mt-6 w-[50%]"
          >
            <QRCode value={link} fgColor="#52367E" />
          </div>

          <div className=" w-[40%] flex justify-between gap-2 flex-wrap mt-4">
            <WhatsappShareButton
              url={String(link)}
              title={"Hey, I am Sharing a file with you on ShareFlow"}
              separator=":: "
            >
              <WhatsappIcon size={36} round />
            </WhatsappShareButton>

            <TelegramShareButton
              url={String(link)}
              title={"Hey, I am Sharing a file with you on ShareFlow"}
            >
              <TelegramIcon size={36} round />
            </TelegramShareButton>

            <EmailShareButton
              url={String(link)}
              subject={"File Shared through ShareFlow"}
              body="I wanted to let you know that I have shared a file with you via ShareFlow, a  file-sharing platform."
            >
              <EmailIcon size={36} round />
            </EmailShareButton>

            <LinkedinShareButton url={String(link)}>
              <LinkedinIcon size={36} round />
            </LinkedinShareButton>

            <TwitterShareButton
              url={String(link)}
              title={"Hey, I am Sharing a file with you on ShareFlow"}
            >
              <TwitterIcon size={36} round />
            </TwitterShareButton>

            <RedditShareButton
              url={String(link)}
              title={"Hey, I am Sharing a file with you on ShareFlow"}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareForm;
