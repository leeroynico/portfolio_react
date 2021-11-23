import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./Home";
import DetailsProjets from "./component/projets/DetailsProjets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projet/:id" exact component={DetailsProjets} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
