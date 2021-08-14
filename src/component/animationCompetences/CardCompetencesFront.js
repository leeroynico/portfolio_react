import React from "react";
import "./cardCompetenceStyle.css";
import { Typography } from "@material-ui/core";

function CardCompetencesFront() {
  return (
    <>
      <div id="listTechnoFront">
        <Typography
          align="center"
          variant="h1"
          sx={{
            fontFamily: "Teko",
          }}
        >
          compétences
        </Typography>
      </div>
    </>
  );
}

export default CardCompetencesFront;
