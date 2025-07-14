import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={200}
        height={100}
        className="w-[120px] h-auto lg:w-[170px] md:w-[150px]"
      />
    </Link>
  );
}

export default Logo;
