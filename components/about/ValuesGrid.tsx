"use client";

import React from "react";
import { motion } from "framer-motion";
import { values } from "../../constants/values";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
};

export default function ValuesGrid() {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-montserrat">
          Наші Фундаментальні
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 ml-2">
            Цінності
          </span>
        </h2>
        <p className="text-gray-300 text-lg font-kelly-slab max-w-3xl mx-auto">
          Принципи, на яких побудована наша компанія та які визначають кожну
          нашу дію
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {values.map((value, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={idx}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/60 border border-gray-700/50 p-6 lg:p-8 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="relative z-10 mb-6 flex justify-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <value.icon className="text-white text-2xl lg:text-3xl" />
                </div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-montserrat">
                  {value.title}
                </h3>
                <p className="text-gray-300 font-kelly-slab leading-relaxed text-sm lg:text-base">
                  {value.description}
                </p>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 lg:mt-16">
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-gray-700/50">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-montserrat">
              Наші цінності — це не просто слова
            </h3>
            <p className="text-gray-300 font-kelly-slab mb-6 leading-relaxed">
              Кожна угода, кожен контакт з клієнтом, кожне рішення приймається
              через призму наших основних принципів. Ми пишаємося тим, що
              будуємо довгострокові відносини, засновані на взаємній повазі та
              професіоналізмі.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-orange-300 font-kelly-slab text-sm">
                  Завжди чесно
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-300 font-kelly-slab text-sm">
                  Завжди якісно
                </span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-300 font-kelly-slab text-sm">
                  Завжди вчасно
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
