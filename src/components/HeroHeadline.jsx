import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroHeadline() {
  return (
    <div className="w-auto">
      {" "}
      <h1 className="font-bold text-3xl md:text-[64px] text-rich-red-primary">
        {" "}
        <Typewriter
          words={[
            " The DineSphere!",
            "A Taste of Perfection",
            "Your Food Haven",
          ]}
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
