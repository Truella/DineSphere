import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroHeadline() {
  return (
    <div className="w-auto">
      {" "}
      <h1 className="font-bold text-[40px] md:text-[64px] text-rich-red-primary leading-none">
        {" "}
        <Typewriter
          words={["The DineSphere!", "Your Food Haven", "The Flavour Hub"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={150}
          deleteSpeed={80}
          delaySpeed={3000}
        />
      </h1>
    </div>
  );
}
