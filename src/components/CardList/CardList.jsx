import React from "react";

import BeerCard from "../BeerCard/BeerCard";

import beers from "../../data/data";

const CardList = () => {



  const beerCardsArr = beers.map((beer, index) => {

return  <BeerCard key = {beer + index} name = {beer.name} photo ={beer.image_url} tagline = {beer.tagline} brewDate = {beer.first_brewed} />
  })
return (
<> 
{beerCardsArr} 
</>)
};

export default CardList