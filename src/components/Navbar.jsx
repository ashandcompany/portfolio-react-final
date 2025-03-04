import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { RiFlowerLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const navItems = [
    { name: "About", url: "#skills" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full py-4 px-6 backdrop-blur-md bg-white/30 dark:bg-darkPink-light/20 z-40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-pink-dark dark:text-pink-light"
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl text-pink-dark dark:text-pink">
              <RiFlowerLine />
            </span>{" "}
            Emma <span className="text-pink-dark dark:text-pink">Roizot</span>
          </div>
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  className="text-gray-700 dark:text-pink-light hover:text-pink-dark dark:hover:text-pink transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onClick={toggleNav}
          className="md:hidden text-pink-dark dark:text-pink-light"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
      >
        <ul className="flex flex-col space-y-6 text-center text-gray-700 dark:text-pink-light hover:text-pink-dark dark:hover:text-pink transition-colors duration-300 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                onClick={closeNav}
                className="text-xl font-medium text-gray-700 dark:text-pink-light hover:text-pink-dark dark:hover:text-pink transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
