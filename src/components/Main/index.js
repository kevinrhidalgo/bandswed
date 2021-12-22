import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"
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



      </div>
    );
  }
  
  export default Main;