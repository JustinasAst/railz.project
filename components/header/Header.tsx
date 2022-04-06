import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Product from '../product/Product';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const Header: React.FC = () => {
  const [product, setProduct] = useState<boolean>(false);
  const [useCase, setUseCase] = useState<boolean>(false);
  const [developers, setDevelopers] = useState<boolean>(false);
  const [company, setCompany] = useState<boolean>(false);
  const { turnOffMenu, setTurnOffMenu } = useContext(AuthContext);

  const exitSideNavigation = () => {
    if (turnOffMenu === true) {
      setTurnOffMenu(false);
    }

    if (turnOffMenu === false) {
      setTurnOffMenu(true);
    }
  };

  const showDataMobileMenu = (item: boolean, setItem: (a: boolean) => void) => {
    if (item === true) {
      setItem(false);
    }

    if (item === false) {
      setItem(true);
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
            <li
              className="navigation-list-element"
              onClick={() => showDataMobileMenu(product, setProduct)}
            >
              <div className="title-and-icon">
                Product
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {product ? (
                <div className="hidemobile">
                  <Product />
                </div>
              ) : null}
            </li>

            <li
              className="navigation-list-element"
              onClick={() => showDataMobileMenu(useCase, setUseCase)}
            >
              <div className="title-and-icon">
                Use case
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {useCase ? (
                <div className="hidemobile">
                  <Product />
                </div>
              ) : null}
            </li>

            <li
              className="navigation-list-element"
              onClick={() => showDataMobileMenu(developers, setDevelopers)}
            >
              <div className="title-and-icon">
                Developers
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {developers ? (
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
              onClick={() => showDataMobileMenu(company, setCompany)}
            >
              <div className="title-and-icon">
                Developers
                <MdOutlineKeyboardArrowDown className="navigation-arrow-icon" />
              </div>

              <div className="hide-navigation-data">
                <Product />
              </div>
              {company ? (
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

      <GiHamburgerMenu className="meniu-icon" onClick={exitSideNavigation} />
    </div>
  );
};

export default Header;
