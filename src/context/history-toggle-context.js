import React, { createContext } from 'react';

import HistoryToggleHook from '../hooks/history-toggle-hook';

export const HistoryToggleContext = createContext();

const HistoryToggleProvider = ({children}) => {
  
  const  historyContext = HistoryToggleHook(false);

  console.log('historyContext', historyContext);
  return (
    <HistoryToggleContext.Provider value={historyContext}>
      {children}
    </HistoryToggleContext.Provider>
  )
}

export default HistoryToggleProvider;

