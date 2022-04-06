import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context';

type ComponentProps = {
  children?: React.ReactNode;
};

const ExitBackgound: React.FC<ComponentProps> = ({ children }) => {
  const { setMenuTurnOff, menuTurnOff } = useContext(AuthContext);

  const backgroundExit = () => {
    setMenuTurnOff(true);
  };

  return (
    <div className={menuTurnOff ? ' ' : 'exit'} onClick={backgroundExit}>
      {children}
    </div>
  );
};

export default ExitBackgound;
