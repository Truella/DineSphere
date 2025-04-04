import React from "react";

export default function AboutText() {
  return (
    <div className="md:w-[50%] md:pr-2">
      <div>
        <h2 className="font-bold text-4xl mb-5">Our Story</h2>
        <p className="leading-relaxed">
          Founded in 2012, our journey began with a simple goal—to create a
          space where everyone feels at home while enjoying exceptional food
          made with the freshest ingredients. Over the years, we’ve expanded to
          serve a variety of dishes inspired by flavors from around the world.
        </p>
        <br />
        <p className="leading-relaxed">
          At <span className="">The DineSphere</span>, we believe food is more
          than just a meal—it’s an experience. From sizzling fast food delights
          to exquisite casual dining, we bring you the best of both worlds.
        </p>
        <br />
        <p className="leading-relaxed">
          {" "}
          Whether you're craving a juicy burger, a fresh salad, or a gourmet
          steak, we've got something to satisfy every craving.
        </p>
      </div>

      <div className="flex justify-between py-3 mt-4">
        <a href="/menu" className="p-2 rounded-md bg-red-600 text-white font-bold">
          Explore Menu
        </a>
        <a href="/reservations" className=" p-2 rounded-md bg-red-600 text-white font-bold">
          Book a Table
        </a>
      </div>
    </div>
  );
}
