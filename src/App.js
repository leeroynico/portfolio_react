import React from "react";
import background from "./images/background.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: 20,
        height: 1000,
      }}
    >
      <p style={{ color: "white" }}>mon portfolio </p>
    </div>
  );
}

export default App;
