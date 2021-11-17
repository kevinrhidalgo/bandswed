import React from "react"
import { Link } from "react-router-dom";
import img1 from "../../Images/bellaC1.jpeg"
import img2 from "../../Images/bellaC2.jpeg"
import img3 from "../../Images/bellaC3.gif"
import "./styles.css"



function Location() {
    return (
      <>
      <div className="imageSec">

<div className="imageSec1">
<img src={img2}/>
</div>

<div className="imageSec2">
<img src={img3}/>
</div>

<div className="imageSec3">
<img src={img1}/>
</div>

    </div>

<h1>15920 County Rd 455, Montverde, FL 34756</h1>

<div className="actionBtn">
<div className="previous">
<Link className="btn" to="/Aboutme"><h2> prev </h2></Link>
</div>

<div className="next">
<Link className="btn" to="/"><h2> Home </h2></Link>
</div>

</div>
    </>
    );
  }
  
  export default Location;