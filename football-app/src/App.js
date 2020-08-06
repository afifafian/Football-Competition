import React from 'react';
import {Competition, CompetitionDetail, Favorites} from './pages';
import NotFound from './components/NotFound';
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
