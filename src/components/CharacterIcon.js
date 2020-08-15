import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { mainContext } from '../App';
import { SET_CURRENT_CHARACTER } from '../types';
import { useHistory } from 'react-router-dom';
export default function CharacterIcon({ characterName, param }) {
  const history = useHistory();
  const { dispatch } = useContext(mainContext);

  const icon = require(`../assets/images/icons/${characterName}Icon.png`);
  const divStyle = {
    backgroundImage: `url(${icon})`,
  };
  return (
    <motion.div
      whileHover={{}}
      onClick={() => {
        dispatch({ type: SET_CURRENT_CHARACTER, payload: characterName });
        history.push(`/character/${characterName}`);
      }}
      className={
        characterName === param ? 'characterIcons selected' : 'characterIcons'
      }
      style={divStyle}></motion.div>
  );
}
