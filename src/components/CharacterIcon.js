import React from 'react';

export default function CharacterIcon({ apiDataValue, myData, characterName }) {
  console.log(characterName);
  const icon = require(`../assets/images/icons/${characterName}Icon.png`);
  const divStyle = {
    backgroundImage: `url(${icon})`,
  };
  return <div className="characterIcons" style={divStyle}></div>;
}
