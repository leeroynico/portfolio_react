import * as React from "react";
import { useState } from "react";
import Box from "@material-ui/core/Box";
import { SpeedDial, SpeedDialAction, Avatar } from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Dialog from "./alert/Dialog";
import cv from "../images/CV_Nicolas_Leroy.pdf";

export default function BasicSpeedDial() {
  const [active, setActive] = useState(false);
  const [fonctionToExecute, setFonctionToExecute] = useState(null);

  return (
    <>
      <Dialog
        active={active}
        setActive={setActive}
        fonctionToExecute={fonctionToExecute}
      />
      <Box>
        <SpeedDial
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
          }}
          ariaLabel="SpeedDial"
          icon={<ContactMailIcon />}
        >
          <SpeedDialAction
            icon={<PhoneIcon />}
            tooltipTitle="06 17 52 84 97"
            onClick={() => {
              setActive(true);
              setFonctionToExecute("phone");
            }}
          />
          <SpeedDialAction
            icon={<AlternateEmailIcon />}
            tooltipTitle="nicoleroydev@gmail.com"
            onClick={() => {
              setActive(true);
              setFonctionToExecute("mail");
            }}
          />

          <SpeedDialAction
            icon={<Avatar>CV</Avatar>}
            tooltipTitle="afficher mon cv"
            onClick={() => window.open(cv, "_blank")}
          />
        </SpeedDial>
      </Box>
    </>
  );
}
