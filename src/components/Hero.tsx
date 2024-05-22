import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

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
        {/* <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#5d3ed8"
        /> */}
      </div>

      {/**
       *  UI: grid
       */}
      <div className="dark:bg-dot-ash/[0.3] bg-dot-primary/[0.3] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-ash dark:bg-primary">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ash [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2736)] dark:bg-primary"></div>
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Welcome!
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi! I&apos;m Shirley, a Front-end Developer based in Stockholm
            Sweden.
          </p>

          {/* <a href="#about">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
            >
              <span>Show my work</span>
              <FaLocationArrow />
            </HoverBorderGradient>
          </a> */}
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow className="h-5 w-5" />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
