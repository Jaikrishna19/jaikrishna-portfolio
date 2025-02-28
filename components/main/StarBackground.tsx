"use client"

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';

interface StarBackgroundProps {
    [key: string]: StarBackgroundProps;
}

const StarBackground = (props: StarBackgroundProps) => {
        const ref = useRef<THREE.Points>(null);
        const [sphere] = useState(() =>
                inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
        );

        useFrame((state, delta) => {
                if (ref.current) {
                        ref.current.rotation.x -= delta / 10;
                        ref.current.rotation.y -= delta / 15;
                }
        });

        return (
                <group rotation={[0, 0, Math.PI / 4]}>
                        <Points
                                ref={ref}
                                positions={sphere}
                                stride={3}
                                frustumCulled
                                {...props}
                        >
                                <PointMaterial
                                        transparent
                                        color="$fff"
                                        size={0.002}
                                        sizeAttenuation={true}
                                        depthWrite={false}
                                />
                        </Points>
                </group>
        );
};

const StarsCanvas = () => {
        return (
                <div className="w-full h-auto fixed inset-0 z-[20]">
                        <Canvas camera={{ position: [0, 0, 1] }}>
                                <Suspense fallback={null}>
                                        <StarBackground />
                                </Suspense>
                        </Canvas>
                </div>
        );
};

export default StarsCanvas;
