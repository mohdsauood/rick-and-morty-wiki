import React from 'react';
import CharacterIcon from './CharacterIcon';
export default function CharacterSelect({ state }) {
  const elements = state.selectCharacterIcons.map((item) => {
    return <CharacterIcon key={item.id} item={item} />;
  });
  return (
    <div className="characterSelect">
      {elements}
      <div className="characterIcons lastIcon">
        <p>multiverse</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    </div>
  );
}
