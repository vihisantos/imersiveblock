import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = ({ position, scale }) => {
    const groupRef = useRef();
    // Load the custom GLB model
    const { scene } = useGLTF('/models/terra1k.glb');

    useFrame((state, delta) => {
        // Slow, majestic rotation
        groupRef.current.rotation.y += delta * 0.1;
    });

    return (
        <primitive
            ref={groupRef}
            object={scene}
            position={position}
            scale={scale}
        />
    );
};

const Scene = () => {
    return (
        <group>
            {/* 
         Using the custom uploaded model.
         Scale set to 2x for visibility, adjust as needed.
      */}
            <Model position={[0, -1, 0]} scale={[4, 4, 4]} />

            {/* Lighting setup to ensure the model looks good */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[4, 5, 4]} intensity={1.1} />
            <directionalLight position={[-4, 5, -4]} intensity={0.5} />
        </group>
    );
};

// Pre-load the model to avoid pop-in
useGLTF.preload('/models/terra1k.glb');

export default Scene;
