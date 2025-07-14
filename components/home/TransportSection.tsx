"use client";

import React from "react";
import { motion } from "framer-motion";
import { transportItems } from "../../constants/transportItems";
import TransportCard from "./TransportCard";
import GradientBackground from "./GradientBackground";

export default function TransportSection() {
  return (
    <section
      id="next-section"
      className="relative w-full h-auto flex items-center justify-center overflow-hidden"
    >
      <GradientBackground />

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
          className="mt-0 md:mt-10 text-center"
        >
          <div className="bg-gray-900/30  backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <p className="text-white font-kelly-slab text-lg md:text-xl lg:text-2xl leading-relaxed mb-4">
              Ваш ритм. Ваш вибір. Ваш транспорт.
            </p>
            <p className="text-gray-300 text-base md:text-lg font-kelly-slab">
              Ми перетворюємо техніку на рішення.{" "}
              <span className="text-orange-400 font-bold">
                CarLux — більше, ніж просто авто.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
