import React from "react";
import FeaturedMeal from "./FeaturedMeal";
import { FaRightLong } from "react-icons/fa6";

export default function FeaturedMealContainer({ currFeaturedMeal }) {
  return (
    <div className="flex flex-row flex-nowrap gap-8 overflow-x-auto scroll-smooth py-4 px-2">
      {currFeaturedMeal.map((curr, index) => (
        <div className="shrink-0" key={index}>
          <FeaturedMeal curr={curr} />
        </div>
      ))}
      <div className="shrink-0 flex items-center justify-center">
        <button className="p-4 bg-deep-gold-secondary text-rich-red-primary font-semibold rounded-lg">
         <span>Go to Menu</span>  <span><FaRightLong className="inline"/></span>
        </button>
      </div>
    </div>
  );
}
