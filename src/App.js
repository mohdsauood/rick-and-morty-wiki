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
import MultiversePage from './components/MultiversePage';
const initialState = {
  myData: { rick, morty, beth, jerry, summer, mrmeeseeks, mrpoopy },
  apiData: {},
  currentCharacter: false,
  darken: false,
  mcData: {},
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
              <Route path={`/multiverse/:name`}>
                <MultiversePage />
              </Route>
            </Switch>
          </div>
        </div>
      </mainContext.Provider>
    </Router>
  );
}

export default App;

// i need to learn destructuring and update the info value of the bottom most found rick
// so practise destructuring and then do that first

//add pagination for reducing load on the page
// only load when scrolled
// implement that
// watch pagination and infinite scroll react
// then fix mobile responsives by using netlify
// fix errors deploy
// see how it looks in mobile
// style for desktop and other screens
// add hover effects and loading animation
