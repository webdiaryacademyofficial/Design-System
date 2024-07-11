import React from "react";
import { Link } from "react-router-dom";
import { NavbarProps } from "./type";

const Navbar: React.FC<NavbarProps> = ({ brandName, links }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          {brandName}
        </Link>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className="text-white hover:text-gray-300">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
