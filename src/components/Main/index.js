import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"
import buildings from "./webber.jpeg"
import CountdownTimer from "../CountdownTimer/CountdownTimer"
import Nav from "../Nav/Nav"



function Main() {

    return (
      <div className="mainSecone">
      
      <div className="mainSec">
<img src={buildings}/>


     
      {/*}  <CountdownTimer
     countdownTimestampMs={1646883662000}/> */}
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