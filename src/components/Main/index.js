import React from "react";
import "../Main/style.css"
import pracFoto from "./practiceWedding.jpeg"

function Main() {
    return (
      <>
        <div className='bodyMain'>
<div className='coupleFoto'>
<img src={pracFoto}/>
</div>

<div className='wedNames'>
        <div className='nameOne'>
<h3>Soley & Bryan</h3>
        </div>

        <div className='nameOne'>
<h6>WE'RE GETTING MARRIED - 3.10.2022</h6>         
        </div>

    </div>


        </div>
      </>
    );
  }
  
  export default Main;