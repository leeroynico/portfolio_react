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
            {"< "} à propos de moi{" />"}
          </Typography>

          <Typography
            sx={{ fontFamily: "Ubuntu Mono" }}
            align="justify"
            variant="h6"
            component="div"
            paragraph
          >
            Mon sérieux et ma rigeur ont toujours été mes atouts. J'aime
            apprendre et trouver les solutions pour faire avancer le projet et
            l'équipe, le tout avec agilité et dans la convivialité. Je viens de
            valider une formation qualifiante en e-learning de développeur web
            Full Stack avec l'école{" "}
            <a href={linkStudy} target="blank" style={{ color: "white" }}>
              Digital Campus Live.
            </a>
          </Typography>
          <Typography
            sx={{ fontFamily: "Ubuntu Mono" }}
            align="justify"
            variant="h6"
            component="div"
            paragraph
          >
            Je suis également passioné de musique et musicien {"&"} comédien (
            <a href={link} target="blank" style={{ color: "white" }}>
              mes exploits
            </a>
            ), et compétiteur de badminton.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default AboutMe;
