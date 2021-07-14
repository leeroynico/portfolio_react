import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Competences() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#46e891",
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "red",
          opacity,
          transform,
          rotateX: "180deg",
        }}
      />
    </div>
  );
}
