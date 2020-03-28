import React from "react";
import "./../css/style.css";

export default function skills() {
  return (
    <div className='skills'>
      <h1 className='text-center '>My Skills</h1>
      <div className='skills-page'>
        <div className='row mt-5 pb-4 container-fluid '>
          {/* nodejs */}
          <div className='col-6'>
            <span>Node JS</span>
            <div className='mt-4 progress'>
              <div
                className='bg-warning progress-bar'
                role='progressbar'
                style={{ width: "40%" }}
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'>
                <span className='percentage'>40%</span>
              </div>
            </div>
          </div>
          {/* Express*/}
          <div className='col-6'>
            <span>Express JS</span>
            <div className='mt-4 progress'>
              <div
                className='bg-warning progress-bar'
                role='progressbar'
                style={{ width: "60%" }}
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'>
                <span className='percentage'>60%</span>
              </div>
            </div>
          </div>
          {/* Database */}
          <div className='col-6'>
            <span>Database</span>
            <div className='mt-4 progress'>
              <div
                className='bg-warning progress-bar'
                role='progressbar'
                style={{ width: "30%" }}
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'>
                <span className='percentage'>30%</span>
              </div>
            </div>
          </div>
          {/* ReactJs  */}
          <div className='col-6'>
            <span>React JS</span>
            <div className='mt-4 progress'>
              <div
                className='progress-bar bg-warning'
                role='progressbar'
                style={{ width: "40%" }}
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'>
                <span className='percentage'>40%</span>
              </div>
            </div>
          </div>
          {/* CSS*/}
          <div className='col-6'>
            <span>CSS</span>
            <div className='progress mt-4'>
              <div
                className='bg-warning progress-bar'
                role='progressbar'
                style={{ width: "60%" }}
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'>
                <span className='percentage'>60%</span>
              </div>
            </div>
          </div>
          {/* HTML 5 */}
          <div className='col-6'>
            <span>HTML 5</span>
            <div className=' mt-4 progress'>
              <div
                className='progress-bar bg-warning'
                role='progressbar'
                style={{ width: "80%" }}
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'>
                <span className='percentage'>80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
