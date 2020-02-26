import React, { Component } from "react";
import NavBar from "./NavBar";
import Banner from './Banner'
import ManagementPartners from './ManagementPartners'
import CurrentJobOpenings from './CurrentJobOpenings'

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="mainCont">
          <NavBar/> 
          <Banner/>
          <ManagementPartners/>
          <CurrentJobOpenings/>
{/* 

          <div id="part4">
            <p>hello</p>
          </div>
          <div id="part5">
            <p>hello</p>
          </div>
          <div id="part6">
            <p>hello</p>
          </div> */}
      </div>
      </>
    );
  }
}

export default Main;
