"use client";
import React from "react";
import WrapSection from "../WrapSection";
import ServiceItem from "./ServiceItem";
import { services } from "../../constants/services";

export default function ServicesContent() {
  return (
    <WrapSection>
      <div className="w-full max-w-4xl mx-auto relative">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-32 pointer-events-none z-0"
          viewBox="0 0 120 2000"
          preserveAspectRatio="none"
        >
          <path
            d="M 60 0 
               Q 40 80 60 160 
               Q 80 240 60 320 
               Q 40 400 60 480 
               Q 80 560 60 640 
               Q 40 720 60 800 
               Q 80 880 60 960 
               Q 40 1040 60 1120 
               Q 80 1200 60 1280 
               Q 40 1360 60 1440 
               Q 80 1520 60 1600 
               Q 40 1680 60 1760 
               Q 80 1840 60 1920 
               L 60 2000"
            fill="none"
            stroke="url(#roadGradient)"
            strokeWidth="4"
            strokeDasharray="15,8"
            className="animate-pulse"
          />

          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
              <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#f97316" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#f97316" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <circle
            cx="60"
            cy="160"
            r="6"
            fill="#f97316"
            className="animate-pulse opacity-80"
          />
          <circle
            cx="60"
            cy="320"
            r="6"
            fill="#3b82f6"
            className="animate-pulse opacity-80"
          />
          <circle
            cx="60"
            cy="480"
            r="6"
            fill="#f97316"
            className="animate-pulse opacity-80"
          />
          <circle
            cx="60"
            cy="640"
            r="6"
            fill="#3b82f6"
            className="animate-pulse opacity-80"
          />
          <circle
            cx="60"
            cy="800"
            r="6"
            fill="#f97316"
            className="animate-pulse opacity-80"
          />
          <circle
            cx="60"
            cy="960"
            r="6"
            fill="#3b82f6"
            className="animate-pulse opacity-80"
          />

          <circle
            cx="45"
            cy="240"
            r="3"
            fill="#f97316"
            className="animate-ping opacity-40"
          />
          <circle
            cx="75"
            cy="560"
            r="3"
            fill="#3b82f6"
            className="animate-ping opacity-40"
          />
          <circle
            cx="45"
            cy="720"
            r="3"
            fill="#f97316"
            className="animate-ping opacity-40"
          />
        </svg>

        <div className="relative z-10 space-y-16 md:space-y-20 lg:space-y-24 py-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative w-full
                ${index % 2 === 0 ? "lg:pr-32" : "lg:pl-32"}
                ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}
              `}
            >
              <ServiceItem
                index={index}
                stepNumber={index + 1}
                icon={service.icon}
                title={service.title}
                description={service.description}
                isLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-20 left-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-96 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-0 w-36 h-36 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-0 w-44 h-44 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>
    </WrapSection>
  );
}
