import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture, useDrag } from "react-use-gesture";
import Projets from "./Projets";
import allProjets from "./AllProjets";
import { useSprings } from "react-spring";
import { DownloadTwoTone } from "@material-ui/icons";

function Drag({ projet }) {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);
    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const [active, setActive] = useState(false);
  const [springs, api] = useSprings(4, () => ({
    x: 0,
    y: 0,
    scale: 1,
    zIndex: 1,
  }));

  const bindCard = useDrag((params) => {
    let x = params.offset[0];
    let y = params.offset[1];
    let scale;
    let zIndex;
    console.log(params);
    if (params.down) {
      scale = 1.05;
      setActive(true);
      //zIndex = 500;
    } else {
      scale = 1;
      setActive(false);
      // zIndex = 30;
    }

    api.start(() => {
      return {
        x,
        y,
        scale,
        zIndex,
      };
    });
  });

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {springs.map(({ x, scale }, i) => (
        <animated.div
          {...bindCard(i)}
          key={i}
          style={{
            x,
            //  scale,
            // zIndex: scale.to([1, 1.05], [10, 500]),
            position: "relative",
          }}
          // children={projet}
        >
          <Projets content={allProjets[i]} />
        </animated.div>
      ))}
    </div>
  );
}

export default function DragProjets() {
  return (
    <>
      <Drag />
      {/* {allProjets.map((item) => (
        <div key={item.id} draggable="false" style={{ display: "flex" }}>
          <Drag projet={<Projets content={item} />}></Drag>
        </div>
      ))} */}
    </>
  );
}
