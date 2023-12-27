import React from "react";

const GuideCard = ({ img, atext, posted, heading }) => {
  return (
    <div className="w-[300px]  ml-0 mx-5">
      <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
        <img
          className="overflow-hidden h-full object-cover scale-125"
          src={img}
        />
      </div>
      <div className="my-2">
        <p className="text-md text-slate-100">{heading}</p>
        <p className="text-slate-500 text-sm">{posted} </p>
        <p className="text-slate-500 text-sm">{atext}</p>
      </div>
    </div>
  );
};

export default GuideCard;
