import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import srikulalogo from "../assets/srikulalogo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Archive", path: "/archive" },
  { name: "KLF 2025", path: "/klf2025" },
  // { name: "Media", path: "/media" },
  { name: "Contact Us", path: "/contact" },
  { name: "Brochure", path: "/brochure" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] font-inter text-white shadow-lg">
      <div className="flex-col px-6 md:px-10 py-3">
        <div className="flex items-center justify-between sm:justify-around">
          {/* Logo Section */}
          <Link to={"/"} className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-14 rounded-full shadow-md"
            />
          </Link>

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

          {/* Navigation Links (Desktop) */}
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

          {/* Right Side Section */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Booking Button */}
            <Link
              to="/registration"
              className="px-5 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200"
            >
              Book Now
            </Link>

            {/* Srikula Logo */}
            <div className="w-14 h-14 rounded-full flex justify-center items-center mx-auto bg-white shadow-md hover:scale-105 transition">
              <a target="_blank" rel="noreferrer" href="https://srikula.org/">
                <img
                  src={srikulalogo}
                  alt="logo"
                  className="w-full h-full cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-3 flex flex-col space-y-4 text-sm font-medium bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-5 py-6 rounded-md shadow-lg">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-400 border-b-2 border-orange-400" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/archive"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-400 border-b-2 border-orange-400" : ""
            }
          >
            Archive
          </NavLink>
          <NavLink
            to="/klf2025"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-400 border-b-2 border-orange-400" : ""
            }
          >
            KLF 2025
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-400 border-b-2 border-orange-400" : ""
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/brochure"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-400 border-b-2 border-orange-400" : ""
            }
          >
            Brochure
          </NavLink>

          {/* Booking Button (Mobile) */}
          <Link
            to="/registration"
            className="px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full text-center font-semibold shadow-md hover:scale-105 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>

          <div className="w-12 h-12 mx-auto mt-4 bg-white shadow-md rounded-full overflow-hidden">
            <img src={srikulalogo} alt="logo" className="w-full h-full" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
