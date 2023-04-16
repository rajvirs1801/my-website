import React from "react";
import logo from './about.jpg'

console.log(logo);

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img src={logo} alt="Logo" width="600" height="400"  />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              The Website helps it user to build their vocabulary. The user can learn 
              pronunciations and meaniing of words the may not have heard before. It helps in 
              practicing newer languages and will help in buildin confidence of the individual.          
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
