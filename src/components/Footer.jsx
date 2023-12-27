import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const li = "mt-4 text-slate-400";
  return (
    <footer className="flex bg-[#252630] flex-row  justify-around text-md p-10 ">
      <ul>
        <li>
          <Logo w={200} />
        </li>
        <li className={li}>
          <span className="text-white">Diablo4.life</span> is not affiliated
          with or endorsed by Activision Blizzard, Inc.
        </li>
        <li className={li}>contact@diablo4.life</li>
        <li className={li}>
          © December 2023 Diablo4Life. All rights reserved.
        </li>
      </ul>
      <ul>
        <li className="text-white text-lg my-6">Links</li>
        <li className={li}>contact</li>
        <li className={li}>Privacy Policy</li>
        <li className={li}>Tools</li>
        <li className={li}>Content Creators</li>
        <li className={li}>Build Planner</li>
      </ul>
      <ul>
        <li className="text-white text-lg my-6">Officilas</li>
        <li className={li}>Discord</li>
        <li className={li}>Reddit</li>
        <li className={li}>Blizzard Forum</li>
        <li className="text-white text-lg my-6">Other sites by me</li>
        <li className={li}>D2Runwizard</li>
      </ul>
    </footer>
  );
};

export default Footer;
