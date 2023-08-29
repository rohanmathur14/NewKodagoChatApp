// components/UserContext.js
import React, { createContext, useContext } from 'react';

const FileRackContext = createContext(null);

export const useFileRackContext = () => useContext(FileRackContext);

export const FileRackProvider = ({sheetId, groupId, userId, userToken, children }) => (
  <FileRackContext.Provider value={{sheetId, groupId, userId, userToken }}>
    {children}
  </FileRackContext.Provider>
);
