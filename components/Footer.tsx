"use client";

import Image from "next/image";
import Link from "next/link";
import ContactInfo from "./header/ContactInfo";
import SocialLinks from "./header/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black text-white w-full py-10 px-6 md:px-12 lg:px-20 shadow-[0_-8px_30px_rgba(255,165,0,0.3)] border-t border-orange-400/40">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-start gap-10">
        <div className="flex-1 md:basis-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-3">
            <Image
              src="/images/CarLux.png"
              alt="CarLux"
              width={60}
              height={100}
              className=" lg:w-56 md:w-46 w-40 h-auto"
            />
          </div>
          <p className="text-gray-300 text-sm md:text-base font-kelly-slab max-w-sm">
            Транспорт з США, Канади та Європи. <br /> Надійно. Якісно. Доступно.
          </p>
        </div>

        <div className="flex-1 md:basis-1/2 flex flex-col sm:flex-row justify-around items-center md:items-start gap-10 sm:gap-0">
          <div className="flex flex-col items-center md:items-end text-center">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3 font-montserrat text-orange-400">
              Ми на зв’язку
            </h3>

            <div className="mb-2">
              <SocialLinks size={36} />
            </div>

            <p className="text-gray-300 text-base md:text-lg font-kelly-slab break-all">
              <Link
                href="mailto:carluxzp@gmail.com"
                className="hover:text-orange-300 transition-colors duration-200"
              >
                carluxzp@gmail.com
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end text-center">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-5 font-montserrat text-orange-400">
              Контакти
            </h3>
            <ContactInfo />
          </div>
        </div>
      </div>

      <div className="mt-10 pt-4 border-t border-gray-600 text-center text-gray-400 text-sm font-kelly-slab">
        &copy; {new Date().getFullYear()} CarLux Ukraine. Усі права захищено.
      </div>
    </footer>
  );
}
