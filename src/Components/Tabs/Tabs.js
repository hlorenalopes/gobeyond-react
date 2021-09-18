import React from 'react';

const Tabs = () => {
  return (
    <>
      <nav className='tabs'>
        <button className='tab'>Links úteis</button>
        <button className='tab tab-active'>Últimos trabalhos</button>
        <button className='tab'>Artigos Preferidos</button>
      </nav>

      <section className='cards'>
        <a href='/' target='_blank' className='post'>
          <h2>React Interview Questions</h2>
        </a>
        <a href='/' target='_blank' className='post'>
          <h2>Título do card</h2>
        </a>
        <a href='/' target='_blank' className='post'>
          <h2>Título do card</h2>
        </a>
        <a href='/' target='_blank' className='post'>
          <h2>Título do card</h2>
        </a>
      </section>
    </>
  );
};

export default Tabs;
