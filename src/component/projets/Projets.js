import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Card,
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
  const startHide = windowSize.width / 3.2;
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
        style={{
          width: 160,
          height: 500,
          opacity:
            windowSize.width < 900
              ? 1
              : positionX <= startHide
              ? 1
              : positionX > startHide && positionX <= startHide + 20
              ? 0.8
              : positionX > startHide + 20 && positionX <= startHide + 40
              ? 0.5
              : positionX > startHide + 40 && positionX <= startHide + 50
              ? 0.3
              : positionX > startHide + 50 && positionX <= startHide + 60
              ? 0.1
              : 0,
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
