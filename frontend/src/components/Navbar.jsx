import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">TranscriberPro</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link className="hover:text-gray-400 transition" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 transition" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;