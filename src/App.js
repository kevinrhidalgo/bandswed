import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from "./components/Main"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"
import Header from "./components/Header"
import CountdownTimer from "./components/CountdownTimer/CountdownTimer"


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Route path='/' exact={true} component={Main}/>   
      </BrowserRouter>
      <Nav/>
      <CountdownTimer
     countdownTimestampMs={1646883662000}/>
      <Footer/>
    </div>
  );
}

export default App;
