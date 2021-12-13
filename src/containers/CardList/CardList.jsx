import React from "react";

import BeerCard from "../../components/BeerCard/BeerCard";


const CardList = (props) => {

const {beers} = props;

  const beerCardsArr = beers.map((beer, index) => {

return  <BeerCard key = {beer + index} name = {beer.name} photo ={beer.image_url} tagline = {beer.tagline} brewDate = {beer.first_brewed} />
  })
return (
<> 
<div className="cardlist">
{beerCardsArr} 
</div>
</>)
};

export default CardList;