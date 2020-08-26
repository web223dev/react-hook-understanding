import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import UseStatePage from "./pages/usestate/usestate.component";
import UseEffectPage from "./pages/useeffect/useeffect.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/usestate" component={UseStatePage} />
        <Route exact path="/useeffect" component={UseEffectPage} />
      </Switch>
    </div>
  );
}

export default App;
