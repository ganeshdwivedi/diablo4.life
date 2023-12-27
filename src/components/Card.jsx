import React from "react";

const Card = ({ img, text, atext }) => {
  return (
    <div className="w-[400px] h-[130px] mt-0 m-4 hover:bg-[#4c4e60] bg-[#252630] flex flex-row rounded-md">
      <div className="w-50 h-30 ">
        <img className="object-cover rounded-md w-full h-full" src={img} />
      </div>
      <div className=" m-3">
        <p className="text-md text-slate-100">{text}</p>
        <p className="text-slate-400 text-sm">{atext}</p>
      </div>
    </div>
  );
};

export default Card;
