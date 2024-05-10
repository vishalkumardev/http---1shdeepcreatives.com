import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { FaBars, FaTimes, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../../Assets/logo/WHITE 1S.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdownBackground, setDropdownBackground] = useState(
    "rgba(0, 0, 0, 0.25)"
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0, 0);

    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <nav className={`p-4 ${scrollPosition > 0 ? "bg-red-500" : "bg-transparent"}`}>
    <nav
      className="p-4"
      style={{
        background: scrollPosition > 0 ? "rgba(0, 0, 0, 0.25)" : "transparent",
        backdropFilter: scrollPosition > 0 ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrollPosition > 0 ? "blur(4px)" : "none",
        // backdropFilter: isOpen ? "rgba(0, 0, 0, 0.25)" : isOpen  ? "blur(8px)" : "none",
        // background: isOpen ? "rgba(0, 0, 0, 0.25)" : "transparent",
        // backdropFilter: isOpen ? "blur(8px)" : "none",
        // WebkitBackdropFilter: isOpen ? "blur(4px)" : "none",
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center ml-54	justify-between">
          <div className="text-white font-bold text-lg">
            <Fade>
              <img src={Logo} alt="" className="logo h-16 w-auto" />
            </Fade>
          </div>
          <Fade>
            <ul className="social-Container flex space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/1shdeep/?hl=en"
                  target="_blank"
                >
                  {/* <FaInstagram className="text-white social-icon" /> */}
                  <AiFillInstagram className="social-icon text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2F1shdeep_%3Fs%3D09"
                  target="_blank"
                >
                  {/* <FaTwitter className="text-white social-icon" /> */}
                  <BsTwitterX className="social-icon text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC4Gq8wXTfasUGRezdXbKz7w"
                  target="_blank"
                >
                  {/* <FaYoutube className="text-white social-icon" /> */}
                  <FaYoutube className="social-icon text-white" />
                </a>
              </li>
            </ul>
          </Fade>
          {/* Hamburger  */}
          <div className="flex items-center">
            <a className="lg:inline-block sm:hidden" href="mailto:vanshdeepofficial@gmail.com">
              <button
                className="contact cursor-pointer inline-flex items-center rounded-full px-7 py-2 text-l text-white-200
            hover:text-white border-2 border-white-600
            hover:bg-green-600 transition ease-in-out delay-150  hover:bg-green-600 duration-300  focus:bg-transparent mr-5"
                style={{ color: "white" }}
              >
                Contact Us
              </button>
            </a>
            <div>
              {isOpen ? (
                <FaTimes
                  className="text-white cursor-pointer"
                  size={24}
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  className="text-white cursor-pointer"
                  size={24}
                  onClick={toggleMenu}
                />
              )}
              {/* <FaBars
                className="text-white cursor-pointer"
                size={24}
                onClick={toggleMenu}
              /> */}
            </div>
            {/* Mobile menu */}
            {/* <div
            className={`dropDownMenu ${
              isOpen ? "block" : "hidden"
            } absolute top-24  left-0 w-full py-2`}
          > */}
            {/* <div
            className={`dropDownMenu ${
              isOpen ? "block" : "hidden"
            } absolute top-24  left-0 w-full py-2`}
            style={{ background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(4px)" }}
          > */}

            <div
              className={`dropDownMenu ${
                isOpen ? "block" : "hidden"
              } absolute top-24 left-0 w-full py-2`}
            >
              <ul className="btnContainer text-white text-lg text-center">
                {/* <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#work">Work</a>
              </li>
              <li>
                <a href="/#clients">Clients</a>
              </li> */}
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Home
                    </a>
                  ) : (
                    <a href="/#home" onClick={closeMenu}>
                      Home
                    </a>
                  )}
                </li>
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      About
                    </a>
                  ) : (
                    <a href="/#about" onClick={closeMenu}>
                      About
                    </a>
                  )}
                </li>
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Work
                    </a>
                  ) : (
                    <a href="/#work" onClick={closeMenu}>
                      Work
                    </a>
                  )}
                </li>
                <li className="text-white">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Clients
                    </a>
                  ) : (
                    <a href="/#clients" onClick={closeMenu}>
                      Clients
                    </a>
                  )}
                </li>
                <li className="text-white sm:inline-block lg:hidden">
                  {location.pathname === "/Projects" ? (
                    <a href="/" onClick={closeMenu}>
                      Contact Us
                    </a>
                  ) : (
                    <a href="/#clients" onClick={closeMenu}>
                      Contact Us
                    </a>
                  )}
                </li>
              </ul>
            </div>
            {/* End mobile menu */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
