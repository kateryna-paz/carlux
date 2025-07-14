"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface ServiceItemProps {
  index: number;
  stepNumber: number;
  icon: React.ElementType;
  title: string;
  description: string;
  isLeft: boolean;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotateY: 15,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const numberVariants: Variants = {
  hidden: { scale: 0, rotate: -360 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.5,
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function ServiceItem({
  index,
  stepNumber,
  icon: Icon,
  title,
  description,
  isLeft,
}: ServiceItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{
        transition: { duration: 0.3 },
      }}
      className="group relative perspective-1000 will-change-transform"
    >
      <motion.div
        variants={numberVariants}
        className={`
          absolute z-0
          ${
            isLeft
              ? "-top-6 lg:-right-30 md:-right-16"
              : "-top-6 lg:-left-30 md:-left-16"
          }
          w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
          md:-mx-6
          flex items-center justify-center
          text-4xl md:text-5xl lg:text-6xl
          font-black font-montserrat
          ${
            isEven
              ? "text-orange-500/20 group-hover:text-orange-400/30"
              : "text-blue-500/20 group-hover:text-blue-400/30"
          }
          transition-colors duration-500
          select-none will-change-transform
        `}
      >
        {stepNumber}
      </motion.div>

      <div
        className={`
        relative overflow-hidden
        bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95
        backdrop-blur-xl
        rounded-2xl lg:rounded-3xl
        border border-slate-700/50
        shadow-2xl shadow-slate-900/50
        p-6 md:p-8 lg:p-10
        transition-all duration-500
        hover:shadow-3xl
        hover:border-orange-500/30
        group-hover:shadow-orange-500/25
        transform-gpu
        ${isLeft ? "ml-0 mr-auto" : "ml-auto mr-0"}
        max-w-3xl w-full
        flex items-center gap-6 md:gap-8 lg:gap-10
      `}
      >
        <div
          className={`
          absolute inset-0 opacity-0 group-hover:opacity-100
          ${
            isEven
              ? "bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5"
              : "bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5"
          }
          transition-opacity duration-700
        `}
        />

        <div
          className={`
          absolute inset-0 rounded-2xl lg:rounded-3xl
          ${
            isEven
              ? "bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20"
              : "bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20"
          }
          opacity-0 group-hover:opacity-100
          blur-xl
          transition-opacity duration-700
          -z-10
        `}
        />

        <div className="relative z-10 flex-shrink-0">
          <div
            className={`
              relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
              ${
                isEven
                  ? "bg-gradient-to-br from-orange-400/20 to-orange-600/20"
                  : "bg-gradient-to-br from-blue-400/20 to-blue-600/20"
              }
              rounded-2xl
              flex items-center justify-center
              border
              ${
                isEven
                  ? "border-orange-500/30 group-hover:border-orange-400/50"
                  : "border-blue-500/30 group-hover:border-blue-400/50"
              }
              transition-all duration-500
              group-hover:scale-105
              backdrop-blur-sm
            `}
          >
            <Icon
              className={`
              ${isEven ? "text-orange-400" : "text-blue-400"}
              text-2xl md:text-3xl lg:text-4xl
              group-hover:scale-105 
              transition-all duration-300
              drop-shadow-lg
            `}
            />
          </div>
        </div>

        <div className="relative z-10 flex-1 min-w-0">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2 + 0.3,
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
            }}
            className={`
              text-lg md:text-xl lg:text-2xl 
              font-bold font-montserrat
              text-white
              group-hover:text-orange-100
              transition-colors duration-300
              leading-tight
              mb-2 md:mb-3 will-change-transform
              ${isLeft ? "text-left" : "text-right"}
            `}
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2 + 0.4,
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
            }}
            className={`
              text-slate-300 
              text-sm md:text-base lg:text-lg
              font-kelly-slab
              leading-relaxed
              group-hover:text-slate-200
              transition-colors duration-300 will-change-transform
              ${isLeft ? "text-left" : "text-right"}
            `}
          >
            {description}
          </motion.p>
        </div>

        <div
          className={`
          absolute top-4 right-4 w-12 h-12
          ${
            isEven
              ? "bg-gradient-to-br from-orange-500/15 to-transparent"
              : "bg-gradient-to-br from-blue-500/15 to-transparent"
          }
          rounded-full blur-2xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
          animate-pulse
        `}
        />

        <div
          className={`
          absolute bottom-4 left-4 w-8 h-8
          ${
            isEven
              ? "bg-gradient-to-br from-orange-400/20 to-transparent"
              : "bg-gradient-to-br from-blue-400/20 to-transparent"
          }
          rounded-full blur-xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
          animate-pulse
        `}
        />

        <div
          className="
          absolute inset-0 rounded-2xl lg:rounded-3xl
          bg-gradient-to-r from-transparent via-white/5 to-transparent
          transform -skew-x-12 scale-x-0 group-hover:scale-x-100
          transition-transform duration-700
          origin-left
        "
        />
      </div>
    </motion.div>
  );
}
