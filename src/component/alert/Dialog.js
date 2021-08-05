import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

export default function AlertDialog(props) {
  const handleClose = () => {
    props.setActive(false);
  };

  return (
    <div>
      <Dialog
        open={props.active}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.fonctionToExecute === "phone"
              ? " Appellez le 06 17 52 84 97 ?"
              : props.fonctionToExecute === "mail"
              ? " envoyez un mail à nicoleroydev@gmail.com"
              : ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Nope</Button>
          <Button
            onClick={() => {
              handleClose();
              if (props.fonctionToExecute === "phone") {
                window.open("tel:+33617528497");
              } else if (props.fonctionToExecute === "mail") {
                window.open("mailto:nicoleroydev@gmail.com");
              }
            }}
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
