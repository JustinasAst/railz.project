import React, { useState, createContext } from 'react';

type AppContextInterface = {
  menuTurnOff: boolean;
  setMenuTurnOff: (value: boolean) => void;
};

type ComponentProps = {
  children?: React.ReactNode;
};

export const AuthContext = createContext<AppContextInterface>({
  menuTurnOff: false,
  setMenuTurnOff: () => {},
});

const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
  const [menuTurnOff, setMenuTurnOff] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ menuTurnOff, setMenuTurnOff }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
