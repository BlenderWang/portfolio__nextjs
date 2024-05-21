import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero: React.FC = () => {
  return (
    <div className="hero pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-80 top-28 h-[90vh] w-[50vw]"
          fill="#43FFFF"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#5d3ed8"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className="dark:bg-grid-ash/[0.15] bg-grid-primary/[0.15] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-ash dark:bg-primary">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ash [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2736)] dark:bg-primary"></div>
      </div>
    </div>
  );
};

export default Hero;
