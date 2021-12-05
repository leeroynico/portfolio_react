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
            résoudre des problématiques liées au code et au besoin du client, le
            tout avec agilité et dans la convivialité. Je viens de valider une
            formation qualifiante en e-learning de développeur web Full Stack
            avec l'école Digital Campus Live + Studi.
          </Typography>
          <Typography
            sx={{ fontFamily: "Ubuntu Mono" }}
            align="justify"
            variant="h6"
            component="div"
            paragraph
          >
            Je suis également passioné de musique et musicien - comédien (
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
