"use client";

import React from "react";

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function ServiceItem({
  icon: Icon,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div
      className="
        flex flex-col items-center text-center p-6 rounded-lg 
        shadow-lg border-gray-600 
        service-card-gradient
      "
    >
      <Icon className="text-orange-400 text-5xl mb-4" />
      <h3 className="text-xl md:text-2xl font-semibold mb-2 font-montserrat">
        {title}
      </h3>
      <p className="text-gray-300 text-base font-kelly-slab">{description}</p>
    </div>
  );
}
