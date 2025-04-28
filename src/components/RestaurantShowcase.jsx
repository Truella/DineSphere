import React, { useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCouch,
  FaBolt,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { motion } from "framer-motion";
const restaurantEnvironment = [
  {
    id: 1,
    img: "images/interior.jpg",
    alt: "Spacious and cozy restaurant interior with warm lighting",
  },
  {
    id: 2,
    img: "images/indoor.jpg",
    alt: "Outdoor seating area with umbrella shades and greenery",
  },
  {
    id: 3,
    img: "images/indoor_view.jpg",
    alt: "Happy customers dining at a wooden table",
  },
  {
    id: 4,
    img: "images/outdoor_view.jpg",
    alt: "Beautiful night view of the restaurant with glowing lights",
  },
];

export default function RestaurantShowcase() {
  const [currIndex, setCurrIndex] = useState(0);

  const handleNext = () => {
    setCurrIndex((prev) => (prev + 1) % restaurantEnvironment.length);
  };

  const handlePrev = () => {
    setCurrIndex(
      (prev) =>
        (prev - 1 + restaurantEnvironment.length) % restaurantEnvironment.length
    );
  };

  return (
    <div className="w-[90%] md:w-[80vw] bg-white rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] p-12 mx-auto md:flex md:justify-between items-start gap-10 ">
      {/* Left side - Description and Info */}
      <div className="md:w-[35%] text-base text-gray-800">
        <h2
          className="font-[600] text-2xl  text-rich-red-primary mb-1"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
        >
          <GiKnifeFork className="inline align-middle mr-2" />
          Reserve Your Spot!
        </h2>
        <p className=" text-sm mb-8 text-gray-600">
          <i>Where Great Food Meets a Stunning Ambiance.</i>
        </p>
        <div className="space-y-5">
          <p>
            Step into a cozy and vibrant atmosphere where great meals meet great
            memories. Whether you're here for a quick bite or a slow evening,
            we’ve got the perfect setting for every occasion.
          </p>

          <ul className="space-y-2">
            <li>
              <FaCouch
                size={"32px"}
                className="inline text-rich-red-primary align-middle mr-2"
              />{" "}
              Cozy indoor & outdoor seating.
            </li>
            <li>
              <FaBolt
                size={"32px"}
                className="inline text-rich-red-primary align-middle mr-2"
              />{" "}
              Fast online reservations.
            </li>
            <li>
              <FaUsers
                size={"32px"}
                className="inline text-rich-red-primary align-middle mr-2"
              />{" "}
              Perfect for family gatherings.
            </li>
            <li>
              <FaStar
                size={"32px"}
                className="inline text-rich-red-primary align-middle mr-2"
              />{" "}
              5-star customer reviews.
            </li>
          </ul>

          <button className="mt-4 px-5 py-2 bg-rich-red-primary text-white rounded-full hover:bg-red-700 transition">
            Book a Table
          </button>

          <div className="pt-4 border-t text-gray-600">
            <p>
              <strong>Opening Hours:</strong>
            </p>
            <p>Mon–Sun: 11am – 10pm</p>
            <p className="mt-1">
              <strong>Call us:</strong> (555) 123-4567
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Carousel */}
      <div className="relative w-full md:w-[50%] max-w-[450px] mt-8 md:mt-0">
        <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
          <motion.img
            src={`${import.meta.env.BASE_URL}${
              restaurantEnvironment[currIndex].img
            }`}
            key={restaurantEnvironment[currIndex].id}
            alt={restaurantEnvironment[currIndex].alt}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Carousel Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-rich-red-primary text-white rounded-full flex items-center justify-center shadow opacity-70 hover:opacity-100 hover:bg-red-700 transition"
          aria-label="Previous image"
        >
          <FaAngleLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 opacity-70 translate-x-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-rich-red-primary text-white rounded-full flex items-center justify-center shadow hover:bg-red-700 hover:opacity-100 transition-all "
          aria-label="Next image"
        >
          <FaAngleRight size={24} />
        </button>
      </div>
    </div>
  );
}
