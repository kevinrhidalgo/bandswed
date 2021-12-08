import React from "react"
import "./styles.css"
import target from "./target.png"




function Registry() {
    return (
      <div className="sectionRegistry">

<div className="target">
<div className="targetOne">
    <img src={target}></img>
</div>
</div>



<div className="registryTitle">
    <div>
        <h1>Registry</h1>
    </div>
</div>



<div className="registryDesc">
<div className="descRegis">
    <p>"The only gift we need is the opprotunity to celebrate with you on our 
        special day. However, for your convenience, we've registered at target."
    </p>
</div>
</div>


<div className="registryBtn">
<div>
<a href="https://www.target.com/gift-registry/gift-giver?registryId=3361ed50-29e8-11ec-9666-a34bc3f0d014&type=WEDDING">   
<button class="button">Registry</button>
</a>
</div>
</div>
      </div>
    );
  }
  
  export default Registry;