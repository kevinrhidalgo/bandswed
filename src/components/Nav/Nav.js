import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import CountdownTimer from "../CountdownTimer/CountdownTimer"


const linkStyler={
  textDecoration:'none',
  color:'white',
 
}

function Nav() {



    return (
      <>

{/*}
      <div className="vl1">
      <div class="vl"></div>
      </div>
    */}
    <div className="navigationSec">

<div className="secNavi">

<div className="cdTimer">
      <CountdownTimer
     countdownTimestampMs={1646883662000}/>
      </div>

      <div className="navSection">

      <div style={linkStyler} className="navLink">
<Link className="btn" to="/"><h1>Home</h1></Link>
</div>

      <div style={linkStyler} className="navLink">
      <Link className="btn" to="/Aboutme"><h1>Our Story</h1></Link>
      </div>  


      <div style={linkStyler} className="navLink">
      <Link className="btn" to="/Wedinfo"><h1>Wedding-Info</h1></Link>
      </div>  

<div className="naver">
      <div style={linkStyler} className="navLink">
      <Link className="btn" to="/Registry"><h1>Registry</h1></Link>
        </div>
      
      <div style={linkStyler} className="navLink">
      <Link className="btn" to="/Contacts"><h1>Contacts</h1></Link>
        </div>
      
      </div>

      </div>


<div className="rsvpBtn">
      <div  className="navLinkr">
      <a style={linkStyler} href="https://forms.gle/TaWYJFT1Y6AvQNKx8">  <p>RSVP</p></a>
        </div>
</div>

      </div>   


      </div> 
{/*}
     <div className="vl2">
      <div class="vl3"></div>
      </div>
        */}

      </>
    );
  }
  
  export default Nav;