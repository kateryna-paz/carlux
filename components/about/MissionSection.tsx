"use client";

import React from "react";
import { FaBullseye, FaHeart } from "react-icons/fa";

export default function MissionSection() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-gray-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <FaBullseye className="text-white text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-montserrat">
              Наша Місія
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-200 font-kelly-slab leading-relaxed mb-8">
            Ми переконані, що{" "}
            <strong className="text-orange-300">
              якісний транспорт має бути доступним для кожного{" "}
            </strong>
            — незалежно від географічних кордонів і відстаней. Наша команда
            працює щодня, щоб зробити процес придбання транспорту з-за кордону
            максимально простим, безпечним та доступним.
          </p>

          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6">
            <p className="text-lg text-white font-kelly-slab font-medium">
              <FaHeart className="inline text-orange-400 mr-2" />
              &quot;Ваш ідеальний транспорт — наша професійна місія. Ваша довіра
              — основа нашої репутації.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
