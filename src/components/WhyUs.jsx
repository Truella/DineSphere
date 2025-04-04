import React from "react";

export default function WhyUs() {
  return (
    <div className=" mt-12 w-[90vw] md:w-[80vw] m-auto">
      {" "}
      <h2 className="font-[600] text-2xl mb-4">What Makes Us Special</h2>
      <ul className="flex justify-between items-center flex-col md:flex-row">
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-4 md:mb-0">
          <strong>Diverse Menu:</strong> Quick bites to fine dining.
        </li>
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-4 md:mb-0">
          <strong>Fresh Ingredients:</strong> Farm-to-table quality.
        </li>
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-4 md:mb-0">
          <strong>Top Chefs:</strong> Authentic flavors on every plate.
        </li>
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-4 md:mb-0">
          <strong>Top Chefs:</strong> Authentic flavors on every plate.
        </li>
      </ul>
    </div>
  );
}
