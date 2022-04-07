import React, { useState, createContext } from 'react';

type AppContextInterface = {
  menuTurnedOff: boolean;
  setMenuTurnedOff: (value: boolean) => void;
};

type ComponentProps = {
  children?: React.ReactNode;
};

export const AuthContext = createContext<AppContextInterface>({
  menuTurnedOff: false,
  setMenuTurnedOff: () => {},
});

const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
  const [menuTurnedOff, setMenuTurnedOff] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ menuTurnedOff, setMenuTurnedOff }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
