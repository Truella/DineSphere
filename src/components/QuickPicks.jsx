import React, { useState } from "react";
import FeaturedMeals from "./FeaturedMeals";
const fastFood = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 8.99,
    image: "cheeseburger.jpg",
  },
  { id: 2, name: "Shawarma Wrap", price: 6.99, image: "shawarma.jpg" },
  { id: 3, name: "Loaded Fries", price: 5.99, image: "loaded_fries.jpg" },
  { id: 4, name: "Chicken Nuggets", price: 7.49, image: "nuggets.jpg" },
  {
    id: 5,
    name: "Pepperoni Pizza",
    price: 10.99,
    image: "pepperoni_pizza.jpg",
  },
];
const bbqGrills = [
  {
    id: 6,
    name: "Spicy Chicken Wings",
    price: 9.99,
    image: "chicken_wings.jpg",
  },
  { id: 7, name: "T-bone Steak", price: 14.99, image: "tbone_steak.jpg" },
  { id: 8, name: "Grilled Fish", price: 12.99, image: "grilled_fish.jpg" },
  { id: 9, name: "BBQ Pork Ribs", price: 13.99, image: "bbq_ribs.jpg" },
  {
    id: 10,
    name: "Suya (Spiced Grilled Meat)",
    price: 8.49,
    image: "suya.jpg",
  },
];

const cuisines = [
  {
    id: 11,
    name: "Jollof Rice & Grilled Chicken",
    price: 10.99,
    image: "jollof_rice.jpg",
  },
  { id: 12, name: "Pasta Alfredo", price: 11.99, image: "pasta_alfredo.jpg" },
  { id: 13, name: "Sushi Platter", price: 15.99, image: "sushi_platter.jpg" },
  {
    id: 14,
    name: "Butter Chicken with Naan",
    price: 12.49,
    image: "butter_chicken.jpg",
  },
  {
    id: 15,
    name: "Chinese Stir-fry Noodles",
    price: 9.99,
    image: "stir_fry_noodles.jpg",
  },
];

export default function QuickPicks() {
  const [currFeaturedMeal, setCurrFeaturedMeal] = useState(cuisines);
  const handleClick = (meals) => {
    setCurrFeaturedMeal(meals);
  };
  return (
    <section className="w-[90vw] md:w-[80vw] mx-auto mt-12">
      <h2
        className="font-[600] text-2xl text-center mb-4 text-rich-red-primary"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
      >
        Explore Our Meals
      </h2>
      <div className="border-b-2 border-forest-green mb-5">
        <button
          className="mr-7 font-[600]"
          onClick={() => handleClick(cuisines)}
        >
          Cuisines
        </button>
        <button
          className="mr-7 font-[600]"
          onClick={() => handleClick(fastFood)}
        >
          Fast Food
        </button>
        <button
          className="mr-7 font-[600]"
          onClick={() => handleClick(bbqGrills)}
        >
          BBQ & Grills
        </button>
      </div>
      <div className="flex overflow-x-scroll">
        {currFeaturedMeal.map((meal) => (
          <FeaturedMeals meal={meal} />
        ))}
      </div>
    </section>
  );
}
