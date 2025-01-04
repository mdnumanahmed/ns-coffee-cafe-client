import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import PageHeader from "./PageHeader";
import { BiAlignRight, BiX } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import homeBg from "../assets/home-bg.jpg";
import offerBg from "../assets/offer-bg.jpg";
import clubBg from "../assets/club-bg.png";
import giftBg from "../assets/gift-bg.jpg";
import coffeeBg from "../assets/coffee-bg.jpg";

const Navbar = () => {
  // const homeBg = "home-bg.jpg";
  // const offerBg = "offer-bg.jpg";
  // const clubBg = "club-bg.png";
  // const giftBg = "gift-bg.jpg";
  // const coffeeBg = "coffee-bg.jpg";

  const { user, logOut } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  // let path = location.pathname.split("/")[2];
  let image =
    location.pathname === "/"
      ? homeBg
      : location.pathname === "/coffee-club"
      ? clubBg
      : location.pathname === "/we-offer"
      ? giftBg
      : location.pathname === "/menu"
      ? offerBg
      : location.pathname === `/add-product`
      ? coffeeBg
      : location.pathname === `/my-products`
      ? offerBg
      : homeBg;
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative ">
      <header
        style={{ backgroundImage: `url(${image})` }}
        className={` p-4 dark:text-gray-800 bg-cover bg-no-repeat`}
      >
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./src/assets/home.mp4" type="video/mp4" />
          <source src="/path-to-your-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video> */}
        <div className="container flex justify-between z-10 h-16 mx-auto bg-transparent md:space-x-8">
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
            className="flex items-center p-3 w-16 rounded-full bg-white/50 ring-2 ring-white"
          >
            <img src={user ? user.photoURL : logo} alt="" />
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            {user ? (
              <>
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
                    to="/add-product"
                    className="flex items-center px-4 dark:border-"
                  >
                    Add Product
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to="/my-products"
                    className="flex items-center px-4 dark:border-"
                  >
                    My Products
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
                    to="/blogs"
                    className="flex items-center px-4 dark:border-"
                  >
                    Blogs
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
              </>
            )}
          </ul>
          <div className="items-center flex-shrink-0 hidden gap-3 lg:flex">
            {user ? (
              <>
                <Link to="/">
                  <button
                    onClick={handleLogOut}
                    className="self-center btn btn-outline !py-2 dark:bg-fuchsia-600 dark:text-gray-50"
                  >
                    Sign Out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button className="self-center btn btn-outline !py-2 dark:bg-fuchsia-600 dark:text-gray-50">
                    Sign in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="self-center btn btn-primary !py-2 dark:bg-fuchsia-600 dark:text-gray-50">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
          <div onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <button
                title="Menu"
                type="button"
                className="p-5 text-2xl rounded-full md:hidden bg-gray-100/50"
              >
                <BiAlignRight />
              </button>
            ) : (
              <button
                title="Menu"
                type="button"
                className="p-5 text-2xl rounded-full md:hidden bg-gray-100/50"
              >
                <BiX />
              </button>
            )}
          </div>
        </div>
        <PageHeader />
      </header>
    </div>
  );
};

export default Navbar;
