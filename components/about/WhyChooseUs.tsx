"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHeadset,
  FaShippingFast,
  FaFileContract,
  FaTools,
  FaMoneyBillWave,
} from "react-icons/fa";
import ActionSection from "./ActionSection";

const advantages = [
  {
    icon: FaCheckCircle,
    title: "Перевірена якість",
    description:
      "Кожен автомобіль проходить професійну діагностику та перевірку історії",
    color: "from-green-400 to-green-600",
  },
  {
    icon: FaHeadset,
    title: "24/7 підтримка",
    description: "Наша команда завжди готова відповісти на ваші запитання",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: FaShippingFast,
    title: "Швидка доставка",
    description: "Оптимізовані логістичні маршрути для найшвидшої доставки",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: FaFileContract,
    title: "Повне оформлення",
    description: "Беремо на себе всі юридичні формальності та документообіг",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: FaTools,
    title: "Сервісна підтримка",
    description: "Допомога з обслуговуванням та ремонтом після покупки",
    color: "from-red-400 to-red-600",
  },
  {
    icon: FaMoneyBillWave,
    title: "Вигідні ціни",
    description: "Прямі поставки без посередників = економія до 30%",
    color: "from-yellow-400 to-yellow-600",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-montserrat">
          Чому обирають <span className="text-orange-400">CarLux</span>?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-6 px-6 lg:px-8  transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10 h-full">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10 mb-6">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${advantage.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                >
                  <advantage.icon className="text-white text-2xl" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 font-kelly-slab leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${advantage.color} group-hover:w-full transition-all duration-500`}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
      <ActionSection />
    </div>
  );
}
