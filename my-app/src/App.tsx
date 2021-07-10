import './App.css';
import {Chat} from './component/template/Chat';
import React from 'react';
import ChatProvider from './component/abstracts/chatContext/ChatProvider';

function App() {
  return (
    <ChatProvider>
      <div>
        <Chat/>
      </div>
    </ChatProvider>
  );
}

export default App;
