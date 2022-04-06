import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context';

type ComponentProps = {
  children?: React.ReactNode;
};

const ExitBackgound: React.FC<ComponentProps> = ({ children }) => {
  const { setTurnOffMenu, turnOffMenu } = useContext(AuthContext);

  const backgroundExit = () => {
    setTurnOffMenu(true);
  };

  return (
    <div className={turnOffMenu ? ' ' : 'exit'} onClick={backgroundExit}>
      {children}
    </div>
  );
};

export default ExitBackgound;
