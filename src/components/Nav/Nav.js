import React, { useState } from "react";
import "./style.css"

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
      <div className="navLink">OUR STORY.</div>
      <div className="navLink">
      <a href="https://forms.gle/TaWYJFT1Y6AvQNKx8">  RSVP.</a>
        </div>


        <div className='navLink'>    
        <a onClick={toggleModalThree} className="btn-modal">
  <div className="address">Address</div>
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
     

      <div className="navLink">REGISTRY</div>
      <div className="navLink">CONTACTS</div>
      <div className="navLink">DONATIONS</div>
      </div>

     



      </>
    );
  }
  
  export default Nav;