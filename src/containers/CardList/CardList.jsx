import React from "react";

import BeerCard from "../../components/BeerCard/BeerCard";

import beers from "../../data/data";

const CardList = () => {



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