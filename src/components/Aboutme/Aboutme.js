import React from "react"
import { Link } from "react-router-dom";
import "./styles.css"
import brySol from "./brysol.jpg"

function About() {
    return (
      <>

<div className="theeAbout">

<div className="aboutDesc">
    <p>Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    Hello, this is my about us section where i plan to discuss and give a brief detailed look into about us.
    </p>
</div>

<div className='coupleFoto'>
<img src={brySol}/>
</div> 
<div className="fotoBox"></div>

</div>

<div className="actionBtn">
<div className="previous">
<Link className="btn" to="/"><h2> prev </h2></Link>
</div>

<div className="next">
<Link className="btn" to="/Location"><h2> next </h2></Link>
</div>

</div>
      </>
    );
  }
  
  export default About;