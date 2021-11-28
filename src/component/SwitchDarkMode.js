import * as React from "react";
import { useState } from "react";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import MUISwitch from "./MUISwitch";

export default function SwitchDarkMode(props) {
  const [modeLight, setModeLight] = useState(false);
  return (
    <>
      <FormGroup sx={{ marginTop: 1 }}>
        <FormControlLabel
          control={<MUISwitch mode={modeLight} />}
          onClick={() => props.setDarkMode()}
          label=""
          onChange={() => {
            setModeLight(!modeLight);
            props.setDarkMode();
          }}
        />
      </FormGroup>
    </>
  );
}
