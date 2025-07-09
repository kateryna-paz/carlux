import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

function DetailsButton({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="mx-6 md:mx-10 lg:mx-12 text-sm md:text-base lg:text-lg bg-orange-500 hover:bg-transparent text-white border-2 border-orange-500 flex gap-2 items-center font-montagu-slab font-semibold py-2 pl-8 pr-6 rounded-xl mt-6 cursor-pointer transition-colors duration-900"
      variants={{
        rest: {
          scale: 1,
          boxShadow: "0px 0px 0px rgba(251, 146, 60, 0)",
        },
        hover: {
          scale: 1.05,
          boxShadow: "0px 0px 15px rgba(255, 129, 26, 0.6)",
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
        tap: {
          scale: 0.96,
        },
      }}
    >
      <span>Детальніше</span>
      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: 7 },
          tap: { x: 2 },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="flex items-center"
      >
        <IoIosArrowForward className="w-5 h-5" />
      </motion.span>
    </motion.button>
  );
}

export default DetailsButton;
