import React from "react";
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
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import "../profil/profilStyle.css";
import { useState } from "react";
import PropTypes from "prop-types";
init("user_yiS7hGl9OqRBKzBjAN8MQ");

function ContactMe() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [messageOptions, setMessageOptions] = useState("");
  const [messageWrite, setMessageWrite] = useState("");
  const [alert, setAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  const sendMail = () => {
    if (nom === "" || prenom === "" || mail === "") {
      setMessageAlert("Veuillez ne pas laisser de champs vides SVP");
      setAlert(true);
    }
  };

  const TextFieldGenerator = (label, setInputState) => {
    return (
      <>
        <TextField
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
            if (inputValue != inputValueRegex) {
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
              {TextFieldGenerator("prénom", setPrenom)}
            </Grid>
            <Grid item xs={6}>
              {TextFieldGenerator("nom", setNom)}
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 1 }}>
              {TextFieldGenerator("mail ou téléphonne", setMail)}
            </Grid>
          </Grid>
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
                  if (inputValue != inputValueRegex) {
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
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            type="submit"
            onClick={() => sendMail()}
          >
            Valider
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
const exemplesSentences = [
  {
    label: "Bonjour Nicolas, je veux t'embaucher, contactes moi ! ",
  },
  { label: "Moi aussi je supporte le RC LENS ! " },
  { label: "Tu codes avec le Q c'est dead ! " },
  { label: "Je suis D8 au bad, on se fait un double ?" },
];

export default ContactMe;
