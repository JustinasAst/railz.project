import React, { useState, createContext } from 'react';

type AppContextInterface = {
  turnOffMenu: boolean;
  setTurnOffMenu: (value: boolean) => void;
};

type ComponentProps = {
  children?: React.ReactNode;
};

export const AuthContext = createContext<AppContextInterface>({
  turnOffMenu: false,
  setTurnOffMenu: () => {},
});

const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
  const [turnOffMenu, setTurnOffMenu] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ turnOffMenu, setTurnOffMenu }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
