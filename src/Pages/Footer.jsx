import { Link, NavLink } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  return (
    <>
      {/* Donate Banner */}
      <div
        className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-center py-10 px-4 rounded-lg shadow-lg"
        data-aos="fade-down"
      >
        <p className="text-2xl font-bold text-white mb-4 drop-shadow">
          🌟 Join Us in Making a Difference – <br className="hidden sm:block" />{" "}
          Kindly Donate Today
        </p>
        <NavLink
          to="/donation"
          className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition transform hover:scale-105"
        >
          💝 Donate Now
        </NavLink>
      </div>

 {/* Social Fixed Icons */}
        <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-4 z-50 text-xl">
          <a
            href="https://www.facebook.com/share/17We5HFBxg/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/kashmirlitfest/profilecard/?igsh=MW81cWZ4MXBqNnh4bA=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="http://www.x.com/kashmirlitfest"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
          >
            <FaTwitter />
          </a>
        </div>

      <footer
        className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-200 font-inter"
        data-aos="fade-up"
      >
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address + Map */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-white mb-4">Address</h3>
            <p className="text-sm mb-4">
              At Dal Lakefront, SKICC, Srinagar, Bharat, 190001
            </p>
            <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-lg border border-gray-600">
              <iframe
                width="100%"
                height="100%"
                style={{ border: "0" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACxc35CQpI0mZsknOyBKC3UbvJP24iD98&q=Srinagar+Kashmir+India"
              ></iframe>
            </div>
          </div>

          {/* Quick Links + Socials */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            {/* Flex container for two ULs */}
            <div className="flex flex-wrap gap-10">
              {/* Existing Quick Links */}
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/archive"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    Archive
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programme"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutklf25"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    About KLF 25
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* New Legal Links */}
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    to="/privacypolicy"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refundpolicy"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/termsandconditions"
                    className="hover:text-orange-400 transition duration-300 font-medium"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6 text-xl">
              <a
                href="https://www.facebook.com/share/17We5HFBxg/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/kashmirlitfest/profilecard/?igsh=MW81cWZ4MXBqNnh4bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="http://www.x.com/kashmirlitfest"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact + Subscribe */}
          <div data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <FaGlobe className="text-lg mt-1 text-orange-400" />
                <Link
                  to="/about"
                  className="hover:text-orange-400 font-medium transition duration-300"
                >
                  Srikula Foundation
                </Link>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-lg mt-1 text-orange-400" />
                <p className="font-medium">
                  2nd floor, Opposite Townhall, Budgam - 191111, Bharat
                </p>
              </div>
              <div className="flex items-start gap-2">
                <FaPhoneAlt className="text-lg mt-1 text-orange-400" />
                <p>
                  <a
                    href="tel:+916005680446"
                    className="hover:underline font-medium"
                  >
                    +91 60056 80446
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <FaEnvelope className="text-lg mt-1 text-orange-400" />
                <a
                  href="mailto:team@kashmirliteraturefestival.com"
                  className="hover:underline font-medium"
                >
                  contact@kashmirliteraturefestival.com
                </a>
              </div>
            </div>

            {/* Subscribe */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">
                Subscribe for More News
              </p>
              <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 text-black text-sm focus:outline-none"
                />
                <button className="bg-orange-600 px-5 py-2 text-sm hover:bg-orange-500 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="bg-black/90 py-3 text-center text-sm text-gray-400"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          © 2024 KLF | Powered by{" "}
          <span className="bg-orange-600 px-2 py-1 rounded-md font-bold text-white ml-1">
            WOS Media
          </span>
        </div>
      </footer>
    </>
  );
}
