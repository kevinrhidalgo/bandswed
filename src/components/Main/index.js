import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"
import CountdownTimer from "../CountdownTimer/CountdownTimer"
import Nav from "../Nav/Nav"
import brySol from "./brysol.jpg"
import manBg from "./manhattanBg.jpeg"
import prop from "./proposal.JPG"
import sbBg from "./sbBg.jpg"



function Main() {

    return (
          
      <div className="mainSecOne">
         
     
      <div className="mainSec">

      <img src={sbBg}/> 
      
      </div>
    
      <div className="wedNames">
<h3>Soley McWilliam & Bryan Hidalgo</h3>
<h6>are getting married</h6>
<h1>03.10.22</h1>
</div>


{/*}
      <div className="cdTimer">
      <CountdownTimer
     countdownTimestampMs={1646883662000}/>
      </div>
    */}
{/*}
      <div className="enterBtn">
<Link className="btn" to="/Aboutme"><h2> Enter </h2></Link>
</div>
*/}
      </div>
    );
  }
  
  export default Main;