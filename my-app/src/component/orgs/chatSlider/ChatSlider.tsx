// @flow
import * as React from 'react';
import {useState, createContext, useContext, useEffect} from 'react';
import { chatContext, Status } from '../../abstracts/chatContext/ChatContext';
import './ChatSlider.css';

export const ChatSlider = () => {
  const chatCxt = useContext(chatContext)

  const toggleChatSlider = () => {
    chatCxt.update(chatCxt.current === Status.CLOSE ? Status.OPEN : Status.CLOSE)
    console.log(chatCxt.current)
  };

  return (
    <div className="spa" id="spa">
      <div
        onClick={toggleChatSlider}
        className={`spa-slider ${chatCxt.current === Status.OPEN ? "isOpen" : ""}`}
        title={chatCxt.current === Status.OPEN ? "Click to extend" : ""}>
        <p>hello world</p>
      </div>
    </div>
  );
};