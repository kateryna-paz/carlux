import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface TransportCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export default function TransportCard({
  image,
  title,
  description,
  index,
}: TransportCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        !isEven ? "md:flex-row-reverse" : ""
      } items-center group`}
    >
      <div className="relative w-full md:w-1/2 h-[260px] md:h-[400px] z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-100px" }}
          className={`
            absolute ${
              isEven ? "md:-left-6" : "md:-right-6"
            } top-0 w-[80%] h-[70%] md:h-[80%] md:w-[90%] z-0
            rounded-2xl will-change-transform
          `}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true, margin: "-100px" }}
        className={`
          relative z-10 bg-white/90 backdrop-blur-md rounded-3xl
          top-1/2 translate-y-[-65%] translate-x-[5%]
          md:absolute md:top-1/2 md:translate-y-[-50%] md:translate-x-[0%]
          w-full px-6 pt-16 pb-6 md:px-8 md:py-10
          will-change-transform
          shadow-[0_0_30px_rgba(270,160,30,0.7)]
          ${
            isEven
              ? "md:left-[30%] md:w-[60%] lg:left-[35%] lg:w-[55%] md:pl-30 lg:pl-40"
              : "md:right-[30%] md:w-[60%] lg:right-[35%] lg:w-[55%] lg:pr-30 md:pr-40"
          }
        `}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-[#012b53] mb-3 font-montserrat">
          {title}
        </h3>
        <p className="text-gray-800 text-sm md:text-base font-kelly-slab leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
