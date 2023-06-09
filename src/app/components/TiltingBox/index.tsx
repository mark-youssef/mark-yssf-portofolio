"use client";
import React, { ReactNode, useRef, useState } from "react";

type TiltingBoxProps = {
  className?: string;
  children: ReactNode;
};

const TiltingBox: React.FC<TiltingBoxProps> = ({ className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<{ x: Number; y: Number } | null>(
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
        {children}
      </div>
    </div>
  );
};

export default TiltingBox;
