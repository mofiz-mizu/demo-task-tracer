import React from "react";

import img1 from "./../images/ExpressNo1.jpg";

function About () {
  return <div className="container" >
    <h1 >About Us</h1>
    <div className="about-items">
      <div className="abt-img">
        <img src={img1} alt="pic" />
      </div>
      <div className="abt-txt">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sapiente quis perspiciatis mollitia exercitationem voluptate aperiam quidem odio, esse eaque. Beatae iure similique magni consequatur aliquam odio rem non excepturi!</p>
      </div>
    </div>
  </div>;
}

export default About ;