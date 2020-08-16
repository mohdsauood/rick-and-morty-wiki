import React, { useReducer } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import MultiversePage from './components/MultiversePage';
const initialState = {
  myData: { rick, morty, beth, jerry, summer, mrmeeseeks, mrpoopy },
  apiData: {},
  currentCharacter: false,
  darken: false,
  mcData: {},
  mcLoading: true,
  apiDataLoading: false,
};

export const mainContext = React.createContext('');

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const location = useLocation();

  const mainContextValue = {
    state,
    dispatch,
  };
  return (
    <mainContext.Provider value={mainContextValue}>
      <div className="main-background">
        <div className={state.darken ? 'main-layer darken' : 'main-layer'}>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path={`/`}>
                <Home />
              </Route>
              <Route path={`/character/:name`}>
                <CharacterPage />
              </Route>
              <Route path={`/multiverse/:name`}>
                <MultiversePage />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </mainContext.Provider>
  );
}

export default App;
