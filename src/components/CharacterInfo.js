import React from 'react';

export default function CharacterInfo({
  character = {},
  myCharacter,
  characterName,
  loading,
}) {
  let img = require(`../assets/images/${characterName}.png`);
  let loader = <p class="mcLoading smallLoading">loading...</p>;
  return (
    <div className="characterInfo">
      <div className="characterInfo-img">
        {loading ? loader : <img src={`${img}`} alt={`${characterName}`} />}
      </div>
      <div className="characterInfo-name">Name</div>
      <div className="characterInfo-name-data">
        {loading ? loader : character.name}
      </div>
      <div className="characterInfo-species">Species</div>
      <div className="characterInfo-species-data">
        {loading ? loader : character.species}
      </div>
      <div className="characterInfo-wordings">Famous Wordings</div>
      <div className="characterInfo-wordings-data">{myCharacter.quote}</div>
      <div className="characterInfo-about">{myCharacter.about}</div>
    </div>
  );
}
