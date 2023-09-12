import "./Searchbar.css";

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


  render() {
    return (
      <div className='navcontainer'>
        <nav className="navbar bg-body-tertiary " style={{marginTop:"-9.5px"}}>
          <div className="container-fluid" style={{backgroundColor:"#042fdb7e", marginBottom: "-8px"}} >
            <Link className="navbar-brand" href="/" style={{ textShadow: '2px 3px 5px rgba(0, 0, 0, 0.7)' }}><h3>Newsflix</h3></Link>
            <form className="searchbar d-flex" role="search" style={{marginTop: "10px", marginBottom:"10px"}}>
              <input className="form-control me-2" id="mysearch" type="search" placeholder="Update Yourself" aria-label="Search" style={{width: "100%"}}/>
                <button className="btn-btn" type="submit"><img src="https://cdn-icons-png.flaticon.com/128/607/607554.png" alt="" width="30px" height="30px"></img></button>
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ textShadow: '2px 3px 5px rgba(0, 0, 0, 0.7)' }}>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
                <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
                <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>

              </ul>
                                       
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar