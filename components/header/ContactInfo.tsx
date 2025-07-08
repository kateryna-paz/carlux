import Link from "next/link";

export default function ContactInfo({
  centered = false,
}: {
  centered?: boolean;
}) {
  return (
    <div
      className={`flex flex-col space-y-1.5 ${
        centered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <Link
        href="tel:+380673186363"
        className="text-gray-300 hover:text-orange-300 focus:text-orange-400 text-base lg:text-lg font-kelly-slab"
      >
        +380 673 18 63 63
      </Link>
      <Link
        href="tel:+380633186363"
        className="text-gray-300 hover:text-orange-300 focus:text-orange-400 text-base lg:text-lg font-kelly-slab"
      >
        +380 633 18 63 63
      </Link>
    </div>
  );
}
