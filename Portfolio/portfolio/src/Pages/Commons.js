import './Site/App.css';
import React from 'react';

export default function Circle(e) {
  return (
    <>
      <div>{e.name}</div>
      <div className="Circle">
        <div className="Circle Bottom"></div>
      </div>
    </>
  );
}

export function Noter(e) {
  return (
    <>
      <div className="Note">
        <div className="Note Inner">
        {e.name}
        </div>
      </div>
    </>
  );
}
