import Link from "next/link";
import Image from "next/image";

export default function SocialLinks({ size = 36 }: { size?: number }) {
  return (
    <div className="flex space-x-4 md:space-x-3 lg:space-x-4 items-center w-auto">
      <Link
        href="https://t.me/carlux_usa"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Image
          src="/icons/telegram.png"
          alt="Telegram"
          width={size}
          height={size}
          className="
              w-[36px] h-[36px] md:w-[30px] md:h-[30px] lg:w-[36px] lg:h-[36px]
              transition-all duration-300 ease-in-out
              hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,136,204,0.7)]
            "
        />
      </Link>
      <Link
        href="https://www.instagram.com/carlux.ukraine?igsh=bm9ycGJtZzFqdnBl"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Image
          src="/icons/instagram.svg"
          alt="Instagram"
          width={size - 2}
          height={size - 2}
          className="
              w-[34px] h-[34px] md:w-[28px] md:h-[28px] lg:w-[34px] lg:h-[34px]
              transition-all duration-300 ease-in-out
              hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,0,132,0.7)]
            "
        />
      </Link>
    </div>
  );
}
