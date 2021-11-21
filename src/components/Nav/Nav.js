import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {images} from "../../Helpers/CarouselData"

const linkStyler={
  textDecoration:'none',
  color:'black'
}

function Nav() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [currImg, setCurrImg] = useState(0);

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
        <a onClick={toggleModal} className="btn-modal">
  <div style={linkStyler} className="address"><h2>Wedding Day Info</h2></div>
</a>
</div>
{modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content2">

<div className='aboutProject2'>
       <div className="carousel">
      
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >

     <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 45 }} />
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 45 }} />
        </div>
      </div>
    </div>

  
    <div className='aboutLocation'> 

    <h1>15920 County Rd 455, Montverde, FL 34756</h1>


      </div>
 
</div>
<div className='closeBtn'>
            <a className="close-modal" onClick={toggleModal}>
            <span>X</span>
            </a>
            </div>
          </div>
        </div>
      )}


     

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