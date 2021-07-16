import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import img from "../../images/projets/monapp.png";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./projetStyle.css";

export default function Projets(props) {
  return (
    <Card className="cardContainer" sx={{ maxWidth: 230 }}>
      <CardMedia
        component="img"
        alt="appImg"
        height="120"
        image={props.content.img}
        draggable="false"
        title="appImg"
      />
      <CardHeader
        style={{ marginBottom: -20 }}
        action={
          <IconButton
            startIcon={<ControlPointIcon />}
            sx={{ color: "#007bb5", marginTop: 1.5 }}
            size="large"
          >
            <ControlPointIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6" component="div" sx={{ fontFamily: "Teko" }}>
            {props.content.titre} <strong> {props.content.sousTitre}</strong>
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontFamily: "Teko" }}
          >
            {props.content.definition}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" align="justify">
          {props.content.texte}
        </Typography>
      </CardContent>
    </Card>
  );
}
