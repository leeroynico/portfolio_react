import React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import CardCompetences from "./CardCompetence";
import CardCompetencesFront from "./CardCompetencesFront";

export default function Competences() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log(windowSize.width);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(800px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 30, tension: 60, friction: 80 },
  });

  const widthDiv = windowSize.width < 900 ? "95%" : "45%";
  const marginLeft = windowSize.width < 900 ? 0 : "30%";
  const marginTop = windowSize.width > 900 ? 0 : "110%";

  return (
    <div onClick={() => setFlipped(!flipped)} className="containerFlipp">
      <animated.div
        className="flippDiv"
        style={{
          zIndex: 2,
          opacity: opacity.to((o) => 1 - o),
          transform,
          width: widthDiv,
          marginLeft: marginLeft,
          marginTop: marginTop,
        }}
      >
        <CardCompetencesFront />
      </animated.div>
      <animated.div
        className="flippDiv"
        style={{
          transform,
          rotateX: "180deg",
          width: widthDiv,
          marginLeft: marginLeft,
          marginTop: marginTop,
        }}
      >
        <CardCompetences />
      </animated.div>
    </div>
  );
}
