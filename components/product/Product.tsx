import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useContext } from 'react';
import { AuthContext } from '../../context';

export const Product: React.FC = () => {
  const { setMenuTurnOff } = useContext(AuthContext);

  const exitMenuClickLink = () => {
    setMenuTurnOff(true);
  };

  return (
    <div className="product-main-container">
      <div className="product">
        <div className="navigation-data-info-section">
          <h2>Product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            incidunt consectetur quae sint laboriosam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corrupti incidunt consectetur
            quae sint laboriosam. sit amet consectetur adipisicing elit.
            Corrupti incidunt consectetur quae sint laboriosam.
          </p>
          <button type="button" className="navigation-info-button">
            Learn more
            <FiArrowRight className="arrow-roght" />
          </button>
        </div>
        <div className="navigattion-links-section">
          <div className="navigation-data-box">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2Fe961c92e9b%2Fapi-64x64.svg&w=1920&q=80"
              alt="railz API"
            />
            <Link href="/railz-api" passHref>
              <a>
                <div className="navigation-data-box-content">
                  <h3 onClick={exitMenuClickLink}>Railz API</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis consequatur obcaecati nesciunt!hkjdsgasgagh m
                  </p>
                </div>
              </a>
            </Link>
          </div>

          <div className="navigation-data-box">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F7edda16872%2Fconnect-02-64x64.svg&w=1920&q=80"
              alt="railz connect"
            />
            <Link href="/railz-connect" passHref>
              <a>
                <div className="navigation-data-box-content">
                  <h3 onClick={exitMenuClickLink}>Railz Connect</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis consequatur obcaecati nesciunt!
                  </p>
                </div>
              </a>
            </Link>
          </div>

          <div className="navigation-data-box">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F87a0438dce%2Fsites-64x64.svg&w=1920&q=80"
              alt="railz sites"
            />
            <Link href="/railz-sites" passHref>
              <a>
                <div className="navigation-data-box-content">
                  <h3 onClick={exitMenuClickLink}>Railz Sites</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis consequatur obcaecati nesciunt!
                  </p>
                </div>
              </a>
            </Link>
          </div>

          <div className="navigation-data-box">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2Fe961c92e9b%2Fapi-64x64.svg&w=1920&q=80"
              alt="railz API"
            />
            <Link href="/railz-analytics" passHref>
              <a>
                <div className="navigation-data-box-content">
                  <h3 onClick={exitMenuClickLink}>Railz Analytics</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis consequatur obcaecati nesciunt!
                  </p>
                </div>
              </a>
            </Link>
          </div>

          <div className="navigation-data-box">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F7edda16872%2Fconnect-02-64x64.svg&w=1920&q=80"
              alt="railz connect"
            />
            <Link href="/railz-insights" passHref>
              <a>
                <div className="navigation-data-box-content">
                  <h3 onClick={exitMenuClickLink}>Railz Insights</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis consequatur obcaecati nesciunt!
                  </p>
                </div>
              </a>
            </Link>
          </div>

          <div className="navigation-data-box">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F87a0438dce%2Fsites-64x64.svg&w=1920&q=80"
              alt="railz sites"
            />
            <Link href="/railz-dashboard" passHref>
              <a>
                <div className="navigation-data-box-content">
                  <h3 onClick={exitMenuClickLink}>Railz Dashboard</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis ksaos saklsdkl klasklksa
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
