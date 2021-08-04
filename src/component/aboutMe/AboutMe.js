import React from "react";
import { useState, useEffect } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import "./aboutMeStyle.css";

function AboutMe() {
  const link =
    "https://www.youtube.com/watch?v=SzodL7GIv44&ab_channel=LesSp%C3%A9culos";
  const linkStudy = "https://www.digital-campus.live/";
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
  const marginTop = windowSize.width > 900 ? 0 : 800;

  return (
    <>
      <Card id="profilCard" style={{ marginTop: marginTop }}>
        <CardContent>
          <Typography
            sx={{ fontFamily: "Teko" }}
            align="center"
            variant="h4"
            component="div"
          >
            ... à propos de moi ...
          </Typography>

          <Typography
            sx={{ fontFamily: "Teko", letterSpacing: "0.1rem" }}
            align="justify"
            variant="h6"
            component="div"
            paragraph
          >
            Après plus de quinze ans à travailler comme technicien dans le
            spectacle vivant, j'ai décidé de devenir{" "}
            <bold>développeur WEB</bold>. Par volonté de monter en compétences,
            mais aussi parce que j'aime apprendre et résoudre les problèmes,
            j'ai suivi une formation qualifiante en e-learning de développeur
            web Full Stack avec l'école{" "}
            <a href={linkStudy} target="blank" style={{ color: "white" }}>
              Digital Campus Live.
            </a>
          </Typography>
          <Typography
            sx={{ fontFamily: "Teko", letterSpacing: "0.1rem" }}
            align="justify"
            variant="h6"
            component="div"
            paragraph
          >
            Je suis également un passioné de musique et musicien - comédien{" "}
            <a href={link} target="blank" style={{ color: "white" }}>
              (mes exploits)
            </a>
            , et un compétiteur de badminton (quand le contexte sanitaire le
            permet)
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default AboutMe;
