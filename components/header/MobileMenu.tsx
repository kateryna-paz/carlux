import NavLinks from "./NavLinks";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`
        fixed top-0 right-0 h-full bg-black-950 bg-opacity-50 backdrop-blur-md
        w-64 sm:w-72 px-6 py-32 rounded-bl-[150px]
        transform transition-transform duration-500 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden flex flex-col justify-start items-center space-y-10
      `}
    >
      <div className="flex flex-col space-y-6 w-full items-center">
        <NavLinks onClick={onClose} />
      </div>

      <div className="w-full h-px bg-gray-700 my-4" />

      <ContactInfo centered />
      <div className="my-4">
        <SocialLinks />
      </div>
      <p className="text-gray-300 text-base md:text-lg font-kelly-slab break-all">
        <Link
          href="mailto:carlux_usa@gmail.com"
          className="hover:text-orange-300 transition-colors duration-200"
        >
          carlux_usa@gmail.com
        </Link>
      </p>
    </div>
  );
}
