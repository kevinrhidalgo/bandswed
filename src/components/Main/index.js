import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"
import CountdownTimer from "../CountdownTimer/CountdownTimer"
import Nav from "../Nav/Nav"
import proposal from "./proposal.jpg"
import vintage from "./vint.jpg"



function Main() {

    return (
          
      <div className="mainSecOne">

<img src={vintage}/>


          <div className="wedNames">
          <h6>We are getting married!</h6>
<h3>Soley McWilliam & Bryan Hidalgo</h3>

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