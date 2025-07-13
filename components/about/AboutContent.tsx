"use client";

import WrapSection from "../WrapSection";
import AboutIntro from "./AboutIntro";
import MissionSection from "./MissionSection";
import ValuesGrid from "./ValuesGrid";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1.1,
      ease: "easeOut",
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutContent() {
  return (
    <WrapSection>
      <div className="max-w-[1340px] w-full flex flex-col items-center space-y-14 lg:space-y-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="w-full"
        >
          <AboutIntro />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <StatsSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="w-full -mt-12"
        >
          <MissionSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="w-full"
        >
          <WhyChooseUs />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="w-full -mt-12"
        >
          <ValuesGrid />
        </motion.div>
      </div>
    </WrapSection>
  );
}
