import React from 'react';

const RailzConnect: React.FC = () => {
  const articleRailzConnectData = [
    {
      id: 1,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F2e41094b78%2Fconnect-64x64.svg&w=1920&q=80',
      title: 'White Labelling',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod unde, veritatis assumenda quos rerum ab alias aliquam est nesciunt vitae.',
    },
    {
      id: 2,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F631a8591aa%2Fsandbox-64x64.svg&w=1920&q=80',
      title: 'Easy Access',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam excepturi vero amet iste quis quod eos reru hicillum.',
    },
    {
      id: 3,
      img: 'https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F63509d8954%2F3-endpoints-64x64.svg&w=1920&q=80',
      title: 'Real-Time',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum quibusdam quae laudantium! Laboriosam suscipit quae placeat consequatur dolore necessitatibus! Dolores!',
    },
  ];
  return (
    <div className="main-railz-container">
      <div className="page-container">
        <div className="main-article-section">
          <div className="article-section">
            <div className="get-full-access-section">
              <h1>Get started with Railz Connect™</h1>
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
                src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F671efaf61f%2Frailz-connect-product-page-hero-584x520.svg&w=1920&q=80"
                alt="railz-api"
              />
            </div>
          </div>

          <div className="article-about">
            <h2 className="article-about-title">
              Why you should use the Railz Connect™ for your financial service
            </h2>
            <div className="article-about-benefits-container">
              {articleRailzConnectData.map((item) => (
                <div className="article-about-box connect" key={item.id}>
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

export default RailzConnect;
