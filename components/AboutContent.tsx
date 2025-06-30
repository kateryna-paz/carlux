"use client";

import React from "react";
import WrapSection from "./WrapSection";
import AboutIntro from "./AboutIntro";
import MissionSection from "./MissionSection";
import ValuesGrid from "./ValuesGrid";

export default function AboutContent() {
  return (
    <WrapSection>
      <div className="max-w-2/3 w-full flex flex-col items-center space-y-8 md:space-y-10 lg:space-y-12">
        <AboutIntro />

        <MissionSection />

        <ValuesGrid />

        <div className="w-full bg-gray-800 bg-opacity-60 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-montserrat text-gray-200">
            Ваш шлях до ідеального авто починається тут!
          </h3>
          <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed font-kelly-slab">
            Обираючи <strong className="text-orange-300">CarLux</strong>, ви
            обираєте впевненість, комфорт та якість. Ми не просто продаємо
            автомобілі, ми даруємо мрії на колесах. Зв{"'"}
            яжіться з нами сьогодні, і наша команда допоможе вам знайти
            автомобіль вашої мрії!
          </p>
        </div>
      </div>
    </WrapSection>
  );
}
