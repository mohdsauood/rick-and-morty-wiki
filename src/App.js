import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './assets/css/app.css';
import { SET_SELECT_ICONS } from './types.js';

function mainReducer(state, action) {
  switch (action) {
    case SET_SELECT_ICONS:
      return { ...state, selectCharcterIcons: action.payload };
    default:
      return state;
  }
}
const initialState = {
  selectCharacterIcons: [],
};
function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {}, [dispatch]);

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
