import React from "react";
import GuideCard from "./GuideCard";

const Diablo4Guides = () => {
  return (
    <div className="my-10">
      <h3 className="text-2xl text-white my-5">Diablo4Guides</h3>
      <div className="flex flex-row">
        <GuideCard
          img={
            "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F20c4a68fd3e4df64fc0f3f319553399485c58596-1574x816.png&w=384&q=75"
          }
          heading={"How to Find The Secret Cow Level"}
          posted={"2 weeks ago, by Prowner"}
          atext={"updated 1 week ago"}
        />
        <GuideCard
          img={
            "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F8c789dc35ac6f461f1ac94a1f8478719122cd7d9-1574x816.png&w=384&q=75"
          }
          heading={"Midwinter Blight: All Details Explained (Now Live!)"}
          posted={"2 weeks ago, by Prowner"}
          atext={"updated 6 days ago"}
        />
        <GuideCard
          img={
            "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F2da174155a872cf74171f8a252547f313339c517-1574x816.png&w=384&q=75"
          }
          heading={
            "Diablo 4 Gambling Tool Guide: Maximize Your Legendary Aspect Odds"
          }
          posted={"3 weeks ago, by Prowner"}
        />
      </div>
    </div>
  );
};

export default Diablo4Guides;
