import React from "react";
import background from "./images/background.jpg";
import Profil from "./component/Profil";
import Speedial from "./component/Speedial";
import Competences from "./component/animation/Competences";
import "./App.css";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: 20,
        height: 1000,
        color: "white",
      }}
    >
      <Profil />
      <Competences />
      <Speedial />
    </div>
  );
}

export default App;
