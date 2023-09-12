import React, { Component } from 'react'
import "./ContactUs.css";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="content">
    
    <div className="container" ><h1 style={{color: "white", textAlign: "center", marginBottom: "3%"}}>Contact Us</h1>
      <div className="row">
        <div className="col-md-5 mr-auto">
          <img src='https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='contact'/>
          
        </div>

        <div className="col-md-6">
          <div className="box" style={{marginTop: '3%'}}>
            <h3 className="heading">How Can We Help?</h3>
            <form className="mb-5" method="post" id="contactForm" name="contactForm">
              <div className="row">
                
                <div className="col-md-6 form-group" style={{paddingBottom: "1.5%"}}>
                  <label for="name" className="col-form-label">Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Your name"/>
                </div>
                <div className="col-md-6 form-group" style={{paddingBottom: "1.5%"}}>
                  <label for="name" className="col-form-label">Organization</label>
                  <input type="text" className="form-control" name="organization" id="organization" placeholder="Your organization"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group" style={{paddingBottom: "1.5%"}}>
                  <label for="email" className="col-form-label">Email</label>
                  <input type="text" className="form-control" name="email" id="email" placeholder="Your email address"/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-group" style={{paddingBottom: "1.5%"}}>
                  <label for="message" className="col-form-label">Description of Problem</label>
                  <textarea className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4"/>
                  <span className="submitting"></span>
                </div>
              </div>
            </form>

            <div id="form-message-warning mt-4"></div> 
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
    )
  }
}


