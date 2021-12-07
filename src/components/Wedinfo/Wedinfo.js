import React from "react"
import { Link } from "react-router-dom";
import bellaC from "./bc.jpeg"
import "./styles.css"

const linkStyler={
  textDecoration:'none',
  color:'white',
  fontSize:'5px',
 marginTop:'10px'
}

function Location() {
    return (
      <div className="wedInfo">



      <div className="emage">
<div className='imgBella'>
    <img src={bellaC}></img>
</div>
</div>

<div className="infoTitle">
<div><h2>Wedding Day Info</h2></div>
</div>

<div className="vl1">
<div className="vl"></div>
</div>

<div className="infoSec">



<div className='column1'>
  <div className="sectionUno">
<h1>RSVP</h1>
<p>Please let us know if you can make it. We can't 
  wait to see you!
</p>
<div  className="navLinkr">
      <a style={linkStyler} href="https://forms.gle/TaWYJFT1Y6AvQNKx8">  <p>RSVP</p></a>
        </div>
        </div>

<div className="sectionDos">
<h1>Schedule</h1>
<p>Wedding Ceremony arrives at 4:30pm sharp. Please arrive on time!</p>
</div>
</div>




<div className='column2'>
  <div className="sectionTres">
<h2>Location</h2>
<p>15920 County Rd 455, Monteverde FL 34756</p>
</div>

<div className="sectionCuatro">
<h2>Dress Code</h2>
<p>Formal Dressing. Suit and tie/bowtie for men.</p>
</div>
</div>

</div>

    </div>
    );
  }
  
  export default Location;