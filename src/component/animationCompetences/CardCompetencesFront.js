import React from "react";
import "./cardCompetenceStyle.css";
import { List, Typography } from "@material-ui/core";

function CardCompetencesFront() {
  return (
    <div>
      <List id="listTechnoFront">
        <Typography
          align="center"
          variant="h1"
          sx={{
            marginTop: 15,
            fontFamily: "Teko",
            fontSize: 110,
          }}
        >
          compétences
        </Typography>
      </List>
    </div>
  );
}

export default CardCompetencesFront;
