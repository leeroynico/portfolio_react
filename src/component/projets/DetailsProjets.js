import React from "react";
import allProjets from "./AllProjets";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import "./projetStyle.css";

function DetailsProjets(match) {
  const projetFilter = allProjets.filter(
    (item) =>
      item.id === Number(match.match.params.id) ||
      item.dialogContent.technos.includes(match.match.params.id)
  );

  const darkMode = localStorage.getItem("darkMode");

  return (
    <div
      style={{
        backgroundColor: darkMode === "false" ? "#111927" : "#50e3c2",
        backgroundImage: darkMode
          ? `radial-gradient(at 47% 33%, #0079B3, transparent 59%)`
          : `radial-gradient(at 47% 33%, #00b2fe, transparent 59%)`,
        paddingBottom: "5%",
        height:
          projetFilter.length === 1 || projetFilter.length === 0 ? "100%" : "",
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={12} sx={{ marginTop: "4%", textAlign: "center" }}>
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

        {projetFilter.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ m: 3 }}>
              Malheuresement je ne peux pas vous montrer de projet sur cette
              compétence mais n'hésitez pas à consulter mon github pour voir mes
              projets.
            </Typography>
            <Button
              fullWidth
              element="a"
              target="_blank"
              variant="contained"
              color="secondary"
              sx={{ marginTop: "4%" }}
              href="https://github.com/leeroynico"
            >
              aller sur le github
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="warning"
              to={"/"}
              component={Link}
              sx={{ marginTop: "5%" }}
            >
              retourner à l'accueil
            </Button>
          </Grid>
        ) : (
          projetFilter.map((projet, i) => (
            <>
              {projetFilter.length !== 1 ? (
                <Grid item xs={2} sm={1}></Grid>
              ) : (
                ""
              )}
              <Grid
                key={i}
                item
                xs={8}
                sm={projetFilter.length === 1 ? 6 : 4}
                sx={{ marginTop: "5%" }}
              >
                <Card className="cardContainer">
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
                    {projet.dialogContent.github ? (
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
                    ) : (
                      ""
                    )}
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
              {projetFilter.length !== 1 ? (
                <Grid item xs={2} sm={1}></Grid>
              ) : (
                ""
              )}
            </>
          ))
        )}
      </Grid>
    </div>
  );
}
export default DetailsProjets;
