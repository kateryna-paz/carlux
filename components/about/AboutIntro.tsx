"use client";

import React from "react";
import { FaGlobe, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function AboutIntro() {
  return (
    <div className="relative overflow-hidden lg:mt-6 md:mt-2 mt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-gray-800/30 to-gray-900/40 backdrop-blur-md rounded-2xl"></div>

      <div className="absolute top-6 right-6 w-24 h-24 bg-orange-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 bg-blue-400/10 rounded-full blur-lg"></div>

      <div className="relative z-10 p-8 md:p-12 lg:p-16 lg:my-12 md:my-4 my-0 text-center">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-montserrat">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              CarLux
            </span>
            <span className="text-white ml-3">– Ваш Провідник</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 font-kelly-slab">
            у світі преміального транспорту
          </h2>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed font-kelly-slab text-gray-200 mb-8 max-w-4xl mx-auto">
          Ми не просто продаємо транспорт — ми втілюємо мрії в реальність. Від
          елітних автомобілів до потужних мотоциклів, від швидкісних човнів до
          професійної сільськогосподарської техніки — знайдемо і доставимо
          <strong className="text-orange-300 font-semibold">
            {" "}
            ідеальний варіант{" "}
          </strong>
          з США, Канади чи Європи.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="group cursor-pointer">
            <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">
                Світові Ринки
              </h3>
              <p className="text-gray-300 text-sm text-center font-kelly-slab">
                Доступ до найкращих пропозицій з США, Канади та Європи
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">
                100% Гарантія
              </h3>
              <p className="text-gray-300 text-sm text-center font-kelly-slab">
                Повна юридична чистота та захист ваших інтересів
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="flex flex-col items-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">
                Швидкість
              </h3>
              <p className="text-gray-300 text-sm text-center font-kelly-slab">
                Оперативне оформлення та доставка вашого транспорту
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
