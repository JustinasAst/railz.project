import React from 'react';

const RailzApi: React.FC = () => {
  const articleRailzApiData = [
    {
      id: 1,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F2e41094b78%2Fconnect-64x64.svg&w=1920&q=80',
      title: 'Connect',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod unde, veritatis assumenda quos rerum ab alias aliquest nesciunt vitae.',
    },
    {
      id: 2,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F6b2d3f7a62%2Fcollect-64x64.svg&w=1920&q=80',
      title: 'SandBox Mode',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam excepturi vero amet iste quis quod eos rerum, hic illum.',
    },
    {
      id: 3,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2Fa1494547fc%2Fanalyze-64x64.svg&w=1920&q=80',
      title: 'Data Endpoints',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam quae laudantium! Laboriosam suscipit quae placeat consequatur dolore necessitatibus! Dolores!',
    },
  ];
  return (
    <div className="main-railz-container">
      <div className="page-container">
        <div className="main-article-section">
          <div className="article-section">
            <div className="get-full-access-section">
              <h1>Railz API</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi
                fugiat autem corporis labore, ab tenetur aliquid!
              </p>
              <button type="button" className="article-btn">
                Get started
              </button>
            </div>

            <div className="logo-component">
              <img
                src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2F2336x2080%2Fa640d9ff1a%2Frailz-data-financial-institutions.png&w=2560&q=80"
                alt="railz-api"
              />
            </div>
          </div>

          <div className="article-about">
            <h2 className="article-about-title">What is the Railz API?</h2>
            <div className="article-about-benefits-container">
              {articleRailzApiData.map((item) => (
                <div className="article-about-box" key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailzApi;
