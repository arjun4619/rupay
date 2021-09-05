import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
