import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './assets/css/app.css';
import { SET_SELECT_ICONS } from './types.js';

function mainReducer(state, action) {
  switch (action.type) {
    case SET_SELECT_ICONS:
      return { ...state, selectCharacterIcons: action.payload };
    default:
      return state;
  }
}

const initialState = {
  selectCharacterIcons: [],
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
        console.log(res);
        dispatch({ type: SET_SELECT_ICONS, payload: res });
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [dispatch]);

  const mainContextValue = {
    state,
  };
  return (
    <Router>
      <mainContext.Provider value={mainContextValue}>
        <div className="main-background">
          <div className="main-layer">
            <Switch>
              <Route path={`/`}>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </mainContext.Provider>
    </Router>
  );
}

export default App;
