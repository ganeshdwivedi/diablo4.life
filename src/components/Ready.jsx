import React from "react";

const Ready = () => {
  return (
    <div className="my-20">
      <h3 className="text-2xl text-white">
        Are you ready for the Abattoir of Zir?
      </h3>

      <div className="border-1 border-slate-500 w-[80vw] my-2">
        <input type="radio" name="Yes, all ready!" value="option1" />
        <label className="text-slate-500 text-lg mx-4">Yes, all ready!</label>
      </div>
      <div className="border-1 border-slate-500 w-[80vw] my-2">
        <input type="radio" name="Yes, all ready!" value="option1" />
        <label className="text-slate-500 text-lg mx-4">
          No, not level 100 yet
        </label>
      </div>
      <div className="border-1 border-slate-500 w-[80vw] my-2">
        <input type="radio" name="Yes, all ready!" value="option1" />
        <label className="text-slate-500 text-lg mx-4">
          Still preparing my gear and build
        </label>
      </div>
      <div className="border-1 border-slate-500 w-[80vw] my-2">
        <input type="radio" name="Yes, all ready!" value="option1" />
        <label className="text-slate-500 text-lg mx-4">
          Not interested in the AoZ
        </label>
      </div>
    </div>
  );
};

export default Ready;
