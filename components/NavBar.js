import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition, transition3 } from "/lib/settings";
import useMeasure from "react-use-measure";
import Circles from "/components/circles";
import Link from "next/link";


export default function Navbar() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover2, setIsHover2] = useState(false);
  const [isPress2, setIsPress2] = useState(false);

  return (
    <motion.div className="overflow-clip h-screen w-screen flex flex-col items-center justify-center z-50">
      <MotionConfig transition={transition}>
        <motion.hgroup
          ref={ref}
          initial="false"
          animate={isHover2 ? "hover" : "rest"}
          whileTap="press"
          onHoverStart={() => {
            setIsHover2(true);
          }}
          onHoverEnd={() => {
            setIsHover2(false);
          }}
          onTapStart={() => setIsPress2(true)}
          onTap={() => setIsPress2(false)}
          onTapCancel={() => setIsPress2(false)}
          className="header absolute flex flex-col top-0 text-white left-0 p-5 z-50"
        >
          <motion.ul className="absolute flex flex-col top-0 text-white left-0 p-4 tracking-widest space-y-2 uppercase text-sm z-50" 
          initial={{
            x:-900
          }}
          animate={{
            x: 0
          }}
          transition={transition3}>
            <li className="list-disc ml-[12px]"></li>
            <Link href="/">
              <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
                Home
              </li>
            </Link>

            <Link href="about">
              <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
                Chess
              </li>
            </Link>

            <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
              Climbing
            </li>

            <Link href="skills">
              <li className="cursor-pointer hover:text-gray-400 hover:duration-[425ms] active:duration-[250ms] active:scale-105">
                Coding
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
                <Circles isHover={isHover2} isPress={isPress2} />
              </Suspense>
            </div>
          </motion.div>
        </motion.hgroup>
      </MotionConfig>
    </motion.div>
  );
}
