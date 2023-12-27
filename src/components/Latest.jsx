import React from "react";
import DiabloLatest from "./DiabloLatest";

const Latest = () => {
  return (
    <div className="flex flex-row">
      <DiabloLatest
        img={
          "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2Fa994457ee49f3fd37b0e7db1efba4554539c7f06-1574x816.png&w=384&q=75"
        }
        text={"Uber Unique Drop Rates Doubled Until January 8th"}
        atext={"13 hours ago, by Prowner"}
      />{" "}
      <DiabloLatest
        img={
          "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F9829a237e6ff6d95573d0089c7c0772d9b57518e-1574x816.png&w=384&q=75"
        }
        text={"Free Mount Armor and Mount Trophies Gift"}
        atext={"yesterday, by Prowner"}
      />
      <DiabloLatest
        img={
          "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2Fb22e5693ff73d5ae2c803daa6822578d36585590-1574x816.png&w=384&q=75"
        }
        text={
          "Domination Is Bugged and Is One-Shotting Players Without Them Knowing"
        }
        atext={"4 days ago, by Prowner"}
      />
      <DiabloLatest
        img={
          "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F4cd09e9ff57419c672443fc9756a92159f2f9fab-1574x816.png&w=384&q=75"
        }
        text={"Significantly Reduced Cost for Bloodforged Sigils"}
        atext={"6 days ago, by Prowner"}
      />
    </div>
  );
};

export default Latest;
