import React from 'react';

export default function MultiverseCharacter({ item, ref1 = {} }) {
  console.log(item);
  return (
    <div ref={ref1} className="multiverseCharacter">
      <img src={item.image} alt="" />
      <div className="mc-name">name</div>
      <div className="mc-name-data">{item.name}</div>
      <div className="mc-species">species</div>
      <div className="mc-species-data">{item.species}</div>
      <div className="mc-location">location</div>
      <div className="mc-location-data">{item.location.name}</div>
    </div>
  );
}
