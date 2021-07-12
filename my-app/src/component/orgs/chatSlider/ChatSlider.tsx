// @flow
import * as React from 'react';
import {useContext, useState} from 'react';
import { chatContext, Status } from '../../abstracts/chatContext/ChatContext';
import './ChatSlider.css';

export const ChatSlider = () => {
  const chatCxt = useContext(chatContext)
  const [isActive, setActive] = useState(false);

  const toggleChatSlider = () => {
    chatCxt.update(chatCxt.current === Status.CLOSE ? Status.OPEN :Status.CLOSE)
    setActive(!isActive);
  };

  return (
    <div className="spa" id="spa">
      <div
        onClick={toggleChatSlider}
        className={`spa-slider ${isActive ? "isOpen" : "isClose"}`}
        title={isActive ? "Click to extend" : ""}>
        <p>hello world</p>
      </div>
    </div>
  );
};