"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { transportItems } from "../../constants/transportItems";
import TransportCard from "./TransportCard";

export default function TransportSection() {
  return (
    <section
      id="next-section"
      className="relative w-full h-auto flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Image
          src="/images/car-bg4.jpg"
          alt="Logo"
          width={1920}
          height={1080}
          className="object-contain h-auto w-full opacity-70"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-10" />

      <div className="relative z-20 max-w-[1340px] w-full mx-auto px-6 mt-12 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center font-montserrat mb-16 relative"
        >
          Транспорт для будь-яких потреб
          <span className="block w-32 md:w-58 h-1 bg-orange-400 mt-6 mx-auto rounded-full" />
        </motion.h2>

        <div className="flex flex-col space-y-[-50px] md:space-y-0 lg:px-4 sm:px-6">
          {transportItems.map((item, index) => (
            <TransportCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-0 md:mt-14 text-center text-white font-kelly-slab text-lg md:text-xl max-w-5xl mx-auto"
        >
          <p>
            Ваш ритм. Ваш вибір. Ваш транспорт. <br />
            Ми перетворюємо техніку на рішення.{" "}
            <strong className="font-bold">
              {" "}
              CarLux — більше, ніж просто авто.{" "}
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
