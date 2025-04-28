import React from "react";
import { FaCouch } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import { GiTomato } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
const reasons = [
  {
    id: 1,
    title: "Diverse Menu",
    description: "Quick bites to fine dining, something for everyone.",
    icon: <FaUtensils size={"32px"} color="#FFD700" />,
  },
  {
    id: 2,
    title: "Fresh Ingredients",
    description:
      "We use only the freshest, ingredients for quality you can taste.",
    icon: <GiTomato size={"32px"} color="#FFD700" />,
  },
  {
    id: 3,
    title: "Fast & Friendly Service",
    description:
      "Our team is always ready to serve you with a smile and speed.",
    icon: <MdSupportAgent size={"32px"} color="#FFD700" />,
  },
  {
    id: 4,
    title: "Cozy Atmosphere",
    description:
      "Enjoy your meal in a warm and inviting space that feels like home.",
    icon: <FaCouch size={"32px"} color="#FFD700" />,
  },
];

export default function WhyUs() {
  return (
    <section className="flex items-center justify-center mt-24 w-[100%] h-auto md:h-[400px] bg-rich-red-primary">
      <div>
        <h2
          className="font-[600] mb-6 text-center text-2xl text-deep-gold-secondary"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
        >
          What Makes Us Special
        </h2>
        <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4 w-[85vw] mx-auto">
          {reasons.map((reason) => (
            <div
              className="flex flex-col h-[150px] items-center rounded-lg p-2"
              key={reason.id}
            >
              <div className="flex justify-center">{reason.icon}</div>{" "}
              <h3 className="text-deep-gold-secondary text-sm font-semibold mb-2">
                {reason.title}{" "}
              </h3>
              <span className="text-sm leading-relaxed text-white">
                {" "}
                {reason.description}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="/menu"
            className="p-2 rounded-md bg-deep-gold-secondary text-charcoal-black font-[500] shadow-md shadow-[#FFD700]/35 hover:shadow-lg hover:shadow-[#FFD700]/40 transition duration-3"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}
