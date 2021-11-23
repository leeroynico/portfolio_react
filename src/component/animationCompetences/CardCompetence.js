import * as React from "react";
import {
  Chip,
  List,
  ListItem,
  Avatar,
  Divider,
  Typography,
} from "@material-ui/core";
import { Label } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./cardCompetenceStyle.css";
import reactLogo from "../../images/langages/react.png";
import php from "../../images/langages/php.png";
import js from "../../images/langages/JS.png";
import bootstrap from "../../images/langages/bootstrap.png";
import WordPress from "../../images/langages/WordPress.png";
import figma from "../../images/langages/figma.png";
import sql from "../../images/langages/sql.png";
import fcpx from "../../images/langages/fcpx.png";
import git from "../../images/langages/git.png";
import mui from "../../images/langages/mui.png";
import spring from "../../images/langages/spring.png";
import symfony from "../../images/langages/symfony.png";
import redux from "../../images/langages/redux.png";
import apiPlatform from "../../images/langages/apiPlatform.png";
import heroku from "../../images/langages/heroku.png";

const frontLogo = [
  { img: reactLogo, titre: "react" },
  { img: reactLogo, titre: "react Native" },
  { img: redux, titre: "redux" },
  { img: js, titre: "js" },
];
const backLogo = [
  { img: php, titre: "php" },
  { img: sql, titre: "Mysql" },
  { img: symfony, titre: "Symfony" },
  { img: WordPress, titre: "WordPress" },
];
const skillsLogo = [
  { img: figma, titre: "figma" },
  { img: fcpx, titre: "video edit" },
  { img: git, titre: "git" },
  { img: heroku, titre: "heroku" },
];
const frameworksLogo = [
  { img: mui, titre: "material-UI" },
  { img: bootstrap, titre: "bootstrap" },
  { img: spring, titre: "react-spring " },
  { img: apiPlatform, titre: "api-platform " },
];

const category = [
  { titre: "front-End", logos: frontLogo },
  { titre: "back-End", logos: backLogo },
  { titre: "frameworks", logos: frameworksLogo },
  { titre: "skills", logos: skillsLogo },
];

export default function CardCompetence() {
  return (
    <List id="listTechno">
      {category.map((item, i) => (
        <div key={i}>
          <Typography align="center" variant="h4" sx={{ fontFamily: "Teko" }}>
            {item.titre}
          </Typography>
          <ListItem>
            {item.logos
              .map((x, index) => (
                <span key={index} className="center">
                  <Chip
                    avatar={<Avatar alt={x.img} src={x.img} />}
                    label={x.titre}
                    variant="outlined"
                    sx={{
                      color: "white",
                      background: "rgba(255,255,255,0.3)",
                      height: 40,
                      fontSize: "1.2em",
                    }}
                    component={Link}
                    to={"projet/" + x.titre}
                  />
                </span>
              ))
              .slice(0, 2)}
          </ListItem>
          <ListItem>
            {item.logos
              .map((x, index) => (
                <span key={index} className="center">
                  <Chip
                    avatar={<Avatar alt={x.img} src={x.img} />}
                    label={x.titre}
                    variant="outlined"
                    sx={{
                      color: "white",
                      background: "rgba(255,255,255,0.3)",
                      height: 35,
                      fontSize: "1.2em",
                    }}
                  />
                </span>
              ))
              .slice(2, item.logos.length)}
          </ListItem>
          <Divider sx={{ borderColor: "white" }} />
        </div>
      ))}
    </List>
  );
}
