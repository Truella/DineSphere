import React, { useState } from "react";
import Button from "../UI/Button";
import FeaturedMealContainer from "./FeaturedMealContainer";
const mealCategories = [
  {
    id: 1,
    name: "Popular",
    meals: [
      { id: 101, name: "Jollof Rice", img: "images/jollof.jpg", alt: "Jollof Rice with grilled chicken" },
      { id: 102, name: "Burger Deluxe", img: "images/burgerDeluxe.jpg", alt: "Deluxe beef burger" },
      { id: 103, name: "Grilled Chicken", img: "images/GrilledChicken.jpg", alt: "Juicy grilled chicken" },
      { id: 104, name: "Efo Riro", img: "images/efo_riro.jpg", alt: "Efo Riro Nigerian vegetable soup" },
      { id: 105, name: "Fried Rice", img: "images/fried_rice.jpg", alt: "Fried rice served with grilled chicken" },
    ],
  },
  {
    id: 2,
    name: "Breakfast",
    meals: [
      { id: 201, name: "Scrambled Eggs & Toast", img: "images/Scrambled_egg_toast.jpg", alt: "Scrambled eggs with toast" },
      { id: 202, name: "Pancakes & Syrup", img: "images/pancake.jpg", alt: "Stack of pancakes with syrup" },
      { id: 203, name: "Oats with Fruits", img: "images/oat.jpg", alt: "Bowl of oats topped with fruits" },
      { id: 204, name: "Pap", img: "images/Pap.jpg", alt: "Pap with milk in a bowl" },
      { id: 205, name: "Tea & Sandwich", img: "images/Tea_n_Sandwich.jpg", alt: "Sandwich served with tea" },
    ],
  },
  {
    id: 3,
    name: "Nigerian",
    meals: [
      { id: 301, name: "Rice and Beans", img: "images/rice_n_beans.jpg", alt: "Amala served with ewedu and stew" },
      { id: 302, name: "Egusi Soup & Pounded Yam", img: "images/Poundo.jpg", alt: "Egusi soup with pounded yam" },
      { id: 303, name: "Moi Moi", img: "images/GrilledChicken.jpg", alt: "Steamed moi moi in leaves" },
      { id: 304, name: "Rice", img: "images/concoction.jpg", alt: "Okro soup with assorted meat" },
      { id: 305, name: "Nkwobi", img: "images/GrilledChicken.jpg", alt: "Spicy Nkwobi in a bowl" },
    ],
  },
  {
    id: 4,
    name: "Fast Food",
    meals: [
      { id: 401, name: "Cheese Burger", img: "images/cheese_burger.jpg", alt: "Cheeseburger with lettuce and tomato" },
      { id: 402, name: "French Fries", img: "images/Fries.jpg", alt: "Golden crispy french fries" },
      { id: 403, name: "Chicken Nuggets", img: "images/chicken_wings.jpg", alt: "Crispy chicken nuggets with dip" },
      { id: 404, name: "Spicy Dodo", img: "images/dodo.jpg", alt: "Fried spicy plantain slices" },
      { id: 405, name: "Spicy Shawarma", img: "images/shawarma.jpg", alt: "Shawarma wrap with spicy filling" },
    ],
  },
  {
    id: 5,
    name: "BBQ and Grills",
    meals: [
      { id: 501, name: "Grilled Tilapia", img: "images/grilled_tilapia.jpg", alt: "Grilled tilapia fish with garnishing" },
      { id: 502, name: "BBQ Chicken Wings", img: "images/grilled_wings.jpg", alt: "BBQ chicken wings with sauce" },
      { id: 503, name: "Grilled Turkey", img: "images/GrilledChicken.jpg", alt: "Char-grilled turkey cuts" },
      { id: 504, name: "Suya", img: "images/suya.jpg", alt: "Spicy beef suya on sticks" },
      { id: 505, name: "BBQ Ribs", img: "images/ribs.jpg", alt: "Sticky BBQ pork ribs" },
    ],
  },
  {
    id: 6,
    name: "Cuisines",
    meals: [
      { id: 601, name: "Chinese Fried Rice", img: "images/chinese_fried_rice.jpg", alt: "Chinese-style fried rice with vegetables" },
      { id: 602, name: "Spaghetti Bolognese", img: "images/bolognese.jpg", alt: "Spaghetti with Bolognese sauce" },
      { id: 603, name: "Spicy Minced Chicken", img: "images/minced_chicken.jpg", alt: "Creamy butter chicken curry" },
      { id: 604, name: "Tacos", img: "images/tacos.jpg", alt: "Assorted tacos with fillings" },
      { id: 605, name: "Sushi Rolls", img: "images/sushi.jpg", alt: "Plate of assorted sushi rolls" },
    ],
  },
];

export default function QuickPicks() {
  const [currFeaturedMeal, setCurrFeaturedMeal] = useState(
    mealCategories[0].meals
  );
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-[90vw] md:w-[80vw] mx-auto mt-24">
      <h2
        className="font-[600] text-2xl text-center text-rich-red-primary"
        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }} 
      >
        Explore Our Meals
      </h2>
      <p className="text-center text-sm font-semibold"><i>Explore. Discover. Devour.</i></p>
      <div className="border-b-2 border-forest-green my-4">
        {mealCategories.map((category, index) => (
          <Button
            key={category.id}
            value={category.name}
            meals={category.meals}
            setCurrFeaturedMeal={setCurrFeaturedMeal}
            isActive={activeIndex == index}
            setActiveIndex={setActiveIndex}
            index={index}
          />
        ))}
      </div>
      <FeaturedMealContainer currFeaturedMeal={currFeaturedMeal} />
    </section>
  );
}
