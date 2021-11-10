import React, { useState } from "react";
import "./style.css"

const linkStyler={
  textDecoration:'none',
  color:'black'
}

function Nav() {


  const [modalThree, setModalThree] = useState(false);

  const toggleModalThree = () => {

    setModalThree(!modalThree);
  };

  if(modalThree) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    return (
      <>
      <div className="navSection">
      <div style={linkStyler} className="navLink">Our Story.</div>
      <div  className="navLink">
      <a style={linkStyler} href="https://forms.gle/TaWYJFT1Y6AvQNKx8">  RSVP.</a>
        </div>


        <div className='navLink'>    
        <a onClick={toggleModalThree} className="btn-modal">
  <div style={linkStyler} className="address">Address</div>
</a>
</div>
        {modalThree && (
        <div className="modal">
          <div onClick={toggleModalThree} className="overlay"></div>
          <div className="modal-content">
            
          <p>Hi this is ht modal for the address navSection</p>
  
            <div className='closeBtnThree'> 
            <a className="close-modal" onClick={toggleModalThree}>
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