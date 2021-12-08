import React from "react"
import { Link } from "react-router-dom";
import "./styles.css"
import brySol from "./brysol.jpg"
import bryan from "./bryan.jpg"

function About() {
    return (
      <>

<div className="theeAbout">

<div className="boutDesc1">
<div className="aboutDesc">
    <p>Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    </p>
</div>
</div>


<div className='coupleFoto'>
<img src={bryan}/>
</div> 
<div className="fotoBox"></div>



</div>


      </>
    );
  }
  
  export default About;