import React from 'react';

const Article = () => {
  return (
    <div className="main-article-section">
      <div className="article-section">
        <div className="get-full-access-section">
          <h1>Get full access to Railz API</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi
            fugiat autem corporis labore, ab tenetur aliquid!
          </p>
          <button className="article-btn">Get started</button>
        </div>
        <div className="logo-component">
          <img
            src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F1c0608f43f%2Fhero-01-584x520.svg&w=2560&q=80"
            alt="railz"
          />
        </div>
      </div>
      <div className="article-about">
        <h2 className="article-about-title">
          Why you should use the Railz API for your financial service
        </h2>
        <div className="article-about-benefits-container">
          <div className="article-about-box connect">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F2e41094b78%2Fconnect-64x64.svg&w=1920&q=80"
              alt="railz connect"
            />
            <h3>Connect</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              unde, veritatis assumenda quos rerum ab alias aliquam est nesciunt
              vitae.
            </p>
          </div>
          <div className="article-about-box sandbox-mode">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2F6b2d3f7a62%2Fcollect-64x64.svg&w=1920&q=80"
              alt="railz sandbox mode"
            />
            <h3>SandBox Mode</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              aperiam excepturi vero amet iste quis quod eos rerum, hic illum.
            </p>
          </div>
          <div className="article-about-box data-endpoints">
            <img
              src="https://railz.ai/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F124388%2Fx%2Fa1494547fc%2Fanalyze-64x64.svg&w=1920&q=80"
              alt="railz data endpoints"
            />
            <h3>Data Endpoints</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              quibusdam quae laudantium! Laboriosam suscipit quae placeat
              consequatur dolore necessitatibus! Dolores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
