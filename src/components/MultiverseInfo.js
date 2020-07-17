import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MultiverseCharacter from './MultiverseCharacter';
import { mainContext } from '../App';

export default function MultiverseInfo({ item, name }) {
  let { state, dispatch } = useContext(mainContext);
  let mcNav = [];
  let counter = 10;
  console.log('name is ' + name);
  let history = useHistory();
  for (let [key, value] of Object.entries(state.myData)) {
    let imgSrc = require(`../assets/images/icons/${key}Icon.png`);
    if (key != 'mrpoopy' && key != 'mrmeeseeks') {
      mcNav.push(
        <div
          key={counter++}
          onClick={() => {
            history.push(`/multiverse/${key}`);
          }}
          className="multiverseNavIcon ">
          <img className={name == key && 'selected'} src={imgSrc} alt="key" />
        </div>
      );
    }
  }
  let elements = [];
  if (typeof item != 'undefined') {
    elements = item.results.map((item, index) => {
      return <MultiverseCharacter item={item} />;
    });
  }

  return (
    <div className="multiverseInfo">
      <div className="multiverseNav">{mcNav}</div>
      <div className="multiverseCharacters">{elements}</div>
    </div>
  );
}
