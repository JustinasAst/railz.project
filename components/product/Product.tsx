import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useContext } from 'react';
import { AuthContext } from '../../context';

export const Product: React.FC = () => {
  const { setMenuTurnedOff } = useContext(AuthContext);

  const exitMenu = () => {
    setMenuTurnedOff(true);
  };

  const navigationLinksData = [
    {
      id: 1,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2Fe961c92e9b%2Fapi-64x64.svg&w=1920&q=80',
      link: '/railz-api',
      title: 'Railz API',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur obcaecati nesciunt!hkjdsgasgagh m',
    },
    {
      id: 2,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F7edda16872%2Fconnect-02-64x64.svg&w=1920&q=80',
      link: '/railz-connect',
      title: 'Railz Connect',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur obcaecati nesciunt!',
    },
    {
      id: 3,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F87a0438dce%2Fsites-64x64.svg&w=1920&q=80',
      link: '/railz-sites',
      title: 'Railz Sites',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis consequatur obcaecati nesciunt!',
    },
    {
      id: 4,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2Fe961c92e9b%2Fapi-64x64.svg&w=1920&q=80',
      link: '/railz-analytics',
      title: 'Railz Analytics',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur obcaecati nesciunt!',
    },
    {
      id: 5,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F7edda16872%2Fconnect-02-64x64.svg&w=1920&q=80',
      link: '/railz-insights',
      title: 'Railz Insights',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur obcaecati nesciunt!',
    },
    {
      id: 6,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F87a0438dce%2Fsites-64x64.svg&w=1920&q=80',
      link: '/railz-dashboard',
      title: 'Railz Dashboard',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Quis ksaos saklsdkl klasklksa',
    },
  ];

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
          {navigationLinksData.map((item) => (
            <div className="navigation-data-box" key={item.id}>
              <img src={item.img} alt={item.title} />
              <Link href={item.link} passHref>
                <a>
                  <div className="navigation-data-box-content">
                    <h3 onClick={exitMenu}>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
