import React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import CardCompetences from "./CardCompetence";
import CardCompetencesFront from "./CardCompetencesFront";
import "./cardCompetenceStyle.css";

export default function Competences() {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(900px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 30, tension: 60, friction: 80 },
  });

  return (
    <div onClick={() => setFlipped(!flipped)} className="containerFlipp">
      <animated.div
        style={{
          //  zIndex: 2,
          opacity: opacity.to((o) => 1 - o),
          transform,
          cursor: "pointer",
        }}
      >
        <CardCompetencesFront />
      </animated.div>
      <animated.div
        style={{
          transform,
          opacity,
          rotateX: "180deg",
          cursor: "pointer",
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <CardCompetences />
      </animated.div>
    </div>
  );
}
