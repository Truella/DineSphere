import React from "react";

export default function FeaturedMeals({ meal }) {
  return (
    <div className="min-w-[180px] w-[180px] h-[200px] border mr-5 rounded-md p-3">
      <h1>{meal.name}</h1>
      <p>{meal.price}</p>
    </div>
  );
}
