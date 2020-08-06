import React from 'react';
import Competition from './pages/Competition';
import CompetitionDetail from './pages/CompetitionDetail';
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Competition />
            </Route>
            <Route exact path="/competitions/:id">
              <CompetitionDetail />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
