import appImg from "../../images/projets/monapp.png";
import eshopImg from "../../images/projets/eshopprojet.png";
import speculosImg from "../../images/projets/lesspeculosprojet.png";

const allProjets = [
  {
    titre: "#1projet",
    sousTitre: "Mon Coach",
    definition: "App Mobile [React Native]",
    texte:
      "  Application mobile pour aider les compétiteurs de badminton à s'entrainer seul",
    img: appImg,
    position: { x: "50%", y: "50%" },
  },
  {
    titre: "#2projet",
    sousTitre: "Les spéculos",
    definition: "site statique [Bootstrap]",
    texte: " Site vitrine pour une Cie de théâtre locale (ou pas)",
    img: speculosImg,
    position: { x: 120, y: -100 },
  },
  {
    titre: "#3projet",
    sousTitre: "fake e-commerce",
    definition: "site statique [Word Press]",
    texte:
      " Voila un 'fake' site e-commerce réalisé lors de mon stage chez diggit-all",
    img: eshopImg,
    position: { x: 230, y: -280 },
  },
  {
    titre: "#4projet",
    sousTitre: "Championnat BCL ",
    definition: "app interne [PHP - SQL]",
    texte:
      "Organisation d'un championnat interne (gestion et stockage des résultats, invitation pour les matchs)",
    img: appImg,
    position: { x: 350, y: -700 },
  },
];

export default allProjets;
