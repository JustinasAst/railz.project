import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context';

type ComponentProps = {
  children?: React.ReactNode;
};

const ExitBackgound: React.FC<ComponentProps> = ({ children }) => {
  const { setMenuTurnedOff, menuTurnedOff } = useContext(AuthContext);

  const backgroundExit = () => {
    setMenuTurnedOff(true);
  };

  return (
    <div className={menuTurnedOff ? '' : 'exit'} onClick={backgroundExit}>
      {children}
    </div>
  );
};

export default ExitBackgound;
