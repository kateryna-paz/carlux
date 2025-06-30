import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-8 px-4 md:px-8 lg:px-24 flex flex-col md:flex-row items-center md:items-start justify-between md:justify-around gap-8 md:gap-4 lg:gap-8">
      <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
        <div className="text-orange-500 text-2xl lg:text-3xl font-bold tracking-wider font-montagu-slab mb-1">
          CarLux
        </div>
        <p className="text-gray-400 text-sm font-kelly-slab">Car showroom</p>
      </div>

      <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
        <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3 font-montserrat">
          Соц-мережі
        </h3>
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-200"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            <Image
              src="/icons/telegram.png"
              alt="Telegram"
              width={27}
              height={27}
            />
          </Link>
          <Link
            href="https://www.instagram.com/carlux.ukraine?igsh=bm9ycGJtZzFqdnBl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-600 transition-colors duration-200"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left">
        <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3 font-montserrat">
          Телефон
        </h3>
        <p className="text-gray-300 text-xs md:text-sm lg:text-base font-kelly-slab">
          +380 673 18 63 63
        </p>
        <p className="text-gray-300 text-xs md:text-sm lg:text-base font-kelly-slab">
          +380 633 18 63 63
        </p>
      </div>
    </footer>
  );
}
