import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"


const linkStyler={
  textDecoration:'none',
  color:'black'
}

function Nav() {



    return (
      <>

{/*}
      <div className="vl1">
      <div class="vl"></div>
      </div>
    */}

<div className="secNavi">

      <div className="navSection">

      <div style={linkStyler} className="navLink">
<Link className="btn" to="/"><h1>Home</h1></Link>
</div>

      <div style={linkStyler} className="navLink">
      <Link className="btn" to="/Aboutme"><h1>Our Story</h1></Link>
      </div>  

<div className='navLink'>         
  <div style={linkStyler} className="address"><h2>Wedding Day Info</h2></div>
</div>

  



     

      <div style={linkStyler} className="navLink"><p>Registry</p></div>
      
      <div style={linkStyler} className="navLink"><p>Contacts</p></div>
      
      </div>


      <div  className="navLinkr">
      <a style={linkStyler} href="https://forms.gle/TaWYJFT1Y6AvQNKx8">  <p>RSVP</p></a>
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