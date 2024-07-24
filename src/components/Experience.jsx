import React from 'react';
import Experiencejs from './Experiencejs';

export default function Experience() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg text-center">
            <div>
              <i className="fas fa-cloud-download-alt fa-5x"></i>
              <h2>
                <span className="counter">1800</span>
                <span>+</span>
              </h2>
              <p>Downloads</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg text-center">
            <div>
              <i className="far fa-star fa-5x"></i>
              <h2>
                <span className="counter">3500</span>
                <span>+</span>
              </h2>
              <p>Awards</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg text-center">
            <div>
              <i className="far fa-heart fa-5x"></i>
              <h2>
                <span className="counter">1199</span>
                <span>+</span>
              </h2>
              <p>Likes</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg text-center">
            <div>
              <i className="fas fa-check fa-5x"></i>
              <h2>
                <span className="counter">2200</span>
                <span>+</span>
              </h2>
              <p>Recommended</p>
            </div>
          </div>
        </div>
      </div>
      <Experiencejs />
    </div>
  );
}
