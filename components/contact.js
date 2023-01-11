import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "/pages/settings";
import useMeasure from "react-use-measure";
import Circles2 from "/components/circles2";
import Link from "next/link";

export default function contact() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isPress2, setIsPress2] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
        <motion.hgroup
          ref={ref}
          initial="false"
          animate={isHover ? "hover" : "rest"}
          whileTap="press"
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
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
          className="header relative flex flex-col bottom-0 text-white right-0 p-10 pr-[71.5px]"
        >
          <motion.ul className="absolute flex flex-col top-0 text-white left-0 p-4 tracking-widest space-y-2 uppercase text-sm">
          <li className="list-disc ml-[80px]"></li>
            <Link href="contact">
              <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
                Contact
              </li>
            </Link>
            
          </motion.ul>

          <motion.div
            className="flex"
            
            variants={{
              rest: { opacity: 1, scale: 1.5 },
              hover: { opacity: 1, scale: 1.9 },
              press: { scale: 2 },
              
            }}
          >
            <div className="flex">
              <Suspense fallback={null}>
                <Circles2
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
        </motion.hgroup>
      </MotionConfig>
  );
}
