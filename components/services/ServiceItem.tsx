"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface ServiceItemProps {
  index: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.6,
      duration: 1.7,
      ease: "easeOut",
    },
  }),
};

export default function ServiceItem({
  index: index,
  icon: Icon,
  title,
  description,
}: ServiceItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={index}
    >
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
    </motion.div>
  );
}
