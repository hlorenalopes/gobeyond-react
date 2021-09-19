import React, { useState } from 'react';

const Tabs = ({ content }) => {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <>
      <nav className='tabs row'>
        {content.map(({ title }, index) => (
          <button
            key={index}
            onClick={() => setActiveContent(index)}
            className={`tab ${
              index === activeContent ? 'tab-active' : 'tab-inactive'
            }`}
          >
            {title}
          </button>
        ))}
      </nav>

      <section className='cards'>
        {content[activeContent].cards.map(
          ({ background, link, title }, index) => (
            <a
              key={index}
              href={link}
              style={{ backgroundImage: `url(${background})` }}
              target='_blank'
              rel='noreferrer'
              className='card'
            >
              <h2>{title}</h2>
            </a>
          ),
        )}
      </section>
    </>
  );
};

export default Tabs;
