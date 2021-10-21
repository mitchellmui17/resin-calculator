import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import logo from '../Resin_pic.png';
import { Navbar,Container, Nav } from 'react-bootstrap';
import '../App.css';

export default function NavBar(){
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    
                        <Navbar.Brand>
                            <Link className='links' to ='/home'>
                                <img src={logo} style={{width:100, marginTop: -7}} />
                                Resin Calculator
                            </Link>
                        </Navbar.Brand>
                            <Nav className="ms-auto w-25 justify-content-end">

                                    <div className = "nav-box">
                                    <Link className='links' to = '/Calculator'>Calculator</Link>
                                    </div>
                                    <div className = "nav-box">
                                    <Link className='links' to = '/About'>About</Link>
                                    </div>


                            </Nav>
                
                </Navbar>
            </>
        )
    
}
