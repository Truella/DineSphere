import React, { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNavState = () => {
    setNavIsOpen((prev) => !prev);
  };
  return (
    <header className="md:flex md:justify-between md:items-center w-[100%] sticky top-0 left-0 z-[500] bg-white">
      <div className=" flex justify-between items-center p-4">
        <Logo />
        <div className="md:hidden" onClick={toggleNavState}>
          {!navIsOpen && <FaBarsStaggered />}
          {navIsOpen && <FaX />}
        </div>
      </div>
      <Nav navIsOpen={navIsOpen} />
    </header>
  );
}
