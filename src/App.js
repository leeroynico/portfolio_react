import React from "react";
import background from "./images/background.jpg";
import Profil from "./component/Profil";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: 20,
        height: 1000,
        color: "white",
      }}
    >
      <p>mon portfolio </p>
      <Profil></Profil>
    </div>
  );
}

export default App;
