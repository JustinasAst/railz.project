import React, { useState } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Header = () => {
  const [sideMeniuOpen, setSideMeniuOpen] = useState(false);

  const exitSideNavigation = () => {
    if (sideMeniuOpen === true) {
      setSideMeniuOpen(false);
    }

    if (sideMeniuOpen === false) {
      setSideMeniuOpen(true);
    }
  };
  console.log(sideMeniuOpen);

  return (
    <div className="header">
      <img
        className="company-logo-header"
        src="https://cdn-images-1.medium.com/max/558/1*18_NefqHGveV7zR2zKKYbQ@2x.png"
        alt="railz"
      />

      <div className={`navigation-container ${sideMeniuOpen ? 'open' : ''} `}>
        <div className="navigation-header">
          <div className="phone-header-logo">
            <img
              src="https://pbs.twimg.com/profile_images/1325486360682180614/p8pwyjLY_400x400.png"
              alt="reilz"
            />
          </div>
          <div>
            <ImCross
              className="header-exit-button"
              onClick={exitSideNavigation}
            />
          </div>
        </div>
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              Product
              <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
            </li>
            <li>
              Use cases
              <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
            </li>
            <li>
              Developers
              <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
            </li>
            <li>
              Pricing
              <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
            </li>
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
