import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { initialState, weatherReducer } from "../reducers/reducerContext";
import { ContextApp } from "../store/context";
import MainPage from "./MainPage/MainPage";
import SettingPage from "./SettingPage/SettingPage";

import "./app.scss";

const App = props => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/setting">
            <SettingPage />
          </Route>
        </Switch>
      </Router>
    </ContextApp.Provider>
  );
};

export default App;
