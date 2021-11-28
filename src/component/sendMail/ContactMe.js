import React, { useState } from "react";
import {
  Alert,
  Card,
  Typography,
  Autocomplete,
  CardContent,
  TextField,
  Paper,
  Grid,
  Button,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { SendMail } from "./SendMail";
import ReCAPTCHA from "react-google-recaptcha";
import "../profil/profilStyle.css";

function ContactMe() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [messageOptions, setMessageOptions] = useState("");
  const [messageWrite, setMessageWrite] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertSucces, setAlertSucces] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [reCaptcha, setReCaptcha] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  const handleCloseSucces = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertSucces(false);
  };

  const sendMail = () => {
    if (nom === "" || prenom === "" || mail === "") {
      setMessageAlert(
        "Veuillez remplir au moins votre nom, prénom et votre mail et/ou téléphonne"
      );
      setAlert(true);
    } else if (!reCaptcha) {
      setMessageAlert("Veuillez cliquer sur 'Je ne suis pas un robot' ");
      setAlert(true);
    } else {
      SendMail(prenom, nom, mail, messageWrite, messageOptions);
      setAlertSucces(true);
      setPrenom("");
      setNom("");
      setMail("");
    }
  };

  const TextFieldGenerator = (label, setInputState, value) => {
    return (
      <>
        <TextField
          value={value || ""}
          id={`id${label}`}
          fullWidth
          label={label}
          sx={{
            input: {
              color: "white",
            },
            "& .MuiFormLabel-root": {
              color: "white",
              fontFamily: "Teko",
              fontSize: "1.6rem",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#0079B3",
              },
              "&:hover fieldset": {
                borderColor: "#2C1F98",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#00b2fe",
              },
            },
          }}
          onChange={(event) => {
            const regex = /[*+<>|[\]\\]/g;
            let inputValue = event.target.value;
            let inputValueRegex = inputValue.replace(regex, "_");
            if (inputValue !== inputValueRegex) {
              setAlert(true);
              setMessageAlert(
                "Les caractères :  * + < >  ne sont pas autorisés."
              );
              event.target.value = "";
            }
            const checkIfPAIsHere = [
              "adolf",
              "hitler",
              "tonton",
              "coremidi",
              "enfant",
            ];
            const checkWords = (element) =>
              element === event.target.value.toLowerCase();
            if (checkIfPAIsHere.some(checkWords)) {
              setMessageAlert("euh... t'es sérieux?");
              setAlert(true);
              event.target.value = "";
            }
            setInputState(inputValueRegex);
          }}
        ></TextField>
      </>
    );
  };

  return (
    <>
      <Snackbar open={alert} autoHideDuration={2500} onClose={handleClose}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
          sx={{
            backgroundColor: "rgb(211, 47, 47)",
            color: "white",
            marginBottom: "50%",
            width: "80%",
          }}
        >
          {messageAlert}
        </Alert>
      </Snackbar>
      <Snackbar
        open={alertSucces}
        autoHideDuration={2500}
        onClose={handleCloseSucces}
      >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertSucces(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="success"
          sx={{
            backgroundColor: "green",
            color: "white",
            marginBottom: "50%",
            width: "80%",
          }}
        >
          votre message a bien été envoyé
        </Alert>
      </Snackbar>
      <Card id="profilCard">
        <CardContent>
          <Typography
            sx={{ fontFamily: "Teko" }}
            align="center"
            variant="h4"
            component="div"
          >
            Contactez moi
          </Typography>
          <Typography
            sx={{ fontFamily: "Teko", marginBottom: 1 }}
            align="center"
            variant="h6"
            component="div"
          >
            Vous pouvez vous inspirer des messages pré-définis ou laissez voguer
            votre imagination !
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              {TextFieldGenerator("prénom", setPrenom, prenom)}
            </Grid>
            <Grid item xs={6}>
              {TextFieldGenerator("nom", setNom, nom)}
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 1 }}>
              {TextFieldGenerator("mail ou téléphonne", setMail, mail)}
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event) => {
                  setMessageOptions(event.target.textContent);
                }}
                freeSolo
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                noOptionsText=""
                multiple
                getOptionDisabled={(option) => option === exemplesSentences[2]}
                sx={{
                  marginBottom: 2,
                  ".MuiAutocomplete-noOptions": {
                    color: "white, ",
                  },
                  ".MuiAutocomplete-popupIndicator, .MuiAutocomplete-tag ": {
                    color: "white",
                  },
                  ".MuiAutocomplete-inputFocused": {
                    color: "white",
                  },
                  "& .MuiFormLabel-root": {
                    color: "white",
                    fontFamily: "Teko",
                    fontSize: "1.6rem",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#0079B3",
                    },
                    "&:hover fieldset": {
                      borderColor: "#2C1F98",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00b2fe",
                    },
                  },
                }}
                PaperComponent={({ children }) => (
                  <Paper
                    elevation={10}
                    style={{
                      backdropFilter: "blur(15px) saturate(20%)",
                      WebkitBackdropFilter: "blur(15px) saturate(20%)",
                      backgroundColor: "rgba(17, 25, 40, 0.84)",
                      color: "white",
                      marginBottom: 15,
                    }}
                  >
                    {children}
                  </Paper>
                )}
                options={exemplesSentences}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={(event) => {
                      const regex = /[*+<>|[\]\\]/g;
                      let inputValue = event.target.value;
                      let inputValueRegex = inputValue.replace(regex, "_");
                      if (inputValue !== inputValueRegex) {
                        setAlert(true);
                        setMessageAlert(
                          "Les caractères :  * + < >  ne sont pas autorisés."
                        );
                        event.target.value = "";
                      }
                      setMessageWrite(inputValueRegex);
                    }}
                    label="message"
                  />
                )}
              />
            </Grid>
            <Grid item xs={"auto"} md={6}>
              <ReCAPTCHA
                theme="dark"
                sitekey="6LdNBvsbAAAAAPe1tQhZ22Q-5Xy-Ia44tJfWua3T"
                onChange={() => setReCaptcha(true)}
              />
            </Grid>
            <Grid item xs={2} md={6}>
              <Button
                variant="contained"
                sx={{ marginTop: 2 }}
                type="submit"
                onClick={() => sendMail()}
              >
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
const exemplesSentences = [
  {
    label: "Bonjour Nicolas, je veux t'embaucher, contacte moi ! ",
  },
  { label: "Moi aussi je supporte le RC LENS ! " },
  { label: "Tu codes avec le Q c'est dead ! " },
  { label: "Je suis D8 au bad, on se fait un double ?" },
];

export default ContactMe;
