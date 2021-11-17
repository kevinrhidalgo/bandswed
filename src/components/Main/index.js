import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"
import CountdownTimer from "../CountdownTimer/CountdownTimer"
import Nav from "../Nav/Nav"
import wed1 from "./wed2.jpeg"



function Main() {

    return (
      <div className="mainSecone">
      
      <div className="mainSec">
<img src={wed1}/>


     
      </div>


<div className="wedNames">
<h3>Soley McWilliam & Bryan Hidalgo</h3>
<h6>are getting married</h6>
</div>


      <div className="cdTimer">
      <CountdownTimer
     countdownTimestampMs={1646883662000}/>
      </div>


      <div className="enterBtn">
<Link className="btn" to="/Aboutme"><h2> Enter </h2></Link>

</div>

      </div>
    );
  }
  
  export default Main;