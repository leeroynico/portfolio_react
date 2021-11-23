import React from "react";
import allProjets from "./AllProjets";
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

function DetailsProjets(match) {
  // const projetFilter = match.match.params.id
  //   const projetFilter = allProjets.filter(
  //     (item) =>
  //       item.id === Number(match.match.params.id) ||
  //       //item.dialogContent.technos
  //   );
  const projet = allProjets.find(
    (projet) => projet.id === Number(match.match.params.id)
  );
  const darkMode = localStorage.getItem("darkMode");
  // console.log(projetFilter);
  console.log(match.match.params.id.length);
  console.log(isNaN(match.match.params.id));
  // console.log('projets : ', projetFilter);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: darkMode === "true" ? "#111927" : "#50e3c2",
        backgroundImage:
          darkMode === "true"
            ? `radial-gradient(at 47% 33%, #0079B3, transparent 59%)`
            : `radial-gradient(at 47% 33%, #00b2fe, transparent 59%)`,
      }}
    >
      {projet ? (
        <Box>
          <DialogTitle>{projet.sousTitre}</DialogTitle>
          <ListItem disablePadding>
            &nbsp;
            {projet.dialogContent.technos.map((item, i) => (
              <span key={i}>
                <ListItemText primary={`[${item}]`} />
                &nbsp;
              </span>
            ))}
            &nbsp;
          </ListItem>
          <Typography sx={{ marginLeft: 2, marginRight: 2 }}>
            {projet.dialogContent.texte}
          </Typography>
          <DialogActions>
            {projet.dialogContent.url && (
              <a href={projet.dialogContent.url} target="blank">
                visitez le site
              </a>
            )}
            &nbsp;
            {projet.dialogContent.github === "" ? (
              ""
            ) : (
              <a href={projet.dialogContent.github} target="blank">
                github
              </a>
            )}
          </DialogActions>
        </Box>
      ) : (
        "nada"
      )}
    </div>
  );
}
export default DetailsProjets;
