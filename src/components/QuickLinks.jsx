import React from "react";

const QuickLinks = () => {
  const css =
    "bg-[#303241] px-16 py-8 rounded-tl-[15px] rounded-br-[15px] hover:bg-[#494b60] text-md font-semibold";
  return (
    <div className="text-white my-5 ">
      <h3 className="text-2xl my-5">QuickLinks</h3>
      <div className="flex flex-row gap-5">
        <button className={css}>Helltide chests</button>
        <button className={css}>Aspect Gaming</button>
        <button className={css}>Target Farming</button>
        <button className={css}>Tier Lists</button>
      </div>
    </div>
  );
};

export default QuickLinks;
