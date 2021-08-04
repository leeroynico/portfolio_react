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

  const bindCard = useDrag((params) => {
    const x = params.offset[0];
    api.start(() => {
      return {
        x,
      };
    });
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        zIndex: 2,
      }}
    >
      <Typography
        align="center"
        variant="h3"
        sx={{ fontFamily: "Teko", marginBottom: -4 }}
      >
        Mes Projets
      </Typography>
      {springs.map(({ x }, i) => (
        <animated.div
          {...bindCard()}
          key={i}
          style={{
            x,
          }}
        >
          <Projets content={allProjets[i]} />
        </animated.div>
      ))}
    </div>
  );
}

// export default function DragProjets() {
//   return (
//     <>
//       <Typography
//         align="center"
//         variant="h3"
//         sx={{ fontFamily: "Teko", marginBottom: -4 }}
//       >
//         Mes Projets
//       </Typography>
//       <Drag />
//       {/* {allProjets.map((item, i) => (
//         <div>
//           <Drag key={i} projet={<Projets content={item} />} />
//         </div>
//       ))} */}
//     </>
//   );
// }
