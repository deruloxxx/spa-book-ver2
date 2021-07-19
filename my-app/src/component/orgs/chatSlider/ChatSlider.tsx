// @flow
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {chatContext, Status} from '../../abstracts/chatContext/ChatContext';
import './ChatSlider.css';

export const ChatSlider = () => {
  const chatCxt = useContext(chatContext)
  const [isActive, setActive] = useState(false);
  const [chatContent, chatUpdate] = useState("");

  useEffect(() => chatUpdate("Hello World"),[])

  const toggleChatSlider = () => {
    chatCxt.update(chatCxt.current === Status.CLOSE ? Status.OPEN : Status.CLOSE)
  };
  const toggleChatActive = () => {
    setActive(!isActive);
  };

  return (
    <div className="spa" id="spa">
      <div
        onClick={() => {
          toggleChatSlider();
          toggleChatActive();
        }}
        className={`spa-slider ${isActive ? "isOpen" : "isClose"}`}
        title={isActive ? "Click to extend" : ""}
      >
        <p>{chatContent}</p>
      </div>
    </div>
  );
};