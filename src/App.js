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
  mcLoading: true,
  apiDataLoading: false,
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

//tried promise everything no use
//explain problem clearly in stack overflow
// tell why u cant use it as array dependency
//tell why u need to check other condition
//tell why u r using await and async and try
//before this try using plain promise instead of try
//set api loading for main charcaters name and species
//send dispatch as a promise reference stack overflow
//FIX LOADING FOR BETH
// ask help on stack overflow
//see how to handle async dispatch
// then fix mobile responsives by using netlify
// fix errors deploy
// see how it looks in mobile
// style for desktop and other screens
// add hover effects and loading animation
