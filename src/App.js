import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import UseStatePage from "./pages/useState/usestate.component";
import UseEffectPage from "./pages/useEffect/useeffect.component";
import CustomHookPage from "./pages/customHook/customhook.component";
import UseReducerPage from "./pages/useReducer/usereducer.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/usestate" component={UseStatePage} />
        <Route exact path="/useeffect" component={UseEffectPage} />
        <Route exact path="/customhook" component={CustomHookPage} />
        <Route exact path="/usereducer" component={UseReducerPage} />
      </Switch>
    </div>
  );
}

export default App;
