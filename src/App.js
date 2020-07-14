import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './assets/css/app.css';
import { SET_API_DEFAULTDATA } from './types.js';
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
  apiData: [],
  currentCharacter: false,
  darken: false,
};

export const mainContext = React.createContext('');

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  useEffect(() => {
    async function getData() {
      try {
        let data = await fetch(
          'https://rickandmortyapi.com/api/character/[1,2,3,4,5,244,242]'
        );
        let res = await data.json();
        dispatch({ type: SET_API_DEFAULTDATA, payload: res });
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [dispatch]);

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
