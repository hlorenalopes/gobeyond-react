import React from 'react';

const Contact = () => {
  return (
    <>
      <div className='row contact'>
        <a className='col' href='https://github.com/hlorenalopes'>
          <i class='fab fa-github'></i>
          <p>GitHub</p>
        </a>
        <a className='col' href='https://www.linkedin.com/in/lorenalopes/'>
          <i class='fab fa-linkedin'></i>
          <p>LinkedIn</p>
        </a>
        <a className='col' href='mailto:hlorenalopes@gmail.com'>
          <i className='far fa-envelope'></i>
          <p>E-mail</p>
        </a>
      </div>
    </>
  );
};

export default Contact;
