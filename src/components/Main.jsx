import React, { Component } from "react";
import NavBar from "./NavBar";
import Banner from './Banner'

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="mainCont">
          <NavBar/> 
          <Banner/>
{/* 
          <div id="part3">
            <p>hello</p>
          </div>
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
