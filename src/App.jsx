import React from 'react';
//import Bootstrap


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer  from './Footer.jsx'
import Scroll from './Scroll.jsx'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Error from './Error';
import NavBar from './NavBar';
import {Route,Router,Switch} from "react-router-dom";
import AboutMe from "./AboutMe";
import Skill from './Skill';
import Toolsuse from './Toolsuse';

const App = () =>{
    return (
        <React.Fragment>
        <Scroll/>
       <NavBar/> 
       <Home />
       <AboutMe/>
       <Projects/>
    <Skill/>
    <Toolsuse/>
    <Contact/>  
    <Footer/>
      
        </React.Fragment>
       
    )
}
export default App;