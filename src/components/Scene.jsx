import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const modelPath = `${import.meta.env.BASE_URL}models/terra1k.glb`;

const SceneContent = () => {
    const { scene } = useGLTF(modelPath);
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <primitive
            ref={groupRef}
            object={scene}
            position={[0, -1, 0]}
            scale={[4, 4, 4]}
        />
    );
};

const Scene = () => {
    return (
        <group>
            <SceneContent />
            <ambientLight intensity={0.4} />
            <directionalLight position={[4, 5, 4]} intensity={1.1} />
            <directionalLight position={[-4, 5, -4]} intensity={0.5} />
        </group>
    );
};

useGLTF.preload(modelPath);

export default Scene;
