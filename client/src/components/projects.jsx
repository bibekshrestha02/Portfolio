import React from "react";
import "./../css/style.css";
import LogoMeroSathi from "./../images/logo.png";
export default function projects() {
  return (
    <div className='projects'>
      <h1 className='text-center pt-5'>My Projects</h1>
      <br />
      {/* <span className='subtitle text-center'>
        If I had nine hours to chop down a tree, I'd spend the first six hours
        sharpeining my axe.
      </span> */}
      <br />
      <span className='project-logo'>
        <a
          href='https://merosathi.herokuapp.com/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src={LogoMeroSathi}
            className='img-thumbnail'
            alt='project-logo'
            width='304'
            height='236'
          />
        </a>
      </span>
    </div>
  );
}
