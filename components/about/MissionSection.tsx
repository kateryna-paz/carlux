"use client";

import React from "react";
import { FaBullseye } from "react-icons/fa";

export default function MissionSection() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start bg-gray-800 bg-opacity-60 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-6 md:space-y-0 md:space-x-8">
      <FaBullseye className="text-orange-400 text-4xl md:text-5xl flex-shrink-0" />
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-3 font-montserrat text-gray-200 text-center md:text-left">
          Наша Місія: Ваші Мрії на Колесах
        </h3>
        <p className="text-base md:text-lg lg:text-lg font-light leading-relaxed font-kelly-slab">
          Ми прагнемо зробити придбання автомобіля не просто покупкою, а
          приємним досвідом. Наша місія – це створення довгострокових відносин,
          заснованих на довірі, чесності та індивідуальному підході до кожного
          клієнта. Ми гарантуємо найвищі стандарти якості та безпеки, щоб ви
          могли насолоджуватися дорогою з першого кілометра.
        </p>
      </div>
    </div>
  );
}
