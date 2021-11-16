import React, { useState } from "react";
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
      <div className="navSection">
      <div style={linkStyler} className="navLink">Our Story.</div>
      <div  className="navLink">
      <a style={linkStyler} href="https://forms.gle/TaWYJFT1Y6AvQNKx8">  RSVP.</a>
        </div>


      

<div className='navLink'>    
        <a onClick={toggleModal} className="btn-modal">
  <div style={linkStyler} className="address">Address</div>
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


     

      <div style={linkStyler} className="navLink">Registry</div>
      <div style={linkStyler} className="navLink">Contacts</div>
      <div style={linkStyler} className="navLink">Donations</div>
      </div>

     



      </>
    );
  }
  
  export default Nav;