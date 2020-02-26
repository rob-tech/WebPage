import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div id="footerSection">
        <div className="footerLinkLists">
          <ul className="contactUsList">
            <li>Contact Us</li>
            <li>
              {" "}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8158 9.87632C12.8905 9.87632 11.9842 9.73184 11.1253 9.44842C10.7061 9.30395 10.23 9.41526 9.95447 9.69632L8.25158 10.9824C6.29763 9.93947 5.04711 8.68974 4.01842 6.75L5.26974 5.08737C5.58474 4.77237 5.69763 4.31132 5.56263 3.87947C5.27684 3.015 5.13158 2.10789 5.13158 1.18421C5.13158 0.531316 4.60026 0 3.94737 0H1.18421C0.531316 0 0 0.531316 0 1.18421C0 8.80184 6.19816 15 13.8158 15C14.4687 15 15 14.4687 15 13.8158V11.0605C15 10.4076 14.4687 9.87632 13.8158 9.87632Z"
                  fill="white"
                />
              </svg>
              +420 228 225 674
            </li>
          </ul>
          {/* <ul className="forInvestorsList">
            <li>
              We’re a real estate technology company whose goal is to empower
              investors with direct access to fully vetted, institutional-grade
              real estate investments faster and smarter than ever before
            </li>
          </ul>
          <ul className="aboutExemplarList">
            <li>
              We’re a real estate technology company whose goal is to empower
              investors with direct access to fully vetted, institutional-grade
              real estate investments faster and smarter than ever before
            </li>
          </ul>
          <ul className="resourcesList">
            <li>
              We’re a real estate technology company whose goal is to empower
              investors with direct access to fully vetted, institutional-grade
              real estate investments faster and smarter than ever before
            </li>
          </ul> */}
        </div>

        {/* <div className="iconRow">               
                <div className="icons">
                <ul className="contactUsList">
               <li>We’re </li>
               </ul>
                </div>
                <div className="terms">
                Terms & Conditions
                </div>
                <div className="privacy">
                Privacy Notice
                </div>    
            </div>     
            
            <div className="copyRight">               
                <div className="copyText">
                Our Investment Team brings over 20 billion CZK in real estate transaction experience from leading firms like Blackstone and Goldman Sachs - while our engineering and product teams hail from leading tech companies like Dropbox and Square.
                </div>  
            </div>   */}
      </div>
    );
  }
}

export default Footer;
