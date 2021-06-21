// @flow
import * as React from 'react';
import './Chat.css';
import { ChatContainer } from '../orgs/chatContainer/ChatContainer';
import { ChatFooter } from '../orgs/chatFooter/ChatFooter';
import { ChatHeader } from '../orgs/chatHeader/ChatHeader';
import { ChatMain } from '../orgs/chatMain/ChatMain';
import { ChatSlider } from '../orgs/ChatSlider/ChatSlider';
import { ChatModal } from '../abstracts/modal/ChatModal';

export const Chat = () => {
  return (
    <div>
      <ChatHeader/>
      <ChatContainer/>
      <ChatMain/>
      <ChatSlider/>
      <ChatFooter/>
      <ChatModal></ChatModal>
    </div>
  );
};