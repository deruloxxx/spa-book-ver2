// @flow
import * as React from 'react';
import {useState} from 'react';
import './ChatMain.css';

export const ChatMain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div onClick={handleToggle} className={`spa-shell-main ${isActive ? "spa-x-closed": ""}`}>
      <div className="spa-shell-main-nav"></div>
      <div className="spa-shell-main-content"></div>
    </div>
  );
};