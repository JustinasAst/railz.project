import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Product from '../product/Product';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const Header: React.FC = () => {
  const [productLink, setProductLink] = useState<boolean>(false);
  const [useCaseLink, setUseCaseLink] = useState<boolean>(false);
  const [developersLink, setDevelopersLink] = useState<boolean>(false);
  const [companyLink, setCompanyLink] = useState<boolean>(false);
  const { menuTurnedOff, setMenuTurnedOff } = useContext(AuthContext);

  return (
    <div className="header">
      <Link href="/" passHref>
        <a>
          <img
            className="company-logo-header"
            src="https://cdn-images-1.medium.com/max/558/1*18_NefqHGveV7zR2zKKYbQ@2x.png"
            alt="railz"
          />
        </a>
      </Link>

      <div className={`navigation-container ${menuTurnedOff ? 'open' : ''} `}>
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
              onClick={() => setMenuTurnedOff(!menuTurnedOff)}
            />
          </div>
        </div>

        <nav className="navigation">
          <ul className="navigation-list">
            <li
              className="navigation-list-element"
              onClick={() => setProductLink(!productLink)}
            >
              <div className="title-and-icon">
                Product
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {productLink ? (
                <div className="hidemobile">
                  <Product />
                </div>
              ) : null}
            </li>

            <li
              className="navigation-list-element"
              onClick={() => setUseCaseLink(!useCaseLink)}
            >
              <div className="title-and-icon">
                Use case
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {useCaseLink ? (
                <div className="hidemobile">
                  <Product />
                </div>
              ) : null}
            </li>

            <li
              className="navigation-list-element"
              onClick={() => setDevelopersLink(!developersLink)}
            >
              <div className="title-and-icon">
                Developers
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {developersLink ? (
                <div className="hidemobile">
                  <Product />
                </div>
              ) : null}
            </li>

            <li>
              <div className="title-and-icon">Pricing</div>
            </li>

            <li
              className="navigation-list-element"
              onClick={() => setCompanyLink(!companyLink)}
            >
              <div className="title-and-icon">
                Developers
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {companyLink ? (
                <div className="hidemobile">
                  <Product />
                </div>
              ) : null}
            </li>
          </ul>
        </nav>

        <div className="header-btn-container">
          <button type="button" className="login-btn">
            Log In
          </button>
          <button type="button" className="get-started-btn">
            Get started
          </button>
        </div>
      </div>

      <GiHamburgerMenu
        className="meniu-icon"
        onClick={() => setMenuTurnedOff(!menuTurnedOff)}
      />
    </div>
  );
};

export default Header;
