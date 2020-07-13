import React from 'react';

export default function CharacterSelect() {
  return (
    <div className="characterSelect">
      <div className="characterIcons"></div>
      <div className="characterIcons"></div>
      <div className="characterIcons"></div>
      <div className="characterIcons"></div>
      <div className="characterIcons"></div>
      <div className="characterIcons"></div>
      <div className="characterIcons"></div>
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
