// @flow
import * as React from 'react';
import {useState} from 'react';
import './ChatSlider.css';

export const ChatSlider = () => {
  //useStateについて調べる
  const [isActive, setActive] = useState(false);
  const sliderOpen: string = "Click to extend";

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="App" id="spa">
      <div onClick={handleToggle} className={`spa-slider ${isActive ? "isOpen" : ""}`}
           title={isActive ? sliderOpen : ""}></div>
    </div>
  );
};