// components/UserContext.js
import React, { createContext, useContext } from 'react';

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ userId, userToken, children }) => (
  <UserContext.Provider value={{ userId, userToken }}>
    {children}
  </UserContext.Provider>
);
