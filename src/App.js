import React from "react";
import background from "./images/background.jpg";
import Profil from "./component/profil/Profil";
import Speedial from "./component/Speedial";
import Competences from "./component/animationCompetences/Competences";
import Projets from "./component/projets/Projets";
import { useSpring, animated } from "react-spring";
import "./App.css";

const calc = (x, y) => [
  (y - window.innerHeight / 3) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function App() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: 20,
        height: 1000,
        color: "white",
      }}
    >
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        <Profil />
      </animated.div>

      <Projets />
      {/* <Competences /> */}
      <Speedial />
    </div>
  );
}

export default App;
