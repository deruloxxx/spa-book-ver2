import {ReactNode} from 'react';
import {chatContext, Status} from './ChatContext';

type ContextType = { current: Status, update: (status: Status) => void }
const ChatProvider = (props: { children: ReactNode }) => {
  const actualValue: ContextType = {
    current: Status.OPEN,
    update: (status: Status) => {
      window.location.hash = '#!chat=closed';
    },
  }
  return (
    <chatContext.Provider value={actualValue}>{props.children}</chatContext.Provider>
  );
};

export default ChatProvider;
