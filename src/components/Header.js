import React from 'react';
import { useLocation } from 'react-router-dom';
import Vr from './Vr';

export default function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <h1> Math Magicians</h1>
      <div className="links">
        <a
          href="./"
          style={{
            color: location.pathname === '/' ? '#3d5a80' : null,
          }}
        >
          Home

        </a>
        <Vr />
        <a
          href="./calculator"
          style={{
            color: location.pathname === '/calculator' ? '#3d5a80' : null,
          }}
        >
          Calculator

        </a>
        <Vr />
        <a
          href="./quote"
          style={{
            color: location.pathname === '/quote' ? '#3d5a80' : null,
          }}
        >
          Qoute

        </a>
      </div>
    </div>
  );
}
