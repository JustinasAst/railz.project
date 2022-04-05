import React from 'react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Product from '../product/Product';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const Header = () => {
  const { turnOffMenu, setTurnOffMenu } = useContext(AuthContext);

  const exitSideNavigation = () => {
    if (turnOffMenu === true) {
      setTurnOffMenu(false);
    }

    if (turnOffMenu === false) {
      setTurnOffMenu(true);
    }
  };

  return (
    <div className="header">
      <Link href="/">
        <img
          className="company-logo-header"
          src="https://cdn-images-1.medium.com/max/558/1*18_NefqHGveV7zR2zKKYbQ@2x.png"
          alt="railz"
        />
      </Link>

      <div className={`navigation-container ${turnOffMenu ? 'open' : ' '} `}>
        <div className="navigation-header">
          <div className="phone-header-logo">
            <img
              src="https://pbs.twimg.com/profile_images/1325486360682180614/p8pwyjLY_400x400.png"
              alt="reilz"
            />
          </div>

          <div>
            <GrClose
              className="header-exit-button"
              onClick={exitSideNavigation}
            />
          </div>
        </div>

        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list-element">
              <div className="title-and-icon">
                Product
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>

              <div className="hidemobile">
                <Product />
              </div>
            </li>

            <li>
              Use cases
              <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
            </li>
            <li>
              Developers
              <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
            </li>
            <li>Pricing</li>
            <li>
              Company
              <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
            </li>
          </ul>
        </nav>

        <div className="header-btn-container">
          <button className="login-btn">Log In</button>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>

      <GiHamburgerMenu className="meniu-icon" onClick={exitSideNavigation} />
    </div>
  );
};

export default Header;
