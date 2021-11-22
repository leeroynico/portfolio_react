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

        <Typography
          sx={{ fontFamily: "Teko" }}
          align="center"
          variant="h4"
          component="div"
        >
          Nicolas Leroy
        </Typography>

        <Typography
          sx={{ fontFamily: "Teko", marginTop: 1 }}
          align="center"
          variant="h5"
          component="div"
        >
          [REACT - PHP] {"< "} Lens || Lille{" >"}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Teko",
            marginTop: 2,
            fontSize: "1.7rem",
            fontWeight: "bold",
          }}
          align="center"
          component="div"
        >
          nicoleroydev@gmail.com
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
