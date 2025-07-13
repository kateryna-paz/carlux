"use client";

import React from "react";
import { motion } from "framer-motion";
import { stats } from "../../constants/stats";

const statVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function StatsSection() {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-montserrat">
          Цифри, які говорять за нас
        </h2>
        <p className="text-gray-300 text-lg font-kelly-slab max-w-2xl mx-auto">
          Довіра тисяч клієнтів та роки успішної роботи
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={statVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/50  p-6 lg:p-8 text-center  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
              <div
                className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 mb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                >
                  <stat.icon className="text-white text-2xl" />
                </div>
              </div>

              <div className="relative z-10 mb-2">
                <span
                  className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-montserrat`}
                >
                  {stat.number}
                </span>
              </div>

              <div className="relative z-10">
                <p className="text-gray-300 text-sm lg:text-base font-kelly-slab">
                  {stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
