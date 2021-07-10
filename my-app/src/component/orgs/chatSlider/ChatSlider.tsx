// @flow
import * as React from 'react';
import { useContext } from 'react';
import { chatContext, Status } from '../../abstracts/chatContext/ChatContext';
import './ChatSlider.css';

export const ChatSlider = () => {
  const chatCxt = useContext(chatContext)

  const toggleChatSlider = () => {
    chatCxt.update(chatCxt.current === Status.CLOSE ? chatCxt.current = Status.OPEN : chatCxt.current = Status.CLOSE)
    console.log(chatCxt.current)
  };

  return (
    <div className="spa" id="spa">
      <div
        onClick={toggleChatSlider}
        className={`spa-slider ${chatCxt.current === Status.CLOSE ? "isOpen" : ""}`}
        title={chatCxt.current === Status.CLOSE ? "Click to extend" : ""}>
        <p>hello world</p>
      </div>
    </div>
  );
};