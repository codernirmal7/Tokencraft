import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Box3, Vector3 } from 'three';

// MetaMaskModel centered and scaled
const MetaMaskModel = () => {
  const { scene } = useGLTF('/metamask.glb'); // Adjust the path

  // Calculate bounding box to center the model
  useEffect(() => {
    const box = new Box3().setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);
    scene.position.sub(center); // Center the model
  }, [scene]);
// Auto-rotate the model
useFrame(() => {
    scene.rotation.y += 0.02; // Rotate the model around the Y-axis
  });

  return <primitive object={scene} scale={0.35} />; // Adjust scale if needed
};

// MetaMask3DModel with responsive Canvas
const MetaMask3DModel = () => {
  const [canvasSize, setCanvasSize] = useState({ width: '300px', height: '500px' });

  useEffect(() => {
    const updateCanvasSize = () => {
      if (window.innerWidth >= 1145) {
        setCanvasSize({ width: '300px', height: '400px' });
      } else {
        if (window.innerWidth <= 1060) {
            setCanvasSize({ width: '240px', height: '260px' });
          } else {
            setCanvasSize({ width: '280px', height: '360px' });
          }
      }
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize(); // Call once to set initial size

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <Canvas className='canvasMetaMask' style={{ ...canvasSize, backgroundColor: 'transparent' }}>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} />
      <MetaMaskModel />
      <OrbitControls 
        enableZoom={false} 
        minDistance={1} 
        maxDistance={10} 
        maxPolarAngle={Math.PI / 2} // Prevent flipping
      />
    </Canvas>
  );
};

export default MetaMask3DModel;
