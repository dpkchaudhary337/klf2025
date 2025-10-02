import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Archive", path: "/archive" },
  { name: "Calendar", path: "/programme" },
  { name: "Contact Us", path: "/contact" },
  { name: "About KLF 25", path: "/aboutklf25" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] font-inter text-white shadow-lg">
      <div className="flex-col px-6 md:px-10 py-3">
        <div className="flex items-center justify-between sm:justify-around">
          {/* Logo Section */}
          <div className="relative flex items-center w-28">
            <Link to={"/"}>
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-20 absolute -bottom-14 left-1/2 -translate-x-1/2"
              />
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl hover:text-orange-400 transition" />
            ) : (
              <FaBars className="text-2xl hover:text-orange-400 transition" />
            )}
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            {links.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-orange-400 text-orange-400 transition"
                    : "hover:text-orange-400 hover:scale-105 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/registration"
              className="px-5 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200 animate-ctaPulse"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-3 flex flex-col space-y-4 text-sm font-medium bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-5 py-6 rounded-md shadow-lg">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-orange-400 border-b-2 border-orange-400" : ""
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/registration"
            className="px-5 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200 animate-ctaPulse"
          >
            Book Now
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
