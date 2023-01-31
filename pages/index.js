import { motion } from "framer-motion";
import React from "react";
import Button from "/components/button";
import ButtonMobile from "../components/buttonMobile";
import Chess from '../components/indexC/chess'
import Climbing from "../components/indexC/climbing";


function index() {
  return (
    <div className="y-scroll overflow-hidden overflow-y-scroll">
      
      
     
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          animation: { duration: 5 },
          exit: { duration: 5 },

          ease: "anticipate",
        }}
        className="top-[180px] hidden lg:left-[55px] lg:flex absolute flex-col header"
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
        className="top-[180px] items-center flex lg:hidden relative flex-col header"
      >
      <ButtonMobile />

      
        
      </motion.div>

     
    </div>
  );
}

export default index;
