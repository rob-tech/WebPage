import React, { Component } from "react";
import NavBar from "./NavBar";
import Banner from './Banner'
import ManagementPartners from './ManagementPartners'
import CurrentJobOpenings from './CurrentJobOpenings'
import PropertyInvestor from './PropertyInvestor'
import Footer from './Footer'

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
          <PropertyInvestor/>
          <Footer/>
      </div>
      </>
    );
  }
}

export default Main;
