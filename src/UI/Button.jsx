import React from "react";

export default function Button({
  value,
  meals,
  setCurrFeaturedMeal,
  isActive,
  setActiveIndex,
  index,
}) {
  const handleClick = () => {
    setCurrFeaturedMeal(meals);
    setActiveIndex(index);
  };
  return (
    <button
      className={` border-b-2  mr-12 mb-1 font-semibold hover:font-semibold hover:border-b-rich-red-primary transition-all ease-in-out duration-300 ${
        isActive ? "text-rich-red-primary border-b-rich-red-primary" : "text-black border-b-transparent"
      }`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
