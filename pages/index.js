import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Button from "/components/button";
import Contact from '/components/contact'
function index() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
      exit={{ opacity: 0,
     }}
      transition={{
        
        duration: 1,
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
