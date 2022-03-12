import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';
import P from 'prop-types';

const INITIAL_STATE = {
  darkMode: true,
};

export const DarModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return <DarModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>{children}</DarModeContext.Provider>;
};

DarkModeContextProvider.propTypes = {
  children: P.node.isRequired,
};
