import * as React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  const handleClose = () => {
    props.setActive(false);
  };

  return (
    <div>
      <Dialog
        sx={{
          bgcolor: "rgba(17, 25, 40, 0.25)",
        }}
        open={props.active}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            bgcolor: "rgba(17, 25, 40, 0.15)",
          }}
        >
          <CloseIcon onClick={handleClose} />
          <DialogTitle>{props.content.sousTitre}</DialogTitle>

          <ListItem disablePadding>
            &nbsp;
            {props.content.dialogContent.technos.map((item, i) => (
              <span key={i}>
                <ListItemText primary={`[${item}]`} />
                &nbsp;
              </span>
            ))}
            &nbsp;
          </ListItem>
          <Typography sx={{ marginLeft: 2, marginRight: 2 }}>
            {props.content.dialogContent.texte}
          </Typography>
          <DialogActions>
            {props.content.dialogContent.url && (
              <a href={props.content.dialogContent.url} target="blank">
                visitez le site
              </a>
            )}
            &nbsp;
            {props.content.dialogContent.github === "" ? (
              ""
            ) : (
              <a href={props.content.dialogContent.github} target="blank">
                github
              </a>
            )}
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
