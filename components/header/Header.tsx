import React, { useState } from 'react';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [sideMeniuOpen, setSideMeniuOpen] = useState(false);

  return (
    <div className="header">
      <img
        className="company-logo-header"
        src="https://cdn-images-1.medium.com/max/558/1*18_NefqHGveV7zR2zKKYbQ@2x.png"
        alt="railz"
      />

      <div className="navigation-container open">
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
      <GiHamburgerMenu className="meniu-icon" />
    </div>
  );
};

export default Header;
