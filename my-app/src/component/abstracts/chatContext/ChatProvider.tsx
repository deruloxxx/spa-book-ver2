import {ReactNode} from 'react';
import {chatContext, Status} from './ChatContext';

type ContextType = { current: Status, update: (status: Status) => void }
const ChatProvider = (props: { children: ReactNode }) => {
  const actualValue: ContextType = {
    current: window.location.hash === `#!chat=${Status.OPEN}` ? Status.OPEN : Status.CLOSE,
    update: (status: Status) => {
      window.location.hash = `#!chat=${status}`;
      actualValue.current = status
    },
  }
  return (
    <chatContext.Provider value={actualValue}>{props.children}</chatContext.Provider>
  );
};

export default ChatProvider;
