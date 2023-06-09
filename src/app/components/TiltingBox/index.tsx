"use client";
import React, { ReactNode, useRef, useState } from "react";

type TiltingBoxProps = {
  className?: string;
  children: ReactNode;
};

const TiltingBox: React.FC<TiltingBoxProps> = ({ className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<{ x: number; y: number } | null>(
    null
  );
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    const { clientX, clientY } = ev;
    const box = ref.current?.getBoundingClientRect();
    if (clientX === -1 || clientY === -1) {
      setRotation(null);
    } else if (box) {
      const x = clientX - box.left;
      const y = clientY - box.top;
      const xPercent = y / box.height;
      const yPercent = x / box.width;
      setRotation({
        x: Math.floor((xPercent - 0.5) * 15) * -1,
        y: Math.floor((yPercent - 0.5) * 15),
      });
    }
  };
  const onMouseLeave = () => {
    setRotation(null);
  };

  return (
    <div
      className={className}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="relative transition-transform origin-center transform-gpu duration-500 ease-out h-auto"
        style={
          rotation
            ? {
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }
            : { transform: "rotate(0deg)" }
        }
      >
        <div
          className="absolute top-0 left-0 z-20 w-full h-full transition-transform origin-center transform-gpu opacity-20 duration-500 ease-out"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 50%)",
            mixBlendMode: "plus-lighter",
            transform: rotation
              ? `scale(1.2) translateX(${rotation.y * 10}px) translateY(${
                  rotation.x * -15
                }px)`
              : "",
          }}
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-20 mix-blend-multiply" />
        {children}
      </div>
    </div>
  );
};

export default TiltingBox;
