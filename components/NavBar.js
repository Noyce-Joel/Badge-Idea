import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "/pages/settings";
import useMeasure from "react-use-measure";
import Circles from "/components/circles";
import Link from "next/link";

export default function Index() {
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
    <motion.div className="h-screen w-screen flex flex-col items-center justify-center z-0">
      <MotionConfig transition={transition}>
        <motion.hgroup
          ref={ref}
          initial="false"
          animate={isHover2 ? "hover" : "rest"}
          whileTap="press"
          onHoverStart={() => {
            resetMousePosition();
            setIsHover2(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover2(false);
          }}
          onTapStart={() => setIsPress2(true)}
          onTap={() => setIsPress2(false)}
          onTapCancel={() => setIsPress2(false)}
          className="header absolute flex flex-col top-0 text-white left-0 p-5 "
        >
          <motion.ul className="absolute flex flex-col top-0 text-white left-0 p-4 tracking-widest space-y-2 uppercase text-sm">
            <li className="list-disc ml-[12px]"></li>
            <Link href="/">
              <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
                Home
              </li>
            </Link>

            <Link href="about">
              <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
                About
              </li>
            </Link>

            <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
              Experience
            </li>

            <Link href="skills">
              <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
                Skills
              </li>
            </Link>
          </motion.ul>

          <motion.div
            className="header"
            variants={{
              rest: { opacity: 0, scale: 1 },
              hover: { opacity: 1, scale: 1.5 },
              press: { scale: 1.45 },
            }}
          >
            <div className="container2">
              <Suspense fallback={null}>
                <Circles
                  isHover={isHover2}
                  isPress={isPress2}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
        </motion.hgroup>
      </MotionConfig>

      
    </motion.div>
  );
}
