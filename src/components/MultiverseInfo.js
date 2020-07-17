import React from 'react';
import { useHistory } from 'react-router-dom';
import MultiverseCharacter from './MultiverseCharacter';
const rick = require(`../assets/images/icons/rickIcon.png`);
const morty = require(`../assets/images/icons/mortyIcon.png`);
const jerry = require(`../assets/images/icons/jerryIcon.png`);

export default function MultiverseInfo({ item, name }) {
  console.log('name is ' + name);
  let history = useHistory();
  let elements = [];
  if (typeof item != 'undefined') {
    elements = item.results.map((item) => {
      return <MultiverseCharacter item={item} />;
    });
  }

  return (
    <div className="multiverseInfo">
      <div className="multiverseNav">
        <div
          onClick={() => {
            history.push(`/multiverse/rick`);
          }}
          className="multiverseNavIcon mnIcon1">
          <img className={name == 'rick' && 'selected'} src={rick} alt="" />
        </div>
        <div
          onClick={() => {
            history.push(`/multiverse/morty`);
          }}
          className="multiverseNavIcon mnIcon2">
          <img className={name == 'morty' && 'selected'} src={morty} alt="" />
        </div>
        <div
          onClick={() => {
            history.push(`/multiverse/jerry`);
          }}
          className="multiverseNavIcon mnIcon3">
          <img className={name == 'jerry' && 'selected'} src={jerry} alt="" />
        </div>
      </div>
      <div className="multiverseCharacters">{elements}</div>
    </div>
  );
}
