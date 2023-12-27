import React from "react";
import BCard from "./BCard";
import Card from "./Card";
import QuickLinks from "./QuickLinks";
import GuideCard from "./GuideCard";
import Diablo4Guides from "./Diablo4Guides";
import Latest from "./Latest";
import Ready from "./Ready";
import Comments from "./Comments";

const Hero = () => {
  return (
    <section className="mx-20 mt-20">
      <h3 className="text-white text-2xl my-5">Featured News</h3>
      <div className="flex flex-row">
        <BCard />
        <div className="">
          <Card
            img={
              "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F9829a237e6ff6d95573d0089c7c0772d9b57518e-1574x816.png&w=256&q=75"
            }
            text={"Free Mount Armor and Mount Trophies Gift"}
            atext={"yesterday by prowner"}
          />
          <Card
            img={
              "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F4cd09e9ff57419c672443fc9756a92159f2f9fab-1574x816.png&w=256&q=75"
            }
            text={"Significantly Reduced Cost for Bloodforged Sigils"}
            atext={"6 days ago by Prowner"}
          />
          <Card
            img={
              "https://diablo4.life/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp9yc0a85%2Fproduction%2F8c789dc35ac6f461f1ac94a1f8478719122cd7d9-1574x816.png&w=256&q=75"
            }
            text={"Midwinter Blight: All Details Explained (Now Live!)"}
            atext={"2 weeks ago by prowner updated 6 days ago"}
          />
        </div>
      </div>
      <QuickLinks />
      <Diablo4Guides />
      <Ready />
      <Latest />
      <Comments />
    </section>
  );
};

export default Hero;
