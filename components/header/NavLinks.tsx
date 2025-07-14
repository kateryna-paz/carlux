import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Головна", href: "/" },
  { name: "Послуги", href: "/services" },
  { name: "Про компанію", href: "/about" },
];

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const path = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onClick}
          className={`
            text-lg lg:text-xl font-kelly-slab relative
            ${
              path === item.href
                ? "text-orange-400 font-semibold before:scale-x-100"
                : "text-gray-300 hover:text-orange-300"
            } cursor-pointer
            transition-all duration-300 ease-in-out
            before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-orange-400 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-out
            hover:before:scale-x-100
          `}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
