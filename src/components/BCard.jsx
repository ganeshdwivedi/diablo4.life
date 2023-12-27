import React from "react";

const BCard = () => {
  return (
    <div className="overflow-hidden relative w-[42vw] ">
      <div className="w-[400%] h-[40vh] overflow-hidden">
        <img
          className="object-cover rounded-md"
          src="https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2Fa994457ee49f3fd37b0e7db1efba4554539c7f06-1574x816.png&w=640&q=75"
        />
      </div>
      <div className="bg-[#252630] rounded-md text-white px-3  py-10">
        <p className="text-3xl">
          Uber Unique Drop Rates Doubled Until January 8th
        </p>
        <p className="text-xs text-slate-400">5 hours ago by Prowner</p>
      </div>
    </div>
  );
};

export default BCard;
