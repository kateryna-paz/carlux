"use client";

import WrapSection from "../WrapSection";
import AboutIntro from "./AboutIntro";
import MissionSection from "./MissionSection";
import ValuesGrid from "./ValuesGrid";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 1.1,
      ease: "easeOut",
    },
  }),
};

export default function AboutContent() {
  return (
    <WrapSection>
      <div className="max-w-2/3 w-full flex flex-col items-center space-y-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <AboutIntro />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <MissionSection />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <ValuesGrid />
        </motion.div>
      </div>
    </WrapSection>
  );
}
