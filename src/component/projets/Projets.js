import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import { useSpring, animated } from "@react-spring/web";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import "./projetStyle.css";
import DialogProjetsInfos from "./DialogProjetInfos";
import { useGesture, useDrag } from "react-use-gesture";

export default function Projets(props) {
  const refPosition = useRef();
  const [positionX, setPositionX] = useState(0);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  const setPos = useCallback(() => {
    setPositionX(refPosition.current.getBoundingClientRect().x);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("mousemove", setPos);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", setPos);
    };
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
        ref={refPosition}
        className="cardContainer"
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.125)",
          maxWidth: 160,
          position: "relative",
          top: props.content.position.y,
          left: props.content.position.x,
          height: 400,
          opacity:
            windowSize.width < 900
              ? 1
              : positionX <= 380
              ? 1
              : positionX > 380 && positionX <= 400
              ? 0.8
              : positionX > 400 && positionX <= 420
              ? 0.5
              : positionX > 420 && positionX <= 430
              ? 0.3
              : positionX > 430 && positionX <= 440
              ? 0.1
              : 0,
          blur: positionX <= 380 ? 1 : 20,
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
              {windowSize.width}
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
