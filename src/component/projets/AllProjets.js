import appImg from "../../images/projets/monapp.png";
import eshopImg from "../../images/projets/eshopprojet.png";
import speculosImg from "../../images/projets/lesspeculosprojet.png";
import bclImg from "../../images/projets/bcl.png";
import PortfolioImg from "../../images/projets/portfolio.png";
import ecf from "../../images/projets/ecf.png";

const allProjets = [
  {
    id: 1,
    titre: "#1projet",
    sousTitre: "Mon Coach",
    definition: "App Mobile [React Native]",
    texte:
      "  Application mobile pour aider les compétiteurs de badminton à s'entrainer seuls.",
    img: appImg,
    dialogContent: {
      technos: ["react Native", "expo", "expo Speech", "redux", "git"],
      url: "https://leeroynico.github.io/shadowBadmintonGenerator",
      texte:
        "Bientôt disponible sur les plateformes de téléchargement. En attendant visiter le POC sur web",
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
      technos: ["html", "css", "bootstrap", "git"],
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
      technos: [
        "php",
        "autoloader",
        "phpmailer",
        "bootstrap",
        "git",
        "Mysql",
        "heroku",
        "dev-Extreme",
      ],
      url: "https://tdtemp.herokuapp.com/",
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
      technos: [
        "react.js",
        "use Gesture",
        "spring react",
        "material ui",
        "git",
        "react-spring ",
      ],
      url: "",
      texte:
        "site réalisé avec react et la dépendance react spring pour les animations et le drag",
      github: "https://github.com/leeroynico/portfolio_react",
    },
  },
  {
    id: 6,
    titre: "#5projet",
    sousTitre: "génie climatique [API rest - react JS]",
    definition: "ECF [api platform - react] ",
    texte:
      "dans le cadre d'une évaluation au cours de ma formation, j'ai réalisé une application qui génére des graphiques selon des données d'une Api",
    img: ecf,
    dialogContent: {
      technos: ["react", "symfony", "api-platform", "git", "heroku", "js"],
      url: "https://leeroynico.github.io/dice_game/",
      texte:
        "pour vous connecter vous pouvez utiliser le mot de passe admin et le password passe",
      github: "https://github.com/leeroynico/api-projet-ecf",
    },
  },
];

export default allProjets;
