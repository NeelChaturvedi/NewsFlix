import "./footer.css"

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
        <div className="bottom-container" >
        <div className="container text-center">
          <div className="text-center" style={{marginBottom: "10px"}}><h4 style={{paddingTop:"1.5%"}}>Other Services</h4></div>
          <div className="row align-items-end">
            <div className="col"style={{paddingTop:"1%"}}>
              <Link to="/FAQ"><h5>FAQ</h5></Link>
            </div>
            <div className="col">
              <h5>Help Center</h5>
            </div>
            <div className="col">
              <h5>Media Center</h5>
            </div>
          </div>
          <div className="row align-items-end"style={{paddingTop:"1%"}}>
            <div className="col">
              <h5>Legal Notice</h5>
            </div>
            <div className="col">
              <h5>Corporate Information</h5>
            </div>
            <div className="col">
              <h5>Cookie Preferences</h5>
            </div>
          </div>
          <div className="row align-items-end" style={{paddingTop:"1%"}}>
            <div className="col">
              <Link to='/ContactUs'><h5>Contact Us</h5></Link>
            </div>
            <div className="col">
              <h5>Terms Of Use</h5>
            </div>
            <div className="col">
              <h5>Jobs</h5>
            </div>
          </div>
        </div>
        <div className="container text-center" style={{marginTop: "15px"}}>
          <div className="row align-items-start" style={{paddingTop:"1.5%"}}>
            <div className="col">
              <h6>Conditions of Use and Services</h6>
            </div>
            <div className="col">
              <h6>Privacy Notice</h6>
            </div>
            <div className="col">
              <h6>Internet-Based News</h6>
            </div>
          </div>
        </div>
        <div className="text-center" style={{marginTop: "10px"}}>
            <h6>© 2023- Present,  NewsFlix.com, Inc. and its Affiliated</h6>
        </div>
      </div>
    )
  }
}
