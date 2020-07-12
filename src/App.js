import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './assets/css/app.css';

function App() {
  return (
    <Router>
      <div className="main-background">
        <div className="main-layer">
          <Switch>
            <Route path={`/`}>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
