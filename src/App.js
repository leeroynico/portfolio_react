import React, { useState } from "react";
import background from "./images/background.jpg";
import Profil from "./component/profil/Profil";
import Speedial from "./component/Speedial";
import Competences from "./component/animationCompetences/Competences";
import DragProjets from "./component/projets/DragProjets";
import { useSpring, animated } from "react-spring";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import { Typography } from "@material-ui/core";
import allProjets from "./component/projets/AllProjets";

function App() {
  return (
    <div className="app">
      <Profil />

      <div className="border">
        <Typography align="center" variant="h3" sx={{ fontFamily: "Teko" }}>
          Mes Projets
        </Typography>
        <DragProjets />
      </div>
      <Competences />
      <Speedial />
    </div>
  );
}
export default App;
