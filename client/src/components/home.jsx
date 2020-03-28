import React from "react";
import "./../css/style.css";
export default function home() {
  return (
    <div className='home'>
      <div className='jumbotron'>
        <span>
          Hello, I'm <b className='adminName'>Bibek Shrestha</b>.
        </span>
        <br />
        <span>I'm a Full-Stack Web Developer.</span>
        <br />
        <span onClick={() => window.scrollTo(0, 750)} className='border-box'>
          View my work ->
        </span>
      </div>
    </div>
  );
}
