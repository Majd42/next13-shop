import React from "react";
import ReactLoading from "react-loading";
const loading = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-[240px] h-[350px] overflow-hidden rounded-sm hover:translate-y-2 flex flex-col gap-3 transition hover:cursor-pointer">
            <div className="w-full h-[80%]  bg-hint rounded-xl animate-pulse "></div>
            <div className=" p-1 bg-hint roundex-xl animate-pulse "></div>
            <div className="  p-1 bg-hint roundex-xl animate-pulse w-[50%] "></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default loading;
