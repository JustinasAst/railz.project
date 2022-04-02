import React, { useState, createContext } from 'react';

interface AppContextInterface {
  turnOffMenu: boolean;
  setTurnOffMenu: (value: boolean) => void;
}

interface ComponentProps {
  children: any;
}

export const AuthContext = createContext<AppContextInterface | any>(null);

const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
  const [turnOffMenu, setTurnOffMenu] = useState(false);

  return (
    <AuthContext.Provider value={{ turnOffMenu, setTurnOffMenu }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
