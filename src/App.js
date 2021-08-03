import React, { useState } from "react";
import Profil from "./component/profil/Profil";
import Speedial from "./component/Speedial";
import Competences from "./component/animationCompetences/Competences";
import DragProjets from "./component/projets/DragProjets";
import { useSpring, animated } from "react-spring";
import { Grid, Box } from "@material-ui/core";
import { positions } from "@material-ui/system";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Grid container spacing={2}>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <Profil />
        </Grid>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={12} md={5}>
          <Box className="border">
            <DragProjets />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Competences />
        </Grid>
        <Speedial />
      </Grid>
    </div>
  );
}
export default App;
