import React from "react";

const DiabloLatest = ({ img, text, atext }) => {
  return (
    <div className="w-[220px]  ml-0 mx-5">
      <div className="w-[220px] h-[150px] overflow-hidden rounded-lg">
        <img
          className="overflow-hidden h-full object-cover scale-125"
          src={img}
        />
      </div>
      <div className="my-2">
        <p className="text-md text-slate-100">{text}</p>
        <p className="text-slate-500 text-sm">{atext} </p>
        {/* <p className="text-slate-500 text-sm">{atext}</p> */}
      </div>
    </div>
  );
};

export default DiabloLatest;
