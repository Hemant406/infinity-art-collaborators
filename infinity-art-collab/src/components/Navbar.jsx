import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-amber-100 w-full shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijuJa7YtMrN-rtQNnaEhD-XtnP0SorW9uHA&s"
            alt="logo"
            className="w-14 h-14 object-contain mix-blend-multiply"
          />
          <h3 className="text-lg sm:text-xl text-gray-600 font-semibold leading-tight">
            Infinity <br /> Art Collaborators
          </h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg text-gray-600 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="bg-blue-500 hover:bg-blue-400 rounded-full py-2 px-5 text-white cursor-pointer font-semibold">
            Log in
          </button>

          <button className="bg-black hover:bg-gray-700 rounded-full py-2 px-5 text-white cursor-pointer font-semibold">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-amber-100 px-6 py-4 flex flex-col gap-4 text-gray-700 text-lg font-semibold border-t">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/collections" onClick={() => setOpen(false)}>Collections</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>

          <button className="bg-blue-500 hover:bg-blue-400 rounded-full py-2 px-5 text-white cursor-pointer font-semibold">
            Log in
          </button>

          <button className="bg-black hover:bg-gray-700 rounded-full py-2 px-5 text-white cursor-pointer font-semibold">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
