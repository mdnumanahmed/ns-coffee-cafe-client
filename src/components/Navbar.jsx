import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto  md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <NavLink to="/" className="flex items-center px-4 dark:border-">
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/menu"
                className="flex items-center px-4 dark:border-"
              >
                Our Menu
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/coffee-club"
                className="flex items-center px-4 dark:border- dark:text-fuchsia-600 dark:border-fuchsia-600"
              >
                Coffee Club
              </NavLink>
            </li>
          </ul>
          <Link
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-3 w-16 rounded-full ring-2 ring-black"
          >
            <img src={logo} alt="" />
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <NavLink
                to="/dashboard"
                className="flex items-center px-4 dark:border-"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/add-coffee"
                className="flex items-center px-4 dark:border-"
              >
                Add Coffee
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/we-offer"
                className="flex items-center px-4 dark:border-"
              >
                We Offer
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact"
                className="flex items-center px-4 dark:border-"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden gap-3 lg:flex">
            <button className="self-center btn btn-outline dark:bg-fuchsia-600 dark:text-gray-50">
              Sign in
            </button>
            <button className="self-center btn btn-primary dark:bg-fuchsia-600 dark:text-gray-50">
              Sign up
            </button>
          </div>
          <button title="Button" type="button" className="p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;