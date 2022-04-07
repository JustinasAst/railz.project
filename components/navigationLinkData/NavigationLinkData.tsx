import React from 'react';
import Link from 'next/link';

type ComponentProps = {
  handleClick: () => void;
  title: string;
  text: string;
  source: string;
  altText: string;
};

const NavigationLinkData: React.FC<ComponentProps> = ({
  handleClick,
  title,
  text,
  source,
  altText,
}) => {
  return (
    <a>
      <div>
        <div className="navigation-data-box">
          <img src={source} alt={altText} />
          <div className="navigation-data-box-content">
            <h3 onClick={handleClick}>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NavigationLinkData;
