import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Profil from "./component/profil/Profil";
import Speedial from "./component/Speedial";
import Competences from "./component/animationCompetences/Competences";
import DragProjets from "./component/projets/DragProjets";
import { Grid } from "@material-ui/core";
import AboutMe from "./component/aboutMe/AboutMe";
import SwitchDarkMode from "./component/SwitchDarkMode";
import ContactMe from "./component/sendMail/ContactMe";
import "./App.css";
//import firebase from "./component/firebase";

function Home() {
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
    //  localStorage.setItem("darkMode", "true");
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const localUserMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(localUserMode);
  console.log(localUserMode);
  const activeDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  const { x } = useSpring({
    from: { x: 0 },
    x: darkMode ? 1 : 0,
    config: { duration: 1200 },
  });

  return (
    <>
      <animated.div
        style={{
          backgroundColor: x.to({
            range: [0, 1],
            output: ["#111927", "#50e3c2"],
          }),
          backgroundImage: x.to({
            range: [0, 1],
            output: [
              `radial-gradient(at 47% 33%, #0079B3, transparent 59%),
               radial-gradient(at 82% 65%, #2C1F98, transparent 55%)`,
              `radial-gradient(at 47% 33%, #00b2fe, transparent 59%),
               radial-gradient(at 82% 65%, #17b486, transparent 55%)`,
            ],
          }),
        }}
      >
        <Grid container spacing={1} justifyContent="space-around">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={9} md={6}>
            <Profil windowSize={windowSize} />
          </Grid>
          <Grid
            item
            xs={1}
            md={3}
            container
            direction="row"
            justifyContent="flex-end"
            sx={{ marginLeft: windowSize.width < 900 ? "5%" : "" }}
          >
            <SwitchDarkMode setDarkMode={activeDarkMode} />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className={windowSize.width < 900 ? "mobile" : "border"}
            sx={{ marginTop: "1%" }}
          >
            <DragProjets />
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              margin: windowSize.width < 900 ? 10 : 0,
            }}
          >
            <Competences />
          </Grid>
          <Grid item xs={12}>
            <AboutMe />
          </Grid>
          <Grid item xs={12}>
            <ContactMe />
          </Grid>
          <Speedial />
        </Grid>
      </animated.div>
    </>
  );
}
export default Home;
