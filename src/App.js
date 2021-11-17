import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from "./components/Main"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import Header from "./components/Header"
import Navigation from "./components/Navigation/Navigation"
import Aboutme from "./components/Aboutme/Aboutme"
import Location from "./components/Location/Location"
import "./App.css"




function App() {


  
  return (
    <div className="App">
    
      
     <Navigation/>
      <BrowserRouter>
        <Route path='/' exact={true} component={Main}/>   
        <Route path="/Aboutme"  component={Aboutme} />
        <Route path="/Location"  component={Location} />
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
