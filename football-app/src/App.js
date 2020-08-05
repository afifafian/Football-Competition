import React from 'react';
import Competition from './pages/Competition';
import CompetitionDetail from './pages/CompetitionDetail';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Competition />
          </Route>
          <Route exact path="/competitions/:id">
            <CompetitionDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
