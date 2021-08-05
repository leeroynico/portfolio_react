import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDrag, useGesture } from "react-use-gesture";
import Projets from "./Projets";
import allProjets from "./AllProjets";
import { useSprings, animated } from "react-spring";
import { Typography } from "@material-ui/core";

export default function DragProjets() {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);
    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const [springs, api] = useSprings(allProjets.length, () => ({
    x: 0,
  }));

  // const bindCard = useDrag(
  //   ({ down, movement: [x], args: [index] }) =>
  //     api.start((i) => i === index && { x: down ? x : 0 }),
  //   {
  //     axis: "x",
  //   }
  // );

  const bindCard = useDrag((params) => {
    const x = params.offset[0];

    api.start(() => {
      return {
        x,
      };
    });
  });

  return (
    <>
      <Typography align="center" variant="h3" sx={{ fontFamily: "Teko" }}>
        Mes 'sides' Projets
      </Typography>

      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {springs.map(({ x }, i) => (
          <animated.div
            {...bindCard()}
            key={i}
            style={{
              x,
              marginLeft: "10%",
              touchAction: "pan-x",
            }}
          >
            <Projets content={allProjets[i]} />
          </animated.div>
        ))}
      </div>
    </>
  );
}
