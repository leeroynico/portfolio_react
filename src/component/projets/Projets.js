import * as React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./projetStyle.css";
import DialogProjetsInfos from "./DialogProjetInfos";

export default function Projets(props) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [scaleGo, setScaleGo] = useState(1);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [activeDialog, setActiveDialog] = useState(false);
  return (
    <>
      <DialogProjetsInfos
        active={activeDialog}
        setActive={setActiveDialog}
        content={props.content}
      />
      <Card
        onClick={() => setScaleGo(2)}
        className="cardContainer"
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.125)",
          maxWidth: windowSize.width < 600 ? 160 : 220,
          position: "relative",
          top:
            windowSize.width < 600
              ? props.content.position.y
              : props.content.position.y + 100,
          left: props.content.position.x,
          height: 400,
        }}
      >
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
              starticon={<ControlPointIcon />}
              sx={{ color: "#007bb5", marginTop: 1.5 }}
              size="large"
              onClick={() => setActiveDialog(true)}
            >
              <ControlPointIcon />
            </IconButton>
          }
          title={
            <Typography
              variant="h6"
              component="div"
              sx={{ fontFamily: "Teko" }}
            >
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
    </>
  );
}
