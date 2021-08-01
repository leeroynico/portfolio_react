import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import CardCompetences from "./CardCompetence";
import CardCompetencesFront from "./CardCompetencesFront";

export default function Competences() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 30, tension: 400, friction: 80 },
  });
  return (
    <div onClick={() => setFlipped(!flipped)}>
      <animated.div
        style={{
          position: "absolute",
          width: "80%",
          zIndex: 2,
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        <CardCompetencesFront />
      </animated.div>
      <animated.div
        style={{
          transform,
          rotateX: "180deg",
        }}
      >
        <CardCompetences />
      </animated.div>
    </div>
  );
}
