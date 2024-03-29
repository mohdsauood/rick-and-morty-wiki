import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import CharacterIcon from './CharacterIcon';
import { mainContext } from '../App';
import { SET_CURRENT_CHARACTER } from '../types';
import { useHistory } from 'react-router-dom';
import { characterSelectVariant } from '../framerVariants';
export default function CharacterSelect({ state, param }) {
  const { dispatch } = useContext(mainContext);
  const history = useHistory();
  let elements = [];
  let counter = 0;
  for (let [key, value] of Object.entries(state.myData)) {
    elements.push(
      <CharacterIcon
        key={counter++}
        myData={value}
        characterName={key}
        param={param}
      />
    );
  }
  return (
    <motion.div
      variants={characterSelectVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="characterSelect">
      {elements}
      <div
        onClick={() => {
          dispatch({ type: SET_CURRENT_CHARACTER, payload: false });
          history.push(`/multiverse/rick`);
        }}
        className="characterIcons lastIcon">
        <p>multiverse</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    </motion.div>
  );
}
