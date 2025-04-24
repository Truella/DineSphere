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
    <header className="md:flex md:justify-between md:items-center w-[100%] md:px-12 sticky top-0 left-0 z-[500] bg-rich-red-primary text-deep-gold-secondary md:h-[10vh]">
      <div className=" flex justify-between items-center p-4 md:w-[20vw]">
        <Logo />
        <div className="md:hidden" onClick={toggleNavState}>
          {!navIsOpen && <FaBarsStaggered size={'32px'}/>}
          {navIsOpen && <FaX size={'32px'}/>}
        </div>
      </div>
      <Nav navIsOpen={navIsOpen} />
    </header>
  );
}
