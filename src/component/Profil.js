import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Avatar,
  Chip,
} from "@material-ui/core";
import profilPic from "../images/profil.png";
import github from "../images/reseaux/github.png";
import linkedin from "../images/reseaux/linkedinlogo.png";
import "./profilStyle.css";
import { Divider } from "@material-ui/core";

function Profil() {
  return (
    <Card id="profilCard">
      <CardContent>
        <Avatar
          className="profilpic"
          alt="profil pic"
          src={profilPic}
          sx={{
            width: 80,
            height: 80,
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
        <Divider>
          <Chip
            align="center"
            variant="outlined"
            sx={{
              color: "white",
              background: "rgba(72, 74, 80, 0.70)",
              height: 40,
              fontSize: "1.2em",
            }}
            label="Développeur Web Polyvalent"
          />
        </Divider>
        <Typography
          sx={{ fontFamily: "Teko", marginTop: 3 }}
          align="center"
          variant="h5"
          component="div"
        >
          Orienté Front-End (React), mais ouvert au Back-end
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
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default Profil;
