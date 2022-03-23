import React from 'react';
import Vr from './Vr';

export default function Header() {
  return (
    <div className="header">
      <h1> Math Magicians</h1>
      <div className="links">
        <a
          href="./"
        >
          Home

        </a>
        <Vr />
        <a
          href="./calculator"
        >
          Calculator

        </a>
        <Vr />
        <a
          href="./quote"
        >
          Qoute

        </a>
      </div>
    </div>
  );
}
