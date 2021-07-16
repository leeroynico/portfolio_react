import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import Projets from "./Projets";

export default function DragProjets(props) {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 10,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 20,
      y: 50,
    })
  );

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: 1 }),
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
