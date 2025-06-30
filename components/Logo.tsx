import Image from "next/image";

function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={200}
      height={100}
      className="w-[130px] h-auto lg:w-[180px] md:w-[150px]"
    />
  );
}

export default Logo;
