import React from "react";
// import { Link } from "react-router-dom";
export default function footer() {
  return (
    <div className='footer'>
      <span className='brand-logo'>
        <a
          href='https://www.facebook.com/profile.php?id=100017578653491'
          target='_blank'
          rel='noopener noreferrer'
          className='fa fa-facebook-square logo-size'
        />
      </span>

      <span className='brand-logo'>
        <a
          href='https://www.instagram.com/bbkshrestha/'
          target='_blank'
          rel='noopener noreferrer'
          className='fa fa-instagram logo-size'
        />
      </span>
      <span className='brand-logo'>
        <a
          href='https://github.com/bibekshrestha02'
          target='_blank'
          rel='noopener noreferrer'
          className='fa fa-github-square logo-size'
        />
      </span>
      <span className='brand-logo'>
        <a
          href='https://www.linkedin.com/in/bibek-shrestha-01b7b41a5/'
          target='_blank'
          rel='noopener noreferrer'
          className='fa fa-linkedin-square logo-size'
        />
      </span>
      <p>Copyright &copy;2020 Bibek Shrestha </p>
    </div>
  );
}
