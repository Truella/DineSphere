import React from "react";
import NavLink from "./Link";

export default function Nav({ navIsOpen }) {
  const navLinks = [
    { id: 1, value: "Home", path: "/" },
    { id: 2, value: "Menu", path: "/menu" },
    { id: 3, value: "Order Online", path: "/order-online" },
    { id: 4, value: "Make a Reservation", path: "/reservation" },
    { id: 5, value: "Contact Us", path: "/contact" },
  ];
  return (
    <nav
      className={`${
        !navIsOpen ? "h-0 opacity-0" : "h-[45vh] opacity-100"
      } overflow-hidden transition-all duration-500 ease-in-out md:flex md:w-[80vw] md:justify-between md:opacity-100 md:h-auto`}
    >
      <div className="px-4 md:flex md:items-center md:w-[60vw] justify-center">
        {navLinks.map((link) => (
          <NavLink link={link} key={link.id} />
        ))}
      </div>
      <div className="flex justify-around md:justify-end md:w-[20vw]">
        <button className="md:mx-2 p-2">Sign Up</button>
        <button className="md:mx-2 p-2">Sign In</button>
      </div>
    </nav>
  );
}
