"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "./Logo";

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Головна", href: "/" },
    { name: "Послуги", href: "/services" },
    { name: "Про компанію", href: "/about" },
    { name: "Контакти", href: "/contacts" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent w-full h-[90px] flex items-center justify-between px-8 md:px-16 lg:px-24 absolute top-0 left-0 z-30">
      <Logo />

      <nav className="hidden md:flex space-x-8 lg:space-x-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`
              text-lg md:text-lg lg:text-xl font-kelly-slab relative
              ${
                path === item.href
                  ? "text-orange-400 font-semibold before:scale-x-100"
                  : "text-gray-300 hover:text-orange-300"
              }
              transition-all duration-300 ease-in-out
              before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-out
              hover:before:scale-x-100
            `}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="md:hidden flex items-center z-50">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none hover:text-orange-400 transition-colors duration-200"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      <div
        className={`
          fixed top-0 right-0 h-full
          bg-black-950 bg-opacity-50 backdrop-blur-md
          rounded-l-full
          shadow-2xl
          w-56 sm:w-64
          transform transition-transform duration-500 ease-in-out z-40
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden flex flex-col justify-center items-center space-y-10
          
          pb-8
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`
              text-xl sm:text-2xl font-kelly-slab
              ${
                path === item.href
                  ? "text-orange-400 font-bold"
                  : "text-gray-200 hover:text-orange-300"
              }
              transition-colors duration-200 uppercase tracking-wider
            `}
            onClick={toggleMenu}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {isMenuOpen && (
        <div
          className="fixed top-[90px] left-0 right-0 bottom-0 bg-black opacity-60 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
