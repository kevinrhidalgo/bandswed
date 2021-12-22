import React from "react"
import { Link } from "react-router-dom";
import "./styles.css"
import bryan from "./bryan.jpg"
import sol1 from "./sol1.jpeg"
import sol2 from "./sol2.jpeg"
import sol3 from "./sol3.jpeg"
import sol4 from "./sol4.jpeg"

function About() {
    return (
      <>

<div className="theeAbout">

<div className="boutDesc1">
<div className="aboutDesc">
    <p>It wasn’t a huge pretty ribbon that bound us together. Soley and I met in high school. 
      It was never more than a hi and a bye, really. We began seeing each other more often when a 
      mutual friend reintroduced us at a church service. We eventually had our first date at a Starbucks 
      on 34th street where Soley occasionally used my GAP discount when I worked there fresh out of high school.
       But, we both knew it was always just a pretext to hang out. Eventually the seconds turned to minutes, and 
       minutes turned to hours—where sometimes we closed down the old Crumbs shop by Grand Central Station. The 
      root that unifies us, does not derive from a tree on the wall. What started as a friendship became a peculiar 
      seed, that no matter the season, the weather, nor the time of the day — it never stopped bearing fruit. 
      Around June 2021, I proposed to Soley during a trip back home in New York. Everything that led to that moment 
      is a story, undeniably, of patience, maturity, and faith. All that munched together became the perfect recipe 
      for us to act on a conviction that led us to manifest our love in the form of a marriage. As our wedding date 
      approaches, our fingers turn the final pages of this preface — leading to the beginning of the rest of our lives.
    </p>
</div>
</div>

<div className="losFotos">

<div className='coupleFoto'>
<img src={bryan}/>
</div> 






<div className='coupleFoto2'>
<img src={sol3}/>
</div>

<div className='coupleFoto3'>
<img src={sol4}/>
</div>

</div>
{/*
<div className="fotoBox"></div>
*/}


</div>


      </>
    );
  }
  
  export default About;