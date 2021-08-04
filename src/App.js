import React, { useState, useEffect } from "react";
import Profil from "./component/profil/Profil";
import Speedial from "./component/Speedial";
import Competences from "./component/animationCompetences/Competences";
import DragProjets from "./component/projets/DragProjets";
import { Grid, Box } from "@material-ui/core";
import AboutMe from "./component/aboutMe/AboutMe";
import "./App.css";

function App() {
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <Grid container spacing={2}>
        <Grid item xs={1} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <Profil />
        </Grid>
        <Grid item xs={1} md={3}></Grid>
        <Grid item xs={12} md={5}>
          <Box className={windowSize.width < 900 ? "" : "border"}>
            <DragProjets />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Competences />
        </Grid>
        <Grid item xs={12}>
          <AboutMe />
        </Grid>
        <Speedial />
      </Grid>
    </div>
  );
}
export default App;
