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
  CardHeader,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import "./projetStyle.css";

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

  return (
    <div
      style={{
        backgroundColor: darkMode === "true" ? "#111927" : "#50e3c2",
        backgroundImage:
          darkMode === "true"
            ? `radial-gradient(at 47% 33%, #0079B3, transparent 59%)`
            : `radial-gradient(at 47% 33%, #00b2fe, transparent 59%)`,
        paddingBottom: "5%",
      }}
    >
      <Grid
        container
        justify="center"
        alignItems="fex-start"
        sx={{ marginLeft: "200px" }}
        spacing={2}
      >
        <Grid item xs={12} sx={{ marginTop: "4%" }}>
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            size="large"
            to="/"
            component={Link}
          >
            HOME
          </Button>
        </Grid>
        {projetFilter.map((projet, i) => (
          <Grid item xs={12} md={5} sx={{ marginTop: "5%" }}>
            <Card
              style={{
                width: 250,
              }}
              className="cardContainer"
            >
              <CardMedia
                component="img"
                alt={projet.img}
                height="240"
                image={projet.img}
                title="appImg"
              />
              <CardHeader
                title={
                  <>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontFamily: "Teko" }}
                    >
                      {projet.titre}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontFamily: "Teko" }}
                    >
                      <strong> {projet.sousTitre}</strong>
                    </Typography>
                  </>
                }
                subheader={
                  <Typography
                    variant="subtitle1"
                    component="span"
                    sx={{ fontFamily: "Teko", fontSize: "1.4rem" }}
                  >
                    {projet.dialogContent.technos.map((item, i) => (
                      <span key={i}>{`[${item}]`}</span>
                    ))}
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="body2" align="justify">
                  {projet.texte}
                </Typography>
                <Typography variant="body2" align="justify">
                  {projet.dialogContent.texte}
                </Typography>
                <Button
                  fullWidth
                  target="_blank"
                  variant="text"
                  href={projet.dialogContent.url}
                >
                  visiter le site
                </Button>
                <Button
                  fullWidth
                  element="a"
                  target="_blank"
                  variant="text"
                  color="secondary"
                  sx={{ marginTop: "4%" }}
                  href={projet.dialogContent.github}
                >
                  aller sur le github
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="warning"
                  to={"/"}
                  component={Link}
                  sx={{ marginTop: "5%" }}
                >
                  retourner à l'accueil
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default DetailsProjets;
