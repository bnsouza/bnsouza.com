"use client";

import {useEffect, useRef, useState} from "react";

export function Blob() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [blobPosition, setBlobPosition] = useState({x: 0, y: 0});
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setMousePosition({x, y});
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateBlob = () => {
      setBlobPosition((prevPos) => {
        const dx = mousePosition.x - prevPos.x;
        const dy = mousePosition.y - prevPos.y;
        return {
          x: prevPos.x + dx * 0.015,
          y: prevPos.y + dy * 0.015,
        };
      });

      animationRef.current = requestAnimationFrame(animateBlob);
    };

    animationRef.current = requestAnimationFrame(animateBlob);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed w-full h-screen overflow-hidden pointer-events-none">
      {/* Div com overflow hidden */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 ease-in-out"
        style={{
          left: `${blobPosition.x}px`,
          top: `${blobPosition.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: 0.15,
        }}>
        <div className="w-64 h-48 bg-gradient-to-r animate-spin-slow dark:from-teal-300 dark:to-yellow-300 from-blue-500 to-fuchsia-600 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
