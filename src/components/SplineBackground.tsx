"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Dynamically load Spline on client-side only to prevent hydration and async component errors
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function SplineBackground() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the window
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress using a spring
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5,
  });

  // Map the smooth scroll progress to 3D CSS transforms of the canvas container
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.15, 0.95]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 8]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [0, -10, 5]);
  const translateX = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "8%", "-5%"]);
  const translateY = useTransform(smoothProgress, [0, 1], ["0%", "5%"]);
  
  // Also map opacity to fade the background slightly in later text-heavy sections
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.85, 0.7, 0.6, 0.8]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const splineAppRef = useRef<any>(null);

  // Fallback timeout: If Spline doesn't load in 5 seconds, trigger the fallback gradient
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        console.warn("Spline took too long to load. Falling back to static gradient.");
        setHasError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSplineLoad = (splineApp: any) => {
    splineAppRef.current = splineApp;
    setIsLoaded(true);
  };

  const handleSplineError = () => {
    setHasError(true);
  };

  // Adjust Spline camera / object directly on scroll if we want internal changes
  useEffect(() => {
    return smoothProgress.on("change", (_latest) => {
      if (splineAppRef.current) {
        try {
          // If the scene contains objects that we want to manipulate directly:
          // E.g., we can rotate the whole scene slightly inside Spline
          // splineAppRef.current.emitEvent('scroll', 'Cube'); // if triggers are set up
          
          // Alternatively, we can find the camera and adjust its position
          // const mainCamera = splineAppRef.current.findObjectByName('Camera');
          // if (mainCamera) {
          //   mainCamera.position.x = latest * 100;
          // }
        } catch (_err) {
          // Silent catch
        }
      }
    });
  }, [smoothProgress]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-zinc-950 overflow-hidden" ref={containerRef}>
      {/* Loading state indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 z-50 transition-opacity duration-1000">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
            <div className="absolute inset-0 rounded-full border-t-2 border-white animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-2 border-white/5"></div>
            <div className="absolute inset-2 rounded-full border-b-2 border-zinc-400 animate-spin [animation-direction:reverse]"></div>
          </div>
          <p className="mt-6 text-sm font-semibold tracking-widest text-white uppercase animate-pulse">
            Initializing 3D Space
          </p>
        </div>
      )}

      {/* Fallback Static Gradient Background if Spline fails or is slow */}
      {hasError && (
        <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/10 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
        </div>
      )}

      {/* 3D Scene Wrapper with Scroll-linked transforms */}
      <motion.div
        className="w-full h-full origin-center"
        style={{
          scale,
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          opacity: backgroundOpacity,
          perspective: 1200,
        }}
      >
        {!hasError && (
          <Spline
            scene="https://prod.spline.design/JyWmDORsck24PnTB/scene.splinecode"
            onLoad={handleSplineLoad}
            onError={handleSplineError}
            className="w-full h-full"
          />
        )}
      </motion.div>

      {/* Ambient overlay shadows to integrate the 3D asset cleanly with web typography */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/65"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(9,9,11,0.6)_80%)]"></div>
    </div>
  );
}
