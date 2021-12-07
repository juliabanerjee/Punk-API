import React from "react";

import "./SideNav.scss";

const SideNav = () =>{
  
  return(
    <>
    <div className="sideNav-items">

  <input type="search" name="" id="" />

<label htmlFor="abv"> High ABV (&gt; 6.0%) <input type="checkbox" name="" id="abv" /> </label>

<label htmlFor="range">Classic Range
<input type="checkbox" name="" id="range" /> </label>

<label htmlFor="ph">Acidic (ph &lt; 4)<input type="checkbox" name="" id="ph" />
</label>
    </div>
    </>
  )
}





export default SideNav;