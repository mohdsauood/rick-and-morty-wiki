import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './assets/css/app.css';
import {
  rick,
  morty,
  beth,
  jerry,
  summer,
  mrmeeseeks,
  mrpoopy,
} from './Mydata';
import mainReducer from './components/mainReducer';
import CharacterPage from './components/CharacterPage';
const initialState = {
  myData: { rick, morty, beth, jerry, summer, mrmeeseeks, mrpoopy },
  apiData: {},
  currentCharacter: false,
  darken: false,
};

export const mainContext = React.createContext('');

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const mainContextValue = {
    state,
    dispatch,
  };
  return (
    <Router>
      <mainContext.Provider value={mainContextValue}>
        <div className="main-background">
          <div className={state.darken ? 'main-layer darken' : 'main-layer'}>
            <Switch>
              <Route exact path={`/`}>
                <Home />
              </Route>
              <Route path={`/character/:name`}>
                <CharacterPage />
              </Route>
            </Switch>
          </div>
        </div>
      </mainContext.Provider>
    </Router>
  );
}

export default App;
