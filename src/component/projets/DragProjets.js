import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Projets from "./Projets";

export default function DragProjets(props) {
  // useEffect(() => {
  //   const preventDefault = (e) => e.preventDefault();
  //   document.addEventListener("gesturestart", preventDefault);
  //   document.addEventListener("gesturechange", preventDefault);

  //   return () => {
  //     document.removeEventListener("gesturestart", preventDefault);
  //     document.removeEventListener("gesturechange", preventDefault);
  //   };
  // }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    x: 0,
    y: 0,
  }));

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => api({ x, y, rotateX: 0, rotateY: 0 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );
  return (
    <div>
      <animated.div
        ref={domTarget}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <Projets content={props.content} />
      </animated.div>
    </div>
  );
}
