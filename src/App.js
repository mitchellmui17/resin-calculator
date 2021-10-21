import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage/LandingPage.js';
import Footer from './components/Footer/Footer.js'
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div>
      
      <Router>
      <NavBar/>
        <Switch>
          
            <Route exact path="/" component={() => (<Redirect to='/Home' />)} />
            <Route exact path = '/Home' component = {LandingPage}/>
        
        </Switch>

        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
