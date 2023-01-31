import { motion } from "framer-motion";
import React from "react";
import Button from "/components/button";
import ButtonMobile from "../components/buttonMobile";

function index() {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="justify-center  text-white tracking-widest uppercase flex items-center mx-auto h-screen w-screen relative"
      >
        Welcome to my portfolio
        <div>
          
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          animation: { duration: 5 },
          exit: { duration: 5 },

          ease: "anticipate",
        }}
        className="top-[180px] hidden md:left-[55px] md:flex relative flex-col header"
      >
        <Button/>
        
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          animation: { duration: 5 },
          exit: { duration: 5 },

          ease: "anticipate",
        }}
        className="top-[180px] items-center flex md:hidden relative flex-col header"
      >
      <ButtonMobile />
        
      </motion.div>
    </div>
  );
}

export default index;
