import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "/components/shapes";
import { transition } from "/lib/settings";
import useMeasure from "react-use-measure";


function ButtonMobile() {
    const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <motion.div 
   
    className='w-screen top-0 items-center justify-center flex relative mx-auto '>
        <MotionConfig>
        <motion.button
            className="z-10"
            ref={ref}
            initial="false"
            transition={transition}
            animate={isHover ? "hover" : "rest"}
            whileTap="press"
            variants={{
              rest: { scale: 1,},
              hover: { scale: 1.1, },
              press: { scale: 1.2 },
            }}
            onHoverStart={() => {
              resetMousePosition();
              setIsHover(true);
            }}
            onHoverEnd={() => {
              resetMousePosition();
              setIsHover(false);
            }}
            onTapStart={() => setIsPress(true)}
            onTap={() => setIsPress(false)}
            onTapCancel={() => setIsPress(false)}
            
            
          >
            <motion.div
              className="shapes"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              <motion.div className="container">
                <Suspense fallback={null}>
                  <Shapes
                    isHover={isHover}
                    isPress={isPress}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                </Suspense>
              </motion.div>
            </motion.div>
            <motion.div
              variants={{
                hover: { scale: 0.85, x: 22, y: -25 },
                press: { scale: 1.1 },
              }}
              className="label"
              style={{
                x: -100,
                y: -30,
              }}
              exit={{
                x: 22,
                y: -25,
              }}
            >
              Joel
            </motion.div>
            <motion.div
              variants={{
                hover: { scale: 0.85, x: -98, y: 20 },
                press: { scale: 1.1 },
              }}
              className="label"
              style={{
                x: 40,
                y: 30,
              }}
              exit={{
                x: -98,
                y: 20,
              }}
            >
              Noyce
            </motion.div>
          </motion.button>
        </MotionConfig>
        </motion.div>
  )
}

export default ButtonMobile