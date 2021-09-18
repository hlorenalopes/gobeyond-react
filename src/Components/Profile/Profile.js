import React from 'react';

const Profile = () => {
  return (
    <>
      <div className='banner'></div>
      <img src='profilePicture.jpg' alt='Foto de perfil' />

      <h1>Heloísa Lopes</h1>
      <p className='jobPosition'>Front-end developer</p>

      <div className='row contact'>
        <a className='col' href='/'>
          <i className='fab fa-whatsapp'></i>
          <p>WhatsApp</p>
        </a>
        <a className='col' href='/'>
          <i className='fas fa-phone-alt'></i>
          <p>Phone</p>
        </a>
        <a className='col' href='/'>
          <i className='far fa-envelope'></i>
          <p>E-mail</p>
        </a>
      </div>
    </>
  );
};

export default Profile;
