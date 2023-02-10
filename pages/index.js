import { motion } from "framer-motion";
import React from "react";
import Button from "/components/button";
import ButtonMobile from "../components/buttonMobile";

function index() {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          animation: { duration: 5 },
          exit: { duration: 5 },

          ease: "anticipate",
        }}
        className="top-[180px] hidden lg:left-[40px] lg:flex absolute header"
      >
        <Button />
      </motion.div>
      <div className="flex flex-row items-center  justify-center h-screen w-screen">
        Hey There, Short Guy
      </div>

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
