import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Avatar,
  Chip,
  Box,
} from "@material-ui/core";
import profilPic from "../../images/profil.png";
import github from "../../images/reseaux/github.png";
import linkedin from "../../images/reseaux/linkedinlogo.png";
import "./profilStyle.css";

function Profil() {
  return (
    <Card id="profilCard">
      <CardContent>
        <Avatar
          className="profilpic"
          alt="profil pic"
          src={profilPic}
          sx={{
            width: 120,
            height: 120,
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Chip
            variant="outlined"
            sx={{
              color: "white",
              background: "rgba(72, 74, 80, 0.70)",
              height: 40,
              fontSize: "1.2em",
              marginBottom: 1,
            }}
            label="Développeur Web React"
          />
        </Box>
        <Typography
          sx={{ fontFamily: "Teko" }}
          align="center"
          variant="h4"
          component="div"
        >
          Nicolas Leroy
        </Typography>

        <Typography
          sx={{ fontFamily: "Teko" }}
          align="center"
          variant="h5"
          component="div"
        >
          REACT - PHP
        </Typography>
        <Typography
          sx={{
            fontFamily: "Teko",
            fontSize: "1.7rem",
            fontWeight: "bold",
          }}
          align="center"
          component="div"
        >
          nicoleroydev@gmail.com
        </Typography>
        <Typography
          sx={{
            fontFamily: "Teko",
            fontSize: "1.7rem",
            fontWeight: "bold",
            marginBottom: "-20px",
          }}
          align="center"
          component="div"
        >
          06 17 52 84 97
        </Typography>
      </CardContent>
      <CardActions>
        <a
          className="center"
          href="https://github.com/leeroynico"
          target="blank"
        >
          <Avatar alt="reseaux1" variant="rounded" src={github} />
        </a>
        <a
          className="center"
          href="https://www.linkedin.com/in/nico-leeroy/"
          target="blank"
        >
          <Avatar alt="reseaux2" variant="rounded" src={linkedin} />
        </a>
      </CardActions>
    </Card>
  );
}

export default Profil;
