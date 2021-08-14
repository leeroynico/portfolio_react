import * as React from "react";
import { useState } from "react";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import ModeNightIcon from "@material-ui/icons/ModeNight";
import Brightness7Icon from "@material-ui/icons/Brightness7";

export default function SwitchDarkMode(props) {
  const [modeLight, setModeLight] = useState(false);
  return (
    <>
      <FormGroup sx={{ marginTop: 1 }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label=""
          onChange={() => {
            setModeLight(!modeLight);
            props.setDarkMode();
          }}
        />
        {!modeLight ? (
          <ModeNightIcon sx={{ marginLeft: 1 }} />
        ) : (
          <Brightness7Icon
            sx={{
              marginRight: 2,
            }}
          />
        )}
      </FormGroup>
    </>
  );
}
