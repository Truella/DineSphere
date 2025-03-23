import React from "react";
import { Link } from "react-router-dom";
export default function NavLink({ link }) {
  return (
    <div className="my-5 md:mx-5">
      <Link to={link.path} > {link.value}</Link>
    </div>
  );
}
