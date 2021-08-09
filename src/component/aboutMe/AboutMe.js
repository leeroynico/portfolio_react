import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import "./aboutMeStyle.css";

function AboutMe() {
  const link =
    "https://www.youtube.com/watch?v=SzodL7GIv44&ab_channel=LesSp%C3%A9culos";
  const linkStudy = "https://www.digital-campus.live/";

  return (
    <>
      <Card id="profilCard">
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
            spectacle vivant, j'ai décidé de devenir développeur WEB Par volonté
            de monter en compétences, mais aussi parce que j'aime apprendre et
            résoudre les problèmes, j'ai suivi une formation qualifiante en
            e-learning de développeur web Full Stack avec l'école{" "}
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
