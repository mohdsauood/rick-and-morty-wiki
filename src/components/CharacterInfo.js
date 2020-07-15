import React from 'react';

export default function CharacterInfo({
  character = {},
  myCharacter,
  characterName,
}) {
  let img = require(`../assets/images/${characterName}.png`);
  if (characterName == 'beth') {
    img = require(`../assets/images/${characterName}1.png`);
  }
  return (
    <div className="characterInfo">
      <div className="characterInfo-img">
        <img src={`${img}`} alt={`${characterName}`} />
      </div>
      <div className="characterInfo-name">Name</div>
      <div className="characterInfo-name-data">{character.name}</div>
      <div className="characterInfo-species">Species</div>
      <div className="characterInfo-species-data">{character.species}</div>
      <div className="characterInfo-wordings">Famous Wordings</div>
      <div className="characterInfo-wordings-data">{myCharacter.quote}</div>
      <div className="characterInfo-about">{myCharacter.about}</div>
    </div>
  );
}
