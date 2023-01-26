import React from "react";
import { motion } from "framer-motion";

export default function circles() {
  return (
    <motion.div className="absolute flex justify-center items-center z-0 pointer-events-none left-[14px] top-7">
      <div className="absolute border border-yellow-100 opacity-50 rounded-full h-[170px] w-[170px]" />
      <div className="absolute border border-yellow-200 opacity-25 rounded-full h-[300px] w-[300px]" />
      <div className="absolute border border-yellow-200 rounded-full h-[450px] opacity-20 w-[450px]" />
      <div className="absolute border border-yellow-200 rounded-full h-[600px] opacity-10 w-[600px]" />
      <div className="absolute border border-yellow-200 rounded-full h-[750px] opacity-5 w-[750px]" />
      <div className="absolute border border-yellow-200 rounded-full h-[850px] opacity-0 w-[850px] " />
    </motion.div>
  );
}
