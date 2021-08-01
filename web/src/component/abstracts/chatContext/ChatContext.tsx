import {createContext} from 'react';

export enum Status {
  OPEN,
  CLOSE
}

type ContextType = { current: Status, update: (status: Status) => void };
const defaultValue: ContextType = {
  current: Status.OPEN,
  update: () => {
    throw new Error("forget to add function to update()")
  },
};

export const chatContext = createContext<ContextType>(defaultValue)
