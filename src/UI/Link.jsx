import React from "react";
import { Link } from "react-router-dom";
export default function NavLink({ link }) {
  return (
    <div className="my-4 md:mx-4">
      <Link to={link.path} > {link.value}</Link>
    </div>
  );
}
