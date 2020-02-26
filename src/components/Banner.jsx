import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
        <>
      <div id="banner">
          <div className="bannerTitle">
              About Exemplar
        </div>
      </div>

     <div id="aboutUsSection">

        <div className="mainAboutUs">
           <div className="aboutUsText">
           We’re a real estate technology company whose goal is to empower investors with direct access to fully vetted, institutional-grade real estate investments faster and smarter than ever before
           </div>
        </div>

        <div className="otherAboutUs">
       

            <div className="otherDesc">
            Our Investment Team brings over 20 billion CZK in real estate transaction experience from leading firms like Blackstone and Goldman Sachs - while our engineering and product teams hail from leading tech companies like Dropbox and Square.
            </div>
            <div className="otherDesc">
            With in-depth experience in real estate, combined with cutting-edge technology and close local operator partnerships, Exemplar brings you access to institutional-grade investments with greater transparency and lower fees. Exemplar brings you access to institutional-grade investments with greater transparency and lower fees.
            </div>

        </div>
 
     </div>
</>
    );
  }
}

export default Banner;
