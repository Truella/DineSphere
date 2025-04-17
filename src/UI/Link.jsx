import React from "react";
import { Link } from "react-router-dom";
export default function NavLink({ link }) {
  return (
    <div className="my-4 md:mx-4 font-[500] transition-all duration-300 ease-in-out border-b border-b-transparent hover:border-b-deep-gold-secondary">
      <Link to={link.path} > {link.value}</Link>
    </div>
  );
}
