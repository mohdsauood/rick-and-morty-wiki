import React, { useContext } from 'react';
import { mainContext } from '../App';
import { SET_CURRENT_CHARACTER } from '../types';
import { useHistory } from 'react-router-dom';
export default function CharacterIcon({ myData, characterName, param }) {
  const history = useHistory();
  const { dispatch } = useContext(mainContext);

  const icon = require(`../assets/images/icons/${characterName}Icon.png`);
  const divStyle = {
    backgroundImage: `url(${icon})`,
  };
  return (
    <div
      onClick={() => {
        dispatch({ type: SET_CURRENT_CHARACTER, payload: characterName });
        history.push(`/character/${characterName}`);
      }}
      className={
        characterName == param ? 'characterIcons selected' : 'characterIcons'
      }
      style={divStyle}></div>
  );
}
