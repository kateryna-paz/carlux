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
    <header className="bg-transparent w-full lg:h-[115px] md:h-[110px] h-[100px] flex items-center justify-between px-8 lg:pl-20 lg:pr-6 absolute top-0 left-0 z-30">
      <Logo />

      <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
        <NavLinks />
        <div className="flex items-center lg:space-x-5 md:space-x-3">
          <ContactInfo />
          <div className="w-px h-12 bg-gray-600"></div>
          <SocialLinks size={34} />
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
