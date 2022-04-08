import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context';

type ComponentProps = {
  children?: React.ReactNode;
};

const MenuExitOverlay: React.FC<ComponentProps> = ({ children }) => {
  const { setMenuTurnedOff, menuTurnedOff } = useContext(AuthContext);

  return (
    <div
      className={menuTurnedOff ? '' : 'exit'}
      onClick={() => setMenuTurnedOff(true)}
    >
      {children}
    </div>
  );
};

export default MenuExitOverlay;
