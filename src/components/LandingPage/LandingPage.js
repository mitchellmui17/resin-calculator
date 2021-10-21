import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import logo from '../../Background.jpg'
import './LandingPage.css'

export default function LandingPage() {
    return(
        <div>
            <div className ="welcome-template">
                <div className = "welcome-comment">
                    <img className ="background" src={logo} alt = "The Golden Experience Logo" style ={{width:'100%'}}></img>
                </div>
                
            </div>
            

        </div>
        
    )


   
}


