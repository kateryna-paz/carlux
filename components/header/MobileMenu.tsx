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
        fixed top-0 right-0 h-full bg-black/60 backdrop-blur-md
        w-64 sm:w-70 px-6 py-20 rounded-tl-[180px]
        transform transition-transform duration-500 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden flex flex-col justify-start items-center space-y-8
        overflow-y-auto
      `}
    >
      <div className="flex flex-col space-y-6 w-full items-center pt-8">
        <NavLinks onClick={onClose} />
      </div>

      <div className="w-full h-px bg-gray-700 my-4" />

      <ContactInfo centered />

      <div className="my-4">
        <SocialLinks />
      </div>

      <p className="text-gray-300 text-base md:text-lg font-kelly-slab text-center px-4">
        <Link
          href="mailto:carlux_usa@gmail.com"
          className="hover:text-orange-300 transition-colors duration-200 break-all"
          onClick={onClose}
        >
          carlux_usa@gmail.com
        </Link>
      </p>
    </div>
  );
}
