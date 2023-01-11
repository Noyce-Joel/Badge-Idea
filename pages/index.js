import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Button from "/components/button";
import Contact from '/components/contact'
import Pose from 'react-pose'
function index() {
  return (
    
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,
    }}
      exit={{ opacity: 0,
        
     }}
      transition={{
        animation: {duration: 5},
        exit: {duration: 5},
       
        ease: 'anticipate'
      }}
     
    >
      <section className="bg-#000000b9 h-screen w-screen absolute top-0">
        <Button />
      </section>

    

    
    </motion.div>
  );
}

export default index;
