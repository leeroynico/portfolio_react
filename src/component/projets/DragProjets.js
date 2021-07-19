import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture, useDrag } from "react-use-gesture";
import Projets from "./Projets";

export default function DragProjets(props) {
  // const [width]
  // useEffect(() => {
  //   const preventDefault = (e) => e.preventDefault();
  //   document.addEventListener("gesturestart", preventDefault);
  //   document.addEventListener("gesturechange", preventDefault);

  //   return () => {
  //     document.removeEventListener("gesturestart", preventDefault);
  //     document.removeEventListener("gesturechange", preventDefault);
  //   };
  // }, []);
  console.log(props.content.position.x);
  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    x: 0,
    y: 0,
  }));

  // useGesture(
  //   {
  //     onDrag: ({ offset: [x, y] }) => api({ x, y, rotateX: 0, rotateY: 0 }),
  //   },
  //   { domTarget, eventOptions: { passive: false } }
  // );

  const bind = useDrag(
    ({ down, offset: [ox, oy] }) =>
      api.start({ x: ox, y: oy, immediate: down }),
    {
      bounds: {
        left: -200,
        right: 100,
        top: -50,
        bottom: 50,
      },
      rubberband: true,
      tap: true,
    }
  );
  return (
    <div>
      <animated.div
        {...bind()}
        ref={domTarget}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotateZ,
          touchAction: "none",
        }}
      >
        <Projets content={props.content} />
      </animated.div>
    </div>
  );
}
