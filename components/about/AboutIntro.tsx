"use client";

import React from "react";

export default function AboutIntro() {
  return (
    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-8 rounded-lg shadow-xl w-full text-center">
      <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed font-kelly-slab">
        <strong className="text-orange-400 font-semibold lg:text-3xl md:text-2xl text-xl">
          CarLux
        </strong>{" "}
        – ваш надійний навігатор у світі транспорту. Ми підберемо ідеальні{" "}
        <strong className="text-orange-300">
          автомобілі, мотоцикли, водний транспорт або сільськогосподарську
          техніку{" "}
        </strong>{" "}
        як з наявності, так і під замовлення зі США, Канади чи Європи.
        Гарантуємо прозорість та сервіс найвищого рівня!
      </p>
    </div>
  );
}
