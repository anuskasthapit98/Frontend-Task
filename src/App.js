import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Components/Form";
import Menu from "./Components/Menu";
import List from "./Components/List";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Form}>
          <Form />
        </Route>
        <Route path="/list" exact component={List}></Route>
      </Router>
    </div>
  );
}
