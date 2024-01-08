import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.90} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={5}
        intensity={5}
        castShadow
        shadow-mapSize={1024}/>
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.6}
        position={isMobile ? [0, -4.25, -2.2] : [-3, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    //Add listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //Set initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to media query
    const handleMediaQueryChange = () => {
      setIsMobile(event.matches);
    }

    //Add the callback function to listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;