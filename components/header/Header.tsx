"use client";

import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-transparent w-full h-[110px] flex items-center justify-between px-8 lg:px-16 absolute top-0 left-0 z-30">
      <Logo />

      <nav className="hidden md:flex space-x-8 lg:space-x-14 items-center">
        <NavLinks />
        <div className="flex items-center space-x-5">
          <ContactInfo />
          <div className="w-px h-8 bg-gray-600"></div>
          <SocialLinks size={30} />
        </div>
      </nav>

      <div className="md:hidden z-50">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl hover:text-orange-400 transition-colors duration-200"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
