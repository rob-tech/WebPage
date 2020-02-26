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


 
     </div>
</>
    );
  }
}

export default Banner;
