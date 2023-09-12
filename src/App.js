import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import backgroundImage from './backgroundimg.jpg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';

export default class App extends Component {



  render() {

    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the background covers the entire viewport height
    };
    return (
      <div style={backgroundStyle}>
        <BrowserRouter>
        <Navbar/>
        <div className="main-container">
          <Routes>
            <Route path="/home" element={<News pageSize={6} country="in"/>}></Route>
            <Route path="/general" element={<News pageSize={6} country="in" category= "general"/>}></Route>
            <Route path="/business" element={<News pageSize={6} country="in" category= "business"/>}></Route>
            <Route path="/technology" element={<News pageSize={6} country="in" category= "technology"/>}></Route>
            <Route path="/health" element={<News pageSize={6} country="in" category= "health"/>}></Route>
            <Route path="/entertainment" element={<News pageSize={6} country="in" category= "entertainment"/>}></Route>
            <Route path="/science" element={<News pageSize={6} country="in" category= "science"/>}></Route>
            <Route path="/sports" element={<News pageSize={6} country="in" category= "sports"/>}></Route>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path="/FAQ" element={<FAQ/>}/>
          </Routes>
        </div>
        <Footer className = "footer"/>
        </BrowserRouter>
        
      </div>
      
    )
  }
}