import React from "react";
// import Nav from "./assets/navbar";
import "./../css/style.css";
import BgImage from "./../images/bg.png";

export default function about() {
  return (
    <div className='about pb-5'>
      {/* <Nav /> */}
      <div className='row  pt-3'>
        <div className='col-lg-5  col-md-6 pl-5  bgImage '>
          <img
            src={BgImage}
            className='img-fluid'
            alt=''
            sizes='100%'
            srcset=''
          />
        </div>
        <div className='col-lg-7 col-md-6 about-content'>
          <h1 className='about-text mt-3'>ABOUT ME</h1>

          <ul>
            <li>
              <span>Name: </span>
              <span className='data'>Bibek Shrestha</span>
            </li>
            <li>
              <span>Date of Birth: </span>
              <span className='data'>Aug, 25 2002</span>
            </li>
            <li>
              <span>Address: </span>
              <span className='data'>Harion Sarlahi</span>
            </li>
            <li>
              <span>Zip Code: </span>
              <span className='data'>45804</span>
            </li>
            <li>
              <span>Email: </span>
              <span className='data'>shresthabbks@gmail.com</span>
            </li>
            <li>
              <span>Phone: </span>
              <span className='data'>9866123983</span>
            </li>
            <li className='mt-4'>
              <span id='projectNo'>1 </span>
              <span className='data'>Project Completed</span>
            </li>
            <li>
              <span className='mt-3 btn btn-warning'>Download CV</span>
            </li>
          </ul>
        </div>
        <br />
      </div>
    </div>
  );
}
