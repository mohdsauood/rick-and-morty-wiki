import React from 'react';

export default function CharacterIcon({ item }) {
  const divStyle = {
    backgroundImage: `url('${item.image}')`,
  };
  return <div className="characterIcons" style={divStyle}></div>;
}
