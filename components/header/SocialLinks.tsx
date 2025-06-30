import Link from "next/link";
import Image from "next/image";

export default function SocialLinks({ size = 28 }: { size?: number }) {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://t.me/pasadim13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/telegram.png"
          alt="Telegram"
          width={size}
          height={size}
        />
      </Link>
      <Link
        href="https://www.instagram.com/carlux.ukraine?igsh=bm9ycGJtZzFqdnBl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/instagram.svg"
          alt="Instagram"
          width={size - 2}
          height={size - 2}
        />
      </Link>
    </div>
  );
}
