import React from "react";
import { motion } from "framer-motion";



export default function () {
  return (
    <motion.div
      
      className="absolute flex justify-center items-center z-0 pointer-events-none left-[10px] top-2 animate-pulse"
    >
      <div className="absolute border border-white-100 opacity-40 rounded-full h-[85px] w-[85px]" />
      <div className="absolute border border-white-200 opacity-20 rounded-full h-[150px] w-[150px]" />
      <div className="absolute border border-white-200 rounded-full h-[225px] opacity-10 w-[225px]" />
      <div className="hidden absolute border border-white-200 rounded-full h-[300px] opacity-10 w-[300px]" />
      <div className="hidden absolute border border-white-200 rounded-full h-[375px] opacity-5 w-[375px]" />    
      <div className="hidden absolute border border-white-200 rounded-full h-[425px] opacity-0 w-[425px] " />    
   
    </motion.div>
  );
}
