import React from "react";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav className="bg-[#21212b]">
      <div className="flex flex-row justify-between px-20 py-2">
        <div className="flex flex-row">
          <Logo className={"mx-5"} w={108} h={32} />
          <input
            className="px-10 bg-[#252630] border-1 border-slate-100 mx-5 text-white rounded-md text-sm search"
            placeholder="Try searching for Termerity..."
            type="search"
          />
        </div>
        <div className="flex flex-row">
          <img
            className="mx-5 rounded-[100%] w-10"
            src="https://logowik.com/content/uploads/images/discord-new-20218785.jpg"
          />
          <button className="bg-[#383946] mx-5 text-white px-3 py-1 rounded-md text-sm">
            Login
          </button>
        </div>
      </div>
      <div className="text-slate-300 pl-24 py-4">
        <ul className="flex flex-row gap-5">
          <li className="hover:bg-[#575864] p-3">Trackers</li>
          <li className="hover:bg-[#575864] p-3">Builds</li>
          <li className="hover:bg-[#575864] p-3">Database</li>
          <li className="hover:bg-[#575864] p-3">Tools</li>
          <li className="hover:bg-[#575864] p-3">Guides</li>
          <li className="hover:bg-[#575864] p-3">Tier Lists</li>
          <li className="hover:bg-[#575864] p-3">Map</li>
          <li className=" p-3">
            <button className="bg-red-700 hover:bg-[#961b1b] text-whtie px-4 py-1 text-sm rounded-md">
              Build Planner
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
