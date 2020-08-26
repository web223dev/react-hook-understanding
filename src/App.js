import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import UseStatePage from "./pages/usestate/usestate.component";
import UseEffectPage from "./pages/useeffect/useeffect.component";
import CustomHookPage from "./pages/customhook/customhook.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/usestate" component={UseStatePage} />
        <Route exact path="/useeffect" component={UseEffectPage} />
        <Route exact path="/customhook" component={CustomHookPage} />
      </Switch>
    </div>
  );
}

export default App;
