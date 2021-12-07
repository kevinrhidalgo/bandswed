import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from "./components/Main"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import Aboutme from "./components/Aboutme/Aboutme"
import WedInfo from "./components/Wedinfo/Wedinfo"
import "./App.css"




function App() {


  
  return (
    <div className="App">
  
      <BrowserRouter>
      <Nav/>
        <Route path='/' exact={true} component={Main}/>   
        <Route path="/Aboutme"  component={Aboutme} />
        <Route path="/Wedinfo"  component={WedInfo} />
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
