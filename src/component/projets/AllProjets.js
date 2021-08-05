import appImg from "../../images/projets/monapp.png";
import eshopImg from "../../images/projets/eshopprojet.png";
import speculosImg from "../../images/projets/lesspeculosprojet.png";
import bclImg from "../../images/projets/bcl.png";

const allProjets = [
  {
    id: 1,
    titre: "#1projet",
    sousTitre: "Mon Coach",
    definition: "App Mobile [React Native]",
    texte:
      "  Application mobile pour aider les compétiteurs de badminton à s'entrainer seul",
    img: appImg,
    position: { x: -50, y: 40 },
    dialogContent: {
      technos: ["react native", "expo", "react native paper", "expo Speech"],
      url: "",
      texte: "bientôt disponible sur les plateformes de téléchargement",
      github: "https://github.com/leeroynico/BadmintonCoach",
    },
  },
  {
    id: 2,
    titre: "#2projet",
    sousTitre: "Les spéculos",
    definition: "site statique [Bootstrap]",
    texte: " Site vitrine pour une Cie de théâtre locale (ou pas)",
    img: speculosImg,
    position: { x: 150, y: 40 },
    dialogContent: {
      technos: ["html", "css", "bootstrap"],
      url: "https://leeroynico.github.io/lesspeculos/",
      github: "https://github.com/leeroynico/lesspeculos",
    },
  },
  {
    id: 3,
    titre: "#3projet",
    sousTitre: "fake e-commerce",
    definition: "site statique [Word Press]",
    texte:
      " Voila un 'fake' site e-commerce réalisé lors de mon stage chez diggit-all.",
    img: eshopImg,
    position: { x: 350, y: -760 },
    dialogContent: {
      technos: ["Word Press", "Woo commerce", "Divi"],
      url: "https://click-and-collect-5.diggit-all.fr/",
      github: "",
    },
  },
  {
    id: 4,
    titre: "#4projet",
    sousTitre: "Championnat BCL ",
    definition: "app interne [PHP - SQL]",
    texte:
      "gestion et stockage des résultats de badminton, invitation pour les matchs.",
    img: bclImg,
    position: { x: 550, y: -1160 },
    dialogContent: {
      technos: ["php", "autoloader", "phpmailer", "boostrap"],
      url: "https://desolate-hamlet-21501.herokuapp.com/",
      texte:
        "contactez moi pour avoir un accès 'guest' pour vous connecter au site.",
      github: "",
    },
  },
];

export default allProjets;
