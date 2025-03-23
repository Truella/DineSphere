import React from "react";

export default function WhyUs() {
  return (
    <div className=" my-8 w-[80%] m-auto">
      {" "}
      <h2 className="font-[600] text-3xl mb-5">What makes us special</h2>
      <ul className="flex justify-between items-center flex-col md:flex-row">
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-5">
          <strong>Diverse Menu:</strong> Quick bites to fine dining.
        </li>
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-5">
          <strong>Fresh Ingredients:</strong> Farm-to-table quality.
        </li>
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-5">
          <strong>Top Chefs:</strong> Authentic flavors on every plate.
        </li>
        <li className="w-[250px] h-[120px] border p-3 rounded-md mb-5">
          <strong>Top Chefs:</strong> Authentic flavors on every plate.
        </li>
      </ul>
    </div>
  );
}
