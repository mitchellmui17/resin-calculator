import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component{
    render(){
        return(
                
                    <footer className="footer-all">
                        <br></br>
                        More Information
                        <div className="footer-info">
                            <ul className="navItems">
                            <p>
                            <li><Link className="links" to="/Home">Home</Link></li>
                            
                            <li><Link className="links" to="/About">About</Link></li>

                            <li><Link className="links" to="/Calculator">Calculator</Link></li>
                            
                            </p>
                            </ul>
                            <strong>The Resin Calculator © 2020</strong>
                           
                        </div>
                    </footer>
                
        )
    }
    
}
export default Footer; 