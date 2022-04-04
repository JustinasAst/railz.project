import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const ExitBackgound = () => {
  const { setTurnOffMenu, turnOffMenu } = useContext(AuthContext);

  const backgroundExit = () => {
    setTurnOffMenu(true);
  };

  return (
    <div className={turnOffMenu ? ' ' : 'exit'} onClick={backgroundExit}></div>
  );
};

export default ExitBackgound;
