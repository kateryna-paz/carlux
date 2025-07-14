"use client";

import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
         bg-black/20 backdrop-blur-md
         lg:h-[115px] md:h-[110px] h-[90px] flex items-center justify-between px-8 lg:pl-20 lg:pr-6`}
      >
        <Logo />

        <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
          <NavLinks />
          <div className="flex items-center lg:space-x-5 md:space-x-3">
            <ContactInfo />
            <div
              className={`w-px h-12 transition-colors duration-300 ${
                isScrolled ? "bg-white/20" : "bg-gray-600"
              }`}
            ></div>
            <SocialLinks size={34} />
          </div>
        </nav>

        <div className="md:hidden z-50 relative">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl hover:text-orange-400 transition-colors duration-200"
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}
