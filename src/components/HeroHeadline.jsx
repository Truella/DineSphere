import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroHeadline() {
  return (
    <div className="w-[90%] min-h-[150px] md:ml-20 ">
      {" "}
      <h1 className="font-bold text-5xl md:text-7xl">
        Welcome to{" "}
        <span className="text-red-600 min-w-[200px] ">
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
        </span>
      </h1>
    </div>
  );
}
