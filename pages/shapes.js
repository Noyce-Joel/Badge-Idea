import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { transition } from "./settings";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { useSmoothTransform } from "./use-smooth-transform";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Shapes({ isHover, isPress, mouseX, mouseY }) {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <MotionConfig transition={transition}>
        <motion.group
          center={[0, 0, 0]}
          rotation={[lightRotateX, lightRotateY, 0]}
        >
          <Lights />
        </motion.group>
        <motion.group
          initial='false'
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isPress ? -0.9 : 0 },
          }}
        >
          <Model />
          <Model4 />
          <Model2 />
          <Model3 />
          <Model5 />
          <Model6 />
          <Model7 />
          <Model8 />
          <Model9 />
          <Model10 />
          <Model11 />
          <Model12 />
          <Model121 />
          
        </motion.group>
      </MotionConfig>
    </Canvas>
  );
}

export function Lights() {
  return (
    <>
      <spotLight color position={[-10, -10, -10]} intensity={0.2} />
      <spotLight color position={[-10, 0, 15]} intensity={0.8} />
      <spotLight color position={[-5, 20, 2]} intensity={0.5} />
      <spotLight color position={[15, 10, -2]} intensity={2} />
      <spotLight color position={[15, 10, 5]} intensity={1} />
      <spotLight color position={[5, -10, 5]} intensity={0.8} />
    </>
  );
}

export function Model() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/queen.glb");
  return (
    <motion.mesh
      position={[-0.5, -0.5, 0]}
      variants={{ hover: { z: 2, x: -1, y: -0.7, rotateX: 0.4 } }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.09} />
      </>
    </motion.mesh>
  );
}

export function Model2() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/cara.glb");
  return (
    <motion.mesh
      position={[0.2, 0, 0]}
      rotation={[-0.5, 0, -0.3]}
      variants={{
        hover: {
          z: 1.4,
          x: -1.7,
          y: 1.5,
          rotateZ: 0.4,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.2} />
      </>
    </motion.mesh>
  );
}

export function Model3() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/headphones.glb");
  return (
    <motion.mesh
      position={[0.1, 0.6, 1]}
      rotation={[-0.5, 0.5, 0]}
      variants={{
        hover: {
          x: 0.6,
          y: -1.22,
          z: 2,
          rotateY: 0.5,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={3} />
      </>
    </motion.mesh>
  );
}

export function Model4() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/hiking_boot.glb");
  return (
    <motion.mesh
      position={[0.5, 0, 0.2]}
      rotatation={[-0.5, 0.5, 0]}
      variants={{
        hover: {
          z: 1.1,
          x: 0.9,
          y: 1.9,
          rotateY: 0.2,
          rotateX: 0.5,
          rotateZ: -0.7,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={4} />
      </>
    </motion.mesh>
  );
}

export function Model5() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/mac.glb");
  return (
    <motion.mesh
      position={[1.1, 0.8, 0]}
      variants={{ hover: { z: 2, x: 1.25, y: 0.5, rotateX: 0.8 } }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.075} />
      </>
    </motion.mesh>
  );
}

export function Model6() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/cssIcon.glb");
  return (
    <motion.mesh
      position={[-0.5, 0.8, 1]}
      variants={{ hover: { z: 2, rotateY: 5, rotateX: -5.5 } }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={5} />
      </>
    </motion.mesh>
  );
}

export function Model7() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/html2.glb");
  return (
    <motion.mesh
      position={[0, 0, 0]}
      variants={{
        hover: { z: 2, x: 1.27, y: -0.5, rotateY: 4.5, rotateX: -6.2 },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={5} />
      </>
    </motion.mesh>
  );
}

export function Model8() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/jsIcon.glb");
  return (
    <motion.mesh
      position={[0.2, 0, 0]}
      rotation={[0, 0, 0]}
      variants={{
        hover: {
          z: 2.4,
          x: -0.9,
          y: -0.9,
          rotateZ: 0.29,
          rotateY: -1.7,
          rotateX: -0.5,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={5.7} />
      </>
    </motion.mesh>
  );
}

export function Model9() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/books.glb");
  return (
    <motion.mesh
      position={[0.2, 0, 0]}
      rotation={[0, 0, 0]}
      variants={{
        hover: {
          z: -1,
          x: -2.9,
          y: 1.4,
          rotateZ: 0.4,
          rotateY: 1.7,
          rotateX: 0.9,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.5} />
      </>
    </motion.mesh>
  );
}

export function Model10() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/coffee_cup.glb");
  return (
    <motion.mesh
      position={[0.2, 0, 0]}
      rotation={[0, 0, 0]}
      variants={{
        hover: {
          z: 0.5,
          x: 1.8,
          y: -1.2,
          rotateZ: 0,
          rotateY: 0,
          rotateX: 0.4,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={5} />
      </>
    </motion.mesh>
  );
}

export function Model11() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/react.glb");
  return (
    <motion.mesh
      position={[0.2, 0, 0]}
      rotation={[0, 0, 0]}
      variants={{
        hover: {
          z: -0.4,
          x: 0,
          y: 3.5,
          rotateZ: 0,
          rotateY: 3.2,
          rotateX: 0,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={1.7} />
      </>
    </motion.mesh>
  );
}

export function Model12() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/guitar.glb");
  return (
    <motion.mesh
      position={[0.2, 0, 0]}
      rotation={[0, 0, 0]}
      variants={{
        hover: {
          z: -0.4,
          x: 3.2,
          y: 2.7,
          rotateZ: -0.7,
          rotateY: 0,
          rotateX: 0.4,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.5} />
      </>
    </motion.mesh>
  );
}

export function Model121() {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/models/dumbbell.glb");
  return (
    <motion.mesh
      position={[0.2, 0, 0]}
      rotation={[0, 0, 0]}
      variants={{
        hover: {
          z: -1,
          x: 0,
          y: -3.2,
          rotateZ: 0,
          rotateY: -2.9,
          rotateX: 0.5,
        },
      }}
    >
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={0.17} />
      </>
    </motion.mesh>
  );
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      if (cameraRef.current) {
        const oldCam = camera;
        set(() => ({ camera: cameraRef.current }));
        return () => set(() => ({ camera: oldCam }));
      }
    });
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={100}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
