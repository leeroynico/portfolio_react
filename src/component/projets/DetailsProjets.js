import React from "react";
import allProjets from "./AllProjets";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  DialogActions,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import DialogTitle from "@material-ui/core/DialogTitle";

function DetailsProjets(match) {
  const projetFilter = allProjets.filter(
    (item) =>
      item.id === Number(match.match.params.id) ||
      item.dialogContent.technos.includes(match.match.params.id)
  );

  const projet = allProjets.find(
    (projet) => projet.id === Number(match.match.params.id)
  );
  const darkMode = localStorage.getItem("darkMode");
  console.log("projet filter =>", projetFilter);
  console.log(match.match.params.id);
  // console.log(isNaN(match.match.params.id));
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
      <Box>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          sx={{ marginLeft: "40%", marginRight: "auto", marginTop: "5%" }}
          size="large"
          to="/"
          component={Link}
        >
          HOME
        </Button>
        {projet ? (
          <Grid container spacing={3}>
            <Grid item xs={11} md={5}>
              <Card
                sx={{
                  display: "flex",
                  marginTop: "5%",
                  backgroundColor: "rgb(32, 38, 45)",
                  padding: "1.5rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent
                    sx={{
                      //flex: "1 0 auto",
                      backgroundColor: "rgb(18, 18, 18)",
                      color: "whitesmoke",
                    }}
                  >
                    <Typography component="div" variant="h5">
                      {projet.sousTitre}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {projet.dialogContent.technos.map((item, i) => (
                        <span key={i} style={{ color: "grey" }}>
                          {`[${item}]`}
                          &nbsp;
                        </span>
                      ))}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                      {projet.dialogContent.texte}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                      {projet.texte}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                      {projet.dialogContent.url && (
                        <a href={projet.dialogContent.url} target="blank">
                          visitez le site
                        </a>
                      )}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                      {projet.dialogContent.github === "" ? (
                        ""
                      ) : (
                        <a href={projet.dialogContent.github} target="blank">
                          github
                        </a>
                      )}
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={projet.img}
                  alt={`mon projet${projet.id}`}
                />
              </Card>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
}
export default DetailsProjets;
