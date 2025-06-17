"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useMemo, useEffect } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  
  // Generate particles only once with a fixed count
  const sphere = useMemo(() => {
    const positions = new Float32Array(500 * 3); // Fixed count of 500 particles
    random.inSphere(positions, { radius: 1.2 });
    return positions;
  }, []); // Empty dependency array means this only runs once

  // Much more aggressive animation throttling
  let frameCount = 0;
  useFrame((_state, delta) => {
    frameCount++;
    // Only update every 6 frames instead of 3 (even slower)
    if (ref.current && frameCount % 6 === 0) {
      ref.current.rotation.x -= delta / 25; // Much slower rotation
      ref.current.rotation.y -= delta / 30; // Much slower rotation
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.001} // Even smaller particles
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Disable stars on very low-end devices
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEnd = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 2;
    
    if ((isMobile && isLowEnd) || prefersReducedMotion) {
      setShouldRender(false);
    }
  }, []);

  if (!shouldRender) {
    return null; // Don't render stars at all on very low-end devices
  }

  return (
    <div className="w-full h-auto fixed inset-0 -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: false,
          precision: "lowp", // Use low precision for better performance
        }}
        performance={{ min: 0.2 }} // Allow even lower quality
        frameloop="demand" // Only render when needed
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
