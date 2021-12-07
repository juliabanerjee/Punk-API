import React from "react";

import "./BeerCard.scss";


const BeerCard = (props) =>{

 const {photo, name, tagline, brewDate} = props; 

 console.log(props);


 return (
  <>
<div className="beercard">

<img className="beercard__image" src={photo} alt="beer" />

<div className = "beercard__text">
<p className="beercard__name">Name : {name}</p>
<p className="beercard__first-brewed">First brewed : {brewDate}</p>
<p className="beercard__tagline">{tagline}</p>
</div>
</div>

  </>

)
};


export default BeerCard;