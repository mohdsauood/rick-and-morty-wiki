import React from 'react';

export default function PageTitle({ title, color }) {
  return (
    <div className="pageTitle">
      <h2 className={color}>{title}</h2>
    </div>
  );
}
