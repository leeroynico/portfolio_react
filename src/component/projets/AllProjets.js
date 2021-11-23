import appImg from "../../images/projets/monapp.png";
import eshopImg from "../../images/projets/eshopprojet.png";
import speculosImg from "../../images/projets/lesspeculosprojet.png";
import bclImg from "../../images/projets/bcl.png";
import PortfolioImg from "../../images/projets/portfolio.png";
import DiceGameImg from "../../images/projets/dicegame.png";

const allProjets = [
  {
    id: 1,
    titre: "#1projet",
    sousTitre: "Mon Coach",
    definition: "App Mobile [React Native]",
    texte:
      "  Application mobile pour aider les compétiteurs de badminton à s'entrainer seuls",
    img: appImg,
    dialogContent: {
      technos: ["react native", "expo", "expo Speech"],
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
      "Gestion et stockage des résultats des compétiteurs de badminton, invitations pour les matchs.",
    img: bclImg,
    dialogContent: {
      technos: ["php", "autoloader", "phpmailer", "boostrap"],
      url: "https://desolate-hamlet-21501.herokuapp.com/",
      texte:
        "contactez moi pour avoir un accès 'guest' pour vous connecter au site.",
      github: "",
    },
  },
  {
    id: 5,
    titre: "#5projet",
    sousTitre: "portfolio",
    definition: "site dynamique [REACT.JS - responsive] ",
    texte: "portfolio de moi même visité par vous même en ce moment même",
    img: PortfolioImg,
    dialogContent: {
      technos: ["react.js", "use Gesture", "spring react web", "material ui"],
      url: "#",
      texte: "",
      github: "https://github.com/leeroynico/dice_game",
    },
  },
  {
    id: 5,
    titre: "#5projet",
    sousTitre: "jeu de dés",
    definition: "jeu - évaluation [JAVASCRIPT - responsive] ",
    texte:
      "petit jeu de dés effectués dans le cadre d'une évaluation lors de l'apprentissage de javascript vanilla",
    img: DiceGameImg,
    dialogContent: {
      technos: ["javascript", "ionic"],
      url: "https://leeroynico.github.io/dice_game/",
      texte: "",
      github: "https://github.com/leeroynico/dice_game",
    },
  },
];

export default allProjets;
