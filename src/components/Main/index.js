import React from "react";
import "../Main/style.css"
import brySol from "./brysol.jpg"
import CountdownTimer from "../CountdownTimer/CountdownTimer"
import Nav from "../Nav/Nav"

function Main() {

    return (
      <>
        <div className='bodyMain'>

        <div className='wedNames'>
        <div className='nameOne'>
<h3>Soley McWilliam & Bryan Hidalgo</h3>
        </div>

        <div className='nameOne'>
<h6>WE'RE GETTING MARRIED - 3.10.2022 - Orlando, FL</h6>     
        </div>
   
     
        <CountdownTimer
     countdownTimestampMs={1646883662000}/> 
      <Nav/>

<div className='coupleFoto'>
<img src={brySol}/>
</div>




        </div>
        </div>
      </>
    );
  }
  
  export default Main;