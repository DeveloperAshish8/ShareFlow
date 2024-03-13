import React from "react";
import steps from "./HowTo.json";

const HowTo = () => {
  return (
    <div
      className=" items-center w-[100%] md:mx-auto my-12 max-w-[1200px] md:p-7 px-[20px]"
      id="HowTo"
    >
      <h1 className="md:text-3xl text-2xl md:text-left text-center font-semibold ">
        How to send and share files with{" "}
        <strong className="text-primary">ShareFlow? </strong>
      </h1>
      {/* cards starts here */}

      <div className="flex flex-col md:flex-row md:justify-between gap-4 mt-10">
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              className="md:w-[30%] bg-white pl-8 pr-5 pt-8 pb-10"
              style={{ borderRadius: "15% 0 15% 0" }}
            >
              <h3 className="flex flex-col text-xl mb-5 font-semibold">
                <span className="bg-primary rounded-[50%] h-8 w-8 text-white text-center font-semibold mb-3">
                  {step.id}
                </span>
                {step.heading}
              </h3>
              <p className="text-lg">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowTo;
