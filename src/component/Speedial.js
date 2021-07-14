import * as React from "react";
import Box from "@material-ui/core/Box";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import DownloadIcon from "@material-ui/icons/Download";
import Dialog from "./alert/Dialog";
import { useState } from "react";

export default function BasicSpeedDial() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Dialog active={active} setActive={setActive} />
      <Box sx={{ height: 600, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<ContactMailIcon />}
        >
          <SpeedDialAction
            icon={<PhoneIcon />}
            tooltipTitle="06 17 52 84 97"
            //onClick={() => window.open("tel:+33617528497")}
          />
          <SpeedDialAction
            icon={<AlternateEmailIcon />}
            tooltipTitle="nicoleroydev@gmail.com"
            onClick={() =>
              // window.open("mailto:nicoleroydev@gmail.com")
              setActive(true)
            }
          />
        </SpeedDial>
      </Box>
    </>
  );
}
