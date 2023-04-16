import React from "react";
import logo from './learn.jpg'

console.log(logo);

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img src={logo} alt="Logo" width="600" height="400"/>

          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
            Vocabulary is an important focus of literacy teaching and refers to the knowledge or words, 
            including their structure , use, meanings and links to other words.
            Oral vocabulary refers to words that children can understand or use while speaking and listening.
            Oral vocabulary is closely related to their reading vocabulary, which is the words that children 
            can recognise and use in their reading or writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
