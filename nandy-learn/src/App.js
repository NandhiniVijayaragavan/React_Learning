import './App.css';
import React from 'react';
import Login from './component/Login';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Switch>
    </Router>
   </>
  );
}
export default App;
