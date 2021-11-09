import React from "react"
import "./style.css"
import Ig from "./instagram.png"
import Phone from "./phone.png"
import Email from "./mailE.png"
import Twitter from "./twittwe.png"



const footerImg ={
  width: 30,
  height: 30,
  borderRadius:'100%',
  margin: '12px',
  }

function Footer() {
    return (
      <>
<div className="bottomPage">  

<div className="footer">
  <h1>You can find us at</h1>
  <div className="theContacts">
  <a href="instagram.com"><img style={footerImg} src={Ig}/></a> 
  <a href="tel:646-285-5696"><img style={footerImg} src={Phone}/></a>
  <a href="mailto:kevinrhidalgo@yahoo.com"><img style={footerImg} src={Email}/></a>
  <a href="twitter.com"><img style={footerImg} src={Twitter}/></a>
  </div>

<h5> Copyright © 2021. Kevin Hidalgo </h5>
</div>

{/*
<div className="footerTwo">
<h1>Footer 2nd Half</h1>
</div>
*/}
</div>  
      </>
    );
  }
  
  export default Footer;