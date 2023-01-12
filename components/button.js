import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "/components/shapes";
import { transition } from "/lib/settings";
import useMeasure from "react-use-measure";
import Link from "next/link";

import { Typewriter } from "react-simple-typewriter";

export default function Index() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);



  };

  return (
    <div className="h-screen w-screen relative flex flex-col items-center justify-center z-20">
      <MotionConfig transition={transition}>
        <motion.div
          initail="false"
          animate={isHover ? "hide" : "rests"}
          variants={{
            hide: { opacity: 0 },
            rests: { opacity: 1 },
          }}
          className="absolute top-72 text-md text-white mb-[25px]"
        >
          <motion.div
            id="writer"
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: 7,
            }}
            whileInView={{ once: true }}
          >
            <Typewriter words={["Hover for a glimpse into my world..."]} />
          </motion.div>
        </motion.div>

        <Link href="about" className="transition ease-out">
          <motion.button
            className="z-10"
            ref={ref}
            initial="false"
            animate={isHover ? "hover" : "rest"}
            whileTap="press"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.5 },
              press: { scale: 1.4 },
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
            onPointerMove={(e) => {
              mouseX.set(e.clientX - bounds.x - bounds.width / 2.5);
              mouseY.set(e.clientY - bounds.y - bounds.height / 2.5);
            }}
          >
            <motion.div
              className="shapes"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              <div className="container">
                <Suspense fallback={null}>
                  <Shapes
                    isHover={isHover}
                    isPress={isPress}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                </Suspense>
              </div>
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
        </Link>
      </MotionConfig>
    </div>
  );
}
